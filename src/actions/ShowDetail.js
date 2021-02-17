export const ShowDetail = (id) => ({
    type: "SELECTE_PRODUCT",
    id,
})
export const Add_items = (data) => ({
    type: "ADD_ITEM",
    data,
})
export const Add_to_cart = (product, quantity) => ({
    type: "ADD_TO_CART",
    payload: { product, quantity }

})


