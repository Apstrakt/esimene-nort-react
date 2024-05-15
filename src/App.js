import './luuletus.css'
import catan from './catan123.jpg'
import Luuletus from './Luuletus';

function App() {
  return (
    <div classNamew="container">
      <h1>Maailma parim luuletus</h1>
      <Luuletus />
      <img className="img-fluid" src={catan} alt='catan' />
      <div></div>
    </div>
  );
}

export default App;
