import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from './Components/Footer';
import About from "./Components/About";
import Contacts from "./Components/Contacts"

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <Footer />
    <About />
    <Contacts />
    </>

  );
}

export default App;
