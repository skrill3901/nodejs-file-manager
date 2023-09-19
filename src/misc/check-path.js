import { access, constants } from "fs/promises";
import { homedir } from "os";
import path from "path";

export const checkPath = async (newPath) => {
  const absolutePath = path.resolve(process.cwd(), newPath);

  if (absolutePath.includes(homedir())) {
    try {
      await access(absolutePath, constants.F_OK);
      return true;
    } catch {}
  }

  console.error("Invalid path");
  return false;
};
