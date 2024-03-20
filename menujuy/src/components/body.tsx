import React, { useEffect, useState } from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

import Category from "../JSON/Category.json"
import Menu from "../components/menu"

import { IMenu } from "../Model/M_Menu"
import { useAppContext } from './AppWarpper'

// Interface
import { ICategory } from "../Model/M_Category";

const body = () => {
  const { getMainMenu, getListMenu, getListCategory } = useAppContext();

  let data: IMenu[] = getListMenu;

  let listMainMenu: IMenu[] = [];
  let listMenu: IMenu[] = [];
  let listCategory: ICategory[] = [];

  useEffect(() => {
    listCategory = getListCategory;
  }, [getListCategory]);

  useEffect(() => {

  }, []);
  // const [ListCategory, SetCategory] = useState(Category);
  // let ListCategory: ICategory[] = getListCategory;
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
        <Card key={`ListMenu_${cate.TYPE_ID}`} className="mt-6 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
          <CardHeader
            title={cate.TITLE}
          >
            <hr />
          </CardHeader>
          <CardContent>
            {
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data.filter(x => x.TYPE_ID === cate.TYPE_ID).map((menu: IMenu) => (
                  <Card key={`menu_card_${menu.TITLE}`} className="p-5 grid-cols-1" >
                    <Menu data={menu} key={`Menu_${menu.TITLE}`} />
                  </Card>
                ))}
              </div>
            }
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
export default body;