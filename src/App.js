// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Aboutme from "./Pages/aboutme";
import Contact from "./Pages/contact";
import Resume from "./Pages/resume";
import Portfolio from "./Pages/portfolio";
import Container from "./Components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        /> */}
        <Container>
          <Route exact path="/" component={Aboutme} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
