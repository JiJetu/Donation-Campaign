const Banner = () => {
    return (
        <div className="relative h-[60vh]">
            <img className="w-full h-full" src={`https://i.ibb.co/d726xn7/Clothing.png`} alt="bg-img" />
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="text-center bg-white bg-opacity-75 p-32">
                    <h1 className="text-5xl font-bold">I Grow By Helping People In Need</h1>
                    <div className="mt-10">
                        <input className="pl-4 py-4 font-normal rounded-l-lg border border-[#DEDED]" type="text" placeholder="Search here..." />
                        <button className="px-7 py-4 bg-[#FF444A] text-white font-semibold rounded-r-lg">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;