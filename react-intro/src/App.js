import logo from './logo.svg';
import Test from './components/FirstComponent.js'
import './App.css';
let age = 26;
const menu = [  {    name: "Pizza",    description: "Hot and cheesy with your choice of toppings.",    img: "pizza", rating: 4.5, votes: 323, price: 299  },  {    name: "Burger",    description: "Juicy beef patty, topped with cheese.",    img: "burger",rating: 4.4 ,votes: 2000, price: 99  },  {    name: "Tacos",    description: "Spicy chicken or beef in a warm tortilla.",    img: "tacos", rating: 3.9, votes: 45 , price: 399 },  {    name: "Sushi",    description: "Fresh fish and rice rolled in seaweed.",    img: "sushi", rating: 4.3, votes:559, price: 299  },  {    name: "Ramen",    description: "Japanese noodle soup with savory broth.",    img: "ramen",rating: 4.0, votes: 98, price: 249  },  {    name: "Biryani",    description: "Indian spiced rice dish with meat or veggies.",    img: "biryani", rating: 4.9, votes: 903, price: 199 }];

function App() {
  return (
    <div className="food-container">
      {
        menu.map((item)=>{
          return <Test name={item.name} desc={item.description} img={item.img} rating={item.rating} votes={item.votes} price={item.price}/>
        })
      }
      
    </div>
  );
}

export default App;
