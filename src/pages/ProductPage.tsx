import { Link, useParams } from "react-router";
import { products } from "../data/products";

function ProductPage() {
  const { id } = useParams();

  const product = products.find(
    (product) => String(product.id) === id
  );

  if (!product) {
    return (
      <main>
        <h1>Товар не найден</h1>

        <Link to="/products">
          Вернуться к товарам
        </Link>
      </main>
    );
  }

  return (
    <main>
      <h1>{product.title}</h1>

      <p>{product.description}</p>

      <strong>Цена: {product.price} €</strong>

      <div>
        <Link to="/">
          Вернуться к товарам
        </Link>
      </div>
    </main>
  );
}

export default ProductPage;
