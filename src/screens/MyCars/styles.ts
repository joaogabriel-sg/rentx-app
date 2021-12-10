import styled, { css } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background_primary};

  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  background: ${({ theme }) => theme.colors.header};
  width: 100%;
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 30}px;

  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    margin-top: 24px;

    font-family: ${theme.fonts.secondary_600};
    font-size: ${RFValue(30)}px;
    color: ${theme.colors.shape};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    margin-top: 24px;

    font-family: ${theme.fonts.secondary_400};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.shape};
  `}
`;

export const Content = styled.View`
  width: 100%;
  padding: 0 16px;
  flex: 1;
`;

export const Appointments = styled.View`
  width: 100%;
  padding: 24px 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AppointmentsTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.text};
  `}
`;

export const AppointmentsQuantity = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.title};
  `}
`;

export const CarWrapper = styled.View`
  margin-bottom: 16px;
`;

export const CarFooter = styled.View`
  background: ${({ theme }) => theme.colors.background_secondary};
  width: 100%;
  padding: 12px;
  margin-top: -10px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CarFooterTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${theme.colors.text_detail};
  `}
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CarFooterDate = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_400};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.title};
  `}
`;
