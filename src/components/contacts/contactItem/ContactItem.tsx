import React from "react";
import {Icon} from "../../icon/Icon";
import {Styles} from "./ContactItem_Styles";


type ContactListItemPropsType = {
    iconId:string,
    viewBox:string,
    href:string,
    closeModal?:React.Dispatch<React.SetStateAction<boolean>>
}
export const ContactItem:React.FC<ContactListItemPropsType> = ({href,iconId,viewBox,closeModal}) => {



    return (
        <Styles.ListItem>
            <Styles.Link href={href} aria-label={`${iconId}`} target={"_blank"}  onClick={()=>{closeModal && closeModal(false)}}>
                <Icon iconId={iconId} width={"30"} height={"30"} viewBox={viewBox}/>
            </Styles.Link>
        </Styles.ListItem>
    );
};


