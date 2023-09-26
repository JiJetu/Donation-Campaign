import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetailsDesign from "./CardDetailsDesign";

const CardDetails = () => {
    const [cardDetails, setCardDetails] = useState({})

    const {id} = useParams();

    const cards = useLoaderData();

    useEffect(() => {
        const findCard = cards.find(card => card.id == id)
        // console.log(findCard)
        setCardDetails(findCard)

    },[id, cards])

    return (
        <div>
            <CardDetailsDesign cardDetails={cardDetails}></CardDetailsDesign>
        </div>
    );
};

export default CardDetails;