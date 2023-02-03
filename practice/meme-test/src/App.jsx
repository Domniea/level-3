import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from './components/Main';
import MemeCard from './components/MemeCard'
import './App.css'

export default function App() {


  return (
   <div className="app">
      <Header />
      <Main />
   </div>
  )
}

// console.log('boobs')