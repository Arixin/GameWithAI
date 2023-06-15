import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

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
  const [triGame, setTriGame] = useState<any>(null);
  const [hexGame, setHexGame] = useState<any>(null);
  const [sqGame, setSqGame] = useState<any>(null);

  const fetchGameTri = async () => {
    try {
      const response = await fetch("/play/tri", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const game = await response.json();
      setTriGame(game.data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const fetchGame = () => {
    fetch("game/8/8/10", {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((game) => {
        console.log("done");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchGame();
    console.log("Done");
  }, []);

  const fetchGameHex = async () => {
    try {
      const response = await fetch("/play/hex", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const game = await response.json();
      setHexGame(game.data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const fetchGameSq = async () => {
    try {
      const response = await fetch("/play/sq", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const game = await response.json();
      setSqGame(game.data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const TriGame = async () => {
    await fetchGameTri();
    console.log(triGame);
  };

  const SqGame = async () => {
    await fetchGameSq();
    console.log(sqGame);
  };

  const HexGame = async () => {
    await fetchGameHex();
    console.log(hexGame);
  };

  return (
    <MainStyledDiv>
      <GameBox>
        {triGame !== null ? (
          triGame.length > 0 ? (
            triGame.map((item: string, index: number) => (
              <button key={index}>{item}</button>
            ))
          ) : (
            <p>No game data available</p>
          )
        ) : (
          <p>No data</p>
        )}
        {/* {hexGame !== null ? (
          hexGame.length > 0 ? (
            hexGame.map((item: string, index: number) => (
              <button key={index}>{item}</button>
            ))
          ) : (
            <p>No game data available</p>
          )
        ) : (
          <p>No data</p>
        )}
        {sqGame !== null ? (
          sqGame.length > 0 ? (
            sqGame.map((item: string, index: number) => (
              <button key={index}>{item}</button>
            ))
          ) : (
            <p>No game data available</p>
          )
        ) : (
          <p>No data</p>
        )} */}
      </GameBox>
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
