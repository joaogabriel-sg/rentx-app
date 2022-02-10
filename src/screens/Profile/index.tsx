import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

import { BackButton } from "../../components";

import * as S from "./styles";

export function Profile() {
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  function handleBack() {
    navigation.goBack();
  }

  function handleSignOut() {}

  return (
    <S.Container>
      <S.Header>
        <S.HeaderTop>
          <BackButton color={theme.colors.shape} onPress={handleBack} />
          <S.HeaderTitle>Editar perfil</S.HeaderTitle>
          <S.LogoutButton onPress={handleSignOut}>
            <Feather name="power" size={24} color={theme.colors.shape} />
          </S.LogoutButton>
        </S.HeaderTop>

        <S.PhotoContainer>
          <S.Photo source={{ uri: "https://github.com/joaogabriel-sg.png" }} />
          <S.PhotoButton onPress={() => {}}>
            <Feather name="camera" size={24} color={theme.colors.shape} />
          </S.PhotoButton>
        </S.PhotoContainer>
      </S.Header>
    </S.Container>
  );
}
