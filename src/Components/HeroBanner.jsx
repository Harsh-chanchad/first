// HeroBanner.jsx
import React from 'react'

function HeroBanner({banner}) {
  if (!banner) {
    return null; // Handle missing banner prop
  }

  const { image_url, alt_text, heading, subheading, button_text, button_link } = banner;

  return (
    <section className="hero-banner">
      <div>HELLO</div>
      {image_url && <img src={image_url} alt={alt_text || "Hero Image"} className="hero-image" />}
      <div className="hero-content">
        {heading && <h1>{heading}</h1>}
        {subheading && <p>{subheading}</p>}
        {button_text && button_link && (
          <a href={button_link} className="hero-btn">
            {button_text}
          </a>
        )}
      </div>
    </section>
  )
}

export default HeroBanner
