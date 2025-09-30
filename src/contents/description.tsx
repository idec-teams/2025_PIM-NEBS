import { useEffect, useRef, useState } from 'react';

export function Description() {
  const [activeSection, setActiveSection] = useState('background');
  const sectionRefs = {
    background: useRef<HTMLDivElement>(null),
    problemStatement: useRef<HTMLDivElement>(null),
    projectGoal: useRef<HTMLDivElement>(null),
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
                sectionRefs.background.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'background' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              Background
            </button>
            <button
              onClick={() => {
                sectionRefs.problemStatement.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'problemStatement' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              Problem Statement
            </button>
            <button
              onClick={() => {
                sectionRefs.projectGoal.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'projectGoal' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              Project Goal
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
          {/* Background Section */}
          <div ref={sectionRefs.background} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Background</h2>
            <p className="mb-4">Plastic pollutants keep on accumulating in various environments, disrupting local ecosystems. In the last decade, approximately 4.8-12.7 million tons of plastics entered the ocean annually. The riverine outflow of plastic waste into the global oceans has been estimated to increase to 7 million metric tons in the next 30 years, which will result serious burden in marine ecosystems.&nbsp;Coupled with low recycling rates (i.e., high discard rates into landfills and the environment) and limited end-of-life pathways, plastic pollution has become a cause for global concern, with mounting recognition of its environmental and health effects (1,2). In the last ~20 years, a multitude of natural enzymes have been discovered that can catalyze the breakdown of the common plastic poly (ethylene terephthalate) (PET). While enzymatic PET recycling is an attractive alternative end-of-life route for this waste plastic, the enzymes are not yet optimized for efficient and economical industrial use.</p>
            <p className="mb-4">Recent efforts have been made to relieve the shortcomings of these enzymes by protein engineering. Most of the work in protein engineering toward enzymatic PET depolymerization has focused on PET hydrolases (Figure 1a). Informed by process&nbsp;goals and challenges and lessons learned from TEA/LCA (vide supra), key engineering goals for PET hydrolases include: increased activity, thermostability, expression/solubility, and improved pH and substrate/product tolerance (Figure1b). &nbsp;Meeting these goals will allow for efficient depolymerization in reactions with high PET loadings to high extents, while minimizing enzyme and waste costs, which have been identified as cost and impact drivers of modeled processes. An ideal PET hydrolase would exhibit high thermostability, allowing for longevity in reactions and potential reuse, and could hydrolyze varied substrate types and forms, including semicrystalline PET and un-treated/minimally-treated post-consumer PET, e.g., as shredded flakes.</p>
            <p className="mb-4">The last few years have witnessed impressive progress in tailoring natural enzymes by computational redesign strategies (3). Inspired by the achievements in artificial intelligence for addressing the protein fitness landscape to probe hidden evolutionary information, we employed a computational strategy that incorporates a protein language model and force-field-based algorithms to engineer PET hydrolases with balanced thermostability and hydrolytic capacity. The redesigned variant (TurboPETase) derived from this campaign outperformed the most efficient PET hydrolases currently recognized in the field (LCC (4), LCC-ICCG (5), BhrPETase(6), FastPETase(7), HotPETase(8)) over a range of temperatures (50 &deg;C&ndash;65 &deg;C). The extraordinary degradation performance afforded by TurboPETase allowed nearly complete depolymerization of post-consumer PET bottles in 8 h at a high industrially relevant substrate loading of 200 g kg<sup>&minus;1</sup>, with a maximum production rate of 61.3 g PET L<sup>&minus;1</sup>&nbsp;h<sup>&minus;1</sup>, addressing the challenge regarding residual nonbiodegradable PET waste.</p>
            
            <div className="my-6 flex justify-center">
              <img src="images/description/1.webp" alt="Figure 1" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure: How enzymes break down PET plastic and future goals for enzyme engineering. a. Reaction scheme for PET breakdown.
              </p>
            </div>
            
            <p className="mb-4">In parallel, bio-based polyesters have been developed as alternatives to conventional plastics. However, many of these materials, such as PE-like polyesters and FDCA-derived polymers, still degrade extremely slowly under environmental conditions. This lack of efficient degradation hinders their role in establishing a truly sustainable circular economy.</p>
          </div>

          {/* Problem Statement Section */}
          <div ref={sectionRefs.problemStatement} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Problem Statement</h2>
            <p className="mb-4">Current PET hydrolases (e.g., FAST-PETase, HotPETase) show activity under mild conditions but are unstable or inactive under industrial settings. On the other hand, engineered polyesters such as PE-18,18 or PBF exhibit good performance but resist hydrolysis and enzymatic degradation, even after long incubation times.</p>
            <p className="mb-4">These challenges highlight two critical gaps:</p>
            <ol className="list-decimal pl-6 mb-4">
              <li>Efficient biocatalysts for PET recycling at scale.</li>
              <li>Rationally designed biodegradable polymers with tunable degradation pathways.</li>
            </ol>
            <p className="mb-4">PET hydrolases belong to serine-hydrolase family, a widely distributed group known for their relatively low substrate specificity. The degradation function of PET hydrolases is thought to preexist as a promiscuous function, which then evolves into a primary function (9). Given our limited knowledge of how a sequence encodes catalytic functions in polymer-degrading enzymes, addressing the challenge by exploiting physics-based computational redesign and rational design approaches is a difficult task. Alternatively, a successful approach involves utilizing deep learning models to map the process from protein sequence to function, as demonstrated in many cases.</p>
            <p className="mb-4">Molecular insights into enzyme catalysis, as derived from physics-based molecular modeling, guide the identification and deployment of beneficial mutants to manipulate the activity, promiscuity, size, stability and temperature preferences of enzymes (Figure 2). Design principles are often formulated from observing and investigating known, experimentally characterized enzymes. In this sense, creating design principles allows the field to leverage molecular evolution from nature or the laboratory to inform enzyme engineering efforts. Just as natural enzymes owe their catalytic efficiency and selectivity to several sources, design principles survey many aspects of enzyme scaffolds, including topology, enzyme electrostatics, flexibility and residue networks, or heat capacity. Researchers increasingly elucidate correlations between these molecular simulation-derived features and experimentally characterized kinetics and binding data (10). These phenomenological models present an avenue for rapid scoring of mutation effects and improvement of catalytic functions. Due to the complexity of enzyme catalysis, there are yet undiscovered physical principles underlying enzymes&rsquo; extraordinary catalytic efficiency and selectivity. The investigation of these principles provides a direct path to further derive insights into catalytic activity as the field works toward a more holistic view of catalysis.</p>
            
            <div className="my-6 flex justify-center">
              <img src="images/description/2.webp" alt="Figure 2" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure 2: &nbsp;The life cycle of physics-based principles. Top left: physics-based principles are derived through observation of natural and engineered sources&nbsp;with desired functional profiles such as high efficiency or cold adaptation. An efficient, naturally occurring enzyme human erythrocyte catalase (right). Top right: individual principles and physical phenomena are identified, quantified and better understood through physics-based computational simulations leveraging QM, MD and QM/MM. MD simulations typically model the holoenzyme complex with solvent (right). Bottom right: after identification in multiple systems, design principles are codified into generalized rational design rules that create definite, quantitative functional predictions. Bottom left: design rules are applied to rank beneficial mutations (shown as red spheres on a gray enzyme, right), allowing for recommendations to achieve a given functional objective such as improved efficiency through TS stabilization or ground-state destabilization (left).
              </p>
            </div>
            
            <p className="mb-4">Tuning enzyme surface properties has been proposed as an additional solution to enhancing PET hydrolysis, via improved association with the hydrophobic, noncharged polymer. Creation of hydrophobic patches near the active site by, for example, truncating one of the termini (Figure 3a), has been demonstrated successfully, even conferring observable activity when the wild-type enzyme showed none. Concerning surface electrostatics, a study of two highly related PET hydrolases, Thc_Cut1 and Thc_Cut2, revealed that mutating a residue away from the active site from a charged to a noncharged residue (Figure 3a) resulted in increased hydrolysis. Considering that, during PET enzymatic hydrolysis, the polymer becomes locally negatively charged due to anionic carboxyl groups, the use of surfactants have been proposed as a way to mitigate charge repulsion between the polymer and enzyme. However, from a purely protein engineering perspective, introduction of positively charged residues can increase the binding constant of the enzyme to PET, as demonstrated in PET2, a thermostable enzyme found in a metagenomic library.</p>
            <p className="mb-4">Efforts to transplant the mechanism of the wobbling W185 in PETase to thermophilic LCC and TfCut2 by mutation of the surrounding, smaller residues mimicking IsPETase S214/ I218 (i.e., creating LCC-H218S/F222I) (Figure 2a) showed that activity was increased at low temperatures, but not at higher temperatures86. With that said, transferal of the unique IsPETase S214/I218 to several other PET hydrolases which natively have His/Phe at the analogous sites were reported to enhance activity for those that function at less than 60 &deg;C.</p>
            
            <div className="my-6 flex justify-center">
              <img src="images/description/3.webp" alt="Figure 3" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure 3: &nbsp;Strategies used in rational engineering of PET degrading enzymes.
              </p>
            </div>
            
            <p className="mb-4">In the present study, we employed an AI-driven strategy to analyze the specific binding affinity of enzymes toward the PET ligand through molecular docking with dynamically sampled protein conformations. While HotPETase and FAST-PETase exhibit relatively low hydrolytic efficiency, the molecular basis underlying the superior performance of LCC-ICCG remains poorly understood. Gaining mechanistic insights at the molecular level is essential for the rational design of novel and more efficient PET-hydrolyzing enzymes.</p>
            <p className="mb-4">To this end, we performed MD simulations in combination with density functional theory (DFT) calculations to elucidate the catalytic mechanism of LCC-ICCG in comparison with HotPETase and FAST-PETase. Building on these insights, we further applied this strategy to enhance the PET-depolymerizing activity of the thermophilic cutinase variant ICCG, which achieved the fastest PET depolymerization rate reported to date in a bioreactor under optimal conditions.</p>
            <p className="mb-4">Beyond PET hydrolysis, this work introduces a novel design approach for polyethylene-like polyesters derived from bio-based pyrrolidone diacid. We further expand the concept of closed-loop recycling of PE-like polyesters by integrating enzymatic recycling strategies based on green solvents and low energy consumption, offering a sustainable alternative to the conventional chemical recycling of polyesters that relies on toxic methanol under elevated temperatures.</p>
          </div>

          {/* Project Goal Section */}
          <div ref={sectionRefs.projectGoal} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Project Goal</h2>
            <p className="mb-4">By combining AI-guided enzyme design, experimental evolution, and innovative polymer chemistry, our project aims to: Develop a scalable enzymatic recycling system for PET. Pioneer the design of environmentally responsive bio-based plastics. Demonstrate a closed-loop plastic cycle where waste polymers can be efficiently degraded and reused.</p>
            <p className="mb-4">This interdisciplinary framework bridges synthetic biology, computational chemistry, and materials science, offering a pathway toward sustainable plastic recycling and green material innovation.</p>
          </div>

          {/* References Section */}
          <div ref={sectionRefs.references}>
            <h2 className="text-2xl font-bold mb-4">References</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Jambeck, J. R. et al. Plastic waste inputs from land into the ocean. Science 347, 768&ndash;771 (2015).</li>
              <li>MacLeod, M., Arp, H. P. H., Tekman, M. B. &amp; Jahnke, A. The global threat from plastic pollution. Science 373, 61&ndash;65 (2021).</li>
              <li>Cui, Y., Sun, J. &amp; Wu, B. Computational enzyme redesign: large jumps in function. Trends Chem. 4, 409&ndash;419 (2022).</li>
              <li>Knott, B. C. et al. Characterization and engineering of a two-enzyme system for plastics depolymerization. Proc. Natl. Acad. Sci. 117, 25476&ndash;25485 (2020).</li>
              <li>Pfaff, L. et al. Multiple Substrate Binding Mode-Guided Engineering of a Thermophilic PET Hydrolase. <em>ACS Catal.</em>12, 9790&ndash;9800 (2022).</li>
              <li>Sulaiman, S. et al. Isolation of a novel cutinase homolog with polyethylene terephthalate-degrading activity from leaf-branch compost by using a metagenomic approach. <em>Appl. Environ. Microbiol. </em>78, 1556&ndash;1562 (2012).</li>
              <li>Lu, H. et al. Machine learning-aided engineering of hydrolases for PET depolymerization. Nature 604, 662&ndash;667 (2022).</li>
              <li>Hong, H. et al. Discovery and rational engineering of PET hydrolase with both mesophilic and thermophilic PET hydrolase properties. <em>Nat. Commun.</em>14, 4556 (2023).</li>
              <li>Erickson, E. et al. Sourcing thermotolerant poly (ethylene terephthalate) hydrolase scaffolds from natural diversity. Nat. Commun. 13, 7850 (2022).</li>
              <li>Kari, J., Schaller, K., Molina, G. A., Borch, K. &amp; Westh, P. The Sabatier principle as a tool for discovery and engineering of industrial enzymes.<em>Curr. Opin. Biotechnol.</em>&nbsp;78, 102843 (2022).</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}