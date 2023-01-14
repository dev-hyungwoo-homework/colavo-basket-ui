import { Outlet } from "react-router-dom";
import styled from "styled-components";

import ReservationCard from "../../components/mainPage/ReservationCard";

export default function MainPage(): React.ReactElement {
  return (
    <>
      <Container>
        <SideBar>
          <SidebarHeader>Vanilla Hair Salon</SidebarHeader>
        </SideBar>
        <Header>매출</Header>
        <Main>
          <ReservationCard />
        </Main>
      </Container>
      <Outlet />
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "side header"
    "side main";
  grid-template-rows: 100px 1fr;
  grid-template-columns: 250px 1fr;
  width: 100vw;
  height: 100vh;
`;

const SideBar = styled.aside`
  grid-area: side;
  background-color: #0040ff;
  color: white;
`;

const SidebarHeader = styled.div`
  text-align: center;
  margin-top: 28px;
  font-size: 28px;
`;

const Header = styled.header`
  grid-area: header;
  align-self: center;
  padding-left: 20px;
  font-size: 26px;
  font-weight: 600;
`;

const Main = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffeff6;
`;
