export type TransactionItem = {
  id: number | null;
  title: string;
  amount: number;
  createdAt: Date;
  type: "INCOME" | "EXPENSE";
  isDeleted: boolean;
};
