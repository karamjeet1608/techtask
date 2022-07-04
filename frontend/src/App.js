import Product from './components/Product';
import Subcategory from './components/Subcategory';
import { Container } from 'react-bootstrap'
function App() {
  return (
    <Container fluid className="mx-auto">
      <main className="py-3">
      <h1> Products, Sub Category and Sub Products</h1>
      <Product/>
      <Subcategory/>
      </main>
    </Container>
  );
}

export default App;
