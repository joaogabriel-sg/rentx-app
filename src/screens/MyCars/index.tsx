import React, { useEffect, useState } from "react";
import { FlatList, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

import { BackButton, Car, LoadAnimation } from "../../components";

import { api } from "../../services";

import { CarDTO } from "../../dtos";

import * as S from "./styles";

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
  startDate: string;
  endDate: string;
}

export function MyCars() {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get(`/schedules_byuser?user_id=1`);
        console.log(response.data);
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <BackButton color={theme.colors.shape} onPress={handleBack} />

        <S.Title>
          Seus agendamentos,{"\n"}
          estão aqui
        </S.Title>

        <S.Subtitle>Conforto, segurança e praticidade.</S.Subtitle>
      </S.Header>

      {loading ? (
        <LoadAnimation />
      ) : (
        <S.Content>
          <S.Appointments>
            <S.AppointmentsTitle>Agendamentos feitos</S.AppointmentsTitle>
            <S.AppointmentsQuantity>
              {`${cars.length}`.padStart(2, "0")}
            </S.AppointmentsQuantity>
          </S.Appointments>

          <FlatList
            data={cars}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <S.CarWrapper>
                <Car data={item.car} />
                <S.CarFooter>
                  <S.CarFooterTitle>Período</S.CarFooterTitle>
                  <S.CarFooterPeriod>
                    <S.CarFooterDate>{item.startDate}</S.CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <S.CarFooterDate>{item.endDate}</S.CarFooterDate>
                  </S.CarFooterPeriod>
                </S.CarFooter>
              </S.CarWrapper>
            )}
          />
        </S.Content>
      )}
    </S.Container>
  );
}
