export function shortHash(hash: string, length = 8) {
  return hash.slice(0, length);
}
