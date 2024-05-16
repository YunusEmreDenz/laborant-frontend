import React from 'react'
import MantineDrawer from "../../components/MantineDrawer"
import MantineSearch from "../../components/MantineSearch" 
import MantineCard from "../../components/MantineCard" 
import db from "../db.json"
export default function HomePage() {
  return <div>
   <div style={{ display: "flex" , justifyContent: "space-between" }}>
    <MantineDrawer></MantineDrawer>
    <h1>Özel Yunus Emre Hastanesi</h1>
    <MantineSearch patients={db.patients}></MantineSearch>
  </div>
    <MantineCard></MantineCard>
  </div>

}