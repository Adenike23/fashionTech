import { createContext, useReducer } from "react";

const CartContext = createContext({});

export function CartContextProvider({ children }) {
    function cartReducer(state, action) {
        if(action.type === 'ADD_ITEM') {
            const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
            const existingItem = state.items[existingCartItemIndex]

            const updatedItems = [...state.items]

            if(existingCartItemIndex > -1) { //item already exist
                const updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1
                }
                updatedItems[existingCartItemIndex] = updatedItem
            } else {
                updatedItems.push({...action.item, quantity: 1})
            }

            return {...state, items: updatedItems}
        }
        if(action.type === 'REMOVE_ITEM') {
            const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)
            const existingItem = state.items[existingCartItemIndex]
            const updatedItems = [...state.items]
            if(existingItem.quantity > 1) {
                const updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity - 1
                }
                updatedItems[existingCartItemIndex] = updatedItem
            } else {
                updatedItems.splice(existingCartItemIndex, 1)
            }

            return {...state, items: updatedItems}
        }

        return state;
    }

    function addItem(items) {
        dispatch({
            type: 'ADD_ITEM',
            item: items
        })
    }
    function removeItem(id) {
        dispatch({
            type: 'REMOVE_ITEM',
            id: id
        })
    }
    const [cartState, dispatch] = useReducer(cartReducer, {
        items: []
    })

    const cartCtx = {
        items: cartState.items,
        addItem,
        removeItem
    }

    return (
        <CartContext.Provider value={cartCtx}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;