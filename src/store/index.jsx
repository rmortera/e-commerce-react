import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart.Slice";
import isLoadingSlice from "./slices/isLoading.Slice";
import productsSlice from "./slices/products.Slice";
import purchasesSlice from "./slices/purchases.slice";

export default configureStore({
  reducer: {
    isLoading: isLoadingSlice,
    products: productsSlice,
    purchases: purchasesSlice,
    cart: cartSlice,
  },
});
