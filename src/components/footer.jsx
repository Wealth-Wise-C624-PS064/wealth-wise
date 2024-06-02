import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary-blue">
      <div className="max-w-6xl px-4 mx-auto py-14">
        <div className="flex flex-row justify-between md:px-4">
          <div className="w-2/5 space-y-3">
            <h2 className="text-lg font-semibold text-white md:text-2xl">
              Wealth Wise
            </h2>
            <p className="text-sm text-white">Calculate, Connect, Thrive!</p>
          </div>
          <div className="space-y-3">
            <div>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.id} className="text-sm font-medium text-white">
                    <Link
                      to={`${link.path}`}
                      className="font-medium after:content-['_↗']"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div>
          <p className="text-sm text-center text-white">
            © {new Date().getFullYear()}{" "}
            <Link
              target="_blank"
              to="/"
              className="font-medium after:content-['_↗']"
            >
              Wealth Wise
            </Link>
            {" . "}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const links = [
  {
    id: "kalkulator",
    path: "/kalkulator",
    name: "Kalkulator",
  },
  {
    id: "forum",
    path: "/forum",
    name: "Forum",
  },
  {
    id: "artikel",
    path: "/artikel",
    name: "Artikel",
  },
  {
    id: "tentang",
    path: "/tentang",
    name: "Tentang",
  },
];
