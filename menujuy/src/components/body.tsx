"use client"
import React, { useEffect } from 'react'

import { CardActionArea, CardContent, CardHeader, CardMedia, Card, Typography } from '@mui/material';

import Category from "../JSON/Category.json"
import Menu from "../components/menu"

import { IMenu } from "../Model/M_Menu"
import { useAppContext } from './AppWarpper'

// Interface
import { ICategory } from "../Model/M_Category";

const Body = () => {
  const { getMainMenu, getListMenu, getListCategory } = useAppContext();

  let data: IMenu[] = getListMenu;

  let listMainMenu: IMenu[] = [];
  let listMenu: IMenu[] = [];
  let listCategory: ICategory[] = [];

  useEffect(() => {
    listCategory = getListCategory;
  }, [getListCategory]);

  let group_type: number[] = [];

  data.forEach((x, i) => {
    if (!group_type.includes(x.TYPE_ID))
      group_type.push(x.TYPE_ID);
  });

  if (group_type.length > 0)
    listCategory = Category.filter(x => group_type.includes(x.TYPE_ID));

  data = data.filter(x => group_type.includes(x.TYPE_ID));

  return (
    // <div className="mt-6 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
    //   {listCategory.map((cate: ICategory) => (
    //     <div key={cate.TYPE_ID} className="group relative my-1">
    //       <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-transparent lg:aspect-none group-hover:opacity-75 lg:h-10 justify-items-center items-center">

    //         <Button variant="contained" className='bg-white text-red-600'><h5>{cate.TITLE}</h5></Button>
    //       </div>
    //       <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    //         {data.filter(x => x.TYPE_ID === cate.TYPE_ID).map((menu: IMenu) => (
    //           <Menu data={menu} key={menu.TITLE} />
    //         ))}
    //       </div>

    //     </div>
    //   ))}
    // </div>
    <div>
      {listCategory.map((cate: ICategory) => (
        <>
          <Card key={`ListMenu_${cate.TYPE_ID}`} className="mt-6 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 shadow-lg shadow-blue-500/50">
            <CardHeader
              title={cate.TITLE}
            >
              <hr />
            </CardHeader>
          </Card>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.filter(x => x.TYPE_ID === cate.TYPE_ID).map((menu: IMenu) => (
              <Card key={`menu_card_${menu.TITLE}`} className="grid-cols-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-slate-50 duration-150" >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150"
                    src={menu.IMG}
                    alt={menu.TITLE}
                    className="min-h-60 max-h-60 h-60 "
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {menu.TITLE}
                    </Typography>
                    <Typography variant="h5" color="text.danger">
                      {menu.PRICE.join("-")} บาท
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              // <Card key={`menu_card_${menu.TITLE}`} className="p-5 grid-cols-1" >
              //   <Menu data={menu} key={`Menu_${menu.TITLE}`} />
              // </Card>
            ))}
          </div>
        </>
      ))}


    </div>
  )
}
export default Body;