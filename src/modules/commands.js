import { ls } from "./directory/index.js";

const INVALID_INPUT = "Invalid input";

export const commands = (command) => {
  switch (command) {
    case "ls":
      ls();
      break;
    default:
      console.log(INVALID_INPUT);
  }
};
