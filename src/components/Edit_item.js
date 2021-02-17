import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const Edit_item = () => {
    const [item, setItem] = useState({
        name: "",
        price: 0,
        quantity: 0,
        desc: "",
        img: ""
    });
    const { id } = useParams();
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.ProductReducer);
    useEffect(() => {
        if (id) {
            setItem({
                id: parseInt(id),
                name: products[id - 1].name,
                price: products[id - 1].price,
                quantity: products[id - 1].quantity,
                desc: products[id - 1].desc,
                img: products[id - 1].img
            })
        }
    }, [id])
    const InputEvent = (event) => {
        const { name, value } = event.target
        setItem((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })

    }

    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    function handleFileUpload(event) {
        getBase64(event.target.files[0], imageUrl => {
            setItem({ ...item, img: imageUrl })

        });
    }


    const onSubmit = (event) => {
        event.preventDefault();
    }
    const history = useHistory()
    const back = () => {
        history.push('/')
    }

    return (
        <div>
            <div className="row">
                <div className="h1">
                    <h1>Edit item</h1>
                </div>
            </div>
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <form onSubmit={onSubmit}>
                            <input type="text" name="name" onChange={InputEvent} value={item.name} /><br />
                            <input type="number" name="price" onChange={InputEvent} value={item.price} /><br />
                            <input type="number" name="quantity" onChange={InputEvent} value={item.quantity} /><br />
                            <input type="text" name="desc" onChange={InputEvent} value={item.desc} /><br />
                            <input type="file" name="img" onChange={handleFileUpload} /><br />
                            <button type="submit" onClick={() => dispatch({ type: "EDIT_ITEM", payload: { id, item } })} className="btn btn-primary btn" >Edit</button>
                            <button onClick={back} className="btn btn-danger btn" >Back</button>
                        </form>
                    </div>




                </div>
            </div>
        </div>
    )
}

export default Edit_item;