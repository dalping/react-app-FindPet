import React from "react";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import MainPage from "./components/views/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
