import { Coins } from "lucide-react";

const Navbar = ({ coinPrice }) => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex">
          <Coins></Coins>
          {coinPrice}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
