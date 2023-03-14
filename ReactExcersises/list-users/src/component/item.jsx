import {Card} from "react-bootstrap";


export  const Item = ({name, email, picture, dob }) => {
  
    return (
    
       
            <Card className="shadow-sm bg-white rounded">
                <Card.Img variant="top" src={picture} alt={picture} />
                <Card.Body className="d-flex flex-column">
                    <div className="d-flex mb-2 justify-content-between">
                        <Card.Title className="mb-0 font-weight-bold">
                            {name.first}
                        </Card.Title>
                        <Card.Text>
                            email: {email}
                            Date of Birth: {dob}
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        
    )
    
    
}
