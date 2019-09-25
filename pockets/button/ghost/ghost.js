// Great tutorial by the creator of this button here: https://css-tricks.com/ghost-buttons-with-directional-awareness-in-css/

function addGhostButtons() {
   const buttons = document.getElementsByClassName("button-ghost");
   // make all the buttons with this class a ghost button
   for (let i = 0; i < buttons.length; i++) {
     for (let j = 0; j < 4; j++) {
       buttons[i].appendChild(document.createElement("span"));
       const b = document.createElement("b");
       b.setAttribute("aria-hidden", "true");
       b.innerHTML = buttons[i].innerHTML;
       buttons[i].appendChild(b);
     }
     const color = getElementColor(buttons[i], "ghost-");
     buttons[i].style.setProperty("--buttonColor", color);
   }
 }

 addGhostButtons();