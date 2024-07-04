import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout';
import OrdersCard from '../../Components/OrdersCard';
import { ShoppingCartContext } from '../../Context';

function MyOrders() {

  const context = useContext(ShoppingCartContext);
  return (

    <Layout>
      <div className='flex justify-center items-center relative w-80'>
        <h1>MyOrders</h1>
      </div>

      {
        context.order.map((order, index) => {
          <Link key={index} to={`/my-orders/${order.ide}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts} />
          </Link>

        })
      }

    </Layout>

  )
}

export default MyOrders