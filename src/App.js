import './App.css';
import Header from './components/organisms/header/Header';
import Carousel from './components/organisms/carousel/Carousel';
import { CarouselGrid } from './components/organisms/category/CarouselGrid';
import Image from './components/atoms/Image';
import {cardsData} from './components/testdata/data';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <CarouselGrid>
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
      </CarouselGrid>
    </div>
  );
}

export default App;
