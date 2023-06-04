import "../App.css";
import styled from "styled-components";
import Image from "../images/gamepad.jpeg";
import { Link } from "react-router-dom";

const MainStyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const HomeStyledView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 50vw;
  gap: 5vh;
  position: relative;
  font-weight: bold;
  right: 0;
`;

const StyledImage = styled.img`
  width: 50vw;
  height: 100vh;
  position: relative;
  left: 0;
`;

const StyledHeader = styled.h1`
  color: white;
  position: relative;
  top: 2vh;
  font-size: 3rem;
`;

const StyledDesc = styled.h3`
  color: white;
  font-size: 2rem;
  text-align: center;
  padding: 10px;
`;

const StyledButton = styled.button`
  height: 8vh;
  border: 5px solid white;
  padding: 5px;
  border-radius: 10px;
  background: none;
  color: white;
  cursor: pointer;
  font-size: 2rem;
`;

function Home() {
  return (
    <MainStyledDiv>
      <StyledImage src={Image} alt=""></StyledImage>
      <HomeStyledView>
        <StyledHeader>Welcome to the futuristic Minesweeper Game</StyledHeader>
        <StyledDesc>
          Minesweeper:
          <br /> Uncover squares, avoid mines, and use numerical clues to win.
          <br />
          Think strategically and clear the grid without detonating any
          explosives.
        </StyledDesc>
        <Link to="/about">
          <StyledButton>Learn how to play</StyledButton>
        </Link>
        <Link to="/game">
          <StyledButton>Let's Play</StyledButton>
        </Link>
      </HomeStyledView>
    </MainStyledDiv>
  );
}

export default Home;
