import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

interface DateValueProps {
  selected: boolean;
}

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background_secondary};
  flex: 1;
`;

export const Header = styled.View`
  background: ${({ theme }) => theme.colors.header};
  width: 100%;
  height: ${RFValue(325)}px;
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 30}px;

  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    margin-top: 24px;

    font-family: ${theme.fonts.secondary_600};
    font-size: ${RFValue(34)}px;
    color: ${theme.colors.shape};
  `}
`;

export const RentalPeriod = styled.View`
  width: 100%;
  margin: 32px 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${theme.colors.text};
    text-transform: uppercase;
  `}
`;

export const DateValue = styled.Text<DateValueProps>`
  ${({ theme, selected }) => css`
    font-family: ${theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.shape};

    ${!selected &&
    css`
      padding-bottom: 5px;
      border-bottom-width: 1px;
      border-bottom-color: ${theme.colors.text};
    `}
  `}
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Footer = styled.View`
  padding: 24px;
`;
