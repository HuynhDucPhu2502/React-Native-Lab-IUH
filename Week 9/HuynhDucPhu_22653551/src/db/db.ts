import { TransactionItem } from "@/types/TransactionItem";
import { SQLiteDatabase } from "expo-sqlite";

export const migrateDbIfNeeded = async (db: SQLiteDatabase) => {
  const DATABASE_VERSION = 2;
  const { user_version: currentVersion } = await db.getFirstAsync<{
    user_version: number;
  }>("PRAGMA user_version");

  if (currentVersion < DATABASE_VERSION) {
    await db.execAsync("DROP TABLE IF EXISTS transactions");
    await db.execAsync(`
      CREATE TABLE transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        amount REAL NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        type TEXT NOT NULL,
        isDeleted INTEGER DEFAULT 0
      )
    `);
    await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
  }
};

export const addTransaction = async (
  db: SQLiteDatabase,
  transaction: TransactionItem
) => {
  await db.runAsync(
    "INSERT INTO transactions (title, amount, type) VALUES (?, ?, ?)",
    [transaction.title, transaction.amount, transaction.type]
  );
};

export const updateTransaction = async (
  db: SQLiteDatabase,
  transaction: TransactionItem
) => {
  await db.runAsync(
    "UPDATE transactions SET title = ?, amount = ?, type = ? WHERE id = ?",
    [transaction.title, transaction.amount, transaction.type, transaction.id]
  );
};

export const getAllTransactions = async (db: SQLiteDatabase) => {
  return await db.getAllAsync<TransactionItem>(
    "SELECT * FROM transactions WHERE isDeleted = 0 ORDER BY id DESC"
  );
};

export const getTransactionById = async (db: SQLiteDatabase, id: number) => {
  return await db.getFirstAsync<TransactionItem>(
    "SELECT * FROM transactions WHERE id = ?",
    [id]
  );
};

export const deleteTransactionById = async (db: SQLiteDatabase, id: number) => {
  await db.runAsync("UPDATE transactions SET isDeleted = 1 WHERE id = ?", [id]);
};

export const restoreTransactionById = async (
  db: SQLiteDatabase,
  id: number
) => {
  await db.runAsync("UPDATE transactions SET isDeleted = 0 WHERE id = ?", [id]);
};

export const getDeletedTransactions = async (db: SQLiteDatabase) => {
  return await db.getAllAsync<TransactionItem>(
    "SELECT * FROM transactions WHERE isDeleted = 1 ORDER BY id DESC"
  );
};

export const searchTransactions = async (
  db: SQLiteDatabase,
  keyword: string
) => {
  return await db.getAllAsync<TransactionItem>(
    `SELECT * FROM transactions
     WHERE isDeleted = 0
       AND title LIKE ?
     ORDER BY id DESC`,
    [`%${keyword}%`]
  );
};

export const searchDeletedTransactions = async (
  db: SQLiteDatabase,
  keyword: string
) => {
  return await db.getAllAsync<TransactionItem>(
    `SELECT * FROM transactions
     WHERE isDeleted = 1
       AND title LIKE ?
     ORDER BY id DESC`,
    [`%${keyword}%`]
  );
};

export const getMonthlyStatistics = async (db: SQLiteDatabase) => {
  return await db.getAllAsync<{
    month: string;
    income: number;
    expense: number;
  }>(`
    SELECT 
      strftime('%Y-%m', createdAt) AS month,
      SUM(CASE WHEN type = 'INCOME' THEN amount ELSE 0 END) AS income,
      SUM(CASE WHEN type = 'EXPENSE' THEN amount ELSE 0 END) AS expense
    FROM transactions
    WHERE isDeleted = 0
    GROUP BY strftime('%Y-%m', createdAt)
    ORDER BY month ASC
  `);
};
