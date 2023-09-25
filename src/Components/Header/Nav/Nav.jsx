import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="flex items-center justify-between pt-12">
            <div className="h-[72px]">
                <img src={`https://i.ibb.co/LYr1d8r/Logo.png`} alt="img" />
            </div>
            <ul className="flex items-center gap-12 text-lg font-bold">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Donation
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Statistics
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;