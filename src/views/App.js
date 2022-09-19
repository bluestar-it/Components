import logo from './logo.svg';
import './App.css';
import Navigation from '../components/Navigation';
import Players from '../components/Players';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Container from '../components/Container';
import Pagination from '../components/Pagination';
function App() {
  //Khối html được return về gọi là JSX
  return (
    <div className="App">
     <Navigation></Navigation>
     {/* <Main></Main> */}
     <Container></Container>
     <Pagination></Pagination>
     <Footer></Footer>
    </div>

    // gọi function
    // <tên-function></tên-function>
    // or </tên-function>


  );
}



export default App;
