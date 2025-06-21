import React, { useRef, useState } from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useWishList } from '../context/WIshListContext';

const AddtoWishList = ({ product }) => {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { addToWishList,removeFromWishList } = useWishList();


  const handleClick = (e) => {
    e.stopPropagation(); // prevent parent navigation

    if (playerRef.current) {
      if (!isPlaying) {
        playerRef.current.play();
        addToWishList(product); 
        
       
      } else {
        playerRef.current.stop();
         removeFromWishList(product.id);
       
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <DotLottiePlayer
        src="https://lottie.host/1b64ff84-f838-4bc2-bc68-4913ea48bc22/os2yVQ1bLE.lottie"
        autoplay={false}
        loop={false}
        ref={playerRef}
        style={{ width: 50, height: 50 }}
      />
    </div>
  );
};

export default AddtoWishList;
