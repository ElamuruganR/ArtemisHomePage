import './App.css';
import Header from './components/organisms/header/Header';
import HeroCarousel from './components/organisms/carousel/HeroCarousel';
import { CarouselGrid } from './components/organisms/category/CarouselGrid';
import Image from './components/atoms/Image';
import {cardsData} from './components/testdata/data';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroCarousel />
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
