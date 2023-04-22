
import './App.css';
import React, {useEffect , useState} from "react";
import axios from "axios";

function App() {
  const[link, getLink] = useState('');
  const [textValue, setTextValue] = useState('');

  // const baseURL = '';
  
  function getShortURL () {
    axios.get(`https://api.shrtco.de/v2/shorten?url=${textValue}`)
      .then((response) =>{
        var linkData = response.data.result.short_link;
        getLink(linkData);
        console.log(linkData);
        
      })
  }
  useEffect(()=>{getShortURL()}, []);

  return (
    <div className="App">
      <div className="header">
        <h1> URL SHORTNER </h1>
      </div>
      <div className="main_box">
        <h2> Paste your URL to be shortened </h2>
        <input type="textbox" value={textValue} onChange={(e) => setTextValue(e.target.value)} id="text" placeholder= "Enter your link here"></input>
        <div className="btn_box">
          <button className="submit" onClick={getShortURL} >SHORTEN URL</button>
          <button className="copy" >COPY TO CLIPBOARD</button>
        </div>
        <div className="output">
          <h4>  {link}  </h4>
        </div>
        <div className="text_box">
          <h5>URL shortner is a free tool to shorten URL or reduce a link use our URL shortner to create a 
            shortened link making it easy to remember.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default App;
