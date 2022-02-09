import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps {
  color: string;
}

interface ButtonTextProps {
  light: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  background: ${({ color }) => color};
  width: 100%;
  padding: 19px;
  margin-bottom: 8px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<ButtonTextProps>`
  ${({ theme, light }) => css`
    font-family: ${theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
    color: ${light ? theme.colors.header : theme.colors.shape};
  `}
`;
