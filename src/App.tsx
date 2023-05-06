import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Error from './components/Error';
import AddPackage from './components/forms/AddPackage';
import AddPost from './components/forms/AddPost';
import Home from './components/home/Home';
import AllPost from './components/tables/AllPost';
import Test from './components/forms/Test';
import Main from './layout/Main';
import AllPackages from './components/tables/AllPackages';
import UpdatePost from './components/forms/UpdatePost';
import UpdatePackage from './components/forms/UpdatePackage';

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {path: '/', element: <Home/>},
        {path: 'add-package', element: <AddPackage/>},
        {path: 'update-package', element: <UpdatePackage/>},
        {path: 'all-packages', element: <AllPackages/>},
        {path: 'test', element: <Test/>},
        {path: 'add-post', element: <AddPost/>},
        {
          path: 'update-post',
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/posts/645254a07d46beb069a05292`);
          },
          element: <UpdatePost />
        },
        {path: 'all-post', element: <AllPost/>},
        {path: '*', element: <Error/>},
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;