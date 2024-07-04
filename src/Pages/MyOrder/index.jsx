import { useContext } from 'react';
import Layout from '../../Components/Layout';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
function MyOrder() {
  
    const context = useContext(ShoppingCartContext);
    console.log(context.order.slice(-1)[0]);

    return (
      <Layout>
        <div className='flex justify-center items-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left left-0'>
          <ChevronLeftIcon className="size-6 text-black cursor-pointer"/>
        </Link>
        
        <h1>MyOrders</h1>

      </div>
        <div className='flex flex-col w-80'>
            {
                context.order?.slice(-1)[0].products.map( product =>(
                    <OrderCard
                        key={product.id} 
                        id={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price={product.price}                        
                    />
                ))
            }
            </div>
      </Layout>
    )
  }
  
  export default MyOrder