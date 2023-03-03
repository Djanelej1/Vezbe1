export function getData(url){
    return fetch(url).then (response =>{
        return response.json();
    }) 
}

export function getShowId(element) {
    $(element).on("click",(e) => {
      const id = e.currentTarget.id;
      console.log(id)
      localStorage.setItem("movie_id", id);
      location.assign("./showInfoPage.html");
    });
  }

  export function getShowIdSecondPage(element) {
    $(element).on("click",(e) => {
      const id = e.currentTarget.id;
      console.log(id)
      localStorage.setItem("movie_id2", id);
      location.assign("./showInfoPage.html");
    });
  }