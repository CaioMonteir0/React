import {Fragment} from 'react';
import Planets from './components/planets/index'
import Planet from './components/planets/planet';


function App() {
  return (
    <Fragment>
      <Planets/>
      <Planet/>
    </Fragment>
    
  );
}

export default App;
