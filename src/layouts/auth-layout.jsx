import PropTypes from "prop-types";

export default function AuthLayout({ children }) {
  return (
    <main className="grid min-h-screen bg-white place-content-center">
      <section className="px-4 py-12 mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 shadow-lg shadow-gray-200 rounded-xl md:flex-row md:p-8 md:gap-4 md:w-[900px] md:h-fit border">
          <div className="md:w-1/2">
            <img
              src="/assets/pattern.jpg"
              alt="illustration-pattern"
              className="object-cover h-[60px] w-full rounded-t-lg md:h-full md:rounded-xl"
              loading="lazy"
            />
          </div>
          <div className="p-6 md:w-1/2">{children}</div>
        </div>
      </section>
    </main>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node,
};
