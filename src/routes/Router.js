import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';

import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

import Main from '../features/Main/Main';
import Login from '../features/Login/Login';
import Reservation from '../features/Reservation/Reservation';
import Purchase from '../features/Purchase/Purchase';
import PassengerData from '../features/Purchase/PassengerData';
import CheckReservation from '../features/CheckReservation/CheckReservation';
import Kakao from '../features/Login/Kakao';

const NavbarLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/logining" element={<Kakao />} />
        <Route element={<NavbarLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/passengerdata" element={<PassengerData />} />
          <Route path="/checkreservation" element={<CheckReservation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
