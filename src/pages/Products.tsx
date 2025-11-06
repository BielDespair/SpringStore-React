
import { mockProducts } from "../debug/mocks/productsMock";
import ProductCard from "../components/ProductCard";


function Products() {
    return (
        <div>
            <h1>Product</h1>
            <div>
                {mockProducts.map((p, _) => {
                    return <ProductCard key={p.id} product={p}></ProductCard>
                })}
            </div>
        </div>
    )
}


export default Products;