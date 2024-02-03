import React from "react";
import {Icon} from "../../icon/Icon";


type ContactListItemPropsType = {
    iconId:string,
    viewBox:string,
}
export const ContactListItem = (props:ContactListItemPropsType) => {



    return (
        <li>
            <a href="">
                <Icon iconId={props.iconId} width={"30"} height={"30"} viewBox={props.viewBox}/>
            </a>
        </li>
    );
};

