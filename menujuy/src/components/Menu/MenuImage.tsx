import Img from 'next/image';
import React from 'react'


const MenuImage = ({ data }: { data: string }) => {
    return (
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
                src={data}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                alt=""
            />
        </div>
    )
}
export default MenuImage;