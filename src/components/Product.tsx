import { Link } from "react-router-dom";
import { IProduct } from "../models/models";
type Props = {
    product: IProduct
}
const Product = ({ product }: Props) => {
    return (
        <Link className="product" to={`./${product.productId}`}>
            <div className="product__img">
                <img src={product.productImg} alt={product.productName} />
            </div>
            <div className="product__text">
                <h4 className="product__name">{product.productName}</h4>
                <p className="product__description">{product.productDescription}</p>
                <h4 className="product__price">UZS {product.productPrice}</h4>
            </div>
        </Link>
    )
}

export default Product;