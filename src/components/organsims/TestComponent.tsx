import React from 'react';
import { useApiRequest } from '../../hooks/API';


export const TestComponent = () => {
  const url = 'https://sarge-api-23-8cdf3807bdf0.herokuapp.com/jobs/';
  const { data, loading, error } = useApiRequest(url);




  let content = data && data.map((item: any) => {
    return item;
  })




  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='w-11/12 mx-auto text-gray-700'>
      <div className='flex flex-row items-start justify-start px-4'>

        {content && content.map((item: any, index: number) => {
          return (
            
              <div key={index} className='flex flex-col w-11/12 px-3'>
                <h1>{item.title}</h1>
                <p>{item.company_name}</p>
<div className='flex flew-row max-w-[400px] flex-wrap'>
                {item.skills.map((skill: any, index: number) => {
                  return (
                    
                      <div key={index}>
                      <p>{skill}</p>
                      </div>
                    )
                })}</div>
              </div>
            
          )
        })}
      </div>
    </div>
  );
};

