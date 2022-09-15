import logo from './logo.svg';
import './App.css';
import Navigation from '../components/Navigation';
import Players from '../components/Players';
import Footer from '../components/Footer';
function App() {
  //Khối html được return về gọi là JSX
  return (
    <div className="App">
     <Navigation></Navigation>
    <Players></Players>
     <Footer></Footer>
    </div>

    // gọi function
    // <tên-function></tên-function>
    // or </tên-function>


  );
}



export default App;
