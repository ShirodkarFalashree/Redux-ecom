import React from 'react'
import { storeData } from '../../assets/data/dummyData'
import ProductSectionItem from './ProductSectionItem'
function ProductSection() {
    return (
        <div>
            <div className='bg-black p-2 w-[55%] mx-auto rounded-md font-bold tracking-normal leading-none'>
                <h3 className='text-orange-900 text-center text-lg font-sans'>SUMMER SALE !! SUMMER VIBE !!</h3>
            </div>
            <div className='grid grid-cols-3 justify-items-center py-8 mx-auto'>
                {storeData.slice(0, 6).map((product, index) => {
                    return <div key={index}>
                        <ProductSectionItem id={product.id}
                            name={product.name}
                            img={product.img}
                            text={product.text}
                            price={product.price}
                            totalPrice={product.totalPrice}
                            color={product.color}
                            size={product.size}
                        />
                    </div>
                })}
            </div>
        </div>
    )
}

export default ProductSection