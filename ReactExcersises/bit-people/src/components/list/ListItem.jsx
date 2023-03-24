import ListGroup from "react-bootstrap/ListGroup";
import { hideEmail } from "../hideEmail";
import { setDate } from "../setDate";
import { isFemale } from "../isFemale";
import { MdEmail, MdCake } from "react-icons/md";
export const ListItem = (props) => {
  return (
    <ListGroup className="conatiner">
      <ListGroup.Item
        className={isFemale(props.gender)}
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <div className="col-3">
          <img
            src={props.picture}
            alt=""
            style={{ borderRadius: "50%", alignItems: "center", width: "30%" }}
          ></img>
        </div>
        <div className="col-3">
          <p>
            {" "}
            {props.name.first} {props.name.last}{" "}
          </p>
          <p>
            <MdEmail /> email: {hideEmail(props.email)}
          </p>
          <p>
            <MdCake />
            Date of Birth: {setDate(props.dob)}{" "}
          </p>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
};
