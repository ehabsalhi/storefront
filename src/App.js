import './App.scss';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import Main from './Main';
import { Route, Routes } from 'react-router-dom';
import Detailes from './Component/DetailesProduct';
import CartPage from './Component/CartPage';
import Header from './Component/Header';
import Footer from './Component/Footer';
// import DetailesProduct from '.';


function App() {
  return (
    <Provider store={Store}>
      <Header/>
      <Routes>
        <Route path='/' element={ <Main/>} />
        <Route path='/detailes' element={<Detailes/>} />
        <Route path='/cartPage' element={<CartPage/>} />
      </Routes>
      <Footer/>

    </Provider>
  );
}

export default App;
