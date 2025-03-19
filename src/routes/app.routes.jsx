import { Routes, Route } from "react-router-dom"


import { Home } from "../pages/Home"
import { AddDish } from "../pages/AddDish"
import { Details } from "../pages/Details"


export function AppRoutes() {
    return(
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/addDish" element={<AddDish />}/>  
          <Route path="/details/:id" element={<Details />}/>  
        </Routes>
    )
}