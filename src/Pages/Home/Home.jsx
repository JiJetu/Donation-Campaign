import { useLoaderData } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";
import Banner from "../../Components/Header/Banner/Banner";
import { useState } from "react";

const Home = () => {
    const cards = useLoaderData();

    const [filteredCards, setFilteredCard] = useState([]);

    const handleSearch = (search) => {
        if (search) {
            const filteredCard = cards.filter((item) =>
                item.category.toLowerCase() === search.toLowerCase()
            );
            setFilteredCard(filteredCard);
        }
        else{
            setFilteredCard(cards);
        }
    };

    return (
        <div>
            <Banner handleSearch={handleSearch}></Banner>
            <Cards cards={filteredCards}></Cards>
        </div>
    );
};

export default Home;