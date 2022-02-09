import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { useTheme } from "styled-components";
import * as Yup from "yup";

import { Button, Input, PasswordInput } from "../../components";

import * as S from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().required("Senha obrigatória"),
      });

      await schema.validate({ email, password });

      Alert.alert("Tudo certo!");
    } catch (error) {
      if (error instanceof Yup.ValidationError)
        Alert.alert("Opa", error.message);
      else
        Alert.alert(
          "Erro na autenticação",
          "Ocorreu um erro ao fazer login, verifique as credenciais"
        );
    }
  }

  function handleNewAccount() {
    navigation.navigate("SignUpFirstStep");
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} touchSoundDisabled>
        <S.Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />

          <S.Header>
            <S.Title>Estamos{"\n"}quase lá.</S.Title>
            <S.Subtitle>
              Faça seu login para começar{"\n"}uma experiência incrível.
            </S.Subtitle>
          </S.Header>

          <S.Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
            />
          </S.Form>

          <S.Footer>
            <Button
              title="Login"
              onPress={handleSignIn}
              enabled={true}
              loading={false}
            />

            <Button
              title="Criar conta gratuita"
              color={theme.colors.background_secondary}
              light
              onPress={handleNewAccount}
              enabled={true}
              loading={false}
            />
          </S.Footer>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
