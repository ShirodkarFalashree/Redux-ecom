import React from 'react';
import { Button } from '@material-tailwind/react';
import clothes from '../../assets/images/clothes.jpg';
import { filterProducts } from '../../features/slices/ProductsSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function NavigateButtons() {
    const buttons = ['Hoodies', 'Dresses', 'Suits', 'Shoes', 'T-Shirts', 'Jeans', 'Jackets', 'Bags'];
    const dispatch = useDispatch();

    return (
        <div>
            <div className='flex items-center justify-center py-8'>
                {buttons.map((button, index) => (
                    <div key={index} className='mr-4'>
                        <Link to={"/filteredProducts/" + button}>
                            <Button
                                color="gray"
                                size="lg"
                                variant='outlined'
                                className='hover:bg-blue-gray-800 hover:text-white'
                                onClick={() => dispatch(filterProducts(button))}
                            >
                                {button}
                            </Button>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='bg-black p-2 w-[55%] mx-auto rounded-md font-bold tracking-normal leading-none'>
                <h3 className='text-orange-900 text-center text-lg font-sans'>SALES UP TO 50%</h3>
            </div>
            <div className='flex justify-center item-center py-4'>
                <img className='h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600' src={clothes} alt="clothes" />
            </div>
        </div>
    );
}

export default NavigateButtons;
