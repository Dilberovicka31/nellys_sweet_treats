import React from "react";

function About() {
  return (
    <div>
      <video
        controls
        style={{ width: "50%", maxWidth: "800px", height: " 400px",marginBottom: "24px" }}
      >
        <source src="/assets/images/Flan.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default About;
