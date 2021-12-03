import logo from './logo.svg';
import './App.css';

function holamundo(nombre, edad){
  var presentacion = 
   <div>
       <h2>hola, soy {nombre}</h2>
       <h3>tento {edad} años</h3>
       </div>;

  return presentacion; 
}

function App() {
  var nombre = "jose uduan";
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi primera app
        </p>
         {holamundo(nombre, 18)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
