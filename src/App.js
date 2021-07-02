import logo from './logo.svg';
import './App.css';
import Header from './components/organisms/header/Header';
import Carousel from './components/organisms/carousel/Carousel';
import Cards from './components/organisms/cards/Cards';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Cards />
    </div>
  );
}

export default App;
