import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
const Shop = () => {
    const { products } = useSelector(state => state.ProductReducer);
    console.log(products)
    return (
        <div>
            <div className="container">
                <div className="row">
                    {products.map((product) => {
                        return (
                            <div className="col-3" key={product.id}>
                                <div className="product">
                                    <div className="product_img">
                                        <Link to={`/Detail/${product.id}`}><img src={product.img} alt="image_name" /></Link>
                                    </div>
                                    <div className="product_name">
                                        {product.name}
                                    </div>
                                    <div className="row">
                                        <div className="col-7 product_price">
                                            {product.price} Rs
                                    </div>
                                        <div className="col-1 product_edit">
                                            <Link to={`/Edit/${product.id}`}><Button><EditIcon /></Button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Shop;
