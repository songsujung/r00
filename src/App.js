import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import HelloWorld2 from './components/HelloWorld2';

function App() {

  const products = [
    {pno:1, pname:'상품1', price: 3000},
    {pno:2, pname:'상품2', price: 5000},
    {pno:3, pname:'상품3', price: 7000}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld product={products[0]}></HelloWorld>
        <HelloWorld product={products[1]}></HelloWorld>
        <HelloWorld product={products[2]}></HelloWorld>
        <HelloWorld2></HelloWorld2>
      </header>
    </div>
  );
}

export default App;
