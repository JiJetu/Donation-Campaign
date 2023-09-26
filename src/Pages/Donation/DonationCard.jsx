import PropTypes from "prop-types"

const DonationCard = ({ donationCard }) => {
    const {image, category, title, card_bg, category_bg, text_color } = donationCard || {};
    return (
        <div style={{backgroundColor: card_bg}} className="h-[200px] w-[630px] flex items-center gap-6">
            <img className="w-[220px] h-full" src={image} alt={title} />
            <div>
                <button style={{ backgroundColor: category_bg, color: text_color, padding: '4px 10px', fontSize: "14px", fontWeight: "500", borderRadius: "4px" }}>{category}</button>
                <h3 className='my-2 text-2xl font-semibold'>{title}</h3>
                <p style={{color: text_color, margin:"8px 0px"}}>$290.00</p>
                <button className="text-white" style={{ backgroundColor: text_color, padding: '9px 16px', fontSize: "16px", fontWeight:"700" }}>View Details</button>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    donationCard: PropTypes.object
}

export default DonationCard;