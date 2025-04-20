// export default function Subscription() {
//     return (
//         <section className="px-6 py-30 bg-white">
//             <div className=" mx-auto ">
//                 <h2 className="text-5xl md:text-7xl font-semibold mb-6 px-4  text-center">
//                     <span className="text-[#a3a3a3]">Select</span> a subscription
//                     <br />
//                     <span className="font-semibold ml-8 md:ml-52">  that works  <span className="text-[#a3a3a3]"> for you </span>
//                     </span>
//                 </h2>

//                 <hr className="my-8" />

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
//                     {/* Standard Plan */}
//                     <div className="bg-[#EDF3A0] text-black rounded-2xl p-8 flex flex-col justify-between">
//                         <div>
//                             <div className="flex justify-between items-center mb-4">
//                                 <h3 className="text-2xl font-semibold">Standard</h3>
//                                 <p className="text-xl font-medium">$955/m</p>
//                             </div>
//                             <hr className="border-black/50 mb-6" />

//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-[15px] font-light">
//                                 <ul className="space-y-4">
//                                     <li>- 1 Request at a time</li>
//                                     <li>- Average 48h turnaround</li>
//                                     <li>- Pause or cancel anytime</li>
//                                     <li className="line-through text-gray-500">- Priority support</li>
//                                 </ul>
//                                 <ul className="space-y-4">
//                                     <li>- Trello board with unlimited users</li>
//                                     <li>- Daily Slack updates</li>
//                                     <li>- Available 5 days a week</li>
//                                     <li className="line-through text-gray-500">- Goodnight wishes</li>
//                                 </ul>
//                             </div>

//                             <hr className="border-dashed border-t border-gray-400 my-6" />

//                             <div className="flex items-center gap-2 font-semibold text-black">
//                                 <span>+ Webflow development</span>
//                             </div>
//                         </div>

//                         <div className="mt-8 flex items-center justify-end">
//                             <button className="bg-black text-white text-sm px-6 py-2 rounded-full">
//                                 Book intro call
//                             </button>
//                         </div>
//                     </div>

//                     {/* Plus Plan */}
//                     <div className="bg-[#8982EE] text-white rounded-2xl p-8 flex flex-col justify-between">
//                         <div>
//                             <div className="flex justify-between items-center mb-4">
//                                 <h3 className="text-2xl font-semibold">Plus</h3>
//                                 <p className="text-xl font-medium">$1500/m</p>
//                             </div>
//                             <hr className="border-white/50 mb-6" />

//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-[15px] font-light">
//                                 <ul className="space-y-4">
//                                     <li><b>- 2 Request at a time</b></li>
//                                     <li><b>- Average 24–48h turnaround</b></li>
//                                     <li>- Pause or cancel anytime</li>
//                                     <li>- Priority support</li>
//                                 </ul>
//                                 <ul className="space-y-4">
//                                     <li>- Trello board with unlimited users</li>
//                                     <li>- Daily Slack updates</li>
//                                     <li>- Available 5 days a week</li>
//                                     <li>- Goodnight wishes</li>
//                                 </ul>
//                             </div>

//                             <hr className="border-dashed border-t border-white/50 my-6" />

//                             <div className="flex items-center gap-2 font-semibold text-white">
//                                 <span>+ Webflow development</span>
//                             </div>
//                         </div>

//                         <div className="mt-8 flex items-center justify-end">
//                             <button className="bg-white text-black text-sm px-6 py-2 rounded-full">
//                                 Book intro call
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }



'use client';

import  { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Subscription() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Heading
            gsap.from(headingRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 30%',
                },
            });

            // Animate Cards
            gsap.from(cardsRef.current, {
                opacity: 0,
                y: 80,
                duration: 1,
                stagger: 0.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 30%',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="px-6 py-30 bg-white">
            <div className="mx-auto">
                <h2
                    ref={headingRef}
                    className="text-5xl md:text-7xl font-semibold mb-6 px-4 text-center"
                >
                    <span className="text-[#a3a3a3]">Select</span> a subscription
                    <br />
                    <span className="font-semibold ml-8 md:ml-52">
                        that works <span className="text-[#a3a3a3]"> for you </span>
                    </span>
                </h2>

                <hr className="my-8" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
                    {/* Standard Plan */}
                    <div
ref={(el) => {
    if (el) cardsRef.current[0] = el;
  }}                        className="bg-[#EDF3A0] text-black rounded-2xl p-8 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl font-semibold">Standard</h3>
                                <p className="text-xl font-medium">$955/m</p>
                            </div>
                            <hr className="border-black/50 mb-6" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-[15px] font-light">
                                <ul className="space-y-4">
                                    <li>- 1 Request at a time</li>
                                    <li>- Average 48h turnaround</li>
                                    <li>- Pause or cancel anytime</li>
                                    <li className="line-through text-gray-500">- Priority support</li>
                                </ul>
                                <ul className="space-y-4">
                                    <li>- Trello board with unlimited users</li>
                                    <li>- Daily Slack updates</li>
                                    <li>- Available 5 days a week</li>
                                    <li className="line-through text-gray-500">- Goodnight wishes</li>
                                </ul>
                            </div>
                            <hr className="border-dashed border-t border-gray-400 my-6" />
                            <div className="flex items-center gap-2 font-semibold text-black">
                                <span>+ Webflow development</span>
                            </div>
                        </div>
                        <div className="mt-8 flex items-center justify-end">
                            <button className="bg-black text-white text-sm px-6 py-2 rounded-full">
                                Book intro call
                            </button>
                        </div>
                    </div>

                    {/* Plus Plan */}
                    <div
ref={(el) => {
    if (el) cardsRef.current[1] = el;
  }}                        className="bg-[#8982EE] text-white rounded-2xl p-8 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl font-semibold">Plus</h3>
                                <p className="text-xl font-medium">$1500/m</p>
                            </div>
                            <hr className="border-white/50 mb-6" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-[15px] font-light">
                                <ul className="space-y-4">
                                    <li><b>- 2 Request at a time</b></li>
                                    <li><b>- Average 24–48h turnaround</b></li>
                                    <li>- Pause or cancel anytime</li>
                                    <li>- Priority support</li>
                                </ul>
                                <ul className="space-y-4">
                                    <li>- Trello board with unlimited users</li>
                                    <li>- Daily Slack updates</li>
                                    <li>- Available 5 days a week</li>
                                    <li>- Goodnight wishes</li>
                                </ul>
                            </div>
                            <hr className="border-dashed border-t border-white/50 my-6" />
                            <div className="flex items-center gap-2 font-semibold text-white">
                                <span>+ Webflow development</span>
                            </div>
                        </div>
                        <div className="mt-8 flex items-center justify-end">
                            <button className="bg-white text-black text-sm px-6 py-2 rounded-full">
                                Book intro call
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
