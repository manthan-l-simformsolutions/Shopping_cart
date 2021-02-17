import React, { useEffect, useState } from 'react'
import { ShowDetail, Add_to_cart } from "../actions/ShowDetail";
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
const Detail = () => {
    const [quantity, setQuantity] = useState(1)
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.ProductReducer);
    useEffect(() => {
        dispatch(ShowDetail(id))
    }, [id])
    const decQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }
    const history = useHistory()
    const back = () => {
        history.push('/')
    }
    return (
        <div className="container mt-100">
            <div className="row">
                <div className="col-6">
                    <div className="detail_image">
                        <img src={product.img} />
                    </div>
                </div>
                <div className="col-6">
                    <div className="detail_name">
                        {product.name}
                    </div>
                    <div className="detail_price">
                        {product.price} Rs
                    </div>
                    <div className="detail_info">
                        <div className="detail_incdec">
                            <span className="dec" onClick={decQuantity}><RemoveIcon /></span>
                            <span className="quantity">{quantity}</span>
                            <span className="inc" onClick={() => { setQuantity(quantity + 1) }}><AddIcon /></span>
                            <button className="btn-default" onClick={() => dispatch(Add_to_cart(product, quantity))} >Add To Cart</button>
                        </div>
                    </div>
                    <div className="detail_p">
                        <h4>Details: </h4>
                        {product.desc}
                    </div>
                    <div>
                        <button onClick={back} className="btn btn-danger btn2" >Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;
