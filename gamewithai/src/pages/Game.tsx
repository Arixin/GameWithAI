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
  display: flex;
  align-items: center;
  justify-content: center;
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

const SqGameButton = styled.button`
  width: 8vw;
  height: 10vh;
  display: inline-block;
  padding: 10px 20px;
  background-color: #4caf50;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  border: none;
  transition: background-color 0.3s;
  cursor: pointer;
  border: 1px solid grey;
`;

const TriGameButton = styled.button`
  width: 8vw;
  height: 10vh;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-right: 100px solid #4caf50;
  color: #ffffff;
  text-align: center;
  line-height: 100px;
  font-size: 16px;
  transition: background-color 0.3s;
  cursor: pointer;
`;

const HexGameButton = styled.button`
  width: 100px;
  height: 58px;
  background-color: #4caf50;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const Game = () => {
  const [triGame, setTriGame] = useState<any>(null);
  const [hexGame, setHexGame] = useState<any>(null);
  const [sqGame, setSqGame] = useState<any>(null);
  const [gameCheck, setGameCheck] = useState(0);

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
      .then((game) => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchGame();
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
    setGameCheck(3);
  };

  const SqGame = async () => {
    await fetchGameSq();
    console.log(sqGame);
    setGameCheck(1);
  };

  const HexGame = async () => {
    await fetchGameHex();
    console.log(hexGame);
    setGameCheck(2);
  };

  return (
    <MainStyledDiv>
      <GameBox>
        {gameCheck === 1 && (
          <div>
            {sqGame !== null ? (
              sqGame.length > 0 ? (
                sqGame.map((item: Array<string>) =>
                  item.map((item: string, index: number) => (
                    <SqGameButton key={index}>{item}</SqGameButton>
                  ))
                )
              ) : (
                <p>No game data available</p>
              )
            ) : (
              <p>No data</p>
            )}
          </div>
        )}

        {gameCheck === 2 && (
          <div>
            {hexGame !== null ? (
              hexGame.length > 0 ? (
                hexGame.map((item: Array<string>) =>
                  item.map((item: string, index: number) => (
                    <HexGameButton key={index}>{item}</HexGameButton>
                  ))
                )
              ) : (
                <p>No game data available</p>
              )
            ) : (
              <p>No data</p>
            )}
          </div>
        )}

        {gameCheck === 3 && (
          <div>
            {triGame !== null ? (
              triGame.length > 0 ? (
                triGame.map((item: Array<string>) =>
                  item.map((item: string, index: number) => (
                    <TriGameButton key={index}>{item}</TriGameButton>
                  ))
                )
              ) : (
                <p>No game data available</p>
              )
            ) : (
              <p>No data</p>
            )}
          </div>
        )}
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
