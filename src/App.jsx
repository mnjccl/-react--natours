import "./App.css";

import logo from "./imgs/logo-white.png";

function App() {
  return (
    <header className="header">
      <div className="logo-box">
        <img src={logo} alt="Logo of Natours" className="logo" />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">is where life happens</span>
        </h1>
      </div>
    </header>
  );
}

export default App;
