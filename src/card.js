import React from 'react';
import VideoCall from './videoCall';

const cardStyle = {
    background: 'linear-gradient(to bottom, #384350, #384350 45%, white 45%)',
    boxShadow: '0 0 10px 6px #ccc',
    display: 'flexbox',
    marginBottom: '8px',
    position: 'relative'
}

const firstRowStyle = {
    alignContent: 'center',
    alignItems: 'flex-start',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '10px'
}

const secondRowStyle = {
    alignContent: 'center',
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '10px'
}

const thirdRowStyle = {
    alignContent: 'center',
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '10px'
}

const imgStyle = {
    border: '5px solid white',
    borderRadius: '3px',
    margin: '12px'
}

const backgroundStyle = {
    backgroundColor: 'blue',
    height: '40%',
    position: 'absolute',
    width: '100%',
    zIndex: '-1'
}

const Card = props => {
    const { user } = props;
    console.log('user is: ', user)
    return (
        <div className="card" style={cardStyle}>
            <div className='first-row' style={firstRowStyle}>
                <i class="fas fa-ellipsis-v"></i>
                <span>active</span>
                <i class="far fa-eye"></i>            
            </div>
            <div className='second-row' style={secondRowStyle}>
                <i class="far fa-envelope"></i>
                <img style={imgStyle} src={user.picture.large} alt={`${user.name.first} headshot`}/>
                <i class="far fa-comment-alt"></i>            
            </div>
            <VideoCall/>
            <div className='third-row' style={thirdRowStyle}>
                <i class="fas fa-plus"></i>
                <span>{user.name.first} {user.name.last}</span>
                <i class="far fa-heart"></i>            
            </div>
            <p>*****</p>


        </div>
    )
}

export default Card;