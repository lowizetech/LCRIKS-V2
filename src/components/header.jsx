// import react from 'react';
// import { useEffect, useRef } from 'react';

// import '../css/header.css';

// const Header = ({ editing, setEditing }) =>
// {
//     const sliderRef = useRef(null);

//     const moveSlider = (el) =>
//     {
//         sliderRef.current.style.width = `${el.offsetWidth}px`;
//         sliderRef.current.style.height = `${el.offsetHeight}px`;
//         sliderRef.current.style.left = `${el.offsetLeft}px`;
//         sliderRef.current.style.top = `${el.offsetTop}px`;
//     }

//     useEffect(() =>
//     {
//         const navLinks = document.querySelectorAll("nav a");
//         const activeLink = document.querySelector("nav a.active") || navLinks[0];
//         moveSlider(activeLink);

//         navLinks.forEach((link) =>
//         {
//             link.addEventListener("click", (e) =>
//             {
//                 navLinks.forEach(l => l.classList.remove('active'));
//                 e.target.classList.add('active');
//                 moveSlider(e.target);
//             });
//         });

//         return () =>
//         {
//             navLinks.forEach(link =>
//             {
//                 link.removeEventListener("click", () => {});
//             });
//         }
//     }, []);

//     const handleClick = (event) => 
//     {
//         document.querySelectorAll("section .scrollable").forEach((element) => element.scrollTo({ top: 0 }));
//         document.querySelector("#about footer").scrollTo({ top: 0 });
//     }
    
//     return (
//         <header>
//             <div className="logo-section">
//                 <img src="/imgs/CIALOGO.svg" width="70" alt="Logo" />

//                 <div className="input-field">
//                     <img src="/imgs/search.svg" alt="Search" width="30" />
//                     <input type="text" placeholder="Search" id="searchInput" />
//                     <div id="clearButton">&times;</div>
//                 </div>

//                 <div className="editing-container">
//                     <div className="switch-container">
//                         <span>{editing ? "EDITING" : "READONLY"}</span>
//                         <label className="switch">
//                             <input
//                                 type="checkbox"
//                                 checked={editing}
//                                 onChange={() => setEditing(!editing)}
//                             />
//                             <span className="slider"></span>
//                         </label>
//                     </div>

//                     <a className="lcr-a" href="">LCR LALA</a>
//                 </div>
//             </div>

//             <hr />

//             <nav>

//                 <a onClick={handleClick} className="active" href="#certificates">Certificates</a>
//                 <a onClick={handleClick} href="#petitions">Petitions</a>
//                 <a onClick={handleClick} href="#court_decree">Court Decree</a>
//                 <a onClick={handleClick} href="#legitimations">Legitimations</a>
//                 <a onClick={handleClick} href="#petitions">Petitions</a>
//                 <a onClick={handleClick} href="#birth">Birth</a>
//                 <a onClick={handleClick} href="#death">Death</a>
//                 <a onClick={handleClick} href="#marriage">Marriage</a>
//                 <a onClick={handleClick} href="#mun_id">Municipal ID</a>
//                 <a onClick={handleClick} href="#pic_id">Picture ID</a>
//                 <a onClick={handleClick} href="#about">About</a>

//                 <div className="slider-nav" ref={sliderRef}/>
//             </nav>
//         </header>
//     );
// };

// export default Header;

// // import React, { useEffect, useRef } from 'react';
// // import '../css/header.css';

// // const Header = ({ editing, setEditing }) => {
// //   // Create a ref for the slider element
// //   const sliderRef = useRef(null);

// //   const moveSlider = (el) => {
// //     if (sliderRef.current) {
// //       sliderRef.current.style.width = `${el.offsetWidth}px`;
// //       sliderRef.current.style.height = `${el.offsetHeight}px`;
// //       sliderRef.current.style.left = `${el.offsetLeft}px`;
// //       sliderRef.current.style.top = `${el.offsetTop}px`;
// //     }
// //   };

// //   useEffect(() => {
// //     // Query the nav links after component has mounted
// //     const navLinks = document.querySelectorAll('nav a');

// //     // Attach click event listeners
// //     navLinks.forEach((link) => {
// //       link.addEventListener("click", (e) => {
// //         // Remove active class from all links and add to the clicked link
// //         navLinks.forEach(l => l.classList.remove('active'));
// //         e.target.classList.add('active');
// //         moveSlider(e.target);
// //       });
// //     });

