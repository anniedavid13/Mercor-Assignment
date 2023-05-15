import "./App.css";
import SectionOne from "./pages/section1";
import SectionTwo from "./pages/section2";

function App() {
  return (
    <div className="main-container">
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Please scroll down</h1>
      </div>
      <SectionOne />
      <SectionTwo />
    </div>
  );
}

export default App;
