import * as readline from "node:readline/promises";
import { stdin as input, stdout as output, argv } from "process";

const getUsername = () => {
  const username = argv.find((arg) => arg.toString().startsWith("--username"));
  if (username) return username.replace("--username=", "");
  return null;
};

const username = getUsername();

if (!username) throw new Error("Incorrect username!");

const rl = readline.createInterface({ input, output });

console.log(`Welcome to the File Manager, ${username}!`);
rl.on("line", (input) => {
  console.log(`Received: ${input}`);
  if (input === ".exit") {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    rl.close();
  }
});

// if (answer === ".exit") rl.close();
