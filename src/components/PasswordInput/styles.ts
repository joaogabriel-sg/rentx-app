import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
`;

export const IconContainer = styled.View<Props>`
  ${({ theme, isFocused }) => css`
    background: ${theme.colors.background_secondary};
    width: 55px;
    height: 56px;
    border-bottom-width: ${RFValue(2)}px;
    border-bottom-color: transparent;
    margin-right: ${RFValue(2)}px;

    align-items: center;
    justify-content: center;

    ${isFocused &&
    css`
      border-bottom-color: ${theme.colors.main};
    `}
  `}
`;

export const InputText = styled.TextInput<Props>`
  ${({ theme, isFocused }) => css`
    flex: 1;
    background: ${theme.colors.background_secondary};
    padding: 0 23px;

    border-bottom-width: ${RFValue(2)}px;
    border-bottom-color: transparent;

    font-family: ${theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.text};

    ${
      isFocused &&
      css`
        border-bottom-color: ${theme.colors.main};
      `
    }}
  `}
`;
