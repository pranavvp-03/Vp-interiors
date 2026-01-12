import { Link } from "react-router-dom";

const services = [
  {
    title: "Residential Interiors",
    desc: "Complete home interior solutions crafted to match your lifestyle.",
  },
  {
    title: "Modular Kitchen",
    desc: "Smart, elegant kitchens designed for efficiency and durability.",
  },
  {
    title: "Living & Bedroom Design",
    desc: "Comfortable, stylish spaces that feel truly personal.",
  },
  {
    title: "Commercial Interiors",
    desc: "Functional and aesthetic interiors for offices and businesses.",
  },
];

function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">
          <p className="text-sm tracking-widest text-rose-500 mb-3">
            OUR SERVICES
          </p>
          <h2 className="text-2xl md:text-4xl font-semibold">
            What We Design & Deliver
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Link
              key={index}
              to="/services"
              className="p-8 border rounded-2xl hover:shadow-lg transition block"
            >
              <h3 className="text-lg font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesPreview;
