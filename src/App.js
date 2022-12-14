import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Info from './components/Info';
import Display from './components/Display';

function App() {
  // state to hold gif data
  const [gif, setRandomGif] = useState({})

  // function to getRandomGif
  const getRandomGif = async () => {
  // make request with API_KEY
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=8YN0sy9lDgSLUyiRRO1GYhcE92Vlz2iA&tag=&rating=g`)
  //parse JSON response into a JS Obj
  const data = await response.json()
  // set the state 
  setRandomGif(data)
  console.log(gif)
  }

  return (
    <div className="App">
      <Info />
      <Button getRandomGif={getRandomGif} />
      <Display gif={gif} />
    </div>
  );
}

export default App;
