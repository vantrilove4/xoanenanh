import { removeBackground } from "@imgly/background-removal";

export async function removeBg(file: File): Promise<string> {
  const blob = await removeBackground(file);

  return URL.createObjectURL(blob);
}