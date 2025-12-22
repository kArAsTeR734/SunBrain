import classes from './footer.module.css';
import {aboutLinks, studyLinks} from "./config/links.ts";

const Footer = () => {
  return (
    <section className={classes.footer}>
      <div className="container">
        <a href="#">
          <img
            src="/src/assets/logo.svg"
            alt="logo"
          />
        </a>
        <div className={classes.footerWrapper}>
          <div className="about">
            <div className={classes.footerHeader}>О SunBrain</div>
            {aboutLinks.map(({href,label}) => (
                <div key={label} className={classes.footerItem}>
                  <a href={href} className={classes.footerLink}>
                    {label}
                  </a>
                </div>
            ))}
          </div>
          <div className="study">
            <div className={classes.footerHeader}>Учеба в SunBrain</div>
            {studyLinks.map(({href,label}) => (
                <div key={label} className={classes.footerItem}>
                  <a href={href} className={classes.footerLink}>
                    {label}
                  </a>
                </div>
            ))}
          </div>
          <div className="contacts">
            <div className={classes.footerHeader}>Свяжитесь с нами</div>
            <a href="tel:+88003020412" className={classes.footerLink}>
              +7 (499) 922-89-74
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
