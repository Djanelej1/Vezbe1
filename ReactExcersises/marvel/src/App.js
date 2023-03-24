
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Search } from './components/Search';
import {  CardItem } from './components/Card';
import { Character } from './components/Character';

function App() {


  
  return (
    <div className="App">
     <Header/>
     <Search />
     <CardItem/>

     <Character></Character>
     <Footer/>
    </div>
  );
}

export default App;
