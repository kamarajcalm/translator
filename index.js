// const WebSocket = require("ws");
// const wss = new WebSocket.Server({ port: 8080 });
// wss.on("connection", (ws) => {
//   ws.on("message", (message) => {
//     console.log(`Received message => ${message}`);
//     ws.send(message)
//   });
//   ws.send("Hello! Message From Server!!");
// });

const fs = require("fs");
let data;
let toSave = {
  en: {},
  es: {},
  ro: {},
  ja: {},
  "zh-CN": {},
  hu: {},
  pt: {},
  ar: {},
};
fs.readFile("./trans.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  let parsed = JSON.parse(jsonString);

  parsed.forEach((item) => {
    toSave.en[item.English] = item.English;
    toSave.es[item.English] = item.Espanol;
    toSave.ro[item.English] = item.Romana;
    toSave.ja[item.English] = item["日本人(Japanese)"];
    toSave["zh-CN"][item.English] = item["中文(chinese)"];
    toSave.hu[item.English] = item.Magyar;
    toSave.pt[item.English] = item.Portugues;
    toSave.ar[item.English] = item["Arabic DeepL Translated"];
    // (toSave.es[item.English] = item.Spanish),
    //   (toSave.ja[item.English] = item.Japanese),
    //   (toSave.ro[item.English] = item.Romanian),
    //   (toSave["zh-CN"][item.English] = item["Mandarin Chinese"]);
    // toSave.ar[item.English] = item.Arabic;
  });
  console.log("File data:", toSave);

  const jsonStrin = JSON.stringify(toSave);
  fs.writeFile("./newtrans.json", jsonStrin, (err) => {
    if (err) {
      xw;
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
  });
});

// Booking Created Successfully for romanio
