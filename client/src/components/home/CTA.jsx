const CTA = () => {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-br from-rose-50 via-white to-rose-100">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
          Premium Interiors. <br />
          Clear Pricing. On-Time Delivery.
        </h2>

        {/* Sub text */}
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          From modular kitchens to complete home interiors, we design and execute
          spaces with quality materials, transparent pricing, and zero compromises.
        </p>

        {/* Trust points */}
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-6 text-gray-700">
          <span>✓ Transparent Pricing</span>
          <span>✓ Premium Materials</span>
          <span>✓ Timely Project Delivery</span>
        </div>

        {/* CTA Button */}
        <div className="mt-14">
          <a
            href="/contact"
            className="inline-block bg-black text-white px-10 py-4 rounded-full text-lg font-medium hover:opacity-90 transition"
          >
            Get Free Design Consultation
          </a>
        </div>

      </div>
    </section>
  );
};

export default CTA;
