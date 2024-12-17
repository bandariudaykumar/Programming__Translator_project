export function generateBinaryCode(): string {
  return Array.from({ length: 5 }, () =>
    Array.from({ length: 8 }, () => Math.round(Math.random())).join('')
  ).join(' ');
}