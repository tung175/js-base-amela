import React, { useRef, useEffect, useState } from "react";
import { Box } from "@mui/material";

interface TProps {
  src: string;
}

const Reel: React.FC<TProps> = (props) => {
    const [isUserInteracted, setIsUserInteracted] = useState(false);
  const { src } = props;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current && isUserInteracted) {
        const rect = videoRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleUserInteraction = () => {
    setIsUserInteracted(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  return (
    <Box sx={{ width: "100%", marginBottom: "20px" }} onClick={handleUserInteraction}>
      <video ref={videoRef} src={src} muted controls style={{ width: "100%" }} />
    </Box>
  );
};

export default Reel;
