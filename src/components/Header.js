import { Link } from "react-router-dom";

export default function Header({ cartItems }) {
  return (
    <div className="flex justify-between bg-white px-20 py-4 top-0 left-0 right-0 z-10 shadow-lg">
      <Link to="/">
        <a href="#" className="flex text-green-600 text-2xl">
          <i class="fas fa-utensils"></i>
          <p className="text-black ml-2 text-2xl font-medium">resto.</p>
        </a>
      </Link>
      <div className="flex">
        <i class="fas fa-search text-2xl"></i>
        <Link to="/cart">
          <a className="flex text-green-600 ml-3 text-2xl">
            <a href="#" class="fas fa-shopping-cart"></a>
            <p className="text-red-600">{cartItems.length}</p>
          </a>
        </Link>
      </div>
    </div>
  );
}
