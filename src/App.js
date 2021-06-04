import './App.css';
import CountDown from "./CountDown"

function App() {
  return (
    <div className="App">
      <CountDown hours={1} minutes={45}/>
    </div>
  );
}

export default App;
