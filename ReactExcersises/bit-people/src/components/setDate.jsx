export const setDate = (date) => {
  return date.split("T")[0].split("-").reverse().join(".");
};
