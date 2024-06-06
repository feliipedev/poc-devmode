import "./App.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import BackgroundImageData from "./assets/background-image.png";
import LogoImage from "./assets/logo.png";
import LoadingTertiary from "./assets/loading-button-testiary.png";
import LoadingPrimary from "./assets/loading-button-primary.png";
import BookImage from "./assets/book.png";

const AppStyled = styled.div`
  width: 100%;
  height: 820px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  background: #144bc8;
`;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  display: flex;
`;

const Infos = styled.div`
  background: #144bc8;
  max-width: 843px;
  width: 100%;
  height: 820px;
`;

const BackgroundImage = styled.div`
  background-image: url(${BackgroundImageData});
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 597px;
  width: 100%;
  height: 820px;
`;

const LogoStyled = styled.div``;

const Logo = styled.img`
  padding: 24px 40px 24px 40px;
`;

const Title = styled.h2`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 48px;
  font-weight: 600;
  line-height: 55.2px;
  width: 500px;
  margin: 160px 0 48px 155px;
`;

const ButtonsContainer = styled.div`
  max-width: 557px;
  width: 100%;
  margin-left: 155px;
  display: flex;
`;

const TertiaryButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  text-align: left;
  border-radius: 8px;
  transition: all ease 0.27s;
  min-width: 183px;
  max-height: 56px;
  min-height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  &:hover {
    background: #c2d4ff;
    color: #144bc8;
    transition: all ease 0.1s;
  }
  &:focus {
    background: none;
    border: 2px solid #fff;
    color: #fff;
  }
`;

const PrimaryButton = styled.button`
  background: #fff;
  border: none;
  cursor: pointer;
  color: #144bc8;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  border-radius: 8px;
  transition: all ease 0.27s;
  min-width: 336px;
  max-height: 56px;
  min-height: 56px;
  padding-left: 33.25px;
  padding-right: 32px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  &:hover {
    background: #c2d4ff;
    color: #144bc8;
  }
  &:focus {
    background: #fff;
    color: #144bc8;
    outline: 2px solid #fff;
    outline-offset: 2px;
  }
`;

const IconPrimaryButton = styled.img`
  width: 21.5px;
  height: 19.5px;
`;
const LoadingButton = styled.img`
  object-fit: contain;
  width: 21.5px;
  height: 21.5px;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: rotate 2s linear infinite;
`;

function App() {
  const [isLoadingTertiary, setIsLoadingTertiary] = useState(false);
  const [isLoadingPrimary, setIsLoadingPrimary] = useState(false);

  const handlerLoadingTertiaryButton = () => {
    setIsLoadingTertiary(true);
    setTimeout(() => {
      setIsLoadingTertiary(false);
    }, 4000);
  };

  const handlerLoadingPrimaryButton = () => {
    setIsLoadingPrimary(true);
    setTimeout(() => {
      setIsLoadingPrimary(false);
    }, 4000);
  };

  return (
    <AppStyled>
      <Container>
        <Infos>
          <LogoStyled>
            <Logo src={LogoImage} />
          </LogoStyled>
          <Title>
            Atualize suas disciplinas sem burocracia e em tempo real
          </Title>
          <ButtonsContainer>
            <TertiaryButton onClick={() => handlerLoadingTertiaryButton()}>
              {isLoadingTertiary ? (
                <LoadingButton src={LoadingTertiary} />
              ) : (
                <>Preciso de ajuda</>
              )}
            </TertiaryButton>
            <PrimaryButton onClick={() => handlerLoadingPrimaryButton()}>
              {isLoadingPrimary ? (
                <LoadingButton
                  src={LoadingPrimary}
                  style={{ margin: " 0 auto" }}
                />
              ) : (
                <>
                  <IconPrimaryButton
                    src={BookImage}
                    style={{ paddingRight: 8 }}
                  />{" "}
                  Acessar o NOME DO PRODUTO
                </>
              )}
            </PrimaryButton>
          </ButtonsContainer>
        </Infos>
        <BackgroundImage />
      </Container>
    </AppStyled>
  );
}

export default App;
