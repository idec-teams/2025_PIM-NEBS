import { useEffect, useRef, useState } from 'react';

export function Design() {
  const [activeSection, setActiveSection] = useState('overview');
  const sectionRefs = {
    overview: useRef<HTMLDivElement>(null),
    aiDesign: useRef<HTMLDivElement>(null),
    pbsWorkflow: useRef<HTMLDivElement>(null),
    directedEvolution: useRef<HTMLDivElement>(null),
    novelPolyesters: useRef<HTMLDivElement>(null),
    integration: useRef<HTMLDivElement>(null),
    references: useRef<HTMLDivElement>(null)
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
                sectionRefs.overview.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'overview' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => {
                sectionRefs.aiDesign.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'aiDesign' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              AI-Assisted Enzyme Design (PBS Strategy)
            </button>
            <button
              onClick={() => {
                sectionRefs.pbsWorkflow.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'pbsWorkflow' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              Overview of the PBS Workflow
            </button>
            <button
              onClick={() => {
                sectionRefs.directedEvolution.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'directedEvolution' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              Directed Evolution and Activity Screening
            </button>
            <button
              onClick={() => {
                sectionRefs.novelPolyesters.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'novelPolyesters' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              Design of Novel Biodegradable Polyesters
            </button>
            <button
              onClick={() => {
                sectionRefs.integration.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'integration' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              Integration and Impact
            </button>
            <button
              onClick={() => {
                sectionRefs.references.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'references' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              References
            </button>
          </nav>
        </div>
      </div>

      {/* Right Content */}
      <div className="md:w-3/4 text-2xl/10">
        <div className="bg-white p-6 rounded-lg shadow">
          {/* Overview Section */}
          <div ref={sectionRefs.overview} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="mb-4">
              Plastic waste is one of the most persistent environmental challenges of our time. Traditional PET hydrolases exhibit limited activity and stability under industrial conditions, while PE-like polyesters and bio-based polymers suffer from poor degradability<sup>1,2</sup>. To address this, our team designed an integrated workflow combining AI-driven enzyme engineering, computational validation, directed evolution, and novel material innovation. This strategy allowed us to not only generate highly active PET hydrolases but also to design next-generation biodegradable plastics with controllable degradation pathways.
            </p>
            <p className="mb-4">
              Our design has four main pillars:
            </p>
            <p className="mb-2">
              (1) AI-Assisted Enzyme Design (PBS strategy) &ndash; building a predictive computational pipeline to accelerate beneficial mutation discovery.
            </p>
            <p className="mb-2">
              (2) Computational Validation (MD and QM/MM) &ndash; probing catalytic mechanisms and energetic landscapes at atomic resolution.
            </p>
            <p className="mb-2">
              (3) Directed Evolution &amp; High-Throughput Screening &ndash; experimentally verifying and enhancing enzyme variants.
            </p>
            <p className="mb-4">
              (4) Polymer Design &amp; Degradation Studies &ndash; creating hydrophilicity-enhanced and ROS-responsive polyesters for sustainable recycling.
            </p>
          </div>

          {/* AI-Assisted Enzyme Design Section */}
          <div ref={sectionRefs.aiDesign} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">AI-Assisted Enzyme Design (PBS Strategy)</h2>
            <p className="mb-4">
              We developed the PBS platform, which integrates mutation library generation, docking, molecular dynamics, and automated evaluation. This system predicts catalytically favorable conformations that lower activation barriers and stabilize transition states, thus prioritizing mutations for experimental validation<sup>3,4</sup>.
            </p>
            <p className="mb-2">
              Mutation module: defines virtual mutagenesis libraries.
            </p>
            <p className="mb-2">
              Thermostability screening: eliminates unstable variants using &Delta;&Delta;G predictions.
            </p>
            <p className="mb-2">
              TS-analog binding screening: selects mutants that bind transition-state analogs effectively.
            </p>
            <p className="mb-4">
              Reactivity ranking: scores candidates based on electrostatic stabilization energy relative to wild-type.
            </p>
            <p className="mb-4">
              This framework bypasses costly free-energy mapping while retaining strong mechanistic interpretability.
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/design/1.png" alt="PBS design strategies" className="w-3/4 my-4" />
            </div>
            <p className="italic text-center text-lg">
              Figure 1: PBS design strategies. (a) Schematic of the PBS parameter model within the Michaelis&ndash;Menten framework. (b) Workflow phases: modeling, processing, and analysis.
            </p>
          </div>

          {/* PBS Workflow Section */}
          <div ref={sectionRefs.pbsWorkflow} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview of the PBS Workflow</h2>
            <p className="mb-4">
              PBS begins with the enzyme&ndash;substrate complex (&lsquo;&lsquo;WT&rsquo;&rsquo; structure) and a target mutation library, predicting variants that accelerate reactions with non-native substrates. Implemented as an automated command-line tool, PBS leverages the EnzyHTP library and follows four main steps (Figure 2):
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Mutation &ndash; Construct a mutant library via site-saturation, random mutagenesis, rational design, or structure-guided selection.</li>
              <li className="mb-2">Thermostability &ndash; Filter out variants with unfavorable folding free-energy changes (&Delta;&Delta;G_fold) using Rosetta cartesian_&Delta;&Delta;G (2).</li>
              <li className="mb-2">TS-analog binding &ndash; Retain thermostable variants that preferentially bind a transition-state (TS) analog, approximated by the pre-reaction complex; binding enthalpy and entropy proxies are derived from MD-based MMPBSA energies and active-site RMSD.</li>
              <li className="mb-2">Reactivity &ndash; Rank survivors by electrostatic stabilization energy of the TS relative to wild type (&Delta;E_ele). The top ten variants by &Delta;E_ele are nominated for experimental validation.</li>
            </ol>
            <div className="my-6 flex justify-center">
              <img src="images/design/2.png" alt="Influence of structure parameters on the selectivity" className="w-3/4 my-4" />
            </div>
            <p className="italic text-center text-lg">
              Figure 2: Influence of structure parameters on the selectivity.
            </p>
          </div>

          {/* Directed Evolution Section */}
          <div ref={sectionRefs.directedEvolution} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Directed Evolution and Activity Screening</h2>
            <p className="mb-4">
              PBS analysis and free energy calculations indicate that the main factor affecting the binding of PET to the enzyme is the van der Waals repulsion between the residues in the binding pocket (especially the &beta;6-&beta;7 loop) and PET. By remodeling the backbone structure of this loop and optimizing the sequence of the surrounding residues, this paper obtained a mutant.&nbsp;We established a secretion-based high-throughput screening system in <em>E. coli</em>, enabling direct testing of crude enzyme supernatants.
            </p>
            <p className="mb-2">
              Round 1 &ndash; Saturation Mutagenesis: identified mutants with up to 27% improved depolymerization activity (e.g., H218Y).
            </p>
            <p className="mb-2">
              Round 2 &ndash; Combinatorial Mutagenesis: combined beneficial sites, yielding double mutants with 21% further activity enhancement.
            </p>
            <p className="mb-4">
              Round 3 &ndash; Hotspot Diversification: diversified conserved residues, producing multi-site mutants (e.g., LCC-ICCG-R2, LCC-ICCG-R3) that significantly outperformed LCC-ICCG and under high-temperature conditions.
            </p>
            <p className="mb-4">
              This iterative cycle of prediction &rarr; screening &rarr; evolution demonstrates the synergy between computational and experimental design.
            </p>
          </div>

          {/* Novel Biodegradable Polyesters Section */}
          <div ref={sectionRefs.novelPolyesters} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Design of Novel Biodegradable Polyesters</h2>
            <p className="mb-4">
              To complement enzymatic recycling, we designed new bio-based copolyesters with enhanced degradability:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-4">PBTDP (Hydrophilicity-Enhanced Copolyesters). Incorporated bio-derived pyrrolidone dicarboxylic acid (EBPCA) to improve hydrophilicity and enzyme-binding capacity. Achieved nearly 40% weight loss in 50 days under mild hydrolysis, and complete enzymatic degradation within 10 days for PBTDP25.</li>
              <li className="mb-4">PBFTd (ROS-Responsive Polyesters). Inspired by cell membranes, introduced thiodiacetic acid (TDA) to create ROS-responsive bonds. Upon oxidation, polymers gained hydrophilicity and exhibited accelerated degradation, enabling controllable breakdown in biomedical and environmental contexts. These materials not only degrade efficiently but also allow selective recycling from mixed plastic waste streams, achieving up to 92% monomer recovery yield.</li>
            </ol>
          </div>

          {/* Integration and Impact Section */}
          <div ref={sectionRefs.integration} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Integration and Impact</h2>
            <p className="mb-4">
              Our design embodies a closed-loop plastic cycle. Engineered enzymes depolymerize PET efficiently at elevated industrial conditions. Novel polyesters are inherently more degradable and recyclable under mild, environmentally friendly conditions. Together, this project bridges synthetic biology, computational chemistry, and materials science, paving the way toward scalable enzymatic recycling and green polymer design.
            </p>
          </div>

          {/* References Section */}
          <div ref={sectionRefs.references}>
            <h2 className="text-2xl font-bold mb-4">References</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Chamas, A. et al. Degradation rates of plastics in the environment. <em>ACS Sustain. Chem. Eng.</em> 8, 3494&ndash;3511 (2020).</li>
              <li>Borrelle, S. B. et al. Predicted growth in plastic waste exceeds efforts to mitigate plastic pollution. <em>Science</em> 369, 1515&ndash;1518 (2020).</li>
              <li>MacLeod, M., Arp, H. P. H., Tekman, M. B. &amp; Jahnke, A. The global threat from plastic pollution. <em>Science</em> 373, 61&ndash;65 (2021).</li>
              <li>Wei, R., Weber, G., Blank, L. M. &amp; Bornscheuer, U. T. Process insights for harnessing biotechnology for plastic depolymerization. <em>Nat. Chem. Eng</em>. 2, 110&ndash;117 (2025).</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}