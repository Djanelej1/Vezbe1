import Card from "react-bootstrap/Card";
import { hideEmail } from "../hideEmail";
import { setDate } from "../setDate";

export const ItemCard = ({ name, email, picture, dob, gender }) => {
  if (gender === "female") {
    return (
      <Card
        className="col-4 "
        style={{
          width: "30%",
          border: "solid 1px grey",
          marginBottom: "20px",
          backgroundColor: "#FAA0A0",
        }}
      >
        <Card.Img
          variant="top"
          src={picture}
          alt={picture}
          style={{ width: "100%" }}
        />
        <Card.Title className="mb-0 font-weight-bold">{name.first}</Card.Title>
        <Card.Body
          className="d-flex flex-column  "
          style={{ textAlign: "left" }}
        >
          <Card.Text>
            email: {hideEmail(email)}
            <br></br>
            Date of Birth: {setDate(dob)}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <Card
        className="col-4 "
        style={{ width: "30%", border: "solid 1px grey", marginBottom: "20px" }}
      >
        <Card.Img
          variant="top"
          src={picture}
          alt={picture}
          style={{ width: "100%" }}
        />
        <Card.Title className="mb-0 font-weight-bold">{name.first}</Card.Title>
        <Card.Body
          className="d-flex flex-column  "
          style={{ textAlign: "left" }}
        >
          <Card.Text>
            email: {hideEmail(email)}
            <br></br>
            Date of Birth: {setDate(dob)}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
};
