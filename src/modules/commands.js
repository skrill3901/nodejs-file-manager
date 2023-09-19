import { checkPath, permanentMessage } from "../misc/index.js";
import { cd, ls } from "./directory/index.js";

const INVALID_INPUT = "Invalid input";

export const commands = async (value) => {
  const parts = value.split(" ");
  const command = parts[0];
  const firstPath = parts[1];
  const secondPath = parts[3];

  if (firstPath) {
    const correctPath = await checkPath(firstPath);
    if (!correctPath) return permanentMessage();
  }

  if (secondPath) {
    const correctPath = await checkPath(secondPath);
    if (!correctPath) return permanentMessage();
  }

  switch (command) {
    case "ls":
      ls();
      break;
    case "cd":
      cd(firstPath);
      break;
    default:
      console.log(INVALID_INPUT);
  }

  permanentMessage();
};
