import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

export default function App() {
  useEffect(() => {
    this.p.seekTo(18.7);
  }, []);

  return (
    <div className="App">
      <ReactPlayer
        ref={(p) => {
          this.p = p;
        }}
        url="//s3.envoy.rocks/bothrs/goud-design-sprint/goud/LhgEcS_GOUD+PROTOTYPE+SHOWCASE.mp4"
        className="react-player"
        playing
        controls
        width="100%"
        height="100%"
      />
      <button onClick={() => this.p.seekTo(0.9999999)}>Seek to end</button>
      <button onClick={() => this.p.seekTo(0.999)}>
        Seek to end (works in Safari)
      </button>
      <button
        onClick={() => {
          console.log(this.p.getDuration());
          this.p.seekTo(this.p.getDuration());
        }}
      >
        Seek to end (with getDuration())
      </button>
      <button onClick={() => this.p.seekTo(12.7)}>Seek to 12.7</button>
      <button onClick={() => this.p.seekTo(42.65)}>Seek to 42.65</button>
    </div>
  );
}
