import './App.css';
import Body from './components/Body';
import Header, {headerWithLogOut} from './components/Header';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Browse from './components/Browse';


function App() {
 
  const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <div><Login /></div>
    },
    {
        path: '/browse',
        element:  <div><Browse /></div>
    }
])
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
