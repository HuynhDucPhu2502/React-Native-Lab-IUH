import { SQLiteProvider } from "expo-sqlite";
import "../global.css";
import { Slot } from "expo-router";
import { migrateDbIfNeeded } from "@/db/database";

export default function Layout() {
  return (
    <SQLiteProvider databaseName="app.db" onInit={migrateDbIfNeeded}>
      <Slot />;
    </SQLiteProvider>
  );
}
