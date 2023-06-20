import { SocketContext } from "@/SocketContext";
import React, { useContext } from "react";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <div className="grid">
      {/* Own Video */}
      {stream && (
        <div className="video">
          <p>{name || "Name"}</p>
          <video playsInline muted ref={myVideo} autoPlay />
        </div>
      )}
      {/* User Video */}
      {callAccepted && !callEnded && (
        <div className="video">
          <p>{call.name || "Name"}</p>
          <video playsInline ref={null} autoPlay />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
