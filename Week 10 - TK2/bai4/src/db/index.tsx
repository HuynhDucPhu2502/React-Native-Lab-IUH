import { Workout } from "@/types/workout";
import { SQLiteDatabase } from "expo-sqlite";

export const initTable = async (db: SQLiteDatabase) => {
  await db.execAsync(
    `CREATE TABLE IF NOT EXISTS workouts(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            duration INTEGER NOT NULL,
            category TEXT NOT NULL,
            completed INTEGER NOT NULL DEFAULT 0,
            isDeleted INTEGER NOT NULL DEFAULT 0    
        )`
  );
};

// CREATE
export const createWorkout = async (db: SQLiteDatabase, data: Workout) => {
  await db.runAsync(
    `INSERT INTO workouts (name, duration, category, completed) VALUES (?, ?, ?, ?)`,
    [data.name, data.duration, data.category, data.completed]
  );
};

// READ
export const getAllWorkout = async (db: SQLiteDatabase, isDeleted: number) => {
  return await db.getAllAsync<Workout>(
    `SELECT * FROM workouts WHERE isDeleted = ?`,
    [isDeleted]
  );
};

export const getWorkoutById = async (db: SQLiteDatabase, id: number) => {
  return await db.getFirstAsync<Workout>(
    `SELECT * FROM workouts WHERE id = ?`,
    [id]
  );
};

// UPDATE
export const updateWorkout = async (db: SQLiteDatabase, data: Workout) => {
  await db.runAsync(
    `UPDATE workouts SET name = ?, duration = ?, category = ?, completed = ? WHERE id = ?`,
    [data.name, data.duration, data.category, data.completed, data.id]
  );
};

// DELETE
export const softDeleteworkout = async (db: SQLiteDatabase, id: number) => {
  await db.runAsync(`UPDATE workouts SET isDeleted = 1 WHERE id = ?`, [id]);
};

export const restoreWorkout = async (db: SQLiteDatabase, id: number) => {
  await db.runAsync(`UPDATE workouts SET isDeleted = 0 WHERE id = ?`, [id]);
};
