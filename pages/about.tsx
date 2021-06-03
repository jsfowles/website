import React from 'react';
import ReactRotatingText from 'react-rotating-text';

const Home = () => {
  return (
    <div className="md:h-[520px] flex md:flex-row flex-col relative">
      <figure className="transform md:mb-0 -mb-20">
        <img
          src="/images/whole-fam-trimmy.png"
          className="mobile-image-fade md:shadowed w-[60vw] h-full self-end object-contain lg:object-bottom object-center  md:pt-16 pt-20"
        />
      </figure>
      <div className="transition-height duration-500 ease-in-out w-full flex flex-col justify-center items-center self-center relative text-white">
        <div className="transition-height duration-500 ease-in-out w-full pb-10 pl-10 pr-10">
          <div className="flex md:flex-row flex-col items-center pb-6">
            <h2 className="text-4xl md:pb-0 pb-6">Hi, I'm</h2>
            <h2 className="ml-6 text-4xl flex flex-col bg-white items-center text-pink-bright max-w-max rounded-xl p-2">
              <ReactRotatingText items={['jake', 'jacob']} />
            </h2>
          </div>

          <p className="text-white prose">
            Once a professional guitarist, I now make cool website for big
            companies like Netflix and Facebook.
            <br />
            <br />
            I enjoy all things related to AI and the neurosciences, especially
            learning machines.
            <br />
            <br />
            Lover of my wife and two kids, fly-fishing, and guitars.
            <br />
            <br />I strongly believe you're never too old or too young to learn
            how to build a guitar and play it while fly fishing in Idaho from a
            wood drift boat you carved with your bare hands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
