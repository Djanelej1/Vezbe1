
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from "react";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";

// Function to collect data ids;
const getApiData=  async() => {
  return  await fetch("https://hacker-news.firebaseio.com/v0/topstories.json").then(
    (response) => response.json()
  );
};
//function to get Api data
const getNewApi = async (id) => {
  return  await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  ).then((response) => response.json());
};

 export const DataForList=()=>{
  
   

  const [stories, setStory] = useState([]);

  useEffect(() => {
    getApiData().then((data) => {
      const idArray = data.slice(0, 10);
      const response = idArray.map((id) => getNewApi(id));
      Promise.all(response).then((data) => {
        setStory(data);
      });
    });
  }, []);
  return (
    <div>
       
        <ListGroup>
            {stories.map((item, i) => {
                return (
                  <ListGroupItem>
                    
                  <div className="row" style={{ display:"flex", wrap:"noWrap"}}>
                    <div className="col-3">{i+1}.</div>
                    <div className="col-10">
                      <div className="row" style={{ color:"red"}} > {item.title}  ( {item.url} )</div>
                      <div className="row" style={{ display:"flex", wrap:"noWrap", justifyContent: "space-around"}}>
                        <div className="col-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg> {item.score} points</div>
                        <div className="col-3" style={{ color:"orange", textAlign:"center"}}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-person-fill" viewBox="0 0 16 16">
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z"/>
</svg>{item.by}</div>
                <div className="col-3" style={{ color:"orange", textAlign:"center"}}> {`${ new Date((item.time)*1000).toLocaleDateString()}`}</div>
                <div className="col-3" style={{backgroundColor:"blue", color:"white", borderRadius:"40%", textAlign:"center", padding:"5px"}}> {(item.kids.length)} comments</div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  </ListGroupItem>
                )
            
            
            })}
            
        </ListGroup>
    </div>
)
};
    
    
 
    
 export default DataForList;