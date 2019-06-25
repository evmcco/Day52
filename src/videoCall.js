import React from 'react';

const iconStyle = {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '100%',
    boxShadow: '0 0 2px 1px #ccc',
    color: 'red',
    display: 'flex',
    height: '15%',
    justifyContent: 'center',
    left: '40%',
    top: '57.5%',
    position: 'absolute',
    width: '20%',
    zIndex: 1
}

const VideoCall = props => {
    return (
        <div style={iconStyle}><i class="fas fa-video"></i></div>
    )
}

export default VideoCall;