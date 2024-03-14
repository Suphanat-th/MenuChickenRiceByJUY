import React from 'react'

import MenuImage from "../components/Menu/MenuImage"
import MenuInfo from "../components/Menu/MenuInfo"

import { IMenu } from "../Model/M_Menu"



const menu = ({ data }: { data: IMenu }) => {
    return (
        <div key={data.ID} className="group relative">
            <MenuImage data={data.IMG} />
            <MenuInfo data={data} />
        </div>
    )
}
export default menu;