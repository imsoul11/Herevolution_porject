import UserContext from "./UserContext";
import React from "react";
import { useState } from "react";

function UserContextProvider({children}) {
    const [cities,setcities]= useState('')
    const [sectors,setsectors]= useState('')
    const [water,setwater]= useState(false)
    const [air,setair]= useState(false)
    const [land,setland]= useState(false)
    const [rainfall,setrainfall]= useState(false)
    const [inprange,setinprange] = useState(100)
    const [preferences,setpreferences] = useState([])
    const [data,setdata]=useState('this is working')
    return (
        <UserContext.Provider value={[cities,setcities,inprange,setinprange,sectors,setsectors,preferences,setpreferences,air,setair,water,setwater,land,setland,rainfall,setrainfall,data,setdata]}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
