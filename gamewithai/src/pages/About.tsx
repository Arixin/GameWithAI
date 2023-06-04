import styled from "styled-components";
import Image from "../images/minesweeper.png";
import { Link } from "react-router-dom";

const MainStyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const LanguageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 90vh;
  padding: 10px;
  margin: 1%;
  color: white;
  font-size: 15px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 90vh;
  padding: 10px;
`;

const StyledImage = styled.img`
  width: 30vw;
  height: 85vh;
  padding: 10px;
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

const About = () => {
  return (
    <MainStyledDiv>
      <LanguageBox>
        Cel gry: <br />
        1.Twoim celem w grze w sapera jest odkrycie wszystkich pól, które nie
        zawierają min.
        <br />
        2.Unikaj odkrycia pól z minami, ponieważ to skutkuje przegraną.
        <br /> <br />
        Plansza: <br />
        1.Gra toczy się na planszy podzielonej na pola.
        <br /> 2.Każde pole może być albo odkryte, albo zakryte.
        <br /> 3.Pola mogą zawierać jedną z trzech rzeczy: minę, liczbę
        wskazującą ilość min w sąsiedztwie, lub być puste.
        <br />
        <br /> Odkrywanie pól:
        <br /> 1.Aby odkryć pole, kliknij je lewym przyciskiem myszy.
        <br /> 2.Jeśli odkryjesz pole z miną, przegrywasz.
        <br />
        3.Jeśli odkryjesz pole puste, plansza zostanie automatycznie
        rozszerzona, odsłaniając sąsiadujące pola.
        <br /> 4.Jeśli odkryjesz pole z liczbą, wskazuje ona ilość min w
        sąsiedztwie tego pola. <br />
        <br />
        Flagowanie pól:
        <br />
        1.Aby oznaczyć pole podejrzanym o zawieranie miny, kliknij je prawym
        przyciskiem myszy. <br />
        2.Zaznaczenie pole powoduje umieszczenie na nim flagi. <br />
        3.Ta funkcja pozwala na zaznaczenie pól, na których podejrzewasz
        obecność miny. <br />
        <br />
        Strategia: <br />
        1.Analizuj liczby na odkrytych polach, ponieważ wskazują one ilość min w
        ich sąsiedztwie.
        <br /> 2.Korzystając z informacji z liczb, spróbuj logicznie
        wydedukować, które pola zawierają miny i które są bezpieczne.
        <br /> 3.Jeśli wokół odkrytego pola są liczby, a ich suma jest równa
        liczbie wskazywanej przez to pole, są to bezpieczne pola i można je
        odkryć. <br />
        4.Jeśli liczba na odkrytym polu jest większa od sumy min w sąsiedztwie,
        zaznacz flagami pola podejrzane o zawieranie miny. 5. Unikaj losowych
        kliknięć na nieznanych polach, ponieważ to zwiększa szanse trafienia na
        minę.
      </LanguageBox>
      <Box>
        <Link to="/game">
          <StyledButton>Let's play</StyledButton>
        </Link>
        <StyledImage src={Image} alt=""></StyledImage>
      </Box>
      <LanguageBox>
        Game Objective:
        <br /> 1.Your goal in the Minesweeper game is to uncover all the tiles
        that do not contain mines.
        <br /> 2.Avoid uncovering tiles with mines, as it will result in a loss.
        <br />
        <br /> Game Board:
        <br /> 1.The game is played on a board divided into tiles.
        <br /> 2.Each tile can be either uncovered or covered.
        <br /> 3.Tiles can contain one of three things: a mine, a number
        indicating the number of mines in the neighborhood, or be empty.
        <br />
        <br />
        Uncovering Tiles:
        <br /> 1.To uncover a tile, click on it with the left mouse button.
        <br /> 2.If you uncover a tile with a mine, you lose the game.
        <br /> 3.If you uncover an empty tile, the board will automatically
        expand, revealing neighboring tiles.
        <br /> 4.If you uncover a tile with a number, it indicates the number of
        mines in the vicinity of that tile.
        <br />
        <br /> Flagging Tiles: <br />
        1.To mark a tile suspected of containing a mine, click on it with the
        right mouse button.
        <br /> 2.Flagging a tile will place a flag on it.
        <br /> 3.This feature allows you to mark tiles where you suspect the
        presence of a mine.
        <br />
        <br />
        Strategy:
        <br /> 1.Analyze the numbers on the uncovered tiles as they indicate the
        number of mines in their vicinity.
        <br /> 2.Using the information from the numbers, try to logically deduce
        which tiles contain mines and which are safe.
        <br /> 3.If there are numbers around an uncovered tile, and their sum
        equals the number indicated by that tile, those are safe tiles and can
        be uncovered.
        <br /> 4.If the number on the uncovered tile is greater than the sum of
        the mines in the vicinity, flag the tiles suspected of containing mines.
        <br /> 5.Avoid random clicks on unknown tiles as it increases the
        chances of hitting a mine.
      </LanguageBox>
    </MainStyledDiv>
  );
};

export default About;
