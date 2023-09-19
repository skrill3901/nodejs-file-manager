import { lstat, readdir } from "node:fs/promises";

export const ls = async () => {
  const paths = await readdir(process.cwd(), { withFileTypes: true });

  const directories = paths
    .filter((item) => item.isDirectory())
    .sort((item1, item2) => item1 > item2)
    .map((item) => ({ Name: item.name, Type: "directory" }));

  const files = paths
    .filter((item) => !item.isDirectory())
    .sort((item1, item2) => item1 > item2)
    .map((item) => ({ Name: item.name, Type: "file" }));

  console.table([...directories, ...files]);
};
