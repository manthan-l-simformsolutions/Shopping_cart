import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { Add_items } from "../actions/ShowDetail";
import { useHistory } from "react-router-dom";

const Add_item = () => {
    const [item, setItem] = useState({
        name: "",
        price: "",
        quantity: "",
        desc: "",
        img: ""
    });
    const dispatch = useDispatch();
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
        console.log(item)
        dispatch(Add_items(item))

    }
    const history = useHistory()
    const back = () => {
        history.push('/')
    }

    return (
        <div>
            <div className="row">
                <div className="h1">
                    <h1>Add item</h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={onSubmit}>
                            <input type="text" name="name" value={item.name} onChange={InputEvent} placeholder="Add item name" /><br />
                            <input type="text" name="price" value={item.price} onChange={InputEvent} placeholder="Add item price" /><br />
                            <input type="text" name="quantity" value={item.quantity} onChange={InputEvent} placeholder="Add item quantity" /><br />
                            <input type="text" name="desc" value={item.desc} onChange={InputEvent} placeholder="Add item description" /><br />
                            <input type="file" name="img" onChange={handleFileUpload} /><br />
                            <button type="submit" className="btn btn-primary btn" >ADD</button>
                            <button onClick={back} className="btn btn-danger btn" >Back</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add_item;