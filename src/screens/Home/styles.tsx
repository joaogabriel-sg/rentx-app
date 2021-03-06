import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList, FlatListProps } from "react-native";

import { Car } from "../../database/model/Car";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  background: ${({ theme }) => theme.colors.header};
  width: 100%;
  height: ${RFValue(113)}px;
  padding: 32px 24px;

  justify-content: flex-end;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.text};
  `}
`;

export const CarList = styled(
  FlatList as new (props: FlatListProps<Car>) => FlatList<Car>
).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;
