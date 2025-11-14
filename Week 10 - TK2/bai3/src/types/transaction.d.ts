export type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: "Income" | "Expense";
  isDeleted: boolean;
};
