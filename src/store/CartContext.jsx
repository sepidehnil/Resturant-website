import { createContext, useReducer } from "react";

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
    return { ...state, items: updatedItems }; //it should always return a updated state
  }

  if (action.type === "Remove-Item") {
    const findExistingItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];
    const existingItem = state.items[findExistingItem];
    if (existingItem.quantity === 1) {
      updatedItems.splice(findExistingItem, 1);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems[findExistingItem] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }

  return state;
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] }); //for more complex state management //items as a initail value
  //the CartProvider is the actual state mangement and the createcontext alone is not managing the states and its just about spreading data to components
  function addItem(item) {
    dispatch({ type: "Add-Item", item: item });
  }
  function removeItem(id) {
    dispatch({ type: "Remove-Item", id: id });
  }
  const cartContext = {
    items: cart.items,
    addItem: addItem,
    removeItem: removeItem,
  };
  console.log(cartContext);
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
