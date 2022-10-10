import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import contents from "./contents.json";

export default function VideoList() {
  return (
    <>
    {contents.videos}
          <Plyr
            source={{
              type: "video",
              // @ts-ignore
              sources: [{ src: video.id, provider: video.source }],
            }}
          />
    </>
    // <ul className="video-list">
    //   {contents.videos.map((video) => (
    //     <li key={video.id} className="video-item">
    
        // </li>
      // ))}
    // </ul>
  );
}
