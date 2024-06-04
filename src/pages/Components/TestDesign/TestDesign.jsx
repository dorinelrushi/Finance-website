import React, { useState } from 'react';

function TestDesign() {
  // State to keep track of which accordion item is open
  const [openIndex, setOpenIndex] = useState(null);

  // Array containing the data for each accordion
  const accordionData = [
    {
      title: "Wealth Wave Summit",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, ullam!"
    },
    {
      title: "Ensuring Fiscal Stability",
      content: "Explore the latest trends in technology and innovation. Engage with top industry experts."
    },
    {
      title: "Securing Financial Wellness",
      content: "Discover the secrets of professional photography with insights from renowned photographers."
      },
     {
      title: "Guaranteeing Fiscal Confidence",
      content: "Discover the secrets of professional photography with insights from renowned photographers."
      },
      {
      title: "Ensuring Economic Resilience",
      content: "Discover the secrets of professional photography with insights from renowned photographers."
    }
  ];

  const toggleItem = (index) => {
    // If the clicked item is already open, close it, otherwise open it and close others
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className='flex flex-col gap-[20px]'>
        {accordionData.map((item, index) => (
          <div key={index} className='border rounded-[15px] border-[#d4d3d3]'>
            <div className='open flex justify-between p-[20px] cursor-pointer' onClick={() => toggleItem(index)}>
              <h2>{item.title}</h2>
              <span>{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className='close p-[18px]'>
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestDesign;
