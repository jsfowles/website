import React from 'react';
import ReactRotatingText from 'react-rotating-text';

const Home = () => {
  return (
    <div className="md:h-[520px]  flex md:flex-row flex-col relative pb-10 pt-28 md:pt-0">
      <figure className="brighten md:w-2/3 w-full md:px-16 px-10 grid content-center md:pb-0 pb-10">
        <div className="aspect-w-1 aspect-h-1  ">
          <img
            src="/images/puppy.jpg"
            className="md:shadowed h-full w-full object-cover object-top border-2 border-white rounded-full"
          />
        </div>
      </figure>
      <div className="w-2/3 flex flex-col justify-center items-center relative text-white">
        <div className="w-2/3">
          <ul className="prose-lg text-white font-display uppercase">
            <li>
              <a target="__blank" href="https://github.com/jsfowles">
                Github
              </a>
            </li>
            <li>
              <a target="__blank" href="https://linkedin.com/in/jsfowles">
                LinkedIn
              </a>
            </li>
            <li>
              <a target="__blank" href="https://instagram.com/jsfowles">
                Instagram
              </a>
            </li>
            <li>
              <a target="__blank" href="https://twitter.com/js_fowles">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
