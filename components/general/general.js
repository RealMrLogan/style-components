const colors = {
   "color-default": {
      name: "Forest Green",
      base: "#007315"
   },
   "red": {
      base: "#db0000",
      tint: [
         "#ff1a1a", "#ff4d4d", "#ff8080"
      ],
      shade: [
         "#b30000", "#800000", "#4d0000"
      ]
   },
   "blue": {
      base: "#1e2375",
      tint: [
         "#2a30a2", "#494fd0", "#858ae0"
      ],
      shade: [
         "#1a1e65", "#151851", "#10123d"
      ]
   },
   "yellow": {
      base: "#f7fc18",
      tint: [
         "#f9fc4f", "#fcfd9b", "#feffe6"
      ],
      shade: [
         "#dee203", "#adb003", "#7c7e02"
      ]
   }
}

function getElementColor(element) {
   // get the color for the button
   const classes = element.classList;
   let colorName = "";
   for (let i = 0; i < classes.length; i++) {
      if (colors[classes[i]]) {
         colorObj = colors[classes[i]];
         colorName = classes[i];
      }
   }
   const coloration = getColorAlteration(element);
   // if there is a color and an alteration
   if (colorName && coloration) {
      coloration.name = colorName;
      return getColorHex(coloration, true)
   }
   // if there is no color but an alteration
   if (!colorName && coloration) return getColorHex(coloration, true)
   // if theres a color but no alteration
   if (colorName && !coloration) return getColorHex(colorName)
   // if theres no color class or alteration return the default color
   return colors.default.base
}

function getColorAlteration(element) {
   // get the color for the button
   const classes = element.classList;
   for (let i = 0; i < classes.length; i++) {
      const stringArray = classes[i].split("-");
      switch (stringArray[0]) {
         case "tint":
         case "shade":
         case "tone":
            return {
               alteration: stringArray[0],
               intensity: stringArray[1]
            }
      }
   }
   return null; // there are no color alterations
}

function getColorHex(coloration, hasAlteration = false) {
   if (hasAlteration) {
      const colorObject = colors[coloration.name];
      // return the hex of the alteration of the color
      // for example, red[tint][2]-> ######
      return colorObject[coloration.alteration][coloration.intensity - 1]   
   }
   // since we know there is no alteration, the color's name is passed in
   return colors[coloration].base;
}