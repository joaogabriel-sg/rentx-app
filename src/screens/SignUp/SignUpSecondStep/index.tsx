import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useTheme } from "styled-components";

import { BackButton, Bullet, Button, PasswordInput } from "../../../components";

import { api } from "../../../services";

import * as S from "./styles";

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  };
}

export function SignUpSecondStep() {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const router = useRoute();

  const { user } = router.params as Params;

  function handleBack() {
    navigation.goBack();
  }

  async function handleRegister() {
    if (!password.trim() || !passwordConfirm.trim()) {
      Alert.alert("Informe a senha e a sua confirmação");
      return;
    }

    if (password !== passwordConfirm) {
      Alert.alert("As senhas não são iguais");
      return;
    }

    await api
      .post("/users", {
        name: user.name,
        email: user.email,
        driver_license: user.driverLicense,
        password,
      })
      .then(() => {
        navigation.navigate("Confirmation", {
          title: "Conta Criada!",
          message: "Agora é só fazer login\ne aproveitar.",
          nextScreenRoute: "SignIn",
        });
      })
      .catch(() => {
        Alert.alert("Opa", "Não foi possível cadastrar");
      });
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} touchSoundDisabled>
        <S.Container>
          <S.Header>
            <BackButton onPress={handleBack} />

            <S.Steps>
              <Bullet />
              <Bullet active />
            </S.Steps>
          </S.Header>

          <S.Title>Crie sua{"\n"}conta</S.Title>
          <S.Subtitle>
            Faça seu cadastro de{"\n"}forma rápida e fácil
          </S.Subtitle>

          <S.Form>
            <S.FormTitle>2. Senha</S.FormTitle>
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Repetir senha"
              value={passwordConfirm}
              onChangeText={setPasswordConfirm}
            />
          </S.Form>

          <Button
            title="Cadastrar"
            color={theme.colors.success}
            onPress={handleRegister}
          />
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
