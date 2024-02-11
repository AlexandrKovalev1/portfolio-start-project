import React from "react";
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Logo = () => {
    return (
        <Link href="#">
          <Icon iconId={"logo"} width={"250"} height={"100"} viewBox={"5 -5 310 90"} />
        </Link>
    );
};

const Link = styled.a``;

