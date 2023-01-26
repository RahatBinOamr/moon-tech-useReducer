

import { RouterProvider } from 'react-router-dom';
import './App.css';
import ProductProvider from './Context/ProductProivider';
import router from './Router/Router';


function App() {
  

  return (
    <div className="App">
      
      <ProductProvider>
      <RouterProvider router={router}></RouterProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
