export const isFemale = (gender) => {
  if (gender === "female") {
    return "list-group-item list-group-item-danger";
  } else return "list-group-item";
};
