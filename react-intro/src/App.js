import logo from './logo.svg';
import Test from './components/FirstComponent.js'
import './App.css';
let age = 26;
const menu = [  {    name: "Pizza",    description: "Hot and cheesy with your choice of toppings.",    img: "pizza"  },  {    name: "Burger",    description: "Juicy beef patty, topped with cheese.",    img: "burger"  },  {    name: "Tacos",    description: "Spicy chicken or beef in a warm tortilla.",    img: "tacos"  },  {    name: "Sushi",    description: "Fresh fish and rice rolled in seaweed.",    img: "sushi"  },  {    name: "Ramen",    description: "Japanese noodle soup with savory broth.",    img: "ramen"  },  {    name: "Biryani",    description: "Indian spiced rice dish with meat or veggies.",    img: "biryani"  }];

function App() {
  return (
    <div className="food-container">
      {
        menu.map((item)=>{
          return <Test name={item.name} desc={item.description} img={item.img}/>
        })
      }
      
    </div>
  );
}

export default App;
