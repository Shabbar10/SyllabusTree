import React from 'react';
import ReactPlayer from 'react-player/youtube';

// Define the props type
interface VideoPlayerProps {
    title: string;
    thumbnail: string; // Assuming thumbnail will be a string, like a URL
    channel_name: string; // Assuming channel_name will be a string
    url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ title, thumbnail, channel_name, url }) => {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <h2 className='text-3xl m-20'>{title}</h2>
            <ReactPlayer 
                className="mx-auto w-72"
                url={url}
                controls={true}
            />
        </div>
    );
}

export default VideoPlayer;
