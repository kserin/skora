export function copy(object: any) {
  return JSON.parse(JSON.stringify(object));
}
