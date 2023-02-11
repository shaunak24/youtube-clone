import './App.css';
import Body from './components/Body';
import Head from './components/Head';

const App = () => {
  return (
    <div>
      <Head />
      <Body />
    </div>
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
