// const team = [
//     {
//       name: "Ravi Kumar",
//       role: "Founder & Agritech Expert",
//       skills: ["Vision", "Leadership", "Agritech", "Strategy"],
//       color: "bg-green-100",
//       image: "https://randomuser.me/api/portraits/men/10.jpg",
//     },
//     {
//       name: "Sneha Verma",
//       role: "Operations Manager",
//       skills: ["Logistics", "Team Coordination", "Training", "Support"],
//       color: "bg-pink-100",
//       image: "https://randomuser.me/api/portraits/women/11.jpg",
//     },
//     {
//       name: "Aman Joshi",
//       role: "Technology Lead",
//       skills: ["Web Dev", "Backend", "APIs", "Innovation"],
//       color: "bg-blue-100",
//       image: "https://randomuser.me/api/portraits/men/12.jpg",
//     },
//     {
//       name: "Kritika Singh",
//       role: "Marketing Head",
//       skills: ["Social Media", "Campaigns", "Branding", "Content"],
//       color: "bg-yellow-100",
//       image: "https://randomuser.me/api/portraits/women/13.jpg",
//     },
//   ];
  
//   export default function TeamSection() {
//     return (
//       <section className="py-16 px-8 mb-10">
     
//         <h2 className="text-7xl font-light text-right mb-12 px-4  ">
//         <span className="text-[#a3a3a3]">Meet </span>
//         <span className="font-semibold text-[#2a2a2a] mr-36">our team</span><br />
//         <span className="font-semibold text-[#2a2a2a] ">behind Blendeye</span>
//       </h2>
  
//         <hr className="mb-12" />
  
//         <div className="flex flex-col lg:flex-row lg:flex-wrap gap-6 justify-center text-[#2a2a2a]">
//           {team.map((member, index) => (
//             <div
//               key={index}
//               className="relative bg-[#F4F4F4] rounded-2xl p-6 w-full lg:w-[48%] min-h-[40vh] flex flex-col justify-between"
//             >
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="text-3xl font-medium mb-1">{member.name}</h3>
//                   <p className="text-md font-light mb-4">{member.role}</p>
//                 </div>
//                 <img
//                   src={member.image}
//                   alt={`${member.name} photo`}
//                   className="absolute top-4 right-4 w-20 h-20 object-cover rounded-full border-4 border-white shadow-md"
//                 />
//               </div>
  
//               <div className="flex flex-wrap gap-2 w-full sm:w-3/4">
//                 {member.skills.map((skill, idx) => (
//                   <span
//                     key={idx}
//                     className={`text-md px-4 py-2 rounded-full whitespace-nowrap font-light ${member.color}`}
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }
  


const team = [
   
    {
      name: "Saurav",
      role: "CEO & Founder",
      skills: ["Leadership", "Vision", "Startup Strategy", "MBA (Lucknow)"],
      color: "bg-green-100",
      image: "/sir.jpeg",
    },
    {
        name: "Dev Purohit",
        role: "Frontend Developer",
        skills: ["UI/UX", "React", "Animations", "Design"],
        color: "bg-blue-100",
        image: "/me.jpg",
      },
    {
      name: "Kanishk ",
      role: "Video Editor",
      skills: ["Editing", "Storyboarding", "Reels", "Color Grading"],
      color: "bg-yellow-100",
      image: "/editor.jpeg",
    },
    {
      name: "Ravindra ",
      role: "Marketing & Ads",
      skills: ["Ad Strategy", "Social Campaigns", "Targeting", "Content"],
      color: "bg-pink-100",
      image: "/nmit.jpeg"    
    },
  ];
  
  export default function TeamSection() {
    return (
      <section className="py-16 px-8 mt-24">
        <h2 className="text-7xl font-light text-right mb-12 px-4">
          <span className="text-[#a3a3a3]">Meet </span>
          <span className="font-semibold text-[#2a2a2a] mr-36">our team</span><br />
          <span className="font-semibold text-[#2a2a2a]">behind Blendeye</span>
        </h2>
  
        <hr className="mb-12" />
  
        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-6 justify-center text-[#2a2a2a]">
          {team.map((member, index) => (
            <div
              key={index}
              className="relative bg-[#F4F4F4] rounded-2xl p-6 w-full lg:w-[23%] min-h-[40vh] flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-medium mb-1">{member.name}</h3>
                  <p className="text-sm font-light mb-4">{member.role}</p>
                </div>
                <img
                  src={member.image}
                  alt={`${member.name} photo`}
                  className="absolute top-4 right-4 w-16 h-16 object-cover rounded-full border-4 border-white shadow-md transition-transform duration-300 ease-in-out hover:scale-110"
                  />
              </div>
  
              <div className="flex flex-wrap gap-2 w-full">
                {member.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`text-sm px-3 py-1 rounded-full whitespace-nowrap font-light ${member.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  