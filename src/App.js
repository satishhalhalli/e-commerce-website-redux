import { useEffect ,Fragment} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './components/store/UI-slice';
import Notification from './components/UI/Notification';
let isInitial=true;
function App() {
 const showCart= useSelector(state => state.ui.cartIsVisibale);
 const cart=useSelector((state) => state.cart);

 const notification=useSelector(state => state.ui.notification);
 useEffect(()=>{

  const sendCrtData=async()=>{
    dispatch(uiActions,showNotification({
      status : 'pending',
      message :'sending cart data',
    }));
  const response=await fetch('https://react-http-8dfe4-default-rtdb.firebaseio.com/cart.json',{method : 'PUT',body: JSON.stringify(cart),}); 
 if(!response.ok)
{
  throw new Error('sending cart data failed');
} 
 
  dispatch(uiActions,showNotification({
    status : 'success',
    message :'sent cart data',
  }));

};
 },[cart])
  return (
    <Fragment>
     {notification &&  <Notification status={notification.status} message={notification.message}/>}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
