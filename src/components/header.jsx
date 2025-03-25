import React, { useEffect, useRef } from 'react';
import '../css/header.css';

const Header = ({ editing, setEditing, activeSectionId }) => {
  const sliderRef = useRef(null);

  const moveSlider = (el) =>
  {
    if (sliderRef.current)
    {
      sliderRef.current.style.width = `${el.offsetWidth}px`;
      sliderRef.current.style.height = `${el.offsetHeight}px`;
      sliderRef.current.style.left = `${el.offsetLeft}px`;
      sliderRef.current.style.top = `${el.offsetTop}px`;
    }
  };

  useEffect(() =>
  {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link) =>
    {
      link.addEventListener("click", (e) =>
      {
        navLinks.forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
        moveSlider(e.target);
      });
    });

    const activeLink = document.querySelector("nav a.active") || navLinks[0];
    moveSlider(activeLink);

    return () => {
      navLinks.forEach((link) => link.removeEventListener("click", () => {}));
    };
  }, []);

  useEffect(() =>
  {
    if (activeSectionId)
    {
      const link = document.querySelector(`nav a[href="#${activeSectionId}"]`);
      if (link)
      {
        document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        moveSlider(link);
      }
    }
  }, [activeSectionId]);

  const handleClick = () =>
  {
    document.querySelectorAll("section .scrollable").forEach((element) => element.scrollTo({ top: 0 }));
    document.querySelector("#about footer")?.scrollTo({ top: 0 });
  };

  return (
    <header>
      <div className="logo-section">
        <div className="logos">
          <img src="/imgs/ldn-logo.png" width="70" alt="LOGO" />
          <img src="/imgs/lala-logo.png" width="70" alt="LOGO" />
          <img src="/imgs/lcr-logo.png" width="70" alt="LOGO" />
        </div>

        <div className="input-field">
          <img src="/imgs/search.svg" alt="Search" width="30" />
          <input type="text" placeholder="Search" id="searchInput" />
          <div id="clearButton">&times;</div>
        </div>

        <div className="editing-container">
          <div className="switch-container">
            <span>{editing ? "EDITING" : "READONLY"}</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={editing}
                onChange={() => setEditing(!editing)}
              />
              <span className="slider"></span>
            </label>
          </div>

          <a className="lcr-a" href="">LCR LALA</a>
        </div>
      </div>

      <hr />

      <nav>
        <a onClick={handleClick} className="active" href="#certificates">Certificates</a>
        <a onClick={handleClick} href="#petitions">Petitions</a>
        <a onClick={handleClick} href="#court_decree">Court Decree</a>
        <a onClick={handleClick} href="#legitimations">Legitimations</a>
        <a onClick={handleClick} href="#birth">Birth</a>
        <a onClick={handleClick} href="#death">Death</a>
        <a onClick={handleClick} href="#marriage">Marriage</a>
        <a onClick={handleClick} href="#mun_id">Municipal ID</a>
        <a onClick={handleClick} href="#pic_id">Picture ID</a>
        <a onClick={handleClick} href="#about">About</a>

        <div className="slider-nav" ref={sliderRef} />
      </nav>
    </header>
  );
};

export default Header;
