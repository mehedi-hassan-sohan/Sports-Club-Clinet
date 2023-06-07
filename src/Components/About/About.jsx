import React from 'react';

const About = () => {
  return (
    <section className="py-12 mt-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-10">
        Experience the Ultimate Sports Club Vacation
      </h2>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <p className="mt-4 text-xl text-center md:text-left">
              Welcome to our exclusive sports club vacation, where you can indulge in your passion for sports while enjoying a well-deserved break. We offer a wide range of exhilarating activities and world-class facilities, ensuring an unforgettable experience for sports enthusiasts of all ages and skill levels.
            </p>
            <p className="mt-4 text-xl text-center md:text-left">
              Whether you're a seasoned athlete or just starting out, our expert instructors and coaches are here to guide and support you. With our state-of-the-art equipment, top-notch training programs, and breathtaking surroundings, you'll have the perfect environment to challenge yourself, improve your skills, and have a fantastic time.
            </p>
          </div>
          <div className="md:w-full">
            <div className="image-grid">
              <div className="image-row">
                <div className="image image-01"></div>
                <div className="image image-02"></div>
                <div className="image image-03"></div>
              </div>
              <div className="image-row">
                <div className="image image-04"></div>
                <div className="image image-05"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
