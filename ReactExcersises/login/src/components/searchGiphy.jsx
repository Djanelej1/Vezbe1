import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const Giphy = () => {
  const header = "Giphy App";
  const apiKey = "V9GczUQJ6jv6p5Stg1u300FNZ7SyJhpQ";
  const [data1, setData1] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    const getApiData = async () => {
      setisLoading(true);
      const response = await fetch(
        "https://api.giphy.com/v1/gifs/trending?api_key=" + apiKey
      ).then((response) => response.json());

      setData1(response.data);
      setisLoading(false);
    };
    getApiData();
  }, []);

  const changedInput = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const submitSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      setData1();
      setisLoading(true);
      const getNewApiData = async () => {
        const response = await fetch(
          "https://api.giphy.com/v1/gifs/search?q=" +
            search +
            "&api_key=" +
            apiKey
        ).then((response) => response.json());

        console.log(response.data);

        setData1(response.data.data);
        setisLoading(false);
      };
      getNewApiData();
      setSearch("");
    }
  };

  const showGifs = () => {
    if (isLoading && !data1) {
      return <div>Loading...</div>;
    }

    return data1.map((el) => {
      return (
        <Card key={el.id}>
          <Card.Body
            className="col-3"
            style={{
              width: "30%",
              border: "solid 1px grey",
              marginBottom: "20px",
            }}
          >
            <Card.Img
              variant="top"
              src={el.images.fixed_width.url}
              alt="No img"
              style={{ width: "80%" }}
            />
          </Card.Body>
        </Card>
      );
    });
  };

  return (
    <div className="Aplication">
      <h2
        style={{
          color: "white",
          textAlign: "left",
          backgroundColor: "grey",
          marginBottom: "20px",
        }}
      >
        {header}
      </h2>
      <h1>Search gifs</h1>
      <input
        placeholder="search"
        type="text"
        value={search}
        onChange={changedInput}
        onKeyDown={submitSearch}
      ></input>
      <div className="container">{showGifs()}</div>
    </div>
  );
};
export default Giphy;
