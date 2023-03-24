 export const GetApiData = async()=>{

   const response = await fetch ("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=05c145e3e02f8202fc6713422048d3d3&hash=b8183bcdb3d5c459cf6eeaebc820556c")
   .then((response) => response.json());
    console.log(response);

    return (
       <div>
         {response};
       </div> 
    )
 } 

 