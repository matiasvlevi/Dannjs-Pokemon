module.exports = function log(text, color = "white") {
  if (color === "white") {
    console.log(text);
  } else if (color === "yellow") {
    console.log("\x1b[33m%s\x1b[0m", text);
  } else if (color === "blue") {
    console.log("\x1b[34%s\x1b[0m", text);
  } else if (color === "green") {
    console.log("\x1b[32m%s\x1b[0m", text);
  } else if (color === "red") {
    console.log("\x1b[31m%s\x1b[0m", text);
  } else if (color === "cyan") {
    console.log("\x1b[36m%s\x1b[0m", text);
  }
}