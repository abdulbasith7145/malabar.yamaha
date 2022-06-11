import './App.css';
const emoji = require("emoji-dictionary");

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hola {emoji.getUnicode("wave")}</h1>
      <h4>Glad to see you here! {emoji.getUnicode("heart_eyes")} {emoji.getUnicode("heart_eyes")}</h4>
      <h6>We'll be ruling here soon.!!</h6>
      </header>
    </div>
  );
}

export default App;
