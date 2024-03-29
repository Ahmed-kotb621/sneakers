import { NavLink } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';
import { useSelector } from 'react-redux';
function NavBar() {
  const cart = useSelector((state) => state.cart.cart);
  const wish = useSelector((state) => state.wishList.wishList);
  const user = useSelector((state) => state.user.user);

  return (
    <nav>
      <ul className="text-md relative flex items-center justify-end  space-x-4  text-mainC sm:justify-between">
        <li className="relative flex items-center text-lg">
          <NavLink to="/wishlist" className="flex items-center gap-2 text-lg">
            <MdFavoriteBorder />{' '}
            <span className="hidden md:block"> Wishlist</span>
            {wish.length ? (
              <span className="absolute left-[7px] top-[-5px]  flex   h-4 w-4  items-center justify-center rounded-full bg-yellowC text-sm">
                {wish.length}
              </span>
            ) : (
              ''
            )}
          </NavLink>
        </li>
        <li className="relative flex items-center space-x-1">
          <NavLink to="/cart" className="flex items-center gap-2 text-lg">
            <FiShoppingBag />

            <span className="hidden md:block"> Cart</span>
            {cart.length ? (
              <span className="absolute left-[7px] top-[-5px]  flex   h-4 w-4  items-center justify-center rounded-full bg-yellowC text-sm">
                {cart.length}
              </span>
            ) : (
              ''
            )}
          </NavLink>
        </li>
        <li className="relative flex items-center space-x-1">
          <NavLink
            to="/login"
            className="flex items-center gap-2 text-lg text-yellow-600"
          >
            {!user.length ? 'LogIn' : user[0].firstName}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
