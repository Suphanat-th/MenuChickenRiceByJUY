import React, { useEffect, useState } from 'react'


import Category from "../JSON/Category.json"
import Menu from "../components/menu"

import { ICategory } from "../Model/M_Category"
import { IMenu } from "../Model/M_Menu"


const body = ({ data }: { data: IMenu[] }) => {

  // const [ListCategory, SetCategory] = useState(Category);
  let ListCategory = Category;
  let group_type: number[] = [];

  data.forEach((x, i) => {
    if (!group_type.includes(x.TYPE_ID))
      group_type.push(x.TYPE_ID);
  });
  ListCategory = Category.filter(x => group_type.includes(x.TYPE_ID));
  data = data.filter(x => group_type.includes(x.TYPE_ID));
  return (
    <div className="mt-6 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
      {ListCategory.map((cate: ICategory) => (
        <div key={cate.TYPE_ID} className="group relative my-1">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-100 lg:aspect-none group-hover:opacity-75 lg:h-10 justify-items-center items-center">
            <span>{cate.TITLE}</span>
          </div>
          {/* {data.filter(x => group_type.includes(x.TYPE_ID))
            .map((menu: IMenu) => {
          <Menu data={data} key={cate.TYPE_ID} />
            })} */}
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.filter(x => x.TYPE_ID === cate.TYPE_ID).map((menu: IMenu) => (
              <Menu data={menu} key={menu.TITLE} />
            ))}
          </div>

        </div>
      ))}
    </div>
  )
}
export default body;