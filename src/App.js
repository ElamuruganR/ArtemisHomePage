import logo from './logo.svg';
import './App.css';
import Header from './components/organisms/header/Header';
import Carousel from './components/organisms/carousel/Carousel';
import { CategoryCarousel } from './components/organisms/category/CategoryCarousel';
import Image from './components/atoms/Image';
import {cardsData} from './components/testdata/data';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <CategoryCarousel>
        {
          cardsData.map((card) => {
              return (
                  <Image
                      source={card.imgSrc}
                      altText={card.alt}
                      className="card-img"
                  />
              )
          })
        }
      </CategoryCarousel>
    </div>
  );
}

export default App;
