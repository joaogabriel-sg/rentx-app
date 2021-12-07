import React from "react";
import { useTheme } from "styled-components";
import { RectButtonProps } from "react-native-gesture-handler";

import * as S from "./styles";

interface Props extends RectButtonProps {
  title: string;
  color?: string;
}

export function Button({ title, color, ...rest }: Props) {
  const theme = useTheme();

  return (
    <S.Container {...rest} color={color ? color : theme.colors.main}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
