import Banner from "./components/layout/banner/Banner";
import "./index.css";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import MusicDashboard from "./components/sections/MusicDashboard";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <MusicDashboard />
      <Footer />
    </>
  );
}

export default App;
