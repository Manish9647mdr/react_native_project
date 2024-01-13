import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../components/homePage/HomePage";
import AboutPage from "../components/aboutPage/AboutPage";
import { RootStackPramList } from "./RootStackParamList";
import { ROUTE } from "../constant";

const Stack = createNativeStackNavigator<RootStackPramList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTE.HOMEPAGE}
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTE.ABOUTPAGE}
          component={AboutPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
