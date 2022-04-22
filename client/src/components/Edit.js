import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"
import ProductForm from "./ProductForm";

const Edit = (props) => {
    const {id} = useParams();
    const {title, setTitle, price, setPrice, description, setDescription} = props;
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = (productParam) => {
        axios.put(`http://localhost:8000/api/products/${id}`, productParam)
            .then(updatedProduct => {
                console.log(updatedProduct);
                navigate("/");
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update Product</h1>
            {
            loaded && <ProductForm onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description} title={title} setTitle={setTitle} price={price} setPrice={setPrice} description={description} setDescription={setDescription} />
            }
        </div>
    )
}
export default Edit;