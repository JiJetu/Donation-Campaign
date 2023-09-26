import PropTypes from 'prop-types'

const CardDetailsDesign = ({ cardDetails }) => {
    const { image, title, text_color } = cardDetails || {};
    console.log(cardDetails);

    return (
        <div>
            <div className="relative h-[700px]">
                <img className="w-full h-full" src={image} alt={title} />
                <div className="absolute bottom-0 left-0 w-full ">
                    <div className="bg-black bg-opacity-40 h-[130px] p-9" >
                        <button className='py-4 px-6 rounded-md text-white' style={{backgroundColor: text_color}}>Donate $290</button>
                    </div>
                </div>
            </div>
            <div className='mt-14'>
                <h3 className='font-bold text-5xl'>{title}</h3>
                <p className='mt-6 mb-28 text-[#0B0B0BB2]'>There are many things that can be done to ensure that all people have access to a good education. Governments can invest in public schools, provide financial assistance to students, and make sure that all schools have qualified teachers and resources. Families can support their children's education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential.</p>
            </div>
        </div>
    );
};

CardDetailsDesign.propTypes = {
    cardDetails: PropTypes.object.isRequired
}

export default CardDetailsDesign;