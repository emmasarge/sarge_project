import React from 'react';

export const SkillSearchBar = ({ handleSearch }: any) => {
  return (
    <div >
      <input
        className='border-2 text-[1.25em] lg:text-[1.45em] w-full lg:w-11/12 max-w-[380px]   border-dark bg-transparent pt-2.5 pb-2.5 px-2 lg:px-4  placeholder:italic placeholder:text-[0.8em] placeholder:tracking-wide lg:placeholder:text-[0.85em] placeholder:font-light placeholder:text-dark mb-1.5 lg:mb-3 flex justify-center  focus:outline-none'
        type="text"
        placeholder="search skills"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

