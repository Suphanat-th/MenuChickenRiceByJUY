"use client";
import { createTheme, CssBaseline, Card } from '@mui/material';
import { ThemeProvider } from "styled-components";
import { blue } from '@mui/material/colors';

import FilterOptions from "../components/filter";
import Body from "../components/body";

// Interface
import { useAppContext } from '@/components/AppWarpper';



export default function Home() {

  const { getMainMenu, getListMenu, setListMenu, getListCategory } = useAppContext();

  const theme = createTheme({
    spacing: 8,
    palette: {
      primary: {
        main: blue[500],
      },
      secondary: {
        main: '#f44336',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className=" bg-gray-200 min-h-screen" >
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <Card className="sticky top-0 p-3 z-50 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">เฮียจุ้ยข้าวมันไก่ </h2>
            <FilterOptions />
          </Card>
          <Body />
        </div>
      </div>

    </ThemeProvider>
  );
}
