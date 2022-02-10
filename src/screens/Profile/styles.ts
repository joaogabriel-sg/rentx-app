import styled, { css } from "styled-components/native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

interface OptionProps {
  active: boolean;
}

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  background: ${({ theme }) => theme.colors.header};
  width: 100%;
  height: 227px;
  padding: 0 24px;

  align-items: center;
`;

export const HeaderTop = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + 32}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_600};
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.colors.background_secondary};
  `}
`;

export const LogoutButton = styled(BorderlessButton)``;

export const PhotoContainer = styled.View`
  background: ${({ theme }) => theme.colors.shape};
  width: 180px;
  height: 180px;
  border-radius: 90px;
  margin-top: 48px;
  position: relative;
`;

export const Photo = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
`;

export const PhotoButton = styled(RectButton)`
  background: ${({ theme }) => theme.colors.main};
  width: 40px;
  height: 40px;

  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const Content = styled.View`
  padding: 0 24px;
  margin-top: 122px;
`;

export const Options = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
  margin-bottom: 24px;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Option = styled.TouchableOpacity<OptionProps>`
  padding-bottom: 14px;
  border-bottom-width: 2px;
  border-bottom-color: transparent;

  ${({ theme, active }) =>
    active &&
    css`
      border-bottom-color: ${theme.colors.main};
    `}
`;

export const OptionTitle = styled.Text<OptionProps>`
  ${({ theme, active }) => css`
    font-family: ${active
      ? theme.fonts.secondary_600
      : theme.fonts.secondary_500};
    font-size: ${RFValue(20)}px;
    color: ${active ? theme.colors.header : theme.colors.text_detail};
  `}
`;

export const Section = styled.View``;
