import logo from './logo.svg';
import logo2 from './thumbnail_logo.png';
import './App.css';
import Home from './Home';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function App() {
  return (

    <div className="App">
      <header className="App-header2">
        <p>e-Commers Gapsi</p>
      </header>
      <div>
        <br/><br/>
        <img src={logo2} className="App-logo2" alt="logo" />
        <br/><br/>
        <p>Bienvenido Candidato 01</p>
        <br/><br/>
        
        <Button variant="contained" color="primary" onClick={Home}>
          Continuar
        </Button>
      </div>
      <footer className="App-footer">version 0.0.1</footer>
    </div>
  );
}


export default App;
