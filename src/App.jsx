import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';
import FilteredProducts from './Components/FilteredProducts/FilteredProducts';
import SingleProduct from './Components/FilteredProducts/SingleProduct';
import Login from './Components/Login/Login';

function App() {
  const user = useSelector((state) => state.user?.user);
  const authUser = user?.authUser;

  console.log(user);
  console.log(authUser);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authUser ? <Main /> : <Login />} />
          <Route path="/filteredProducts/:type" element={<FilteredProducts />} />
          <Route path="/filteredProducts/:type/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
