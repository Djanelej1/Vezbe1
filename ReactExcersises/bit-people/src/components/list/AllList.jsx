import { ListItem } from "./ListItem";

export const AllList = (props) => {
  const { people } = props;

  return (
    <div>
      {people.map((item, i) => {
        return (
          <ListItem
            key={i}
            name={item.name}
            email={item.email}
            picture={item.picture.large}
            dob={item.dob.date}
          />
        );
      })}
    </div>
  );
};
