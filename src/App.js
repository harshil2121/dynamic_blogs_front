import Header from "./common/Header";
import BlogCheck from "./LandingPages/BlogsCheck";
import Footer from "./common/Footer";
import "./App.css";
import "./assets/main.css";
import "./assets/css/style.css";
import "./assets/css/animate.css";
// import "./assets/css/bootstrap.min.css";
import "./assets/css/fontawesome.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BlogCheck />
      {/* <Blogs /> */}
      <Footer />
    </div>
  );
}

export default App;
