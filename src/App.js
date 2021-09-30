import logo from './logo.svg';
import './App.css';
import '@progress/kendo-theme-material/dist/all.css';
import { Button } from '@progress/kendo-react-buttons';

function App() {


  const handleExportWithComponent = (event) => {
    console.log("Clicked")
  }

  return (
    <div className="app-content">
        <h1> Kendo React PDF Generator.</h1>
        <p> PDF generating tools for react.</p>
        <div className="button-area">
          <Button primary={true} onClick={handleExportWithComponent}>Primary Button</Button>
        </div>
    </div>
  );
}

export default App;
