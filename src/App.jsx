import About from "./components/About";
import Features from "./components/Features";
import Header from "./components/Header";
import Stories from "./components/Stories";
import Tours from "./components/Tours";

import "./sass/main.scss";

function App() {
  return (
    <>
      <Header />
      <About />
      <Features />
      <Tours />
      <Stories />
    </>
  );
}

export default App;
