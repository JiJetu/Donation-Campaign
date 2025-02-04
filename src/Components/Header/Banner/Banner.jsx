import { useState } from "react";

const Banner = ({ handleSearch }) => {
    const [search, setSearch] = useState("")

    const handleButton = (e) => {
        e.preventDefault()
        handleSearch(search)
    }



    return (
        <div>
            <div className="static md:relative md:h-[60vh]">
                <img className="w-full h-full hidden md:inline-block" src={`https://i.ibb.co/d726xn7/Clothing.png`} alt="bg-img" />
                <div className="md:absolute top-0 left-0 w-full h-full">
                    <div className="text-center bg-white bg-opacity-75 h-full p-5 md:p-32">
                        <h1 className="text-xl md:text-5xl font-bold">I Grow By Helping People In Need</h1>
                        <form className="mt-10" action=""  >
                            <input onChange={e =>
                                setSearch(e.target.value)}
                                className="pl-4 py-4 font-normal rounded-l-lg border border-[#DEDED] w-[150px] md:w-[470px]" type="text" value={search} placeholder="Search here..." />
                            <button onClick={handleButton} className="px-7 py-4 bg-[#FF444A] text-white font-semibold rounded-r-lg md:w-[110px]">Search</button>
                            {/* <input className="px-7 py-4 bg-[#FF444A] text-white font-semibold rounded-r-lg md:w-[110px]" type="submit" value="Search" /> */}
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;