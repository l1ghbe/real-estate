export default function getNounDeclination(value, words) {
  const mod = Math.abs(value) % 100;
  const num = mod % 10;
  if (mod > 10 && mod < 20) return `${value} ${words[2]}`;
  if (num > 1 && num < 5) return `${value} ${words[1]}`;
  if (num == 1) return `${value} ${words[0]}`;
  return `${value} ${words[2]}`;
}
