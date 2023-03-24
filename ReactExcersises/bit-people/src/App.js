import "./App.css";
import { useState, useEffect } from "react";
import { ListView } from "./components/pages/ListView";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { CardView } from "./components/pages/cardView";
import { AboutPage } from "./components/pages/AboutPage";
import { Search } from "./components/Search";
import { NumberOfGender } from "./components/MaleFemale";
import { Header } from "./components/header";
import { Loader } from "./components/Loader";
import { Footer } from "./components/Footer";
function App() {
  const [people, setPeople] = useState([]);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch(
        "https://randomuser.me/api/?results=15"
      ).then((response) => response.json());
      console.log(response);
      setPeople(response.results);
      setIsLoaded(true);
    };

    getApiData();
  }, []);

  const [searchText, setSearchText] = useState("");

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      <div className="App">
        <Header />
        <Search handleSearchNote={setSearchText}></Search>

        <NumberOfGender
          people={people.filter((item) =>
            item.name.first.toLowerCase().includes(searchText.toLowerCase())
          )}
        />

        <div className="container">
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/list"
              element={
                <ListView
                  people={people.filter((item) =>
                    item.name.first
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) 
                  )}
                />
              }
            ></Route>
            <Route path="/" element={<ListView people={people} />} />
            <Route
              path="/grid"
              element={
                <CardView
                  people={people.filter((item) =>
                    item.name.first
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  )}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
