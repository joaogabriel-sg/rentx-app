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
} from "@react-navigation/native";
import * as Yup from "yup";

import { BackButton, Bullet, Button, Input } from "../../../components";

import * as S from "./styles";

export function SignUpFirstStep() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [driverLicense, setDriverLicense] = useState("");

  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  function handleBack() {
    navigation.goBack();
  }

  async function handleNextStep() {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string().required("CNH é obrigatória"),
        email: Yup.string()
          .required("E-mail é obrigatório")
          .email("E-mail inválido"),
        name: Yup.string().required("Nome é obrigatório"),
      });

      const data = { name, email, driverLicense };
      await schema.validate(data);

      navigation.navigate("SignUpSecondStep", { user: data });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Opa", error.message);
      }
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} touchSoundDisabled>
        <S.Container>
          <S.Header>
            <BackButton onPress={handleBack} />

            <S.Steps>
              <Bullet active />
              <Bullet />
            </S.Steps>
          </S.Header>

          <S.Title>Crie sua{"\n"}conta</S.Title>
          <S.Subtitle>
            Faça seu cadastro de{"\n"}forma rápida e fácil
          </S.Subtitle>

          <S.Form>
            <S.FormTitle>1. Dados</S.FormTitle>
            <Input
              iconName="user"
              placeholder="Nome"
              value={name}
              onChangeText={setName}
            />
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <Input
              iconName="credit-card"
              placeholder="CNH"
              keyboardType="numeric"
              value={driverLicense}
              onChangeText={setDriverLicense}
            />
          </S.Form>

          <Button title="Próximo" onPress={handleNextStep} />
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
