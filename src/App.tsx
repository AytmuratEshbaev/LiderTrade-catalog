import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductInfo from './components/ProductInfo';
import ProductsContainer from './components/ProductsContainer';
import SectionsContainer from './components/SectionsContainer';

function App() {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={<SectionsContainer />} />
        <Route path="/:sectionId" element={<ProductsContainer />} />
        <Route path="/:sectionId/:productId" element={<ProductInfo />} />
      </Routes>
    </div>
  );
}

export default App;
