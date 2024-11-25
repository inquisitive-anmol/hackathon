import AgoraUIKit from "agora-react-uikit";
import { useState } from "react";

const VideoCall = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: import.meta.env.VITE_AGORA_APP_ID,
    channel: "test", // your agora channel
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
      }}
    >
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
  );
};

export default VideoCall;
