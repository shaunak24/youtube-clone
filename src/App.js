import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>
  );
};

export default App;

/**
 *
 * Header
 * Body
 *    Sidebar
 *      MenuItems
 *    MainContainer
 *      ButtonsList
 *      VideoContainer
 *        VidoeCard
 *
 */
