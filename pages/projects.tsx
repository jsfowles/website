import React from 'react';
import ReactRotatingText from 'react-rotating-text';

const data = [
  {
    id: 0,
    title: 'Chase Bliss / Blooper',
    route: 'https://blooper.chaseblissaudio.com',
  },
  {
    id: 1,
    title: 'Droping',
    route: 'https://dropin.underbelly.is',
  },
  {
    id: 2,
    title: 'Reachcast',
    route: 'https://reachcast.io',
  },
  {
    id: 3,
    title: 'Boosted Boards',
    route: 'https://boostedboards.com',
  },
  {
    id: 4,
    title: 'CRV',
    route: 'https://crv.com',
  },
  {
    id: 5,
    title: 'The Farmhouse',
    route: 'https://farmhouse.fowles.dev',
  },
  {
    id: 6,
    title: 'Old Site',
    route: 'https://jsfowles.netlify.app',
  },
  {
    id: 7,
    title: 'Old Old Site',
    route: 'https://old-old-jsfowles.netlify.app',
  },
];

const Home = () => {
  return (
    <div className="md:h-[520px]  flex md:flex-row flex-col relative pb-10 pt-32 md:pt-0">
      <figure className="md:w-2/3 w-full  transform self-center md:pb-0 pb-10">
        <img
          src="/images/mockup.png"
          className="md:shadowed object-contain object-middle md:px-16 px-10"
        />
      </figure>
      <div className="w-full md:w-2/3 flex flex-col justify-center items-center self-center relative text-white">
        <div className="w-full md:px-24 px-10">
          <ul className="prose-lg text-white font-mono uppercase">
            {data.map(({ id, title, route }) => (
              <li key={id}>
                <a href={route} target="_blank">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
