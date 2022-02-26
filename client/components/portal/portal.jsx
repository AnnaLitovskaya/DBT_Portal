import React, { useEffect, useState, useRef } from 'react';

function Portal() {
  const [stream, setStream] = useState(null);

  const myVideo = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        myVideo.current.srcObject = currentStream;
      });
  }, []);

  return <h1>myVideo</h1>;
}

export default Portal;
