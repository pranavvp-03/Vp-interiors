import SlidingImageCard from "./SlidingImageCard";

function FeaturedProjects() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-10">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Featured Work & Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <SlidingImageCard
            title="Modern Living Room"
            delay={0}
            navigateTo="/gallery?type=living"
            images={[
              "/interiors/living/living1.jpg",
              "/interiors/living/living2.jpg",
            ]}
          />

          <SlidingImageCard
            title="Modular Kitchen"
            delay={1200}
            navigateTo="/gallery?type=kitchen"
            images={[
              "/interiors/kitchen/kitchen1.jpg",
              "/interiors/kitchen/kitchen2.jpg",
            ]}
          />

          <SlidingImageCard
            title="Bedroom Interior"
            delay={2400}
            navigateTo="/gallery?type=bedroom"
            images={[
              "/interiors/bedroom/bedroom1.jpg",
              "/interiors/bedroom/bedroom2.jpg",
            ]}
          />
        </div>

      </div>
    </section>
  );
}

export default FeaturedProjects;
