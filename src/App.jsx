import { useState } from 'react';
import './App.css';
import quotes from './quotes.json';
import QuoteBox from './components/QuoteBox';
import Button from './components/Button';

function App() {

  const random = Math.floor(Math.random() * quotes.length);

  const [index, setindex] = useState(random);

  const randomIndex = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setindex(random);
  }

  const colors = ['#845EC2', "#4B4453", "#B0A8B9", "#C34A36", "#FF8066"];

  const randomColor = Math.floor(Math.random() * colors.length);

  document.body.style = `background: ${colors[randomColor]}`;

  return (
    <div className="App" style={{ color: colors[randomColor] }}>
      <div className='quoteBox'>
        <QuoteBox index={index} randomIndex={randomIndex} />
        <Button randomIndex={randomIndex} randomColor = {colors[randomColor]}/>
      </div>

    </div>
  )
}

export default App;