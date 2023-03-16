import Card from "react-bootstrap/Card";


export  const Item = ({name, email, picture, dob }) => {
  
    return (
        
            <Card className ="col-4" style={{ width: '30%' , border: "solid 1px grey", marginBottom:"20px"}}>
            
                <Card.Img variant="top" src={picture} alt={picture} style={{width:'100%'}}/>
                <Card.Title className="mb-0 font-weight-bold">
                            {name.first}
                        </Card.Title>
                <Card.Body className="d-flex flex-column">
                   
                        <Card.Text>
                            email: {email}
                            <br></br>
                            Date of Birth: {dob}
                        </Card.Text>
                    
                </Card.Body>
                
            </Card>
              
    )
    
    
}