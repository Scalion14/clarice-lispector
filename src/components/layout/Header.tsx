import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="font-display text-2xl font-medium text-primary tracking-wide">
          Clarice Lispector
        </NavLink>
        
        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn("nav-link font-body text-sm uppercase tracking-widest", isActive && "active text-primary")
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/obras"
            className={({ isActive }) =>
              cn("nav-link font-body text-sm uppercase tracking-widest", isActive && "active text-primary")
            }
          >
            Obras
          </NavLink>
          <NavLink
            to="/personalidades"
            className={({ isActive }) =>
              cn("nav-link font-body text-sm uppercase tracking-widest", isActive && "active text-primary")
            }
          >
            Personalidades
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
