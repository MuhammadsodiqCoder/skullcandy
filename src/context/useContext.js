import React, { createContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarContextProvider = ({children}) => {
    const [active, setActive] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [active5, setActive5] = useState(false)
    const [active6, setActive6] = useState(false)
    const [active7, setActive7] = useState(false)
    const [check, setCheck] = useState(null)
    const [dot, setDot] = useState(false)
    const [apple, setApple] = useState(false)
    const [sidebar, setSidebar] = useState(false)

    const natija = {
        active, setActive, active2, setActive2, active3, setActive3, active4, setActive4, active5, setActive6, active6, setActive5, setActive7, active7, check, setCheck, dot, setDot, apple, setApple, sidebar, setSidebar
    }

    return(
        <NavbarContext.Provider value={natija}>{children}</NavbarContext.Provider>
    )
}