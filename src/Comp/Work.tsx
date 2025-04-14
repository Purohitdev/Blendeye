function Work() {
  // Wave image source
  const waveSrc =
    'https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c40a10d97a0e199239c16_Group%201000002265.svg';

  // Data for your 6 features
  const features = [
    {
      title: 'Speed',
      text: 'Receive your designs ASAP without compromising quality. Our streamlined process ensures rapid turnarounds, giving you time to focus on what matters most.',
      icon:"https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c4c21ba40744cc3dd7b44_mdi_globe.svg"
    },
    {
      title: 'Transparency',
      text: 'Say bye to budget uncertainties with our transparent pricing model. You’re free to pause or cancel at any time—no hidden fees or surprises.',
      icon:"https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c4c21bb25e8a020cdcfb4_Frame%20124.svg"
    },
    {
      title: 'Results',
      text: 'Good design is one that performs well and connects with your audience. We blend form and function for maximum impact.',
      icon:"https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c4c2142595a5d630ce530_zondicons_checkmark-outline.svg"
    },
    {
      title: 'Engagement',
      text: 'Even though we work asynchronously, we’ll keep you updated daily via Slack or email. Hop on a quick call whenever you need face-to-face clarity.',
      icon :"https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c4c21f4dab3ad725e8c3b_jam_messages-alt.svg"
    },
    {
      title: 'Flexibility',
      text: 'Once signed up, you’ll get your own easy-to-manage Trello board to track requests. No user limits—invite your whole team.',
      icon:"https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c4c21585e5de6d45d3d7a_fluent_board-24-filled.svg"
    },
    {
      title: 'Scalability',
      text: 'Whether you’re a solo entrepreneur or a large business, our subscription plans scale with your needs and growth.',
      icon:"https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c4c2174ead105a6e3891d_fluent_align-top-24-filled.svg"
    },
  ];

  return (
    <div className="relative min-h-[50vh] bg-[#2A2A2A] pb-30">
      {/* Top wave */}
      <div className="absolute -top-8 left-0 w-full overflow-hidden">
        <div className="wave_wrap flex w-[200%] animate-wave">
          <img src={waveSrc} alt="wave" className="w-1/2 object-cover block" />
          <img src={waveSrc} alt="wave" className="w-1/2 object-cover block" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20 pt-20 text-white text-center px-8">
        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-semibold text-left mb-12 px-7">
          <span className="text-[#a3a3a3]">So,</span> why work
          <br />
          <span className="font-semibold ml-8 md:ml-32">
            with DesignThat?
          </span>
        </h2>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-30">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-6 borderrounded-lg text-left"
            >
             <div className="border-b mb-10 flex justify-between items-center pb-8 ">
             <h3 className="text-xl md:text-2xl font-bold mb-2 ">
                {item.title}
              </h3>


              <div className=" min-h-10 min-w-10  rounded-xl bg-[#EDF3A0] flex items-center justify-center">
             <img src= {item.icon} alt="" />

              </div>

              
             </div>
              <p className="text-gray-300 leading-tight">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave (flipped) */}
      <div className="absolute -bottom-8 left-0 w-full overflow-hidden rotate-180 ">
        <div className="wave_wrap flex w-[200%] animate-wave">
          <img src={waveSrc} alt="wave" className="w-1/2 object-cover block" />
          <img src={waveSrc} alt="wave" className="w-1/2 object-cover block" />
        </div>
      </div>
    </div>
  );
}

export default Work;
