import React, { createContext, useState } from 'react'

export const NavContext = createContext()

export default function NavProvider({children}) {
    const [about, setAbout] = useState(false)
    const [myWork, setMyWork] = useState(false)
    const [contact, setContact] = useState(false)

  return (
   <NavContext.Provider value={{about, setAbout, myWork, setMyWork, contact, setContact}} >
    {children}
   </NavContext.Provider>
  )
}


