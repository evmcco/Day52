import React from 'react';

const footerStyle = {
    backgroundColor: 'white',
    boxShadow: '0 0 10px 6px #ccc',
    fontSize: '.5rem',
    width: '100%'
}

const CardFooter = props => {
    const { user } = props;
    return (
        <div style={footerStyle}>
            <p><b>City: </b>{user.location.city}</p>
            <p><b>Email: </b>{user.email}</p>
            <p><b>Phone: </b>{user.cell}</p>
        </div>
    )
}

export default CardFooter;