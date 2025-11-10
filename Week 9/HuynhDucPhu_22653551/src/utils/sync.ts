import { SQLiteDatabase } from "expo-sqlite";
import { getAllTransactions } from "@/db/db";

export const syncTransactions = async (db: SQLiteDatabase, apiUrl: string) => {
  if (!apiUrl) throw new Error("API URL is empty.");

  try {
    await fetch(`${apiUrl}/transactions`, { method: "DELETE" });

    const localData = await getAllTransactions(db);

    for (const item of localData) {
      await fetch(`${apiUrl}/transactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    }

    return true;
  } catch (err) {
    console.error("Sync error:", err);
    throw err;
  }
};
