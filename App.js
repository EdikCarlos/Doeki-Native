import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import Home from './src/Home';
import Doar from './src/Doar';
import Apoio from './src/Apoio';
import Sobre from './src/Sobre';


const Navigator = createStackNavigator({
  Home : {screen : Home},
  Doar: {screen : Doar},
  Apoio: {screen : Apoio},
  Sobre: {screen : Sobre},
})

const App = createAppContainer(Navigator);

  

export default App;
