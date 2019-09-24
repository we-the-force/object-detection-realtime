import { useEffect, useState } from 'react'

const useWebcam = videoRef => {
  const [webcamLoaded, setWebcamLoaded] = useState(false)
  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            width: { min: 1024, ideal: 1280, max: 1920 },
            height: { min: 776, ideal: 720, max: 1080 },
            frameRate : {min: 30, max: 30 },
            facingMode: { exact: "environment" }
          }
        })
        .then(stream => {
          // window.stream = stream
          videoRef.current.srcObject = stream
          videoRef.current.onloadedmetadata = () => {
            setWebcamLoaded(true)
          }
        })
    }
  }, [videoRef])
  return webcamLoaded
}

export default useWebcam
