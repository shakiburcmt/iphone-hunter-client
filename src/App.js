import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home';
import Phone from './components/Phone';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader:()=>fetch('http://localhost:5000/phones'),
          element: <Home></Home>,
        },
        {
          path: '/phones/:phonesId',
          element:<Phone></Phone>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
