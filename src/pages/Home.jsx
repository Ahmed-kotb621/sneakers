import Carousel from '../ui/Carousel ';
import Catogories from '../ui/Catogories';
import Footer from '../ui/Footer';
import Heading from '../ui/Heading';

function Home() {
  return (
    <div>
      <Carousel />
      <Heading text="Trending Sneakers" />
      <Catogories />
    </div>
  );
}

export default Home;
