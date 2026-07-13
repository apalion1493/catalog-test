import ProductCard from "../components/ProductCard.tsx";
import { products } from "../data/products";

export default function HomePage() {
  return (
    <>
      <div>
        <h1>Главная</h1>
        <br/>
        <h2>Список товаров</h2>
        <section>
          <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
              <div className="col-span-1">
                <ProductCard key={product.id} title={product.title} price={product.price} id={product.id}/>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  )
}
