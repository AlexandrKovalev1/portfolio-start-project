import React from "react";
import {BurgerMenu} from "./burgerMenu/BurgerMenu";
import {DesktopMenu} from "./desktopMenu/DesktopMenu";

export const HeaderMenu = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 992;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return width < breakpoint ? <BurgerMenu/> : <DesktopMenu/>
        ;
}