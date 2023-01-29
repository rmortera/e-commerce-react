import { configureStore } from "@reduxjs/toolkit";
import isLoadingSlice from "./slices/isLoading.Slice";
import productsSlice from "./slices/products.Slice";

export default configureStore({
  reducer: {
    isLoading: isLoadingSlice,
    products: productsSlice,
  },
});
