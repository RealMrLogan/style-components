function addSimpleGhostButtons() {
   const buttons = document.getElementsByClassName("button-ghost-simple");
   for (let i = 0; i < buttons.length; i++) {
      const color = getElementColor(buttons[i]);
      buttons[i].style.setProperty("--buttonColor", color);
   }
}

addSimpleGhostButtons();