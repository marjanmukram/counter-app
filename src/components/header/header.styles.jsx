import styled from "styled-components";
import { Button } from "@material-ui/core";

export const Header = styled.div`
  background: aliceblue;
  height: 50px;
  display: flex;
  justify-content: left;
  flex-direction: row;
  padding: 20px 10px;
  align-items: center;
`;

export const ItemCountButton = styled(Button)`
  && {
    border-radius: 20px;
    margin: 20px;
  }
`;
