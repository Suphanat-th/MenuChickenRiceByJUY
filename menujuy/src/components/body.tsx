import React from 'react'

import List from '@mui/material/List';

import { IMenu } from "../Model/M_Menu"

interface DataProps {
  data: Array<IMenu>;
}

const body: React.FC<DataProps> = ({ data }) => {
  return (

    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      
      {data.map((product: IMenu) => (
        <div key={product.ID} className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src={product.IMG}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <a href={product.TITLE}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.TITLE}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.TITLE}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{product.PRICE}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default body;