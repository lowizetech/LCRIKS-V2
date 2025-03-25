import react from 'react';
import '../css/about.css';

const AboutSection = () =>
{
	return (
		<section id="about">
			<footer>
				<div className="title">
					<h1>LOCAL CIVIL REGISTRY OFFICE</h1>
					<h2>PROVINCE OF LANAO DEL NORTE</h2>
					<h2>MUNICIPALITY OF LALA</h2>
				</div>

				<div className="vision">
					<h2>OUR VISION</h2>
					<p>We envisioned the Local Civil Registry of Lala to be the epitome of excellence in civil registration and other related services as we take the challenge of bringing about a difference in the lives of our clients through the product of our professional and dedicated services.</p>
				</div>

				<div className="misson">
					<h2>OUR MISSION</h2>
					<p>In order to attain our vision, we commit ourselves to introduce effective and efficient innovators and bring our services closer to the people of Lala, with the paramount emphasis on the integrity and reliability of our documents by applying the highest standard of service.</p>
				</div>

				<div className="question">
                    <h2>WHAT WE DO?</h2>
                    <p>We are responsible for the registration, correction, and issuance of civil documents, ensuring compliance with national laws and regulations.</p>
                </div>

                <div className="services">
                    <h2>SERVICES</h2>
                    <ul>
                        <li><strong>Certified True Copy of Birth Certificate</strong> – Issuance and correction of birth certificates</li>
                        <li><strong>Certified True Copy of Death Certificate</strong> – Documentation of deaths within the municipality</li>
                        <li><strong>Certified True Copy of Marriage Certificate</strong> – Processing of marriage certificates</li>
                        <li><strong>Petition for Correction</strong> – Amendments to clerical errors in civil records</li>
                        <li><strong>Late Birth Registration</strong> – Registration of events not recorded within the prescribed period</li>
                        <li><strong>Municipal Identification</strong> – Issuance of local government-issued ID cards</li>
                        <li><strong>Photo Picture Identification</strong> – Custom picture id with free image editing</li>
                    </ul>    
                </div>
                    

                <div className="importance">
                    <h2>WHY CIVIL REGISTRATION IS IMPORTANT</h2>
                    <p>Civil registration provides individuals with legal identity and is essential for accessing public services, education, healthcare, and government benefits. It serves as proof of nationality and is required for obtaining official documents such as passports and national IDs.</p>    
                </div>
                    
                <div className="contacts">
                    <h2>CONTACT US</h2>
                    <p>If you need assistance, visit our office at the <strong>Municipal Hall of Lala, Lanao del Norte</strong>, or reach out through the following:</p>
                    <ul>
                        <li><strong>Office Address:</strong> Local Civil Registry Office, Municipality of Lala, Lanao del Norte, Philippines</li>
                        <li><strong>Municipal Civil Registrar:</strong> Geronico Simbajon Villorijo, MCR</li>
                        <li><strong>Office Hours:</strong> Monday to Friday, 8:00 AM - 5:00 PM</li>
                    </ul>
                </div>

                <p id="footer-text">We are here to serve you. Your records, your rights!</p>
			</footer>
		</section>
	);
}

export default AboutSection;