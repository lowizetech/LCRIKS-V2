import react from 'react';
import { forwardRef } from 'react';
import '../css/certsection.css';

const menuItems = [
    { id: "petitions", title: "PETITIONS", desc: "File corrections and amendments for LCR records. Click for requirements." },
    { id: "court_decree", title: "COURT DECREE", desc: "Submit court orders for LCR records corrections and legal compliance. Click for requirements." },
    { id: "legitimations", title: "LEGITIMATION", desc: "Legitimize birth records after parents' marriage. Click for requirements." },
    { id: "birth", title: "FORM 1A BIRTH", desc: "Request birth certificates for registration and validation. Click for requirements." },
    { id: "death", title: "FORM 2A DEATH", desc: "Request death certificates for legal use. Click for requirements." },
    { id: "marriage", title: "FORM 3A MARRIAGE", desc: "Request marriage certificates for registration and validation. Click for requirements." },
    { id: "mun_id", title: "MUNICIPAL ID", desc: "Apply for a valid  municipal ID card of Lala." },
    { id: "pic_id", title: "PICTURE ID", desc: "1x1, 2x2, full body, senior ID, white or red background picture ID with lamination." },
    { id: "about", title: "ABOUT", desc: "Click to learn more about the LCR office of Lala." },
];

const CertSection = forwardRef((props, ref) =>
{
    const handleScrolling = (id) =>
    {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <section id="certificates" ref={ref}>
            <div className="boxes-container">
                {menuItems.map((item, index) => (
                    <div key={index} className="box"
                        onClick={() =>
                        {
                            handleScrolling(item.id);
                            document.querySelectorAll("section .scrollable").forEach((element) => element.scrollTo({ top: 0 }));
                            document.querySelector("#about footer").scrollTo({ top: 0 });
                        }}>
                        <img src="/imgs/birth.png" width="120"/>
                        <div>
                            <h1>{item.title}</h1>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
});

export default CertSection;