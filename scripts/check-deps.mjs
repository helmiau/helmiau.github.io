// Guards the site's build inputs: every {% include %}, `layout:` and @import must
// resolve inside this repo, and `remote_theme` must stay unset. Run: node scripts/check-deps.mjs
// Exists because Ruby/Jekyll is not installed locally -- this is the only pre-push build check.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(process.argv[2] ?? ".");
const J = (...p) => path.join(ROOT, ...p);
const read = (f) => fs.readFileSync(f, "utf8");
const rel = (f) => path.relative(ROOT, f).replaceAll("\\", "/");

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if ([".git", "node_modules", "_site", ".jekyll-cache"].includes(e.name)) continue;
      walk(path.join(dir, e.name), out);
    } else out.push(path.join(dir, e.name));
  }
  return out;
}

const srcFiles = walk(ROOT).filter((f) => !/\.(png|jpe?g|gif|ico|svg|webp|mp4|7z|zip)$/i.test(f));
const liquidFiles = srcFiles.filter((f) => /\.(html|md|markdown|json|xml)$/i.test(f));
const scssFiles = srcFiles.filter((f) => /\.(scss|sass)$/i.test(f));

const layouts = new Set(fs.existsSync(J("_layouts")) ? fs.readdirSync(J("_layouts")).map((n) => n.replace(/\.html$/, "")) : []);
const hasInclude = (name) =>
  [name, name + ".html", name + ".md", path.join(name, "index.html")].some((c) => fs.existsSync(J("_includes", c)));

const problems = [];
const includeRefs = new Set();
const layoutRefs = new Set();

for (const f of liquidFiles) {
  const text = read(f);
  for (const m of text.matchAll(/{%-?\s*include\s+([^\s%}]+)/g)) {
    includeRefs.add(m[1]);
    if (!hasInclude(m[1])) problems.push(`MISSING INCLUDE  ${m[1]}  (${rel(f)})`);
  }
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const lm = fm?.[1].match(/^layout:\s*(\S+)/m);
  if (lm && lm[1] !== "null" && lm[1] !== "none") {
    layoutRefs.add(lm[1]);
    if (!layouts.has(lm[1])) problems.push(`MISSING LAYOUT   ${lm[1]}  (${rel(f)})`);
  }
}

// Jekyll's sass_dir is _sass; `@import "x"` resolves to _x.scss / x.scss / x.sass
const sassDir = fs.existsSync(J("_sass")) ? fs.readdirSync(J("_sass")) : [];
const sassCanResolve = (n) =>
  sassDir.some((f) => [n, `${n}.scss`, `${n}.sass`, `_${n}.scss`, `_${n}.sass`].includes(f));

for (const f of scssFiles) {
  for (const stmt of read(f).matchAll(/@import\s+([^;]+);/g)) {
    for (const m of stmt[1].matchAll(/["']([^"')]+)["']/g)) {
      if (/^(https?:)?\/\//.test(m[1])) continue;
      if (!sassCanResolve(m[1])) problems.push(`MISSING SASS     ${m[1]}  (${rel(f)})`);
    }
  }
}

// Informational: site.* keys never declared in _config.yml (Jekyll renders empty, does not fail)
const cfg = read(J("_config.yml"));
const cfgKeys = new Set([...cfg.matchAll(/^\s*([a-z_][a-z0-9_]*)\s*:/gim)].map((m) => m[1]));
const builtin = new Set(["time", "posts", "pages", "html_pages", "documents", "static_files", "collections", "data", "github", "environment", "source", "destination"]);
const undeclared = new Set();
for (const f of liquidFiles.concat([J("_config.yml")])) {
  for (const m of read(f).matchAll(/site\.([a-z_][a-z0-9_]*)/g)) {
    if (!cfgKeys.has(m[1]) && !builtin.has(m[1])) undeclared.add(m[1]);
  }
}

const remoteTheme = cfg.match(/^remote_theme\s*:\s*(.+)$/m)?.[1].trim() ?? null;
if (remoteTheme) problems.push(`REMOTE_THEME     ${remoteTheme}  (_config.yml) -- theme must be vendored in-tree`);

console.log(`root=${ROOT}`);
console.log(`layouts=${[...layouts].sort().join(",") || "(none)"} includes=${includeRefs.size} remote_theme=${remoteTheme ?? "(none)"}`);
if (undeclared.size) console.log(`note: site.* keys not in _config.yml: ${[...undeclared].sort().join(", ")}`);
console.log(problems.length ? problems.sort().join("\n") : "OK: all includes, layouts and sass imports resolve locally.");
process.exit(problems.length ? 1 : 0);
