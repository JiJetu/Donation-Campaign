import PropTypes from 'prop-types'
import Card from './Card';

const Cards = ({cards}) => {
    return (
        <div className="my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                cards?.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    cards: PropTypes.object.isRequired
}

export default Cards;