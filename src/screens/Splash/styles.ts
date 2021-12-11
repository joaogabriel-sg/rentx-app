import styled from "styled-components/native";

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.header};

  flex: 1;
  align-items: center;
  justify-content: center;
`;
