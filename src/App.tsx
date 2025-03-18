import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import Navbar from "./pages/Navbar";
import OurProducts from "./pages/OurProducts";
import ValuesPage from "./pages/ValuesPage";
import ContactUs from "./pages/ContactUs";
import DataType from "./pages/DataType";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <div className="background-blue">
        <Navbar />
        <main>
          <section id="home">
            <HomePage />
          </section>
          <section id="values">
            <ValuesPage />
          </section>
          <section id="model">
            <DataType />
          </section>
          <section id="products">
            <OurProducts />
          </section>
          <section id="contact">
            <ContactUs />
          </section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;