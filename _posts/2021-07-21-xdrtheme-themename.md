---
title: Universal Theme Installer for Xderm Mini GUI
tags: [Xderm Mini GUI, Theme, Bash, Installer, Script]
style: fill
color: danger
description: xderm-mini GUI is simple injector tool based on shell script and python commands for OpenWrt by @ryanfauzi1 which help you to inject your OpenWrt connection using VPN injection (SSH/Trojan/Vmess).
---

Source: [My Own Repo](https://github.com/helmiau/xdrtheme-adminlte)

<h2 align="center">
Xderm Mini GUI Custom Theme Template for Themer
</h2>

<h4 align="center">
This installer script template is useful for Xderm Mini theme creator.
</h4>

<p align="center">
<img src="https://user-images.githubusercontent.com/20932301/126717702-d7c3e416-335e-44e5-b733-a0e7010a6659.png" alt="ss" class="center">
</p>

<h4 align="center">
Current Version : 4.3
</h4>


<br>
<h3 align="center">
Index information page
</h3>

<br>
{% capture list_items %}
How xdrtheme-installer Script Working & What features are available on it
How to use this template and apply it to your theme
Discussions, Issues, Bugs, Feature Request and Others
Credits
{% endcapture %}
{% include elements/list.html title="Index page information" type="toc" %}

<br>
<h3 align="center">
**How xdrtheme-installer Script Working & What features are available on it**
</h3>

**```xdrtheme-installer```** will clone your github repository and update local file by repo clone, which mean this script need **```wget```** and **```git```** packages. Then this script will read **```xdrtheme-info```** and **```xdrtheme-update```** from your repository which downloaded to local storage **```/root/(here placed file xdrtheme-info and xdrtheme-update```** .

Script features :
```
1. Install theme               : Installing theme by git clone.
2. Update theme                : Updating theme.
3. Uninstall theme             : Remove installed theme.
4. Reinstall theme             : Force reinstall theme by git clone.
5. Change login panel auth     : Change username and password login page.
6. Install login panel         : Install login panel, you need to login via login panel before you can configure Xderm Mini Gui.
7. Remove login panel          : Remove login panel, you don't need to login to configure Xderm Mini Gui.
```

<br>
<h3 align="center">
**How to use this template and apply it to your theme**
</h3>

1. Click [Use this template button](https://github.com/helmiau/xdrtheme-themename/generate) then give template/repo name by following format **```xdrtheme-your_theme_name```** without any space there. Change **your_theme_name** with your own theme name (without space).
2. If you want to exclude file or folder from cloning, just write that file/folder name inside **```.gitignore```** file.
3. Edit **```xdrtheme-info```** with **your theme information**, such as : Theme name, Theme creator, Github username, Theme repository, and active branch which containing theme repository. I made an example below :

```
# Change Theme_Name below with your theme name, space allowed
THEMENAME="Theme_Name"
# Change Creator_Name below with your name, space allowed
CREATOR="Creator_Name"
# Change github_username_account below with your github username, No space allowed
GITUSER="github_username_account"
# Change github_repo_theme below with your theme repository name, No space allowed
GITREPO="github_repo_theme"
# Change main_master below with your active branch under theme repository, No space allowed
GITBRANCH="main_master"
# Change Theme_Name with  theme version, No space allowed. Example : v1.0 or v2.1-beta
THEMEVER="v1.0"
```
Still confused? see this [example](https://github.com/squarepants96/xdrtheme-adminlte/blob/main/xdrtheme-info).

4. Fill **```xdrtheme-update```** with files which will be attached when updating theme. I made an example below :

```
login.php
index.php
header.php
config.txt
```
Still confused? see this [example](https://github.com/squarepants96/xdrtheme-adminlte/blob/main/xdrtheme-update).

5. After that, **replace login.php, header.php and other files and folders** from this repository **with your own files**, or you can **add your files which is unavailable under this template**. Still confused? see this [example](https://github.com/squarepants96/xdrtheme-adminlte).
6. Add installation section below to your README.md repository to keep your installer script up-to-update.

````
## Installation
Copy scripts below and run it via **```terminal```**
```
wget -O xdrtheme-info http://raw.githubusercontent.com/your_github_username/your_theme_repository/main/xdrtheme-info && wget -O xdrtheme-update http://raw.githubusercontent.com/your_github_username/your_theme_repository/main/xdrtheme-update && wget -O xdrtheme-installer http://s.id/xdrtheme && chmod +x xdrtheme-installer && ./xdrtheme-installer
```
````

7. Change **```your_github_username```** from script above with **your github username**. See this [example](https://github.com/squarepants96/xdrtheme-adminlte).
8. Change **```your_theme_repository```** from script above with with **your theme repository name**. See this [example](https://github.com/squarepants96/xdrtheme-adminlte).
9. Run command **```./xdrtheme-installer```** then follow the instructions.

**Important !!! Don't rename ```xdrtheme-info``` and ```xdrtheme-update```. Otherwise you will get an error when using this script !. You are allowed to rename ```xdrtheme-installer``` file only to other name you desired.**

Note : You can see [squarepants96/xdrtheme-adminlte repo's](https://github.com/squarepants96/xdrtheme-adminlte) for sample comparison.


<br>
<h3 align="center">
**Discussions, Issues, Bugs, Feature Request and Others**
</h3>

- Use [Discussions Section](https://github.com/helmiau/xdrtheme-themename/discussions) to discuss about this template, such as new feature request, or improvements.
- Use [Issues Section](https://github.com/helmiau/xdrtheme-themename/issues) if you want to report bug.
- This script is created by [helmiau a.k.a Helmi Amirudin](https://github.com/helmiau) from nothing, so if you need to help me by coding or fixing bug or you desire to give some donation. Please contact me at [My contact site](https://me.helmiau.my.id) or [Discussions Section](https://github.com/helmiau/xdrtheme-themename/discussions)

<br>
<h3 align="center">
**Credits**
</h3>

- [Allah Subhanahu wa Ta'ala](https://id.wikipedia.org/wiki/Allah) ~ Penguasa semesta, sang pemilik ilmu sekaligus sumbernya.
- [Helmi Amirudin](https://github.com/helmiau) ~ Main developer of this template
- [Ryan Fauzi](https://github.com/ryanfauzi1) ~ Developer Xderm Mini GUI
- [Agus Sriawan](https://www.facebook.com/agussriawan.id) ~ Kang bikin tema Blue Light XDERM-MINI
- [Adi Putra](https://github.com/Putra-0) ~ Kang bikin tema [Mejikuhibiniu RGB Theme](https://github.com/Putra-0/theme-xderm-putra)
- [Ardi Setiawan](https://github.com/squarepants96) ~ Kang tester dan creator tema [Admin LTE](https://github.com/squarepants96/xdrtheme-adminlte)

<br>
<h5 align="center">Copyright by <a href="https://me.helmiau.my.id">Helmi Amirudin</a> ® 2021 <br> Thank You ! 🤝</h5>
