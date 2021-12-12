import React, { useEffect, useState } from "react";
import { BackHandler, StatusBar, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { PanGestureHandler, RectButton } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { Car, LoadAnimation } from "../../components";

import Logo from "../../assets/logo.svg";

import { api } from "../../services";
import { CarDTO } from "../../dtos";

import * as S from "./styles";

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(event, ctx: any) {
      positionX.value = event.translationX + ctx.positionX;
      positionY.value = event.translationY + ctx.positionY;
    },
    onEnd() {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
  });

  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  function handleOpenMyCars() {
    navigation.navigate("MyCars");
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
  });

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <S.Header>
        <S.HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          {!loading && <S.TotalCars>Total de {cars.length} carros</S.TotalCars>}
        </S.HeaderContent>
      </S.Header>

      {loading ? (
        <LoadAnimation />
      ) : (
        <S.CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            myCarsButtonStyle,
            { position: "absolute", bottom: 13, right: 22 },
          ]}
        >
          <ButtonAnimated
            onPress={handleOpenMyCars}
            style={[styles.button, { backgroundColor: theme.colors.main }]}
          >
            <Ionicons
              name="ios-car-sport"
              size={32}
              color={theme.colors.shape}
            />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
    </S.Container>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
