import './App.css';
import JobList from '../JobList/JobList';
import Filter from '../Filter/Filter';

function App() {
  return (
    <div className="App">
      <Filter />
      <div className='component-spacing'></div>
      <JobList />
    </div>
  );
}

export default App;