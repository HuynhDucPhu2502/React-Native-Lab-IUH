import { Todo } from "@/types/Todo";
import { SQLiteDatabase } from "expo-sqlite";

// tên-field type-field ràng-buộc
export const initTable = async (db: SQLiteDatabase) => {
  await db.execAsync(`
        CREATE TABLE IF NOT EXISTS Todos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            completed INTEGER DEFAULT 0,
            isDeleted INTEGER DEFAULT 0
        )
        `);
};

// CREATE
export const saveTodo = async (db: SQLiteDatabase, data: Todo) => {
  await db.runAsync(
    `INSERT INTO Todos (title, description, completed) VALUES (?, ?, ?)`,
    [data.title, data.description, data.completed]
  );
};
// READ
export const getAll = async (db: SQLiteDatabase, isDeleted: number) => {
  return await db.getAllAsync<Todo>(`SELECT * FROM Todos WHERE isDeleted = ?`, [
    isDeleted,
  ]);
};

export const getById = async (db: SQLiteDatabase, id: number) => {
  return await db.getFirstAsync<Todo>(`SELECT * FROM Todos WHERE id = ?`, [id]);
};

// UPDATE
export const updateTodo = async (db: SQLiteDatabase, data: Todo) => {
  await db.runAsync(
    `UPDATE Todos SET title = ?, description = ?, completed = ? WHERE id = ?`,
    [data.title, data.description, data.completed, data.id]
  );
};

// DELETE
export const deleteTodo = async (db: SQLiteDatabase, id: number) => {
  await db.runAsync(`UPDATE Todos SET isDeleted = 1 WHERE id = ?`, [id]);
};

// RESTORE
export const restoreTodo = async (db: SQLiteDatabase, id: number) => {
  await db.runAsync(`UPDATE Todos SET isDeleted = 0 WHERE id = ?`, [id]);
};
