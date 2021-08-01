import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Aboutme from "./Pages/aboutme";
import Contact from "./Pages/contact";
import Portfolio from "./Pages/portfolio";

function App() {
  return (
    <>
      <Router>
        <Header />
                 <Route  exact path="/" component={Aboutme}   />
                 <Route  exact path="/contact" component={Contact} />
                 <Route  exact path="/portfolio" component={Portfolio} />
 
      </Router>
    </>
  );
}

export default App;
