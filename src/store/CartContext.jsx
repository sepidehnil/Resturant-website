import { Children, createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "Add-Item") {
    //update state to add meal item
    const findExistingItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];
    if (findExistingItem > -1) {
      const existingItem = state.items[findExistingItem];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[findExistingItem] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: [updatedItems] };
  }
  if (action.type === "Remove-Item") {
    //update state to remove meal item
  }
}

export function CartContextProvider({ Children }) {
  useReducer(cartReducer, { items: [] }); //for more complex state management //items as a initail value
  //the cartcontextProvider is the actual state mangement and the createcontext alone is not managing the states and its just about spreading data to components
  return <CartContext.Provider>{Children}</CartContext.Provider>;
}

export default CartContext;
