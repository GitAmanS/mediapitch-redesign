import React from 'react';
import type Home from '~/routes/home';

const  Homebackground = () => {
  return (
    <div
      className="p-4 absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-sky-100 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"
    ></div>
  );
};

export default Homebackground;
