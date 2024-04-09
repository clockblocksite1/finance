import Header from './components/Header';
import Row from './components/Row';
import './App.css';
import { Table } from './components/Table';
function App() {
  return (
    <div className="App">
   <Header/>
   <Row tableData={Table}/>
    </div>
  );
}

export default App;
