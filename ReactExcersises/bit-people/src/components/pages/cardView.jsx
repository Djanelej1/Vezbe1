import { ItemCard } from "../Card/ItemCard";

export const CardView = (props) => {
  const { people } = props;

  return (
    <div
      className="row"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginLeft: "100px",
        marginRight: "100px",
      }}
    >
      {people.map((item, i) => {
        return (
          <ItemCard
            key={i}
            name={item.name}
            email={item.email}
            picture={item.picture.large}
            dob={item.dob.date}
            gender={item.gender}
          />
        );
      })}
    </div>
  );
};
