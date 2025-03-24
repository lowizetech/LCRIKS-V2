import react from 'react';
import { useEffect, useState, useCallback, useRef } from 'react';

import Header from './components/header.jsx';
import CertSection from './components/certsection.jsx';
import AboutSection from './components/aboutsection.jsx';

import './css/app.css';
import './css/sections.css';

const INDEX_POINT = import.meta.env.VITE_API_URL;

const App = () =>
{
	const [sections, setSections] = useState([]);
	const [newText, setNewText] = useState("");
	const [editing, setEditing] = useState(false);
	const [editingIndex, setEditingIndex] = useState(null);
	const [showButton, setShowButton] = useState(false);
	const [activeSectionId, setActiveSectionId] = useState(null);

	const containerRef = useRef(null);
  	const firstSectionRef = useRef(null);

	useEffect(() =>
	{
		(async() =>
		{
			try
			{
				const response = await fetch(INDEX_POINT);
				const data = await response.json();
				setSections(data);
			}
			catch (err) { alert(err); }
		})();
	}, []);

  	useEffect(() =>
  	{
  		const container = containerRef.current;
  		if (!container || !firstSectionRef.current) return;

  		const handleScroll = () =>
  		{
  			const firstSectionBottom =
  				firstSectionRef.current.offsetTop +
  				firstSectionRef.current.offsetHeight - 200;

  			setShowButton(container.scrollTop > firstSectionBottom);
  		};

  		container.addEventListener("scroll", handleScroll);
  		return () => 
  		{
  			container.removeEventListener("scroll", handleScroll)
  		}
  	}, []);

  	useEffect(() =>
  	{
  		const container = containerRef.current;
  		if (!container) return;

  		const handleActiveSection = () =>
  		{
  			const adjustTop = 300;
  			let currentActiveID = null;

  			const containerRect = container.getBoundingClientRect();
  			const middleY = containerRect.top + containerRect.height / 2 - adjustTop;

  			const sectionsElement = container.querySelectorAll("section");
  			sectionsElement.forEach((section) =>
  			{
  				const rect = section.getBoundingClientRect();
  				if (rect.top <= middleY && rect.bottom >= middleY) currentActiveID = section.id;
  			});

  			if (currentActiveID && currentActiveID !== activeSectionId) setActiveSectionId(currentActiveID);
  		};

  		container.addEventListener("scroll", handleActiveSection);
  		handleActiveSection();

  		return () => container.removeEventListener("scroll", handleActiveSection);

  	}, [activeSectionId]);

	const handleScrolling = () =>
	{
		if (containerRef.current) containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
		document.querySelectorAll("section .scrollable").forEach((element) => element.scrollTo({ top: 0 }));
		document.querySelector("#about footer").scrollTo({ top: 0 });
	};

	const handleEditing = useCallback((section_id, content_index, current_text) =>
	{
		if (!editing) return;
		setEditingIndex({ section_id, content_index });
		setNewText(current_text);
	}, [editing]);

	const handleSaving = async() =>
	{
		if (!editing || !editingIndex) return;
	    const updatedSections = sections.map((section) =>
	    {
	    	if (section.id === editingIndex.section_id)
	    	{
	        	const updatedContent = [...section.content];
	        	
	        	if (updatedContent[editingIndex.content_index].type === "ul" || updatedContent[editingIndex.content_index].type === "ol")
	          		updatedContent[editingIndex.content_index].items = newText.split("\n");
	 			
	 			else updatedContent[editingIndex.content_index].text = newText;

	 			return { ...section, content: updatedContent };
	        }
	        return section;
	    });

	    await savingMode(updatedSections, editingIndex.section_id);
	    setEditingIndex(null);
    }

    const handleCancelling = useCallback(() => { setEditingIndex(null); }, []);

    const handleDeleting = async() =>
    {
    	if (!editing || !editingIndex) return;

    	const updatedSections = sections.map((section) =>
    	{
    		if (section.id === editingIndex.section_id)
    		{
    			const updatedContent = section.content.filter((_, index) => index !== editingIndex.content_index);
    			return { ...section, content: updatedContent };
    		}
    		return section;
    	});

    	await savingMode(updatedSections, editingIndex.section_id);
    	setEditingIndex(null);
    }

    const handleAdding = async(section_id, type) =>
    {
    	if (!editing) return;

    	const createNewElement = (type) => (
    	{
    		type,
    		...(type === 'ul' || type === 'ol' ? { items: ["New item"]} : { text: `New ${type} text`}),
    	});

    	const updatedSections = sections.map((section) =>
    		section.id === section_id ? { ...section, content: [...section.content, createNewElement(type)] } : section);

    	await savingMode(updatedSections, section_id);
    	setEditingIndex(null);
    }

    const savingMode = async(updatedSections, section_id) =>
    {
    	const prevSections = [...sections];

    	setSections(updatedSections);
    	const updatedSection = updatedSections.find(s => s.id === section_id);

    	try
    	{
    		const response = await fetch(`${INDEX_POINT}/${section_id}`,

    		{
    			method: "PUT",
    			headers: { "Content-Type": "application/json" },
    			body: JSON.stringify(updatedSection),
    		});
    		console.log(response);
    		if (!response.ok) alert(`Failed to update section: ${response.statusText}`);
    	}
    	catch (err)
    	{
    		alert(err);
    		setSections(prevSections);
    	}
    };

	return (
		<>
			<Header editing={editing} setEditing={setEditing} activeSectionId={activeSectionId}/>
			<div className="margin-top" />
			<main className="scrollable-sections" ref={containerRef}>
				<CertSection ref={firstSectionRef} />

				{sections.map((section) => (
					<section key={section.id} id={section.id_name}>
						<img src="/imgs/birth.png" width="600" height="920"/>
						<div className="scrollable">
							{section.content?.map((item, index) => (
								<div key={index} onClick={() => handleEditing(section.id, index, item.text || item.items?.join("\n"))}>
									{item.type === "h1" && <h1>{item.text}</h1>}
									{item.type === "h2" && <h2>{item.text}</h2>}
									{item.type === "p" && <p>{item.text}</p>}
									{item.type === "ul" && <ul>{item.items.map((li, i) => <li key={i}>{li}</li>)}</ul>}
									{item.type === "ol" && <ol>{item.items.map((li, i) => <li key={i}>{li}</li>)}</ol>}
								</div>
							))}

							{editing && (
								<div>
									<button onClick={() => handleAdding(section.id, "h2")}>Add H2</button>
									<button onClick={() => handleAdding(section.id, "p")}>Add Paragraph</button>
									<button onClick={() => handleAdding(section.id, "ul")}>Add Bullet List</button>
									<button onClick={() => handleAdding(section.id, "ol")}>Add Numbered List</button>
								</div>
							)}
						</div>
					</section>
				))}
				<AboutSection />
			</main>
			{editingIndex && (
				<div className="modal-container">
					<div className="modal">
						<textarea value={newText} onChange={(e) => setNewText(e.target.value)}/>
						<div>
	              			<button onClick={handleSaving}>Save</button>
	             			<button onClick={handleCancelling}>Cancel</button>
	             			<button onClick={handleDeleting} style={{ background: "red", color: "white" }}>Delete</button>
	            		</div>
					</div>
				</div>
			)}
			{showButton && (
		    	<div className="gotoup" onClick={handleScrolling}>
            		<img src="/imgs/arrow-up.svg" alt="" width="25" />
        		</div>
		    )}
		</>
	);
};

export default App;