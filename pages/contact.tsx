import React from 'react';
import ReactRotatingText from 'react-rotating-text';

const Home = () => {
  return (
    <div className="md:h-[520px]  flex md:flex-row flex-col relative pb-10 pt-36 md:pt-0">
      <figure className="brighten md:w-2/3 w-full md:px-16 px-10 grid self-center content-center pb-10 md:pb-0">
        <div className="aspect-w-1 aspect-h-1  ">
          <img
            src="/images/fishing.png"
            className="md:shadowed h-full w-full object-cover object-top border-2 border-white rounded-full"
          />
        </div>
      </figure>
      <div className="md:w-2/3 flex flex-col self-center justify-center items-center relative text-white">
        <div className="text-center w-full ">
          <h2 className="mx-auto text-4xl bg-white text-pink-bright max-w-max rounded-xl p-2 b-12">
            <ReactRotatingText
              items={['say_hello', 'talk_guitars', 'lets_fish']}
            />
          </h2>
          <p className="font-mono text-2xl pb-4 pt-10">js.fowles@gmail.com</p>
          <p className="font-mono text-2xl">801.414.5331</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
