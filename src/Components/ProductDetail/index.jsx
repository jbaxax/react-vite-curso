import { XMarkIcon } from '@heroicons/react/24/solid'
import "./styles.css";
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);

    return (
        <aside 
        className={`${context.isProductDetailOpen ? "flex":"hidden"} product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>
                    <XMarkIcon 
                    className="size-6 text-black cursor-pointer"
                    onClick={() => context.closeProductDetail()}
                    ></XMarkIcon>    
                </div>   
            </div>
            <figure className='px-6'>
                <img className="w-full h-full rounded-lg"
                 src={context.productToSHow.images} 
                 alt={context.productToSHow.title} />
            </figure>
            <p className='flex flex-col p-6 '>
                <span className='font-medium text-2xl mb-2'>${context.productToSHow.price}</span>
                <span className='font-medium text-md'>{context.productToSHow.title}</span>
                <span className='font-light text-md'>{context.productToSHow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail