export function moneyFormat(value) {
  if (!Number(value) && value !== 0) return "";
  const number = `$ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  return number;
}
