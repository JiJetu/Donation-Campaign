import PropTypes from 'prop-types'
import Card from './Card';
import { useLoaderData } from 'react-router-dom';

const Cards = ({cards}) => {
    const searchCard = useLoaderData();
    console.log(searchCard)
    return (
        <div className=" mt-4 md:my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                cards?.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    cards: PropTypes.array.isRequired
}

export default Cards;