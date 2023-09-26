import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    const {id, image, category, title, card_bg, category_bg, text_color } = card || {};


    return (
        <Link to={`/cards/${id}`}>
            <div style={{ backgroundColor: card_bg, color: text_color, borderRadius: "8px" }}>
                <img className='w-full' src={image} alt={title} />
                <div className="pl-4 py-5 space-y-2">
                    <button style={{ backgroundColor: category_bg, padding: '4px 10px', fontSize: "14px", fontWeight: "500", borderRadius: "4px" }}>{category}</button>
                    <p className='text-xl font-semibold'>{title}</p>
                </div>
            </div>
        </Link>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card;