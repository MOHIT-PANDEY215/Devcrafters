import { SocketContext } from "@/SocketContext";
import React, { useContext } from "react";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <div className="grid grid-cols-2">
      {/* Own Video */}
      {stream && (
        <div className=" flex flex-col flex-wrap justify-center items-center">
          <p>{name || "Name"}</p>
          <video className="h-[300px] w-[300px]" playsInline muted ref={myVideo} autoPlay />
        </div>
      )}
      {/* User Video */}
      {callAccepted && !callEnded && (
        <div className=" flex flex-col flex-wrap justify-center items-center">
          <p>{call.name || "Name"}</p>
          <video className="h-[300px] w-[300px]" playsInline ref={null} autoPlay />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
