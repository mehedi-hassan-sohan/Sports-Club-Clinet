import React from 'react';

const Slider = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/VSxnQF6/lovepik-asian-games-background-image-400483262.jpg"
            alt="Asian Games"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute text-lg font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="mb-4 text-xl sm:text-4xl md:text-5xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Join Our Sports Club Vacation
            </h2>
            <p className="text-sm sm:text-2xl md:text-3xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Escape the routine and enjoy an unforgettable sports adventure with us!
            </p>
            <button className="btn-primary mt-6 p-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Learn More
            </button>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/0Jbhwvg/e4fa36c64bbec5c97379f3dd6507fb01.jpg"
            className="w-full"
            alt="Mountain Hiking"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute text-lg font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="mb-4 text-xl sm:text-4xl md:text-5xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Thrilling Adventures Await
            </h2>
            <p className="text-sm sm:text-2xl md:text-3xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Experience the perfect blend of relaxation and excitement on our sports club vacation, offering a range of sports, leisure activities.
            </p>
            <button className="btn-primary mt-6 p-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Learn More
            </button>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/dj44hc4/pngtree-campus-sports-festival-poster-background-picture-picture-image-1010335.png"
            className="w-full"
            alt="Sports Festival"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute text-lg font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="mb-4 text-xl sm:text-4xl md:text-5xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Relaxation and Excitement Combined
            </h2>
            <p className="text-sm sm:text-2xl md:text-3xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Escape to the thrill of adventure with our sports club vacation, where you can immerse yourself in thrilling activities and create lasting memories.
            </p>
            <button className="btn-primary mt-6 p-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Learn More
            </button>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/wW6P3p2/pngtree-may-fourth-youth-day-theme-background-image-261424.jpg"
            className="w-full"
            alt="Youth Day Celebration"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute text-lg font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="mb-4 text-xl sm:text-4xl md:text-5xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Ultimate Sports Getaway
            </h2>
            <p className="text-sm sm:text-lg md:text-3xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Embark on an extraordinary sports club vacation that combines exhilarating sports, breathtaking landscapes, and unforgettable moments of camaraderie, creating an experience that will stay with you long after you leave.
            </p>
            <button className="btn-primary mt-6 p-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
