import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav className="md:flex items-center justify-between pt-12">
                <div className="h-[72px] mb-7 md:mb-0 flex justify-center md:inline-block">
                    <img src={`https://i.ibb.co/LYr1d8r/Logo.png`} alt="img" />
                </div>
                <ul className="flex justify-center items-center gap-12 text-lg font-bold">
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
        </div>
    );
};

export default Nav;