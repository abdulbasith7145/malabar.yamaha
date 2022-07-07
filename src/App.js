import './App.css';
import bg_img from './assets/images/mt-15-bg.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bg_img} alt="bg image" style={{width:"100%", height:"100%"}}></img>
        <h3 style={{position: 'fixed',left: '93px', top: '574px', fontFamily:'Cursive'}}>Hola from</h3>
        <h1 style={{position: 'fixed',left: '93px', fontFamily:'Fantasy'}}>Malabar Yamaha</h1>
        <h4 style={{position: 'fixed',right: '93px', fontFamily:'Cursive', top:'0px'}}>+91-7510 437 343, +91-7510 740 343</h4>
      </header>
    </div>
  );
}

export default App;
