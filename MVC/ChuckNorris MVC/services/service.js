export function getJoke(url){
 return fetch(url).then(response =>{
    return response.json();
 })
}