import PropTypes from "prop-types";

export default function AuthLayout({ children }) {
  return (
    <main className="grid min-h-screen bg-white place-content-center">
      <section className="px-4 py-12 mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 shadow-xl rounded-xl md:flex-row md:p-8 md:gap-10 md:w-[900px] md:h-[580px]">
          <div className="rounded-t-lg md:w-1/2 bg-primary-blue md:rounded-2xl">
            <img
              src="/assets/login.svg"
              alt="illustration-login"
              className="h-[80px] md:w-[400px] w-full md:h-fit object-cover bg-cover"
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
