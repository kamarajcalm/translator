const translations = require("./keys");
const fs = require("fs");
try {
  const validData = [];
  const keys = Object.keys(translations.en);
  for (let i = 0; i < 215; i++) {
    let pushData = {
      English: keys[i],
    };
    validData.push(pushData);
  }
  const jsonData = JSON.stringify(validData, null, 2); // Add indentation for readability
  fs.writeFileSync("TranslationsJson", jsonData, "utf8");
  console.log(`Successfully wrote JSON data `);
} catch (error) {
  // Handle errors
  console.error("Error converting object to JSON:", error.message);
}
