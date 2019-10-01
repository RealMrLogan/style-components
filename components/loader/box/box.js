function addBoxLoaders() {
   const loaders = document.getElementsByClassName("loader-box");
   for (let i = 0; i < loaders.length; i++) {
      loaders[i].classList.add("loader-box-container");
      for (let j = 0; j < 3; j++) {
         const box = document.createElement("div");
         box.classList.add(`box${j+1}`);
         loaders[i].appendChild(box);
      }
      // get the color
      const color = getElementColor(loaders[i]);
      loaders[i].style.setProperty("--color", color);
   }
}

addBoxLoaders();