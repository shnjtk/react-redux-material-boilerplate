const path = require("path");
const fs = require("fs");

const env = process.env.NODE_ENV || "development";

// global variables
projectRootPath = __dirname;
srcPath = path.resolve(projectRootPath, "src");
distPath = path.resolve(projectRootPath, "dist");

const configFile = "./config/webpack." + env + ".js";
try {
  fs.accessSync(configFile);
} catch (e) {
  console.log(e);
  process.exit(1);
}

module.exports = require(configFile);
