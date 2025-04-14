const services = [
  {
    title: "Web",
    color: "bg-blue-100 ",
    tags: [
      "Landing pages", "Multipage websites", "Blogs", "On-site SEO", "Webflow",
      "Animations & interactions", "Hosting", "CMS", "And more",
    ],
    image: "https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/6658cfd4077c20adfd2810fc_Macbook%20Pro%20Mockup.jpg", // Replace with your image path
  },
  {
    title: "Brand",
    color: "bg-yellow-100 ",
    tags: [
      "Ads", "Social media", "Logos", "Graphics", "Brand guides", "Posters",
      "Brochures", "Slide decks", "Buisness cards", "And more",
    ],
    image: "https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/6658cfd43cda5ce0b31fcd9f_Free_2_ID_Cards_Mockup.jpg", // Replace with your image path
  },
];

export default function Services() {
  return (
    <section className="py-16 px-8 mb-10">
      <h2 className="text-7xl font-light text-right mb-12 px-4 lg:px-30">
        <span className="text-[#a3a3a3]">Our </span>
        <span className="font-semibold text-[#2a2a2a] mr-16">services</span><br />
        <span className="font-semibold text-[#2a2a2a] ">include</span>
      </h2>

      <hr className="mb-12" />

      <div className="flex flex-col lg:flex-row gap-6 justify-center text-[#2a2a2a]" >
        {services.map((service, index) => (
          <div key={index} className="relative bg-[#F4F4F4] rounded-2xl p-6 w-full lg:w-1/2 min-h-[45vh] flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <h3 className="text-3xl font-medium mb-4">{service.title}</h3>
              <img
                src={service.image}
                alt={`${service.title} card`}
                className="absolute top-4 right-4 w-30 h-30 object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-wrap gap-2 w-full sm:w-3/4">
              {service.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`text-md px-4 py-2 rounded-full whitespace-nowrap font-light ${service.color}`}
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
