export default App; //Default  exports
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./component/Main";
import Footer from "./component/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
