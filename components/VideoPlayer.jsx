import React from 'react'
import ReactPlayer from 'react-player/youtube'

function VideoPlayer({ title, thumbnail, channel_name, url }) {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <h2 className='text-3xl m-20'>{title}</h2>
            <ReactPlayer className="mx-auto w-72"
                url={url}
                controls={true}
            />
        </div>
    )
}

export default VideoPlayer