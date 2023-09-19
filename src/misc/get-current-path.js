import { dirname } from "path";
import { fileURLToPath } from "url";

export const getCurrentPath = (log = false) => {
  const url = fileURLToPath(import.meta.url);
  const __dirname = dirname(url);

  if (!log) return { __dirname };
  else console.log(__dirname);
};
