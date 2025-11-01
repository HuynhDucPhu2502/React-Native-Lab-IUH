import { create } from "zustand";
export type Task = { id: string; title: string; done: boolean };
type S = {
  list: Task[];
  add: (t: string) => void;
  toggle: (id: string) => void;
  rename: (id: string, t: string) => void;
};
export const useTasks = create<S>((set) => ({
  list: [],
  add: (t) =>
    set((s) => ({
      list: [...s.list, { id: Date.now().toString(), title: t, done: false }],
    })),
  toggle: (id) =>
    set((s) => ({
      list: s.list.map((x) => (x.id === id ? { ...x, done: !x.done } : x)),
    })),
  rename: (id, t) =>
    set((s) => ({
      list: s.list.map((x) => (x.id === id ? { ...x, title: t } : x)),
    })),
}));
