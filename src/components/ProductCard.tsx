import {Link} from "react-router";

type ProductType = {
  id: number;
  title: string;
  price: number | bigint;
}

const ProductCard = (product:ProductType) => {
  return (
    <article >
      <h2>{product.title}</h2>
      <p>Цена: {product.price} €</p>

      <Link to={`/products/${product.id}`}>
        Подробнее
      </Link>
    </article>
  )
}

export default ProductCard
