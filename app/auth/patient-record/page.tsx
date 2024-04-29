import React from 'react'
import MantineDrawer from "../../../components/MantineDrawer"
import MantineSearch from "../../../components/MantineSearch"
export default function HomePage() {
  return <div style={{ display: "flex" }}>
    <MantineDrawer></MantineDrawer>
    <MantineSearch></MantineSearch>
  </div>

}