import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainStyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  gap: 5%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 90vh;
  padding: 1%;
`;

const GameBox = styled.div`
  margin: 1%;
  padding: 1%;
  width: 70vw;
  height: 90vh;
  border: solid 1px white;
`;

const StyledButton = styled.button`
  border: 5px solid white;
  padding: 5px;
  border-radius: 10px;
  background: none;
  color: white;
  cursor: pointer;
  font-size: 2rem;
`;

const Game = () => {
  const [game, setGame] = useState({
    x: [],
    y: [],
    z: [],
    c: [],
  });

  useEffect(() => {
    fetch("game/4/8/10").then((res) => res.json());
  }, []);

  useEffect(() => {
    fetch("play/tri").then((res) =>
      res.json().then((game) => {
        setGame({
          x: game.x,
          y: game.y,
          z: game.z,
          c: game.c,
        });
      })
    );
  }, []);

  console.log(game.x, game.y, game.z, game.c);

  return (
    <MainStyledDiv>
      <GameBox></GameBox>
      <Box>
        <Link to="/about">
          <StyledButton>Learn how to play</StyledButton>
        </Link>
        <StyledButton>Hex mode</StyledButton>
        <StyledButton>Triangle mode</StyledButton>
        <StyledButton>Normal mode</StyledButton>
      </Box>
    </MainStyledDiv>
  );
};

export default Game;
