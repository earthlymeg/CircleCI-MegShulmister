import './App.css';
import circleci from './assets/circleci.png';
import data from './data/data';
import {useState, useEffect} from 'react';
function App() {

  const [text, setText] = useState('');
  function generateText() {
    let randomIndex = Math.floor(Math.random() * data.length);
    setText(data[randomIndex])
  }

  useEffect( () => {
    console.log(text)
  }, [text])



  return (
    <div className="App">
      <div className="App-header">
     Some reasons to love:<img
      data-testid="circleci-button"
      src={circleci} 
      alt="CircleCI"
      onClick={e => {
        generateText();
      }}
      />
      <RandomText text={text}/>
     </div>
    </div>
  );
}

function RandomText({text}) {


  return (
    <div data-testid="random-text">
      {text}
    </div>
  )
}

export default App;
