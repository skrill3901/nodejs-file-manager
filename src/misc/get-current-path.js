import { dirname } from "path";
import { fileURLToPath } from "url";

export const getCurrentPath = () => {
  const url = fileURLToPath(import.meta.url);
  const __dirname = dirname(url);

  return { __dirname };
};
