import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GroceryItem } from "./types";

// ================ SLICE

type GrocerySliceType = {
  items: GroceryItem[];
};

const initialState: GrocerySliceType = {
  items: [],
};

const grocerySlice = createSlice({
  name: "grocery",
  initialState,
  reducers: {
    add(state, action: PayloadAction<GroceryItem>) {
      state.items.push(action.payload);
    },

    remove(state, action: PayloadAction<string>) {
      state.items = state.items.filter((x) => x.id !== action.payload);
    },

    update(state, action: PayloadAction<GroceryItem>) {
      state.items = state.items.map((x) => {
        if (x.id === action.payload.id) return action.payload;
        return x;
      });
    },

    setAll(state, action: PayloadAction<GroceryItem[]>) {
      state.items = action.payload;
    },
  },
});

// ================ STORE

export const store = configureStore({
  reducer: {
    grocery: grocerySlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

// ================ EXPORT

export const { add, remove, update, setAll } = grocerySlice.actions;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
