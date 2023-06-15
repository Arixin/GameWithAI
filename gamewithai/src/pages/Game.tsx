import { useState } from "react";
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
  const [data, setData] = useState([]);
  const [game, setGame] = useState([]);
  const fetchGameData = () => {
    fetch("/game/8/8/10", {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const fetchGameTri = () => {
    fetch("/play/tri", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((game) => {
        setGame(game);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const fetchGameHex = () => {
    fetch("/play/hex", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((game) => {
        setGame(game);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const fetchGameSq = () => {
    fetch("/play/sq", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((game) => {
        setGame(game);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const TriGame = () => {
    fetchGameData();
    fetchGameTri();
    console.log(game);
  };

  const SqGame = () => {
    fetchGameData();
    fetchGameSq();
    console.log(game);
  };

  const HexGame = () => {
    fetchGameData();
    fetchGameHex();
    console.log(game);
  };

  return (
    <MainStyledDiv>
      <GameBox></GameBox>
      <Box>
        <Link to="/about">
          <StyledButton>Learn how to play</StyledButton>
        </Link>
        <StyledButton onClick={SqGame}>Normal mode</StyledButton>
        <StyledButton onClick={TriGame}>Triangle mode</StyledButton>
        <StyledButton onClick={HexGame}>Hex mode</StyledButton>
      </Box>
    </MainStyledDiv>
  );
};

export default Game;
