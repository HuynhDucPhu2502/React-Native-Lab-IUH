import React from "react";
import { Text, View } from "react-native";

import { Link } from "@/tw";
import { Redirect } from "expo-router";

export default function Page() {
  return <Redirect href={"/(home)"} />;
}
