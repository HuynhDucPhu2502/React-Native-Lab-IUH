import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./types";

// ================ SLICE

export type CartSliceType = {
  name: string;
  total: number;
  items: {
    product: Product;
    quantity: number;
  }[];
};

const initialState: CartSliceType = {
  name: "",
  total: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const existed = state.items.find(
        (x) => x.product.id === action.payload.id
      );

      if (existed) existed.quantity += 1;
      else state.items.push({ product: action.payload, quantity: 1 });

      state.total += action.payload.price;
    },

    removeFromCart(state, action: PayloadAction<string>) {
      const existed = state.items.find((x) => x.product.id === action.payload);

      if (!existed) return state;

      if (existed.quantity > 1) existed.quantity -= 1;
      else
        state.items = state.items.filter(
          (x) => x.product.id !== action.payload
        );

      state.total -= existed.product.price;
    },

    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },

    setAll(state, action: PayloadAction<CartSliceType>) {
      state.items = action.payload.items;
      state.name = action.payload.name;
      state.total = action.payload.total;
    },
  },
});

// ================ STORE
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

// ================ EXPORT
export const { addToCart, removeFromCart, setAll, setName } = cartSlice.actions;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
