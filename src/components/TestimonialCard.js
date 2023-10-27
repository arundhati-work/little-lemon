import './styles/TestimonialCard.css';
import star from './assets/star.png';


const TestimonialCard = (props) => {
    return (
        <div className='testimonial-card-container'>
            <div className='rating-div'>
                <p>Rating</p>
                <div className='rating-stars'>
                <img src={star} alt='star'/>
                <img src={star} alt='star'/>
                <img src={star} alt='star'/>
                <img src={star} alt='star'/>
                <img src={star} alt='star'/>
                </div>
            </div>
            <div className='test-img-desc'>
                <div className='test-img'>
                    <img src={props.img} alt={props.name}/>
                </div>
                <div className='test-desc'>
                    <p>{props.desc}</p>
                </div>
            </div>
            <div className='test-name'>
                <h3>{props.name}</h3>
            </div>
        </div>
    )
}

export default TestimonialCard;