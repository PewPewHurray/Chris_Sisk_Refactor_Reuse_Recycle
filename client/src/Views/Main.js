import React, {useState} from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import axios from "axios";

const Main = (props) => {
    const {title, setTitle, price, setPrice, description, setDescription} = props;
    const [products, setProducts] = useState([]);

    const createProduct = (productParam) => {
        axios.post("http://localhost:8000/api/products", productParam)
        .then((newProduct) => {
            setProducts([...products, newProduct.data]);
            setTitle("");
            setPrice(0);
            setDescription("");
        })
        .catch(err => console.log(err.response))
    }

    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice={0} initialDescription="" title={title} setTitle={setTitle} price={price} setPrice={setPrice} description={description} setDescription={setDescription} />
            <hr/>
            <ProductList products={products} setProducts={setProducts} />
        </div>
    )
}
export default Main;