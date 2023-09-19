import { lstat, readdir } from "node:fs/promises";

export const ls = async () => {
  try {
    const files = await readdir(process.cwd());

    const filesWithType = [];

    for (const file of files) {
      const isFile = (await lstat(file)).isFile();
      const result = { name: file, type: isFile ? "file" : "directory" };
      filesWithType.push(result);
    }

    console.table(filesWithType);
    // for (const file of files) console.log(file);
  } catch (err) {
    console.error(err);
  }
};
