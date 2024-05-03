import React from "react";
import DinoBasicInfo from "./DinoBasicInfo";
import styles from "./DinoProfile.module.css";

export default function DinoProfile({ dino }) {
  const { name, imgSrc } = dino;

  let modelHtml = undefined;
  if (!!dino.modelSrc) {
    const iframeStyle = { width: "100%", height: "100%" };
    modelHtml = (
      <iframe
        style={iframeStyle}
        title="Trex - Tyrannosaurus - HiepVu"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src={dino.modelSrc}
      ></iframe>
    );
  }

  const srcHtml = !!modelHtml ? modelHtml : <img src={imgSrc} alt={name} />;
  return (
    <div className={styles.profileContainer}>
      <div className={styles.dinoPicContainer}>{srcHtml}</div>
      <DinoBasicInfo dino={{ ...dino }}></DinoBasicInfo>
    </div>
  );
}
