export function upperCase(str: string): string {
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      str = str.slice(0, i) + String.fromCharCode(str.charCodeAt(i) - 32) + str.slice(i + 1);
    }
  }
  return str;
}