// //     // Set initial slider position
// //     const activeLink = document.querySelector("nav a.active") || navLinks[0];
// //     moveSlider(activeLink);

// //     // Cleanup event listeners on unmount
// //     return () => {
// //       navLinks.forEach((link) => {
// //         link.removeEventListener("click", () => {});
// //       });
// //     };
// //   }, []);

// //   const handleClick = (event) => {
// //     document.querySelectorAll("section .scrollable").forEach((element) =>
// //       element.scrollTo({ top: 0 })
// //     );
// //     document.querySelector("#about footer").scrollTo({ top: 0 });
// //   };

// //   return (
// //     <header>
// //       <div className="logo-section">
// //         <img src="/imgs/CIALOGO.svg" width="70" alt="Logo" />

// //         <div className="input-field">
// //           <img src="/imgs/search.svg" alt="Search" width="30" />
// //           <input type="text" placeholder="Search" id="searchInput" />
// //           <div id="clearButton">&times;</div>
// //         </div>

// //         <div className="editing-container">
// //           <div className="switch-container">
// //             <span>{editing ? "EDITING" : "READONLY"}</span>
// //             <label className="switch">
// //               <input
// //                 type="checkbox"
// //                 checked={editing}
// //                 onChange={() => setEditing(!editing)}
// //               />
// //               <span className="slider"></span>
// //             </label>
// //           </div>

// //           <a className="lcr-a" href="">LCR LALA</a>
// //         </div>
// //       </div>

// //       <hr />

// //       <nav>
// //         <a onClick={handleClick} className="active" href="#certificates">Certificates</a>
// //         <a onClick={handleClick} href="#petitions">Petitions</a>
// //         <a onClick={handleClick} href="#court_decree">Court Decree</a>
// //         <a onClick={handleClick} href="#legitimations">Legitimations</a>
// //         <a onClick={handleClick} href="#petitions">Petitions</a>
// //         <a onClick={handleClick} href="#birth">Birth</a>
// //         <a onClick={handleClick} href="#death">Death</a>
// //         <a onClick={handleClick} href="#marriage">Marriage</a>
// //         <a onClick={handleClick} href="#mun_id">Municipal ID</a>
// //         <a onClick={handleClick} href="#pic_id">Picture ID</a>
// //         <a onClick={handleClick} href="#about">About</a>

// //         {/* Attach ref to slider element */}
// //         <div className="slider-nav" ref={sliderRef} />
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Header;

import React, { useEffect, useRef } from 'react';
import '../css/header.css';

const Header = ({ editing, setEditing, activeSectionId }) => {
  // Create a ref for the slider element
  const sliderRef = useRef(null);

  const moveSlider = (el) => {
    if (sliderRef.current) {
      sliderRef.current.style.width = `${el.offsetWidth}px`;
      sliderRef.current.style.height = `${el.offsetHeight}px`;
      sliderRef.current.style.left = `${el.offsetLeft}px`;
      sliderRef.current.style.top = `${el.offsetTop}px`;
    }
  };

  useEffect(() => {
    // Attach click event listeners to nav links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        navLinks.forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
        moveSlider(e.target);
      });
    });

    // Set initial slider position
    const activeLink = document.querySelector("nav a.active") || navLinks[0];
    moveSlider(activeLink);

    // Cleanup event listeners on unmount
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  // New effect: update slider based on activeSectionId from App
  useEffect(() => {
    if (activeSectionId) {
      // Select the corresponding <a> tag by matching its href (assuming href="#sectionId")
      const link = document.querySelector(`nav a[href="#${activeSectionId}"]`);
      if (link) {
        // Remove active class from all links, then add to the found link
        document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        moveSlider(link);
      }
    }
  }, [activeSectionId]);

  const handleClick = () => {
    document.querySelectorAll("section .scrollable").forEach((element) => element.scrollTo({ top: 0 }));
    document.querySelector("#about footer")?.scrollTo({ top: 0 });
  };

  return (
    <header>
      <div className="logo-section">
        <img src="/imgs/CIALOGO.svg" width="70" alt="Logo" />

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
        <a onClick={handleClick} href="#petitions">Petitions</a>
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
