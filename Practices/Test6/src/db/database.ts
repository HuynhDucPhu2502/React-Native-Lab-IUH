import { SQLiteDatabase } from "expo-sqlite";

export interface TodoEntity {
  id: number;
  title: string;
  done: number;
}

export async function migrateDbIfNeeded(db: SQLiteDatabase) {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      done INTEGER DEFAULT 0
    );
  `);
}

export async function addTodo(db: SQLiteDatabase, title: string) {
  await db.runAsync("INSERT INTO todos (title) VALUES (?)", [title]);
}

export async function getTodos(db: SQLiteDatabase) {
  return await db.getAllAsync<TodoEntity>(
    "SELECT * FROM todos ORDER BY id DESC"
  );
}

export async function toggleTodo(
  db: SQLiteDatabase,
  id: number,
  done: boolean
) {
  await db.runAsync("UPDATE todos SET done = ? WHERE id = ?", [
    done ? 1 : 0,
    id,
  ]);
}

export async function deleteTodo(db: SQLiteDatabase, id: number) {
  await db.runAsync("DELETE FROM todos WHERE id = ?", [id]);
}
