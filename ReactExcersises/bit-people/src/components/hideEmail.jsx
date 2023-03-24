export const hideEmail = (email) => {
  let hidenEmail = "";
  let firstPart = email.split("@")[0];
  let cutFirst = firstPart.slice(0, 3);
  let cutLast =
    "..." + firstPart.slice(firstPart.length - 3, firstPart.length) + "@";
  return (hidenEmail += cutFirst + cutLast + email.split("@")[1]);
};
