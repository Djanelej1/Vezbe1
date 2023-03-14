import { useEffect, useState } from "react";
export const Data = ()=>{
    const [id, setId] = useState([]);
    const [story, setStory] = useState([]);
    
    const getApiData = async () => {
        const response = await fetch(
          "https://hacker-news.firebaseio.com/v0/topstories.json"
        ).then((response) => response.json());
      
        // update the state
        setId(response);
        
      };
      console.log(id)  
      const data10= id.slice(0,10); 
      console.log(data10)
      const array = [];
      const  getStoryData = async () => {
        for (var i=0; i<data10; i++){
        const response = await fetch(
          'https://hacker-news.firebaseio.com/v0/item/'+data10[i]+'.json?print=pretty'
        ).then((response) => response.json());
        
        
     // update the state
        array.push(response)} 
        
      
    }

    getStoryData();
    console.log(array)
      useEffect(() => {
        getApiData();
        
      }, []);
      
      
}