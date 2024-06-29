const HeroSection = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Step into style, step into comfort - Explore our collection today!.<br/>
          Where every step tells a story - Find your perfect pair here.Walk <br/> the
          walk with confidence - Discover shoes that match your stride.
        </p>
        <div className="hero-btn">
          <button className="left-btn">Shop Now</button>
          <button className="right-btn">Category</button>
        </div>
      </div>
      <div className="hero-img">
        <img src="/images/shoe_image.png" alt="" />
      </div>
    </main>
  );
};
export default HeroSection;
