import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom' //Route için eklenmesi gereken import. Hangi rota neyi açmalı? işlemleri yapar
import './index.css' //CSS dosyasının çalışması için import'a ekliyoruz


//Import Pages(Sayfalarımız)
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Setting from './pages/Setting';
import NavBar from './pages/components/NavBar';
import CityDetail from './pages/CityDetail';
import ProductDetail from './pages/ProductDetail';

//Router rotaları burada inşa edilir.
const routerObj =
<BrowserRouter>
<NavBar/> {/*Menüyü her yerde gözüken şekilde yaptık.*/}
<Routes> {/*Gidecek sayfaları burada yazıyorsun. Yeni rotaları altına yazacaksın*/}
  <Route path='/' element = {<Login/>}/> 
  <Route path='/dashboard' element = {<Dashboard/>} />
  {/*.../:data--:Bir data geliyor bunu yakala demek. x,y,z de olabilir...Gelen data'nın Primivite(int,string...) bir tip olması lazım.*/}
  <Route path='/cityDetail/:data' element = {<CityDetail/>} /> 
  <Route path='/productDetail/:pId' element = {<ProductDetail/>} /> 
  <Route path='/profile' element = {<Profile/>} />
  <Route path='/setting' element = {<Setting/>} />
</Routes>
</BrowserRouter>

//Buna hiç dokunmayacaksınız. Buranın içinde manevra alanını yönetiyorsunuz
const root = ReactDOM.createRoot( 
  document.getElementById('root') as HTMLElement
);

//Root altında dönecek sayfaların adını direkt buraya yazıyoruz. RouterObj otomatik olarak bu sayfaları yönetecek.
root.render( routerObj);
  

