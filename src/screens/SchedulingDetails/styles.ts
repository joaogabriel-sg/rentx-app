import styled, { css } from "styled-components/native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background_secondary};
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: "center",
  },
  showsVerticalScrollIndicator: false,
})``;

export const Details = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${theme.colors.text_detail};
    text-transform: uppercase;
  `}
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    font-size: ${RFValue(25)}px;
    color: ${theme.colors.title};
  `}
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${theme.colors.text_detail};
    text-transform: uppercase;
  `}
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    font-size: ${RFValue(25)}px;
    color: ${theme.colors.main};
  `}
`;

export const Accessories = styled.View`
  width: 100%;
  margin-top: 16px;

  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const RentalPeriod = styled.View`
  width: 100%;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
  margin-top: 40px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CalendarIcon = styled.View`
  background: ${({ theme }) => theme.colors.main};
  width: 48px;
  height: 48px;

  align-items: center;
  justify-content: center;
`;

export const DateInfo = styled.View``;

export const DateTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    font-size: ${RFValue(10)}px;
    color: ${theme.colors.text_detail};
    text-transform: uppercase;
  `}
`;

export const DateValue = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.title};
  `}
`;

export const RentalPrice = styled.View`
  width: 100%;
  margin-top: 16px;
`;

export const RentalPriceLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    font-size: ${RFValue(10)}px;
    color: ${theme.colors.text_detail};
    text-transform: uppercase;
  `}
`;

export const RentalPriceDetails = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RentalPriceQuota = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.title};
  `}
`;

export const RentalPriceTotal = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    font-size: ${RFValue(24)}px;
    color: ${theme.colors.success};
  `}
`;

export const Footer = styled.View`
  background: ${({ theme }) => theme.colors.background_secondary};
  width: 100%;
  padding: 24px 24px ${getBottomSpace() + 24}px;
`;
