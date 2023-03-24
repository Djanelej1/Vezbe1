import { ListItem } from "../list/ListItem";

export const ListView = (props) => {
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
            gender={item.gender}
          />
        );
      })}
    </div>
  );
};
