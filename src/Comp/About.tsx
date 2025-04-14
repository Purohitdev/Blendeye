import React from 'react';

type ProcessStepProps = {
  stepNumber: number;
  title: string;
  description: string;
  bgColor: string;        // Tailwind-compatible background class
  icon: string;
  textColor: string;      // Tailwind-compatible text color class like 'text-white' or 'text-[#2a2a2a]'
};


const margins = ['mr-0', 'mr-2', 'mr-4', 'mr-6', 'mr-8'];

const ProcessStep: React.FC<ProcessStepProps> = ({
  stepNumber,
  title,
  description,
  bgColor,
  icon,
  textColor,
}) => (
  <div className={`rounded-3xl ${bgColor} p-6 flex flex-col justify-between h-[50vh] ${textColor} p-5 `}>
    <div className="flex items-center gap-3">
      <span className="bg-white rounded-lg p-2 text-xl">
        <img src={icon} alt="" />
      </span>
      <h3 className="text-2xl font-semibold">{title}</h3>
    </div>
    <div className="text-xs mt-4 font-medium opacity-70 flex flex-col items-end">
  {Array.from({ length: stepNumber }).map((_, idx) => (
    <span key={idx} className={`${margins[idx] || 'ml-10'}`}>
      (0{stepNumber})
    </span>
  ))}
</div>
    <div className="mt-4">
      <p className="text-md">{description}</p>
    </div>
  </div>
);

const About: React.FC = () => (
  <div className="mx-auto px-8 h-auto mb-20 ">
    <h2 className="text-3xl font-semibold text-center mb-12 mt-8">Here's how you get it:</h2>
    
    <div className="flex flex-col md:flex-row gap-6 justify-center">
      <ProcessStep
        stepNumber={1}
        title="Start right away!"
        description="Select one of our plans and book a free discovery call to learn how we can work together. If all good, we'll kick off in the same day."
        bgColor="bg-[#EDF3A0]"
        icon="https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/666fd5983a305793e9285af6_fluent_meet-now-16-regular.svg"
        textColor="text-[#2a2a2a]"
      />
      <ProcessStep
        stepNumber={2}
        title="Request designs"
        description="Request as many designs as you want and sit back, as we craft your designs and deliver first drafts in under 48 hours."
        bgColor="bg-[#d1def8]"
        icon="https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/66577d7d66443f42561dbadf_carbon_magic-wand-filled.svg"
        textColor="text-[#2a2a2a]"
      />
      <ProcessStep
        stepNumber={3}
        title="Finalize"
        description="Even though we always do our best to hit the goal with the first take, you can ask for as many iterations as needed. No additional costs."
        bgColor="bg-[#8882ee]"
        icon="https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/66577d7e40a8e78ea9482522_fa_repeat.svg"
        textColor="text-white"
      />
    </div>

    <div className="mt-12 flex justify-start">
    <p className="text-base md:text-[2rem] w-full md:w-2/3 text-left leading-tight">
  At DesignThat, we go beyond the ordinary to ensure satisfaction of every step of the processes, as our subscription model is designed with you  
  <span className="hidden md:inline bg-[#d1def8] px-2 py-1 rounded-2xl mx-1"> ✌🏻</span> 
  in mind.
</p>


    </div>
  </div>
);

export default About;
