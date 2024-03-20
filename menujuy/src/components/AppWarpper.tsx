"use client"
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

// JSON
import TYPE1 from "../JSON/MENU/TYPE_1.json";
import TYPE2 from "../JSON/MENU/TYPE_2.json";
import TYPE3 from "../JSON/MENU/TYPE_3.json";
import TYPE4 from "../JSON/MENU/TYPE_4.json";
import TYPE5 from "../JSON/MENU/TYPE_5.json";
import TYPE6 from "../JSON/MENU/TYPE_6.json";
import TYPE7 from "../JSON/MENU/TYPE_7.json";
import TYPE8 from "../JSON/MENU/TYPE_8.json";
import TYPE9 from "../JSON/MENU/TYPE_9.json";
import Category from "../JSON/Category.json";

// Interface
import { IFilter } from "../Model/M_Filter";
import { ICategory } from "../Model/M_Category";
import { IMenu } from "../Model/M_Menu";



const AppContext = createContext<any>(undefined);

export function AppWarpper({ children }: {
    children: React.ReactNode
}) {

    const [mainMenu, setMainMenu] = useState<IMenu[]>([]);
    const [listMenu, setListMenu] = useState<IMenu[]>([]);
    const [listCategory, setListCategory] = useState<ICategory[]>([]);
    const [filter, setFilter] = useState<IFilter>({
        TYPE_ID: null,
        ID: null
    });

    useEffect(() => {
        let tempListMenu = TYPE1;
        tempListMenu = [...tempListMenu, ...TYPE2]
        tempListMenu = [...tempListMenu, ...TYPE3]
        tempListMenu = [...tempListMenu, ...TYPE4]
        tempListMenu = [...tempListMenu, ...TYPE5]
        tempListMenu = [...tempListMenu, ...TYPE6]
        tempListMenu = [...tempListMenu, ...TYPE7]
        tempListMenu = [...tempListMenu, ...TYPE8]
        tempListMenu = [...tempListMenu, ...TYPE9]
        setMainMenu(tempListMenu);
        setListMenu(tempListMenu);
        setListCategory(Category);
    }, [])


    return (
        <AppContext.Provider
            value={{
                getMainMenu: mainMenu,
                setMainMenu: setMainMenu,
                getListMenu: listMenu,
                setListMenu: setListMenu,
                getListCategory: listCategory,
                setCategory: setListCategory,
                getFilter: filter,
                setFilter: setFilter,
            }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}