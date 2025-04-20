


import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Minus, Plus } from "lucide-react";

const faqs = [
    {
        question: "How is subscription better than a regular agency or full-time designer?",
        answer: `With a subscription, you get the best of both worlds.

Unlike a regular agency, you avoid fluctuating costs and lengthy contracts while enjoying faster turnaround times and unlimited design requests.

Compared to a full-time designer, who can cost $60,000-$100,000 per year with benefits and expenses like trainings, office, 401k, vacations etc., or agency rates of $100-$150 per hour, our subscription model offers the same expertise and flexibility at a fraction of the cost.

It’s a flexible, efficient, and budget-friendly way to get high-quality designs whenever you need them.`,
    },
    {
        question: "What’s included in the design subscription?",
        answer: `The subscription covers a wide range of services including brand assets, social media graphics, website UI, app design, illustrations, slide decks, and more.

Requests are handled one at a time, ensuring focused and high-quality delivery. If you have multiple brands, you can manage them under one subscription or add more based on your needs.`,
    },
    {
        question: "How fast will I receive my designs?",
        answer: `Designs are typically delivered within 1–2 business days depending on the complexity of the request.

Smaller tasks like banners or social posts might be completed within a day, while larger tasks like a full landing page may take a few more. Turnaround times are always shared transparently.`,
    },
    {
        question: "Who will be working on my requests?",
        answer: `You’ll work directly with an experienced designer who understands your brand.

No hand-offs, no account managers—just a consistent and personalized design experience from someone who becomes an extension of your team.`,
    },
    {
        question: "Is there a limit to how many requests I can make?",
        answer: `Nope! You can add as many design requests to your queue as you'd like.

We’ll work through them one by one in order of priority. If you need faster output, we offer add-on options for rush delivery or additional capacity.`,
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const answerRefs = useRef([] as Array<HTMLDivElement | null>);

    const toggle = (index: number) => {
        if (openIndex === index) {
            // Close current
            const el = answerRefs.current[index];
            if (el) {
                gsap.to(el, {
                    height: 0,
                    opacity: 0,
                    duration: 0.4,
                    ease: "power2.inOut",
                    onComplete: () => {
                        setOpenIndex(null); // only after animation completes
                    },
                });
            } else {
                setOpenIndex(null);
            }
        } else {
            // Close previous
            if (openIndex !== null && answerRefs.current[openIndex]) {
                gsap.to(answerRefs.current[openIndex], {
                    height: 0,
                    opacity: 0,
                    duration: 0.4,
                    ease: "power2.inOut",
                });
            }

            // Open new
            const el = answerRefs.current[index];
            if (el) {
                gsap.set(el, { height: "auto" }); // allow getting natural height
                const fullHeight = el.scrollHeight;
                gsap.fromTo(
                    el,
                    { height: 0, opacity: 0 },
                    {
                        height: fullHeight,
                        opacity: 1,
                        duration: 0.4,
                        ease: "power2.out",
                    }
                );
            }
            setOpenIndex(index);
        }
    };

    useEffect(() => {
        // Init all answer refs to 0 height
        answerRefs.current.forEach((el, idx) => {
            if (el) {
                el.style.height = openIndex === idx ? `${el.scrollHeight}px` : "0px";
                el.style.overflow = "hidden";
                el.style.opacity = openIndex === idx ? "1" : "0";
            }
        });
    }, [openIndex]);

    return (
        <section className="bg-[#F4F4F4] p-8 rounded-3xl max-w-7xl mx-auto mb-20">
            <h2 className="text-7xl font-medium mb-8">FAQs</h2>
            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-300 pb-4">
                        <button
                            onClick={() => toggle(index)}
                            className="flex items-center justify-between w-full text-left"
                        >
                            <h3 className="text-xl font-medium">{faq.question}</h3>
                            {openIndex === index ? (
                                <Minus className="h-5 w-5 transition-all duration-300" />
                            ) : (
                                <Plus className="h-5 w-5 transition-all duration-300" />
                            )}
                        </button>

                        <div
                            ref={(el) => {
                                answerRefs.current[index] = el;
                            }} className="overflow-hidden mt-4 text-gray-700 whitespace-pre-line"
                            style={{ height: 0, opacity: 0 }}
                        >
                            <div className="py-2">{faq.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
