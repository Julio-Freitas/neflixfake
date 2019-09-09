import React, {useState} from 'react';

const MovieSingle = (props) => {
    const {image, title, description, date, banner} = props;
    const [show, setShow ]= useState(false);

    function teste() {
        setShow(true); 
    }


    return (
        <div onMouseEnter={(e)=>teste()} onMouseLeave = {e => setShow(false)} className={banner ? 'banner': 'movie-single'} style={{backgroundImage: `url(${(image  ? image : 'http://images6.fanpop.com/image/photos/40700000/Stranger-Things-Season-2-Banner-stranger-things-40779224-3043-1082.jpg')})`}}>
            <h1>{ title }</h1>
            <p className={ (show) ? 'show' : 'description'}>{description}</p>
            <span className='date'><strong>{date}</strong></span>      
        </div>        
    )
}

export default MovieSingle;