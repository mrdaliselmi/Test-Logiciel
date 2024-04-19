export function isPriceInRange(
  price: number,
  min: number,
  max: number
): boolean {
  return price >= min && price <= max;
}
