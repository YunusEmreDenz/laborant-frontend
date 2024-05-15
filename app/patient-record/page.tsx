import React from 'react'
import MantineDrawer from "../../components/MantineDrawer"
import MantineSearch from "../../components/MantineSearch" 
import MantineCard from "../../components/MantineCard" 
export default function HomePage() {
  return <div>
   <div style={{ display: "flex" }}>
    <MantineDrawer></MantineDrawer>
    <MantineSearch></MantineSearch>
  </div>
    <MantineCard></MantineCard>
  </div>

}