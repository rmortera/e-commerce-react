import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";
import { setIsLoading } from "./isLoading.Slice";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCart: (state, action) => {
      const cart = action.payload;
      return cart;
    },
  },
});

export const getCartThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/cart`, getConfig())
    .then((res) => dispatch(setCart(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const addCartThunk = (cartPurchases) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(
      `https://e-commerce-api-v2.academlo.tech/api/v1/cart`,
      cartPurchases,
      getConfig()
    )
    .then((res) => dispatch(getCartThunk()))
    .catch(() => alert("Please try again"))
    .finally(() => dispatch(setIsLoading(false)));
};

export const purchasesCartThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(
      `https://e-commerce-api-v2.academlo.tech/api/v1/purchases`,
      {},
      getConfig()
    )
    .then((res) => dispatch(getCartThunk()))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
