import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [noDataFound, setNoDataFound] = useState(false);

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
        <div>
            {
                noDataFound ? <p className="h-[80vh] flex justify-center items-center">{noDataFound}</p> : <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-20">
                    {
                        donation.map(donationCard => <DonationCard key={donationCard.id} donationCard={donationCard}></DonationCard>)
                    }
                </div>
            }
        </div>
    );
};

export default Donation;