import './App.css';
import { Card } from './components/card/Card';
import image1 from './images/image1.jpeg'
import image2 from './images/image2.jpeg'
import image3 from './images/image3.jpeg'
import image4 from './images/image4.jpeg'
import image5 from './images/image5.jpeg'
import image6 from './images/image6.jpeg'



function App() {
  const cards = [
    {
      url:image1,
      title:"Audi R8",
      description:"The definition of a supercar describes an expensive car that's flashy,"
    },
    {
      url:image2,
      title:"Maserati MC20",
      description:"The definition of a supercar describes an expensive car that's flashy"
    },
    {
      url:image3,
      title:"Porsche 911 GT3 RS",
      description:"The definition of a supercar describes an expensive car that's flashy"
    },
    {
      url:image4,
      title:"Lamborghini Huracan Tecnica",
      description:"The definition of a supercar describes an expensive car that's flashy"
    },
    {
      url:image5,
      title:"Rimac Nevera",
      description:"The definition of a supercar describes an expensive car that's flashy"
    },
    {
      url:image6,
      title:"ferrari F9",
      description:"The definition of a supercar describes an expensive car that's flashy"
    },
  ]
  return (
     <div className="app">
       {
         cards.map((card,index)=><Card key={index} card={card}/>)
       }
     </div>
  );
}

export default App;
