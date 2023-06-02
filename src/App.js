import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Seville" />
        <footer>
          This project was coded by{" "}
          <a
            rel="noreferrer"
            href="https://cool-faun-28ddd5.netlify.app/"
            target="_blank"
          >
            Laetitia Stuchtey
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/LaetitiaStu/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
