const colors = {
   "default": {
      name: "Forest Green",
      hex: "#007315"
   },
   "red": {
      base: "#db0000",
      tint: [
         "#ff1a1a", "#ff4d4d", "#ff8080"
      ],
      shade: [
         "#b30000", "#800000", "#4d0000"
      ],
      tone: [
         "#c51616", "#af2c2c", "#9a4242"
      ]
   }
}

function getElementColor(element, specialPrefix = null) {
   // get the color for the button
   const classes = element.classList;
   let color = null;
   for (let i = 0; i < classes.length; i++) {
      const prefixLength = specialPrefix ? specialPrefix.length : 0;
      color = classes[i].substring(prefixLength);
      const comparer = specialPrefix ? specialPrefix + color : color;
      if (classes[i] == comparer) break;
   }
   let coloration = getColorAlteration(element);
   if (coloration) coloration.name = color
   else coloration = { name: color}
   return color ? getColorHex(coloration) : "#007315"; // set to the default if no color is specified
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

function getColorHex(coloration) {
   const colorObject = colors[coloration.name];
   if (coloration.alteration) return colorObject[coloration.alteration][coloration.intensity - 1]
   return colorObject.base;
}