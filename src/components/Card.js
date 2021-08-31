import React from 'react';

const Card = ({ name, username, email, id }) => {
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>
                    <span className='b'>Username: </span>
                    {username}
                </p>
                <p>
                    <span className='b'>Email: </span>
                    {email}
                </p>
            </div>
        </div>
    );
};

export default Card;
