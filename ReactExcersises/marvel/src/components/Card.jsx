import image1 from "../img/81ZmBRzSw3L._SL1500_marvel.jpg"
import Card from "react-bootstrap/Card";
export const CardItem  = ({ id, name, thumbnail, description })=>{

    return (
        <div>
            <Card className ="col-4" style={{ width: '30%' , border: "solid 1px grey", marginBottom:"20px"}}>
            <Card.Title className="mb-0 font-weight-bold">
                        Title
                    </Card.Title>
            <Card.Img variant="top" src={image1} alt='noImg' style={{width:'80%'}}/>
            
            <Card.Body className="d-flex flex-column">
               
                    <Card.Text className="row" style={{display:"flex", justifyContent:"space-around"}}>
                        <button>Info</button>
                        <br></br>
                        <button>Add</button>
                    </Card.Text>
                
            </Card.Body>
            
        </Card>
        </div>
    )
}