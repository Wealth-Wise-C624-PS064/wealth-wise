import { Link, NavLink } from "react-router-dom";
import { AlignJustifyIcon } from "lucide-react";

import { useCurrentUser, useLogout, useMediaQuery } from "@/hooks";

import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function Header() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const { currentUser } = useCurrentUser();

  const { logout } = useLogout();

  return (
    <header className="sticky top-0 z-30 bg-white border-b">
      <nav className="flex flex-row items-center justify-between max-w-6xl p-4 mx-auto">
        <h1 className="text-2xl font-semibold">
          <Link to="/">
            <img
              src="/assets/wealth-wise.png"
              alt="wealth-wise-logo"
              className="object-cover w-32"
              loading="lazy"
            />
          </Link>
        </h1>
        {isDesktop ? (
          <div className="flex flex-row items-center gap-4">
            {links.map((link) => (
              <NavLink
                key={link.id}
                to={`${link.path}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary-blue font-semibold"
                    : "font-semibold hover:text-primary-blue transition-all duration-150"
                }
              >
                {link.name}
              </NavLink>
            ))}

            {currentUser ? (
              <Button
                type="button"
                onClick={() => logout()}
                className="font-semibold rounded-full bg-primary-blue hover:bg-primary-blue"
              >
                Logout
              </Button>
            ) : (
              <Button
                asChild
                className="font-semibold rounded-full bg-primary-blue hover:bg-primary-blue"
              >
                <Link to="/login">Masuk</Link>
              </Button>
            )}
          </div>
        ) : (
          <Sheet>
            <SheetTrigger>
              <AlignJustifyIcon className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-left">Wealth Wise</SheetTitle>
                <SheetDescription className="text-left">
                  <div className="flex flex-col gap-3">
                    {links.map((link) => (
                      <NavLink
                        key={link.id}
                        to={`${link.path}`}
                        className={({ isActive }) =>
                          isActive
                            ? "text-primary-blue font-medium"
                            : "font-medium hover:text-primary-blue transition-all duration-150"
                        }
                      >
                        <SheetTrigger>{link.name}</SheetTrigger>
                      </NavLink>
                    ))}
                    {currentUser ? (
                      <Button
                        type="button"
                        onClick={() => logout()}
                        className="font-semibold rounded-full bg-primary-blue hover:bg-primary-blue"
                      >
                        Logout
                      </Button>
                    ) : (
                      <Button
                        asChild
                        className="font-semibold rounded-full bg-primary-blue hover:bg-primary-blue"
                      >
                        <Link to="/login">Masuk</Link>
                      </Button>
                    )}
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
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
