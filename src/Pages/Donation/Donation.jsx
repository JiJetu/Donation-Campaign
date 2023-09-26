import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [noDataFound, setNoDataFound] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const donationItem = JSON.parse(localStorage.getItem("donation"));
        if (donationItem) {
            setDonation(donationItem);
        }
        else {
            setNoDataFound("No data found")
        }
    }, [])

    return (
        <div className="my-20">
            {
                noDataFound ? <p className="h-[50vh] flex justify-center items-center">{noDataFound}</p> : <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-9">
                        {
                            isShow ? donation.map(donationCard => <DonationCard key={donationCard.id} donationCard={donationCard}></DonationCard>) : donation.slice(0,4).map(donationCard => <DonationCard key={donationCard.id} donationCard={donationCard}></DonationCard>)
                        }
                    </div>
                    {
                        donation.length >= 4 && <div onClick={() => setIsShow(!isShow)} className="text-center">
                        <button className="py-4 px-7 bg-[#009444] text-base font-semibold rounded-lg text-white">{isShow ? 'Show Less' : 'See All'}</button>
                    </div>
                    }
                </div>

            }
        </div>
    );
};

export default Donation;