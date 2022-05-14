import logo from './logo.svg';
import './App.css';
import {Grid} from '@material-ui/core';
import Header from './Componenets/Header'
import Content from './Componenets/Content';

function App() {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Header />
      </Grid>

      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8} alignItems="stretch">
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
