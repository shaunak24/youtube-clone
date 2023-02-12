import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import MainContainer from './components/MainContainer';
import VideoDetails from './components/VideoDetails';
import store from './utils/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: 'watch',
        element: <VideoDetails />,
      },
    ],
  },
]);

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
