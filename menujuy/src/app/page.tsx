"use client";
import { useState } from 'react';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from "styled-components";
import { green, purple } from '@mui/material/colors';

import FilterOptions from "../components/filter"
import Body from "../components/body"
import Menu from "../components/menu"

import ListMenu from "../JSON/MENU.json"

import { IFilter } from "../Model/M_Filter"
import { IMenu } from "../Model/M_Menu"

export default function Home() {

  const theme = createTheme({
    spacing: 8,
    palette: {
      mode: 'dark',
      primary: purple,
      secondary: green,
    },
  })

  const [dataFromSomePage, setDataFromSomePage] = useState(ListMenu);

  var OnFilterMenu = (filter: IFilter) => {
    let tempListMenu = ListMenu;
    if (filter.ID != null)
      tempListMenu = tempListMenu.filter(x => x.ID === filter.ID)
    if (filter.TYPE_ID != null)
      tempListMenu = tempListMenu.filter(x => x.TYPE_ID === filter.TYPE_ID)

    setDataFromSomePage(tempListMenu);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className=" bg-gray-200 min-h-screen" >
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">จุ้ยข้าวมันไก่</h2>
          <FilterOptions fnFilter={OnFilterMenu} />
          <Body data={dataFromSomePage}/>
        </div>
      </div>
    </ThemeProvider>
  );
}
