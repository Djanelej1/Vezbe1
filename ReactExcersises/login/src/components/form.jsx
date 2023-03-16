import {  useState} from 'react';
import Form from 'react-bootstrap/Form';

export  const FormLogin =()=> {
   
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
        
    const onSubmit = (event)=>{
        event.preventDefault();
        return alert( username + "," + password)
    }

    const formTitle = "Login Form";    


     const resetValues = (event)=> {
                event.preventDefault();
               setUsername("");
               setPassword("");
              }
    
        

     

    return (
<Form  className='Forma' >
    <h1>{formTitle}</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
    
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <button variant="primary" type="submit" onClick={onSubmit} >
       Login
      </button>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <button variant="primary" type="reset"  onClick={resetValues}>
       Reset
      </button>
      </Form.Group>
    </Form>
    )

    
    
}

    

    

