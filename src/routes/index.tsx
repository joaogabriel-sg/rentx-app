import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppTabRoutes } from "./app.tab.routes";
import { AuthRoutes } from "./auth.routes";

import { LoadAnimation } from "../components";

import { useAuth } from "../hooks/auth";

export function Routes() {
  const { user, loading } = useAuth();

  return loading ? (
    <LoadAnimation />
  ) : (
    <NavigationContainer>
      {user.id ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
