import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background_primary};
  width: 109px;
  height: 92px;

  padding: 16px;
  margin-bottom: 8px;

  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    margin-top: 8px;
    font-family: ${theme.fonts.primary_500};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.text};
  `}
`;
