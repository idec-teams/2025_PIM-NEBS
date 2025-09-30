import { useEffect, useRef, useState } from 'react';

export function Safety() {
  const [activeSection, setActiveSection] = useState('training');
  const sectionRefs = {
    training: useRef<HTMLDivElement>(null),
    trainingEnforcement: useRef<HTMLDivElement>(null),
    specificSafety: useRef<HTMLDivElement>(null),
    largeInstrument: useRef<HTMLDivElement>(null),
    virtualSimulation: useRef<HTMLDivElement>(null),
  };
  const navRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [navStyles, setNavStyles] = useState({
    position: 'static' as 'static' | 'fixed',
    top: 0,
    width: 'auto'
  });

  // Handle scroll event to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for better UX

      // Check which section is currently in view
      Object.entries(sectionRefs).forEach(([id, ref]) => {
        if (ref.current) {
          const element = ref.current;
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Make navigation sticky when scrolling past it
  useEffect(() => {
    const handleStickyNav = () => {
      const nav = navRef.current;
      const navContainer = navContainerRef.current;
      if (!nav || !navContainer) return;

      const navContainerRect = navContainer.getBoundingClientRect();
      
      // If the top of the nav container is above the viewport
      if (navContainerRect.top <= 0) {
        // Calculate the width from the container to maintain layout
        const containerWidth = navContainer.offsetWidth;
        
        setNavStyles({
          position: 'fixed',
          top: 0,
          width: `${containerWidth}px`
        });
      } else {
        // Reset to normal positioning
        setNavStyles({
          position: 'static',
          top: 0,
          width: 'auto'
        });
      }
    };

    window.addEventListener('scroll', handleStickyNav);
    handleStickyNav(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleStickyNav);
    };
  }, []);

  return (
    <div className="flex flex-row gap-8 px-8 py-8">
      {/* Left Navigation */}
      <div className="sm:w-1/4" ref={navContainerRef}>
        <div 
          ref={navRef}
          className="p-4"
          style={{
            position: navStyles.position,
            top: navStyles.position === 'fixed' ? '0px' : 'auto',
            width: navStyles.width,
            zIndex: 10
          }}
        >
          <nav className="flex flex-col space-y-3 text-3xl">
            <button
              onClick={() => {
                sectionRefs.trainingEnforcement.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'trainingEnforcement' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              Training & Enforcement
            </button>
            <button
              onClick={() => {
                sectionRefs.specificSafety.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'specificSafety' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              Specific Safety of Our Project
            </button>
            <button
              onClick={() => {
                sectionRefs.largeInstrument.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'largeInstrument' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              Large Instrument Operation Training
            </button>
            <button
              onClick={() => {
                sectionRefs.virtualSimulation.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'virtualSimulation' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              Training with Virtual Simulation
            </button>
          </nav>
        </div>
      </div>

      {/* Right Content */}
      <div className="md:w-3/4 text-xl">
        <div className="bg-white p-6 rounded-lg shadow">
          {/* Training Section */}
          <div ref={sectionRefs.training} className="mb-20">
            <p className="mb-4">To safeguard the health and safety of our team members during experimental work, we established and strictly enforce the following laboratory safety regulations:</p>
            
            <p className="mb-4"><strong>Personal Protective Equipment (PPE)</strong>: All team members entering the laboratory must wear appropriate PPE, including lab coats, disposable gloves, and masks. Safety goggles are required when handling volatile chemicals or performing experiments with potential splash risks.</p>
            
            <p className="mb-4"><strong>Laboratory Area Management</strong>: The laboratory and the lounge areas are strictly separated. Eating or drinking inside the lab is prohibited, and items unrelated to experiments may not be brought into or removed from the laboratory to minimize cross-contamination and safety hazards.</p>
            
            <p className="mb-4"><strong>Chemical and Biological Material Handling</strong>: All chemicals must be properly classified and stored. Irritant and volatile chemicals must be handled inside a fume hood. Team members are trained in the safe handling of hazardous chemicals and biological samples, ensuring adherence to standardized procedures.</p>
            
            <p className="mb-4"><strong>Emergency and Fire Safety Equipment</strong>: The laboratory is equipped with comprehensive emergency facilities, including fire blankets, fire extinguishers, smoke detectors, emergency showers, and eyewash stations. Regular training sessions are conducted to ensure that team members can respond swiftly and correctly to emergencies.</p>
          </div>

          {/* Training & Enforcement Section */}
          <div ref={sectionRefs.trainingEnforcement} className="mb-20">
            <h2 className="text-2xl font-bold mb-8">Training & Enforcement</h2>
            
            <p className="mb-4"><strong>On-boarding:</strong> Mandatory training in safety, SOPs, and large instruments (high-speed centrifuge, autoclave, microscopes, etc.); concise instructions posted next to critical equipment (e.g., electroporator, BSC).</p>
            
            <p className="mb-4"><strong>Supervision & records:</strong> Pair-work at early stage; regular audits by instructors; timely entries to the Notebook for traceability</p>
          </div>

          {/* Specific Safety Section */}
          <div ref={sectionRefs.specificSafety} className="mb-20">
            <h2 className="text-2xl font-bold mb-8">Specific Safety of Our Project</h2>
            
            <p className="mb-4">All team members are required to wear gloves and masks during experimental operations to ensure both personal safety and laboratory hygiene. For experiments involving potential aerosol generation or splash hazards, goggles or face shields are also mandatory. Bacterial inoculations and manipulations are performed exclusively in biosafety cabinets, and cultures are maintained in separate incubators to prevent cross-contamination and infection risks.</p>
            
            <p className="mb-4"><strong>Microplastic Experiment Safety:</strong> Microplastics, defined as plastic particles with a diameter smaller than 5 mm, may pose potential risks to human health. During microplastic-related experiments, team members are required to wear gloves, N95 masks, and goggles to minimize inhalation and contact risks. All operations are conducted in a fume hood to prevent accidental release into the environment or the respiratory system.</p>
            
            <p className="mb-4"><strong>Mentor Guidance and Training:</strong> We greatly benefit from the guidance of experienced mentors, who provide comprehensive training on experimental procedures and safety regulations, as well as real-time supervision during laboratory work. Their contributions not only guarantee a safer working environment but also improve the overall efficiency and compliance of our team operations.</p>
            
            <div className="text-center my-6">
              <img src="images/safety/1.webp" alt="Fume hoods" className="w-4/5 mx-auto" />
              <p className="mt-2 text-lg">Figure 1: Fume hoods used in our lab for handling microplastics and volatile reagents</p>
            </div>
          </div>

          {/* Large Instrument Operation Training Section */}
          <div ref={sectionRefs.largeInstrument} className="mb-20">
            <h2 className="text-2xl font-bold mb-8">Large Instrument Operation Training</h2>
            
            <p className="mb-4">The training covers the use of large instruments such as high-speed centrifuges, autoclaves, and inverted fluorescence microscopes. The training details the operating principles of these instruments and emphasizes precautions during operation. High-speed centrifuges require careful attention and strict maintenance. The autoclave fluid level should be checked before each use, and items should be removed promptly after use. Inverted fluorescence microscopes require observation in a dark environment. When observing, be sure to allow your eyes to adjust to the darkness before proceeding. Protective glasses should be worn when adjusting the light source to protect your eyes from UV damage.</p>
            
            <p className="mb-4">The training program covers the use of high-speed centrifuges, autoclaves, inverted fluorescence microscopes, and high-performance liquid chromatography (HPLC) systems. In addition to the operating principles, the training emphasizes key precautions for each instrument. High-Speed Centrifuge: Ensure proper balance of the rotor before use. Do not operate with aged or cracked tubes. Confirm that the lid is securely closed, and never attempt to open the centrifuge while it is running. Autoclave: Check the water level before each run to ensure sufficient liquid. After use, promptly remove sterilized materials and clean the chamber to avoid residue accumulation. Inverted Fluorescence Microscope: Perform observations in a darkened environment and allow your eyes to adapt before use. When adjusting the light source, wear protective goggles to prevent damage from UV or intense light exposure. High-Performance Liquid Chromatography (HPLC): Before operation, check the solvent reservoirs and waste containers to ensure sufficient volume and proper connections. Prepare organic solvents such as methanol or acetonitrile in a fume hood to avoid inhalation hazards. Always degas solvents before starting to prevent bubbles from affecting pressure and signal stability. After experiments, flush the system thoroughly to prolong instrument lifespan and prevent cross-contamination.</p>
            
            <div className="text-center my-6">
              <img src="images/safety/2.webp" alt="HPLC training" className="w-4/5 mx-auto" />
              <p className="mt-2 text-lg">Figure 2: HPLC instrument operation training</p>
            </div>
          </div>

          {/* Training with Virtual Simulation Section */}
          <div ref={sectionRefs.virtualSimulation} className="mb-20">
            <h2 className="text-2xl font-bold mb-8">Training with Virtual Simulation Laboratories</h2>
            
            <p className="mb-4">Before conducting laboratory work, our team participated in systematic online group training using MOOC courses from Peking University and a virtual simulation laboratory platform. The training focused on both molecular biology and microbiology experiments, covering fundamental concepts such as experimental principles, design strategies, and detailed operating procedures.</p>
            
            <p className="mb-4">The virtual simulation projects played a particularly important role. By completing simulated experiments, we were able to practice the entire workflow in a near-real environment, gain familiarity with critical techniques, and understand essential safety precautions. This approach not only strengthened our mastery of experimental methods but also compensated for situations where in-person training was limited. As a result, team members were able to practice laboratory operations in an efficient, autonomous, and safe manner.</p>
            
            <p className="mb-4">This blended model of online courses combined with virtual simulations provided a strong foundation for our subsequent work in the physical laboratory and significantly enhanced both our technical skills and safety awareness.</p>
            
            <div className="text-center my-6">
              <div className="flex justify-center gap-4">
                <img src="images/safety/3-1.webp" alt="Virtual simulation" className="w-2/5" />
                <img src="images/safety/3-2.webp" alt="Virtual simulation" className="w-2/5" />
              </div>
              <p className="mt-2 text-lg">Figure 3: Familiarity with the experimental process</p>
            </div>
            
            <p className="mb-4">In biological experiments, standardized storage of reagents and culture dishes is critical for safety and experimental accuracy, requiring systematic implementation based on principles of classified management, environmental control, and risk traceability. For reagents, chemical reagents must be stored by category: flammable/explosive substances (e.g., ethanol, sodium azide) are kept in explosion-proof cabinets away from heat sources; corrosive reagents (e.g., concentrated sulfuric acid, NaOH) are segregated in corrosion-resistant cabinets with hazard labeling; toxic/sensitizing reagents (e.g., heavy metal salts) undergo dual-lock management with usage registration. Biological reagents demand strict control over activity and contamination: microbial strains (e.g., E. coli) are cryopreserved at -80°C in labeled vials, nucleic acids/enzymes (e.g., plasmids, Taq polymerase) are stored at -20°C in the dark to prevent degradation, and culture media are sealed and refrigerated post-sterilization with expiration dates marked. Culture dish storage differentiates by state: unused glass dishes are autoclaved, inverted, and stored in dry cabinets, while opened plastic dishes are sealed and used within 1 month; contaminated post-use dishes undergo autoclaving (121°C, 30 min) prior to cleaning or hazardous waste disposal, and empty dishes are washed, dried, and reused. General safety protocols include: maintaining well-ventilated, stable storage environments with temperature/humidity monitoring (e.g., daily refrigerator temperature logging); labeling all containers with names, risk levels, and dates; establishing usage and disposal logs; and equipping areas with emergency facilities (e.g., eyewash stations, first-aid kits). Members receive regular training on MSDS and handling procedures for leaks/breakages (e.g., alcohol spill adsorption, glass fragment autoclaving).</p>
            
            <div className="text-center my-6">
              <img src="images/safety/4.webp" alt="Standard storage" className="w-4/5 mx-auto" />
              <p className="mt-2 text-lg">Figure 4: Standard storage of reagents and culture dishes</p>
            </div>
            
            <p className="mb-4">Prior to operating the glove box for polyester synthesis, thorough preparation and adherence to protocols are critical. First, inspect the glove box for integrity: confirm the sealing performance of doors and viewports, ensure the gas circulation system (including desiccants and oxygen-removing components) functions properly, and verify that oxygen levels remain below 1 ppm and dew point stays under -60°C. Check nitrogen/argon cylinder pressures, keeping a spare available to maintain stable inert gas supply. For personal protection, wear a lab coat, chemical-resistant gloves (nitrile over latex), safety goggles, tie back long hair, and avoid loose accessories to prevent entanglement. Pre-treat materials: store monomers, solvents, or catalysts in desiccators with molecular sieves to eliminate moisture, and transfer liquids via sealed syringes. During operation, use the transition chamber correctly—evacuate or purge it with inert gas 3 times before introducing materials, and avoid overloading (no more than 2/3 capacity) to prevent glove damage. Handle tools gently to avoid scratching gloves; if a puncture occurs, halt work immediately and replace the glove after purging the chamber. Conduct all tasks calmly to prevent sparks from metal collisions, and continuously monitor gas levels—pause and troubleshoot leaks (e.g., faulty seals or valves) if oxygen exceeds 5 ppm.</p>
            
            <p className="mb-4">After completing experiments, safely conclude operations and prepare for future use. Seal remaining materials in water/oxygen-resistant containers for removal via the transition chamber, and dispose of waste (e.g., spent catalysts) per lab guidelines. Clean residual liquids/powders with anhydrous ethanol to prevent corrosion, power down reaction components, and log daily usage (gas consumption, seal checks) for maintenance scheduling. In emergencies, respond swiftly: for gas leaks, evacuate, activate ventilation, and notify supervisors to locate and repair leaks (nitrogen poses asphyxiation risks in high concentrations). For chemical spills, cover liquids with absorbents or neutralize corrosives with sodium bicarbonate before cleanup. Only trained personnel may operate the glove box—new users must complete supervised mock experiments (material transfer, glove replacement) and pass assessments to ensure competence in protocols and emergency response. These measures collectively safeguard against hazards, ensuring safe and reliable polyester synthesis.</p>
            
            <p className="mb-4">To determine the glass transition temperature (Tg) of polyester samples, a differential scanning calorimetry (DSC) method is employed, following standardized preparation and operation protocols. First, prepare the sample: weigh 10–20 mg of dry polyester powder (pre-dried under vacuum at 80°C for 4 hours to remove residual moisture, which could introduce artifactual endothermic peaks) into an aluminum DSC crucible with a crimped lid to prevent decomposition or mass loss during heating. Calibrate the DSC instrument using a standard indium sample to ensure accurate temperature and heat flow measurements, then clean the sample chamber with inert gas (nitrogen) to eliminate contaminants. Place the sample crucible on the sample stage and a blank aluminum crucible on the reference stage. Program the DSC to heat from room temperature to 20–30°C above the expected Tg (typically 10–15°C/min for polyesters) under a constant nitrogen flow (50 mL/min) to maintain an inert atmosphere. Start the test and record the heat flow vs. temperature curve throughout the heating process.</p>
            
            <p className="mb-4">After completing the DSC run, analyze the data to identify Tg. Examine the thermogram for a step change in the baseline heat capacity—this inflection point corresponds to the glass transition. Use tangent-line analysis or software tools (e.g., TA Universal Analysis) to precisely determine the midpoint of the transition, which defines Tg. Validate results by ensuring no overlapping thermal events (e.g., melting or decomposition peaks) interfere with the baseline shift; if present, adjust the heating range or rate and repeat the test. Note that Tg may vary with heating rate, so maintain consistent conditions for reproducibility. Finally, document the Tg value with uncertainty margins and cross-reference with literature or control samples to confirm accuracy. This workflow ensures reliable Tg measurement, critical for characterizing polyester chain mobility and processing behavior.</p>
            
            <div className="text-center my-6">
              <img src="images/safety/5.webp" alt="DSC procedure" className="w-4/5 mx-auto" />
              <p className="mt-2 text-lg">Figure 5: Experimental Procedure for Measuring Glass Transition Temperature (Tg) via DSC​</p>
            </div>
            
            <p className="mb-4">Adherence to basic laboratory safety norms is fundamental to preventing accidents, protecting personnel, and maintaining a secure experimental environment. Wearing a full-length lab coat is mandatory at all times​​ when entering the lab—this includes during setup, experimentation, and cleanup. Lab coats must be fastened securely (to the neck and waist), made of fire-resistant material (e.g., cotton or polyester blend), and free of tears or contamination. They act as a barrier against chemical splashes, biological agents, and particulate matter, minimizing direct skin exposure. Additionally, closed-toe shoes (no sandals or open heels) and safety goggles/glasses are required to shield against spills, projectiles, or airborne hazards. Loose clothing, jewelry, or long hair must be secured to prevent entanglement in equipment.</p>
            
            <div className="text-center my-6">
              <div className="flex justify-center gap-4">
                <img src="images/safety/6-1.webp" alt="Laboratory safety" className="w-1/2" />
                <img src="images/safety/6-2.webp" alt="Laboratory safety" className="w-[30%]" />
              </div>
              <p className="mt-2 text-lg">Figure 6: Laboratory Safety Protocols for Routine Operations​</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}