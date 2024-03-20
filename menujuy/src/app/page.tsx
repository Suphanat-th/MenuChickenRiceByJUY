"use client";
import { useState, useMemo, useEffect } from 'react';
import { createTheme, CssBaseline, Card } from '@mui/material';
import { ThemeProvider } from "styled-components";
import { green, purple } from '@mui/material/colors';

import FilterOptions from "../components/filter";
import Body from "../components/body";

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
import { useAppContext } from '@/components/AppWarpper';



export default function Home() {

  const { getMainMenu, getListMenu, setListMenu, getListCategory } = useAppContext();

  const theme = createTheme({
    spacing: 8,
    palette: {
      mode: 'dark',
      primary: purple,
      secondary: green,
    },
  })
  // const [mainMenu, setMainMenu] = useState<IMenu[]>([]);
  // const [ListMenu, SetListMenu] = useState<IMenu[]>([]);
  // const [ListCategory, SetListCategory] = useState<ICategory[]>([]);

  var OnFilterMenu = (filter: IFilter) => {
    let tempListMenu: IMenu[] = getMainMenu;
    if (filter.TYPE_ID != null)
      tempListMenu = tempListMenu.filter(x => x.TYPE_ID === filter.TYPE_ID)
    window.scrollTo(0, 0);
    setListMenu(tempListMenu);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className=" bg-gray-200 min-h-screen" >
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <Card className="sticky top-0 p-3 z-50">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">เฮียจุ้ยข้าวมันไก่ </h2>
            <FilterOptions />
          </Card>
          <Body />
        </div>
      </div>
    </ThemeProvider>
  );
}
