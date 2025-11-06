import { useNavigate } from "react-router";
import type { Product } from "../types/product";

interface Props {
    product: Product,
}

function ProductCard({ product }: Props) {
    const navigate = useNavigate();
    
    function handleClick(e: React.MouseEvent<HTMLDivElement>) {
        navigate(`/product/${product.id}`)
    }

    return (
    <div onClick={handleClick}>
        <h3>{product.name}</h3>
        <img src={product.imgSrc}></img>
    </div>
    )
}

export default ProductCard;