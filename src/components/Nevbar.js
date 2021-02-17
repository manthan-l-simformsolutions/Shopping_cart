import React, { useState } from 'react'
import '../index.css'
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useSelector, useDispatch } from "react-redux";
const Nevbar = () => {
    const [search, setSearch] = useState("");

    const { totalQuantity } = useSelector(state => state.CartReducer)
    const dispatch = useDispatch();
    const InputEvent = (event) => {
        setSearch(event.target.value);
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">E-Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add_item">Add_Item</Link>
                            </li>
                        </ul>

                        <input className="search" name="search" value={search} onChange={InputEvent} type="search" placeholder="Search" aria-label="Search" />
                        <Link to="/item"> <button className="btn btn-outline-success Sbutton" onClick={() => dispatch({ type: "SEARCH", payload: { search } })} type="submit">Search</button></Link>


                    </div>
                    <div className="nev_right">
                        <Link to='/cart'>
                            <div className="basket">
                                <AddShoppingCartIcon className="cart_icon" />
                                <span>{totalQuantity}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nevbar;
