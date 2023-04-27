import { useParams, useNavigate } from "react-router-dom";
import catalog from "../utils/data";

const ProductInfo = () => {
    const params = useParams();
    const sectionIndex = params.sectionId ? +params.sectionId : 0;
    const productIndex = params.productId ? +params.productId : 0;
    const product = catalog[sectionIndex].products[productIndex];
    const navigate = useNavigate();
    return (
        <div className="product-info">
            <div className="wrapper">
                <button className="back" onClick={() => navigate(-1)}>Artqa</button>
            </div>
            <img src={`../${product.productImg}`} alt={product.productName} />
            <h4><span>Atı:</span> {product.productName}</h4>
            <p>{product.productDescription}</p>
            <h5> UZS {product.productPrice}</h5>
        </div>
    )
}

export default ProductInfo;