import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Workout } from "./types";

// ================== SLICE

type WorkoutSliceType = {
  workouts: Workout[];
};

const initialState: WorkoutSliceType = {
  workouts: [],
};

const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    add(state, action: PayloadAction<Workout>) {
      state.workouts.push(action.payload);
    },

    remove(state, action: PayloadAction<string>) {
      state.workouts = state.workouts.filter((x) => x.id !== action.payload);
    },

    update(state, action: PayloadAction<Workout>) {
      state.workouts = state.workouts.map((x) => {
        if (x.id === action.payload.id) return action.payload;
        return x;
      });
    },

    setAll(state, action: PayloadAction<Workout[]>) {
      state.workouts = action.payload;
    },
  },
});

// ================== STORE
export const store = configureStore({
  reducer: {
    workout: workoutSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

// ================== EXPORT

export const { add, remove, update, setAll } = workoutSlice.actions;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
