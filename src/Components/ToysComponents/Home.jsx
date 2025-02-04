import AllCategories from '../Filter/AllCategories';
import Welcome from '../Welcome';
import Toys from './Toys';

const Home = () => {


    return (
      <div className='App'>
        <Welcome/>
      <br/>

      <div className='App'>
      <section id ="down"></section>
        <p className='back'> Главная /</p>
        <h3 className='titre'>Каталог товаров</h3>
        </div>

        <AllCategories />

        <Toys />
        
        </div>
    )
}

export default Home;
