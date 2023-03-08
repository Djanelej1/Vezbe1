export function getData(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

export function getShowId(element) {
  $(element).on("click", (e) => {
    localStorage.clear()
    const id = e.currentTarget.id;
    console.log(id);
    localStorage.setItem("movie_id", id);
  
  });
}
