import React from "react";
import {Icon} from "../icon/Icon";
import {Styles} from "./Logo_Styles";

export const Logo:React.FC = () => {
    return (
        <Styles.Link href="#home" aria-label={"homepage"}>
          <Icon iconId={"logo"} width={"250"} height={"100"} viewBox={"5 -5 310 90"} />
        </Styles.Link>
    );
};
