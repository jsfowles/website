import React from 'react';
import ReactRotatingText from 'react-rotating-text';

const Home = () => {
  return (
    <div className="md:h-[520px]  flex md:flex-row flex-col relative pb-10 pt-40 md:pt-0">
      <figure className="md:w-2/3 w-full  transform self-center md:pb-0 pb-10">
        <img
          src="/images/mockup.png"
          className="md:shadowed object-contain object-middle md:px-16 px-10"
        />
      </figure>
      <div className="w-full md:w-2/3 flex flex-col justify-center items-center self-center relative text-white">
        <div className="w-full md:px-24 px-10">
          <ul className="prose-lg text-white font-mono uppercase">
            <li>
              <a href="https://blooper.chaseblissaudio.com/">
                Chase Bliss / Blooper
              </a>
            </li>
            <li>
              <a href="https://dropin.underbelly.is/">Dropin</a>
            </li>
            <li>
              <a href="https://www.reachcast.io/">Reachcast</a>
            </li>
            <li>
              <a href="https://underbelly.is/making-it-awesome-with/boosted-boards">
                Boosted Boards
              </a>
            </li>
            <li>
              <a href="https://crv.com">CRV</a>
            </li>
            <li>
              <a href="https://farmhouse.fowles.dev">The Farmhouse</a>
            </li>
            <li>
              <a href="https://jsfowles.netlify.app">Old Site</a>
            </li>
            <li>
              <a href="https://old-old-jsfowles.netlify.app">Old Old Site</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
