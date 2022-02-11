import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import FastImage from "react-native-fast-image";

export const Container = styled(RectButton)`
  background: ${({ theme }) => theme.colors.background_secondary};
  width: 100%;
  height: ${RFValue(126)}px;
  padding: 24px;
  margin-bottom: 16px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Details = styled.View``;

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
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.title};
  `}
`;

export const About = styled.View`
  margin-top: 16px;

  flex-direction: row;
  align-items: flex-end;
`;

export const Rent = styled.View`
  margin-right: 24px;
`;

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
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.main};
  `}
`;

export const Type = styled.View`
  padding-bottom: 4px;
`;

export const CarImage = styled(FastImage)`
  width: ${RFValue(167)}px;
  height: ${RFValue(85)}px;
`;
