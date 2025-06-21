import { Badge } from 'antd';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartOutlined from '@ant-design/icons';


import { useCart } from '../context/CartContext'; // Adjust import based on your app

const  CartIcon = () => {
  const { cartItems } = useCart();

  return (
    <>
    <Badge count={cartItems.length} showZero={false} offset={[0, 0]}>
      <ShoppingCartOutlined />
    </Badge>
    </>
  );
};
export default CartIcon;