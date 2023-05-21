import styled from "styled-components";

const NavBarStyled = styled.div`
  background-color: #a2b8dd;
  width: 100vw;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBar = () => {
  return <NavBarStyled></NavBarStyled>;
};

export default NavBar;
