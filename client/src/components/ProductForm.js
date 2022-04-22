import React, { useEffect, useState } from "react";

const ProductForm = (props) => {
    const {initialTitle, initialPrice, initialDescription, onSubmitProp, title, setTitle, price, setPrice, description, setDescription} = props;
    // const [title, setTitle] = useState(initialTitle);
    // const [price, setPrice] = useState(initialPrice);
    // const [description, setDescription] = useState(initialDescription);

    useEffect(() => {
        setTitle(initialTitle);
        setPrice(initialPrice);
        setDescription(initialDescription);
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({title, price, description});
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="formInputs">
                <label>Title: <input className="titleInput" type="text" onChange={(e) => setTitle(e.target.value)} value={title}/></label>
            </div>
            <div className="formInputs">
                <label>Price: <input className="priceInput" type="number" onChange={(e) => setPrice(e.target.value)} value={price}/></label>
            </div>
            <div className="formInputs">
                <label>Description: <input className="descriptionInput" type="text" onChange={(e) => setDescription(e.target.value)} value={description}/></label>
            </div>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default ProductForm;