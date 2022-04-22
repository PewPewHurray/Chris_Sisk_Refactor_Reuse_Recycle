import React, {useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const ProductList = (props) => {
    const {products, setProducts} = props;

    const removeFromDom = (productId) => {
        setProducts(products.filter(product => product._id !== productId));
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            setProducts(res.data);
        })
        .catch((err) => console.log(err));
    }, [])

    return (
        <div>
            <p className="allProducts">List of All Products</p>
            {
                products.map((product, index) => {
                    return (
                        <div className="productListItem" key={index}>
                            <Link to={`/${product._id}`}>{product.title}</Link>
                            |
                            <Link to={`/edit/${product._id}`}>Edit</Link>
                            |
                            <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)} />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductList;