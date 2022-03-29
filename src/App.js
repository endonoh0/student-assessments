import logo from './logo.svg';
import './App.css';
import useAppData from './hooks/useAppData';

function App() {
	const { state } = useAppData();
	const { studentAssessments } = state;

  return (
    <div className="App">

    </div>
  );
}

export default App;
