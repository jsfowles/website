import React from 'react';
import Link from 'next/link';

const navItems = [
  { id: 0, title: 'about', route: '/about' },
  { id: 1, title: 'projects', route: '/projects' },
  { id: 2, title: 'social', route: '/social' },
  { id: 3, title: 'contact', route: '/contact' },
];

const Navigation = () => {
  return (
    <div className="flex justify-between w-full  relative z-50 ">
      <div className="w-1/3">
        <Link passHref href="/">
          <h4 className="text-center pt-4 text-lg uppercase text-white">
            <a>jsfowles</a>
          </h4>
        </Link>
      </div>
      <ul className="p-8 w-2/3 flex justify-center pt-4">
        {navItems.map(({ route, id, title }) => (
          <li className="uppercase pl-8 text-white">
            <Link passHref href={route} key={id}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
