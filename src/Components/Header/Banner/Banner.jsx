const Banner = () => {
    return (
        <div className="h-[60vh] text-center">
            <h1 className="pt-36 text-5xl font-bold">I Grow By Helping People In Need</h1>
            <div className="mt-10">
                <input className="pl-4 py-4 font-normal rounded-l-lg border border-[#DEDED]" type="text" placeholder="Search here..." />
                <button className="px-7 py-4 bg-[#FF444A] text-white font-semibold rounded-r-lg">Search</button>
            </div>
        </div>
    );
};

export default Banner;