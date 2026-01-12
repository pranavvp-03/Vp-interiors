import MainLayout from "../layouts/mainLayout";

function Services() {
  return (
    <MainLayout>

      {/* Page Header */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Our Interior Services
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Thoughtfully designed interior solutions that combine aesthetics,
            comfort, and functionality.
          </p>
        </div>
      </section>

      {/* Services Content (we’ll expand later) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-500">
            Detailed services will be added here.
          </p>
        </div>
      </section>

    </MainLayout>
  );
}

export default Services;
