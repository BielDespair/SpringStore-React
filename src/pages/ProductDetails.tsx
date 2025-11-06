import { useParams } from "react-router";
import { mockProducts } from "../debug/mocks/productsMock";
import type { Product } from "../types/product";

function ProductDetails() {
    const { id } = useParams<{id:string}>();

    const product: Product = mockProducts[Number(id)-1];


    return (
    <>
    <h1>{product.name}</h1>
    <img src={product.imgSrc} width={500} height={500}></img>
    </>)
}

export default ProductDetails;