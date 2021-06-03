import React from 'react';
import ReactRotatingText from 'react-rotating-text';

const Home = () => {
  return (
    <div className="md:h-[520px] flex md:flex-row flex-col relative overflow-hidden">
      <figure className="mobile-image-fade brighten transform -scale-x-1 md:mb-0 -mb-20">
        <img
          src="/images/nothisone.png"
          className="md:shadowed w-full  md:h-full h-[50vh] object-contain object-bottom md:pt-16 pt-20"
        />
      </figure>
      <div className="transition-height duration-500 ease-in-out md:w-2/3 flex flex-col justify-center items-center self-center relative text-white">
        <div className="transition-height duration-500 ease-in-out w-full p-10">
          <h2 className="text-4xl text-center md:text-left pb-4 ">I'm a </h2>
          <h1 className=" text-4xl flex flex-col bg-white items-center text-pink-bright max-w-max rounded-xl p-2 mx-auto md:mx-0">
            <ReactRotatingText
              items={[
                'dad.',
                'developer.',
                'musician.',
                'husband.',
                'fisherman.',
              ]}
            />
          </h1>

          <p className="prose pt-8">
            This site is mostly a collection of things I've made, finished and
            unfinished.
            <br />
            <br />
            Since this site is experimental you'll for sure notice random bugs,
            like weird font pairings, buttons that don't work, or wild color
            schemes that make your eyes hurt.
            <br />
            <br />
            Oh yeah, I'm also the Engineering Manager @{' '}
            <a className="relative" href="https://underbelly.is">
              Underbelly Creative
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
