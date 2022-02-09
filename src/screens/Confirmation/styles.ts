import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.header};
  flex: 1;

  padding-top: 48px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding-bottom: 80px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    margin-top: 40px;

    font-family: ${theme.fonts.secondary_600};
    font-size: ${RFValue(30)}px;
    color: ${theme.colors.shape};
  `}
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    margin-top: 16px;

    font-family: ${theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.text_detail};
    text-align: center;
    line-height: ${RFValue(25)}px;
  `}
`;

export const Footer = styled.View`
  width: 100%;
  margin: 80px 0;
  align-items: center;
`;
