import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { BackButton, Input, PasswordInput } from "../../components";

import { useAuth } from "../../hooks/auth";

import * as S from "./styles";

export function Profile() {
  const [option, setOption] = useState<"dataEdit" | "passwordEdit">("dataEdit");

  const { user } = useAuth();
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  function handleBack() {
    navigation.goBack();
  }

  function handleSignOut() {}

  function handleOptionChange(optionSelected: "dataEdit" | "passwordEdit") {
    setOption(optionSelected);
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} touchSoundDisabled>
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
              <S.Photo
                source={{ uri: "https://github.com/joaogabriel-sg.png" }}
              />
              <S.PhotoButton onPress={() => {}}>
                <Feather name="camera" size={24} color={theme.colors.shape} />
              </S.PhotoButton>
            </S.PhotoContainer>
          </S.Header>

          <S.Content style={{ marginBottom: useBottomTabBarHeight() }}>
            <S.Options>
              <S.Option
                active={option === "dataEdit"}
                onPress={() => handleOptionChange("dataEdit")}
              >
                <S.OptionTitle active={option === "dataEdit"}>
                  Dados
                </S.OptionTitle>
              </S.Option>
              <S.Option
                active={option === "passwordEdit"}
                onPress={() => handleOptionChange("passwordEdit")}
              >
                <S.OptionTitle active={option === "passwordEdit"}>
                  Trocar senha
                </S.OptionTitle>
              </S.Option>
            </S.Options>

            {option === "dataEdit" && (
              <S.Section>
                <Input
                  iconName="user"
                  placeholder="Nome"
                  autoCapitalize="none"
                  autoCorrect={false}
                  defaultValue={user.name}
                />
                <Input
                  iconName="mail"
                  editable={false}
                  defaultValue={user.email}
                />
                <Input
                  iconName="credit-card"
                  placeholder="CNH"
                  keyboardType="numeric"
                  defaultValue={user.driver_license}
                />
              </S.Section>
            )}

            {option === "passwordEdit" && (
              <S.Section>
                <PasswordInput iconName="lock" placeholder="Senha atual" />
                <PasswordInput iconName="lock" placeholder="Nova senha" />
                <PasswordInput iconName="lock" placeholder="Repetir senha" />
              </S.Section>
            )}
          </S.Content>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
