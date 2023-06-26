import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import "../App.css";

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
  font-size: 0;
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
  cursor: pointer;
  border: 1px solid grey;
`;

const Game = () => {
  // const [triGame, setTriGame] = useState<any>(null);
  const [hexGame, setHexGame] = useState<any>(null);
  const [sqGame, setSqGame] = useState<any>(null);
  const [gameCheck, setGameCheck] = useState(0);
  const [clickCheck, setClickCheck] = useState<number>(0);
  const [clickedIndex1, setClickedIndex1] = useState<number | null>(null);
  const [clickedIndex2, setClickedIndex2] = useState<number | null>(null);

  // const fetchGameTri = async () => {
  //   try {
  //     const response = await fetch("/play/tri", {
  //       method: "GET",
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     });
  //     const game = await response.json();
  //     setTriGame(game.data);
  //   } catch (err: any) {
  //     console.log(err.message);
  //   }
  // };

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

  // const TriGame = async () => {
  //   await fetchGameTri();
  //   console.log(triGame);
  //   setGameCheck(3);
  // };

  const SqGame = async () => {
    await fetchGameSq();
    console.log(sqGame);
    setGameCheck(1);
    setClickCheck(0);
  };

  const HexGame = async () => {
    await fetchGameHex();
    console.log(hexGame);
    setGameCheck(2);
  };

  const setClick = (click: number, index1: number, index2: number) => {
    setClickCheck(click);
    setClickedIndex1(index1);
    setClickedIndex2(index2);
  };

  return (
    <MainStyledDiv>
      <GameBox>
        {gameCheck === 1 && (
          <div>
            {sqGame !== null ? (
              sqGame.length > 0 ? (
                sqGame.map((item: Array<string>, outerIndex: number) =>
                  item.map((item: string, innerIndex: number) =>
                    clickCheck === 1 &&
                    innerIndex === clickedIndex1 &&
                    outerIndex === clickedIndex2 ? (
                      <SqGameButton className="sqButton" key={innerIndex}>
                        {item}
                      </SqGameButton>
                    ) : (
                      <SqGameButton
                        key={innerIndex}
                        onClick={() => setClick(1, innerIndex, outerIndex)}
                      ></SqGameButton>
                    )
                  )
                )
              ) : (
                <p></p>
              )
            ) : (
              <p></p>
            )}
          </div>
        )}

        {gameCheck === 2 && (
          <div className="main">
            <div className="container">
              {hexGame !== null ? (
                hexGame.length > 0 ? (
                  hexGame.map((item: Array<string>) =>
                    item.map((item: string, index: number) => (
                      <button key={index}>{item}</button>
                    ))
                  )
                ) : (
                  <p>No game data available</p>
                )
              ) : (
                <p>No data</p>
              )}
            </div>
          </div>
        )}

        {/* {gameCheck === 3 && (
          <div>
            {triGame !== null ? (
              triGame.length > 0 ? (
                triGame.map((item: Array<string>) =>
                  item.map((item: string, index: number) => ({}))
                )
              ) : (
                <p>No game data available</p>
              )
            ) : (
              <p>No data</p>
            )}
          </div>
        )} */}
      </GameBox>
      <Box>
        <Link to="/about">
          <StyledButton>Learn how to play</StyledButton>
        </Link>
        <StyledButton onClick={SqGame}>Normal mode</StyledButton>
        {/* <StyledButton onClick={TriGame}>Triangle mode</StyledButton> */}
        <StyledButton onClick={HexGame}>Hex mode</StyledButton>
      </Box>
    </MainStyledDiv>
  );
};

export default Game;
