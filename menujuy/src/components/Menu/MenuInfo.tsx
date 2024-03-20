import React from 'react'

import { IMenu } from "../../Model/M_Menu"

const MenuInfo = ({ data }: { data: IMenu }) => {
    return (
        <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                    <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {data.TITLE}
                    </a>
                </h3>
            </div>
            <p className="text-sm font-medium text-gray-900">{data.PRICE.join("-")} บาท</p>
        </div>
    )
}
export default MenuInfo;