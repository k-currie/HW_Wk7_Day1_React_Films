// import logo from './logo.svg';
import './App.css';
import FilmReleases from "./containers/FilmReleases";
import FilmCalendar from "./components/FilmCalendar";


function App() {
  return (
    <div className="App">
      <FilmReleases />
      <FilmCalendar />
    </div>
  );
}

export default App;
