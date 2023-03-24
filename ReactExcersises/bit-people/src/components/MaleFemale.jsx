export const NumberOfGender = (props) => {
  const { people } = props;

  return (
    <div className="gender">
      <div>Male: {people.filter((item) => item.gender === "male").length}</div>
      <div>
        Female: {people.filter((item) => item.gender === "female").length}
      </div>
    </div>
  );
};
