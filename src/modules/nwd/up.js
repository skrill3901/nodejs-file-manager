import path from "path";

export const up = () => {
  const newPath = path.resolve(process.cwd(), "..");
  process.chdir(newPath);
};
