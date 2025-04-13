
import { jsx, css } from "@emotion/react";
import React from "react";
import VideoBg from "./Image/bgVideo.mp4";
import './video.css'
const Video = () => (
  <video className="video" css={styles} autoPlay muted loop>
    <source src={VideoBg} type="video/mp4" />
  </video>
);

const styles = css`
  min-width: 100%;
  min-height: 100vh;
  max-width: 100%;
  max-height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export default Video;
