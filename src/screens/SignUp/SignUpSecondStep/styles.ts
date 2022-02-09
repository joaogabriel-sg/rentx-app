import styled, { css } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background_primary};
  padding: 0 24px;
`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + 31}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Steps = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    margin-top: 60px;
    margin-bottom: 16px;

    font-family: ${theme.fonts.secondary_600};
    font-size: ${RFValue(40)}px;
    color: ${theme.colors.title};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(25)}px;
    color: ${theme.colors.text};
  `}
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 64px;
  margin-bottom: 16px;
`;

export const FormTitle = styled.Text`
  ${({ theme }) => css`
    margin-bottom: 24px;

    font-family: ${theme.fonts.secondary_600};
    font-size: ${RFValue(20)}px;
    color: ${theme.colors.title};
  `}
`;
