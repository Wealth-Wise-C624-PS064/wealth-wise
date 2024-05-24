import { Link, NavLink } from "react-router-dom";
import { AlignJustifyIcon } from "lucide-react";

import { Button } from "./ui/button";
import { useMediaQuery } from "@/hooks";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";

export default function Header() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <header className="sticky top-0 z-30 bg-white border-b">
      <nav className="flex flex-row items-center justify-between max-w-6xl p-4 mx-auto">
        <h1 className="text-2xl font-semibold">
          <Link to="/">Wealth Wise</Link>
        </h1>
        {isDesktop ? (
          <div className="flex flex-row items-center gap-4">
            {links.map((link) => (
              <NavLink
                key={link.id}
                to={`${link.path}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary-blue font-semibold text-lg"
                    : "text-lg font-semibold hover:text-primary-blue transition-all duration-150"
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Button
              asChild
              className="font-semibold rounded-full bg-primary-blue hover:bg-primary-blue"
            >
              <Link to="/login">Masuk</Link>
            </Button>
          </div>
        ) : (
          <Drawer direction="right">
            <DrawerTrigger>
              <Button size="icon" variant="outline">
                <AlignJustifyIcon className="w-5 h-5" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>Hello</DrawerContent>
          </Drawer>
        )}
      </nav>
    </header>
  );
}

const links = [
  {
    id: "beranda",
    path: "/",
    name: "Beranda",
  },
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
