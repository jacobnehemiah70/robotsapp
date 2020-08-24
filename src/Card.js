import React from 'react';

const Card = (props) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow '>
            <img className='' src={`https://robohash.org/set_set5/${props.id}?50x50`} alt='robot' />
            <hr />
            <div>
                <h2>{props.name}</h2>
                <p>{props.username}</p>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;