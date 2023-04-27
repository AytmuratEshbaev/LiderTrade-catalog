import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import catalog from "../utils/data";
import Product from "./Product";

const ProductsContainer = () => {
    let params = useParams<{ sectionId: string }>();
    const index = params.sectionId ? +params.sectionId : 0;
    let currentProducts = catalog[index].products;
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="wrapper">
                <button className="back" onClick={() => navigate(-1)}>Artqa</button>
            </div>
            <div className="products">
                {currentProducts.map(product =>
                    <Product product={product} key={uuid()} />
                )}
            </div>
        </div>
    )
}

export default ProductsContainer;