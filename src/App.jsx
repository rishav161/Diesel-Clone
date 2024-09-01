import Allroutes from './Allroutes/Allroutes';
import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Allroutes/>
      <br />
      <Footer/>
    </div>
  );
}

export default App;
