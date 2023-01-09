
let copy = (textId) => {
  //Selects the text in the <input> elemet
  document.getElementById(textId).select();
  //Copies the selected text to clipboard
  document.execCommand("copy");
};
