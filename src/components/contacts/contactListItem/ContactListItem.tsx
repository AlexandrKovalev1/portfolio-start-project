import React from "react";
import {Icon} from "../../icon/Icon";
import {Styles} from "./ContactListItem_Styles";


type ContactListItemPropsType = {
    iconId:string,
    viewBox:string,
    href:string
}
export const ContactListItem:React.FC<ContactListItemPropsType> = ({href,iconId,viewBox}) => {



    return (
        <Styles.ListItem>
            <Styles.Link href={href}>
                <Icon iconId={iconId} width={"30"} height={"30"} viewBox={viewBox}/>
            </Styles.Link>
        </Styles.ListItem>
    );
};


