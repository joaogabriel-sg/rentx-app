import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexes = styled.View`
  padding-right: 24px;
  flex-direction: row;
  align-self: flex-end;
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get("window").width}px;
  height: ${RFValue(132)}px;

  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image`
  width: ${RFValue(280)}px;
  height: ${RFValue(132)}px;
`;
