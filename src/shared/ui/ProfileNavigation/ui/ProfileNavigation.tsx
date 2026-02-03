import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {useAppLocation} from "@/shared/hooks/useAppLocation.ts";
import './ProfileNavigation.scss'
import React from "react";

export const ProfileNavigation = () => {
  const navigationLinks = useAppLocation();

  return (
      <section className='profile-navigation'>
        <nav className='profile-navigation__links'>
          {navigationLinks.map((link) => (
              <React.Fragment key={link}>
                <a className='profile-navigation__link'
                   href="#"
                   key={link}
                >
                  {link}
                </a>
                {link !== navigationLinks[navigationLinks.length - 1] && <ArrowForwardIcon/>}
              </React.Fragment>
          ))}
        </nav>
      </section>
  );
};

