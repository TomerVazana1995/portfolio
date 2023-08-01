import useMediaQuery from "../../hooks/useMediaQuery";
import Link from "./Link";
import { SelectedPage } from "../../shared/types";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const NavBar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "active-navbar";

  return (
    <nav>
      <div className={`navbar ${navbarBackground}`}>
        <div className="navbar-container">
          <div className="navbar-wrapper">
            {/* LEFT SIDE */}
            <h1>TV</h1>

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className="navbar-medium">
                <div className="navbar-md-links">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="About Me"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
              </div>
            ) : (
              <div className="navbar-mobile-menu-icon">
                <button
                  style={{ border: "none", background: "transparent" }}
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Bars3Icon height="1.5rem" width="1.5rem" color="black" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="mobile-menu">
          {/* CLOSE ICON */}
          <div className="icon-menu">
            <button
              style={{ border: "none", background: "transparent" }}
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <XMarkIcon height="1.5rem" width="1.5rem" color="black" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className="side-menu">
            <Link
              page="Hero"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About Me"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
