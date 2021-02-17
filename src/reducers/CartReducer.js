const initialstate = {
    products: [],
    totalPrice: 0,
    totalQuantity: 0
}

const CartReducer = (state = initialstate, action) => {
    let findpro;
    let index;
    switch (action.type) {
        case "ADD_TO_CART":
            const { product, quantity } = action.payload;
            const check = state.products.find(pr => pr.id === product.id)
            if (check) {
                return state;
            }
            else {
                const Tprice = state.totalPrice + product.price * quantity;
                const Tquantity = state.totalQuantity + quantity
                product.quantity = quantity;
                return {
                    ...state, products: [...state.products, product], totalPrice: Tprice,
                    totalQuantity: Tquantity
                }
            }
        case "INC":
            findpro = state.products.find(product => product.id === action.payload);
            index = state.products.findIndex(product => product.id === action.payload);
            findpro.quantity += 1;
            state.products[index] = findpro;
            return {
                ...state, totalPrice: state.totalPrice + findpro.price,
                totalQuantity: state.totalQuantity + 1
            }
        case "DEC":
            findpro = state.products.find(product => product.id === action.payload);
            index = state.products.findIndex(product => product.id === action.payload);
            if (findpro.quantity > 1) {
                findpro.quantity -= 1;
                state.products[index] = findpro;
                return {
                    ...state, totalPrice: state.totalPrice - findpro.price,
                    totalQuantity: state.totalQuantity - 1
                }
            }
            else {
                return state
            }
        case "REMOVE":
            findpro = state.products.find(product => product.id === action.payload);
            const filtered = state.products.filter(product => product.id !== action.payload)
            return {
                ...state,
                products: filtered,
                totalPrice: state.totalPrice - findpro.price * findpro.quantity,
                totalQuantity: state.totalQuantity - findpro.quantity
            }
        default:
            return state;
    }

}
export default CartReducer;