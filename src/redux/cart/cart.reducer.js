import CartActoinTypes from './cart.types';

const INITIAL_STATE = {
    hidden: true
};
//toma un state, (que esta en los parentesis), y retorna un state(o xq entra en switch o porque va a default)
                    //si este state viene nulo, lo setea, pero si trae algo lo deja como viene
const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActoinTypes.TOGGLE_CART_HIDDEN:
        return { //esto se hace de esta forma "lo que trae + algo nuevo, sino react no renderiza de nuevo"
            ...state, //lo que trae
            hidden: !state.hidden //mas lo nuevo que agrega
        }
        default:
            return state;
    }
};

export default cartReducer;