import React from "react";
import { StatusBar, useWindowDimensions } from "react-native";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { ConfirmButton } from "../../components";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import * as S from "./styles";

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

export function Confirmation() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const router = useRoute();

  const { title, message, nextScreenRoute } = router.params as Params;

  function handleConfirm() {
    navigation.navigate(nextScreenRoute);
  }

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <LogoSvg width={width} />

      <S.Content>
        <DoneSvg width={80} height={80} />
        <S.Title>{title}</S.Title>

        <S.Message>{message}</S.Message>
      </S.Content>

      <S.Footer>
        <ConfirmButton title="OK" onPress={handleConfirm} />
      </S.Footer>
    </S.Container>
  );
}
