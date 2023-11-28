import * as React from "react"
import Navbar from "../components/Navbar"
import "../Styles/gobalStyle.css"
import Hero from "../components/Hero"
import PhoneImage from "../components/PhoneImage"
import Trade from "../components/Trade"
import ExploreMarket from "../components/ExploreMarket"
import Frontiers from "../components/Frontiers"
import Deposit from "../components/Deposit"
import Simple from "../components/Simple"
import Best from "../components/Best"
import Cards from "../components/Cards"
import EarnMoney from "../components/EarnMoney"
import Visionaries from "../components/Visionaries"
import Mobile from "../components/Mobile"
import Footer from "../components/Footer"

export default function Home() {
  return <div>
       <Navbar/>
       <Hero/>
       <PhoneImage/>
       <Trade/>
       <ExploreMarket/>
       <Frontiers/>
       <Deposit/>
       <Simple/>
       <Best/>
       <Cards/>
       <EarnMoney/>
       <Visionaries/>
       <Mobile/>
       <Footer/>
  </div>
}
