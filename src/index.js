import * as readline from "node:readline/promises";
import { stdin as input, stdout as output, argv } from "process";
import { homedir } from "os";

import { goodbye } from "./misc/index.js";

import { ls } from "./modules/directory/ls.js";
import { commands } from "./modules/commands.js";

const getUsername = () => {
  const username = argv.find((arg) => arg.toString().startsWith("--username"));
  if (username) return username.replace("--username=", "");
  return null;
};

const username = getUsername();

if (!username) throw new Error("Incorrect username!");

process.chdir(homedir());
const rl = readline.createInterface({ input, output });

console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently ${process.cwd()}`);

rl.on("line", (input) => {
  console.log(`Received: ${input}`);
  if (input === ".exit") {
    goodbye();
    rl.close();
  } else {
    commands(input);
  }
});

rl.on("SIGINT", () => {
  goodbye();
  rl.close();
});

// if (answer === ".exit") rl.close();
