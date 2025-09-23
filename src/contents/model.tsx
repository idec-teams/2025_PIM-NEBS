import { useEffect, useRef, useState } from 'react';

export function Model() {
  const [activeSection, setActiveSection] = useState('introduction');
  const sectionRefs = {
    introduction: useRef<HTMLDivElement>(null),
    pbsDesign: useRef<HTMLDivElement>(null),
    overview: useRef<HTMLDivElement>(null),
    workflowDetails: useRef<HTMLDivElement>(null),
    performanceMetrics: useRef<HTMLDivElement>(null),
    methods: useRef<HTMLDivElement>(null),
    results: useRef<HTMLDivElement>(null),
    conclusion: useRef<HTMLDivElement>(null),
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
                sectionRefs.introduction.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'introduction' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              Model Introduction
            </button>
            <button
              onClick={() => {
                sectionRefs.pbsDesign.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'pbsDesign' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              1. PBS design strategy
            </button>
            <button
              onClick={() => {
                sectionRefs.overview.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'overview' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              2. An overview of the PBS workflow
            </button>
            <button
              onClick={() => {
                sectionRefs.methods.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'methods' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              3. Methods
            </button>
            <button
              onClick={() => {
                sectionRefs.results.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'results' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              4. Results
            </button>
            <button
              onClick={() => {
                sectionRefs.conclusion.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'conclusion' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              Conclusion
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
          {/* Introduction Section */}
          <div ref={sectionRefs.introduction} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Model Introduction</h2>
            <p className="mb-4">
              Protein design is being transformed by artificial intelligence (AI), which accelerates our ability to engineer proteins for drug discovery, biotechnology, and synthetic biology. By navigating the vast and complex sequence space while alleviating the scarcity of structural and functional data, AI enables unprecedented precision, scale, and speed in creating proteins with tailored functions. These advances have fueled the development of new computational toolkits that enhance both major design strategies. In directed evolution, AI models predict functional outcomes from sequence and suggest beneficial mutations, thereby shortening experimental cycles (1-2). In rational design, AI predicts structures at near-experimental resolution, even without homologous templates, and is capable of generating entirely novel proteins de novo (3).
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/model/1.png" alt="Figure 1" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure 1: Protein design strategies and AI-enabled workflows. a, Protein design begins by defining project objectives across three axes—function, structure, and developability, which together shape the strategy for exploring sequence space to identify optimal candidates. b, AI augments every stage of this workflow: from strategy formulation and protein database search (T1), through structure prediction (T2) and function prediction (T3), to sequence (T4) and structure generation (T5). Finally, AI-driven virtual screening (T6) and DNA synthesis (T7) streamline the transition from in silico candidates to experimental testing and validation.
              </p>
            </div>
          </div>

          {/* PBS Design Strategy Section */}
          <div ref={sectionRefs.pbsDesign} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. PBS design strategy</h2>
            <p className="mb-4">
              The Pre-Binding State (PBS) model integrates the core concepts of both the Houk and Warshel schools: the former emphasizes the contribution of key transition states in the enzyme-substrate complex to reducing the activation enthalpy (ΔH<sup>‡</sup>), while the latter focuses on the role of enzyme–substrate binding energy in lowering the activation entropy. By analyzing the stability of pre-reactive states adjacent to key transition states along MD trajectories, the model evaluates the impact of amino acid mutations on enzyme activity, substrate adaptability, and mutational effects. Building upon PBS model, QM calculations are used to determine the energy barriers between pre-reactive and transition states, providing a foundation for subsequent machine learning modeling to elucidate the relationship between structural topological parameters and catalytic activity. Specifically, structural snapshots of the pre-reactive state are extracted from classical MD simulations and subjected to large-scale QM/MM optimization (Figure 2a). Transition-state structural features are then employed to define initial constraints in MD simulations, which are progressively relaxed to examine how amino acid mutations and substrate variations influence pre-reactive state stability. This strategy aims to construct catalytically active conformations-those that significantly lower activation energy and stabilize transition states-to capture the energetic determinants underlying substrate recognition and specificity. These parameters are derived from established organic reaction stereoelectronic principles, ensuring robust physical interpretability (Figure 2b). Once geometric definitions are applied to MD trajectories, PBS calculates the proportion of catalytically ready states within the ensemble. This approach bypasses the need for computationally intensive QM/MM free-energy mapping while still preserving mechanistic interpretability. Moreover, integration with PBS analysis allows estimation of the effect of sequence mutations, ligand modifications, or material design changes on catalytic readiness.
            </p>
            <div className="my-6">
              <div className="flex justify-center mb-4">
                <img src="images/model/2.png" alt="Figure 2" className="w-3/4 my-4" />
              </div>
              <p className="italic text-center text-lg">
                Figure 2: Design strategies based on the PBS. (a) Schematic of the "PBS" parameter model in the Michaelis-Menten model of an enzyme-catalyzed reaction. (b) The steps consisted of three main phases: modeling, processing, and analysis.
              </p>
            </div>
          </div>

          {/* Overview Section */}
          <div ref={sectionRefs.overview} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. An overview of the PBS workflow</h2>
            <p className="mb-4">
              PBS inputs the enzyme-substrate complex structure (i.e., considered as the ''WT'' structure) along with a target library of mutations and predicts beneficial mutations that accelerate the enzymatic reaction of a specified non-native substrate. Empowered by the EnzyHTP library (4), PBS serves as an automatically operated command line tool. The workflow involves four steps: mutation, thermostability screening, TS-analog binding screening, and reactivity ranking (Figure 3).
            </p>
            <div className="my-6">
              <div className="flex justify-center mb-4">
                <img src="images/model/3.png" alt="Figure 3" className="w-3/4 my-4" />
              </div>
              <p className="italic text-center text-lg">
                Figure 3: PBS workflow. PBS proceeds through four modules: (1) Mutation—define the mutant library using site-saturation, random mutagenesis, rational design, or structure-guided selection; (2) Thermostability—remove variants with unfavorable folding free-energy changes (ΔΔG_fold) computed with Rosetta cartesian_ΔΔG (2); (3) TS-analog binding—retain thermostable variants that favorably bind a transition-state (TS) analog, approximated by the pre-reaction complex; binding enthalpy and an entropy proxy are estimated from MD trajectories via MMPBSA energy and active-site RMSD, respectively; (4) Reactivity—rank survivors by the electrostatic stabilization energy of the TS relative to wild type (ΔE_ele). The top ten by ΔE_ele are nominated for experimental testing.
              </p>
            </div>
          </div>

          {/* Workflow Details Section */}
          <div ref={sectionRefs.workflowDetails} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2.1 Workflow details</h2>
            <p className="mb-4">
              The Mutation module specifies the ''mutant library'' to be screened and accommodates diverse construction strategies, including site-saturation mutagenesis, random mutagenesis, rational design, and other structure-based selections. Thermostability screening filters out thermally unstable variants based on ΔΔG_fold, with folding free energy evaluated by Rosetta cartesian_ΔΔG. In TS-analog binding screening, we exclude mutants predicted to weaken the rate-determining TS binding. Following a standard approximation, the pre-reaction complex serves as a TS analog to quantify mutational effects on binding enthalpy (MMPBSA) and a conformational-entropy proxy (active-site RMSD), both derived from MD trajectories (see Computational Implementation). From the remaining variants, Reactivity ranking prioritizes candidates by the electrostatic stabilization energy of the TS relative to the wild type (ΔE_elec), which reflects the expected change in catalytic activity upon mutation. The top ten mutants by ΔE_elec constitute the final PBS recommendations for experiment. PBS inherits its capacity to apply QM and MD modeling to hundreds of enzyme variants from the high-throughput platform (5).
            </p>
          </div>

          {/* Performance Metrics Section */}
          <div ref={sectionRefs.performanceMetrics} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2.2 Performance metrics</h2>
            <p className="mb-4">
              We evaluate PBS using two metrics: hit rate and function-enhancing speed (FES). <em>Hit rate</em> is the number of experimentally confirmed hits divided by the number of predicted candidates (here, 10), representing the probability that a recommended mutant improves function. <em>FES</em> is computed by identifying the variant with the greatest increase in turnover, then dividing its fold improvement by the total time consumption for discovery, quantifying how rapidly functional gains are achieved via unguided screening or PBS-guided experimentation.
            </p>
          </div>

          {/* Methods Section */}
          <div ref={sectionRefs.methods} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Methods</h2>
            <h3 className="text-xl font-semibold mb-3">3.1 Computational implementation</h3>
            <p className="mb-4">
              PBS takes the enzyme-substrate complex structure (i.e., that considered as the ''wild-type'' structure) and the target mutant library of screening as input and predicts beneficial mutations as output. The PBS workflow consists of four steps, namely mutation, thermostability screening, TS-analog binding screening, and reactivity ranking (Figure 3). These steps operate in an automated manner using our high-throughput enzyme modeling platform EnzyHTP. Below, we detail each step in the workflow.
            </p>
            
            <p className="font-semibold mt-6 mb-2">Step 1: Mutation</p>
            <p className="mb-4">
              The workflow begins with constructing a mutant library from the prepared wild-type enzyme–substrate complex. Using this structure as the reference, candidate variants are generated through site-saturation mutagenesis, random mutagenesis, rational design, or other empirical strategies. EnzyHTP provides the assign_mutant API to automate this process. In this study, site-saturation mutagenesis was employed to define the starting pool of mutants.
            </p>
            
            <p className="font-semibold mt-6 mb-2">Step 2: Thermostability screening</p>
            <p className="mb-4">
              Next, thermally unstable mutants are removed. The stability of each variant is evaluated by the change in folding free energy (ΔΔG_fold) relative to wild type, computed via Rosetta's cartesian_ddg protocol and automated through the get_rosetta_ddg API in EnzyHTP. Mutants are ranked by ΔΔG_fold, with positive values indicating destabilization. To reduce downstream computational cost, approximately 60% of predicted unstable variants were discarded in this work.
            </p>
            
            <p className="font-semibold mt-6 mb-2">Step 3: TS-analog binding screening</p>
            <p className="mb-4">
              The reduced library is then evaluated for transition-state (TS) analog binding. Mutant–substrate complexes are constructed by replacing target side chains (integrating PyMol and Amber). These serve as inputs for molecular dynamics (MD) simulations, with constraints applied to reaction coordinates (bond distances, angles, etc.) to approximate the pre-reaction complex as a TS analog. After equilibration, 100-ns production trajectories are sampled as conformational ensembles.
            </p>
            <p className="mb-4">
              For each mutant: Binding enthalpy is estimated with the MM-PBSA method. Active-site flexibility is measured as the RMSD of residues within 5 Å of the substrate. Lower RMSD indicates greater rigidity, which correlates with reduced activation entropy and improved catalysis. Mutants are ranked separately by MMPBSA energy (strong to weak binding) and active-site RMSD (rigid to flexible). Only variants consistently ranking high in both lists are retained. In this study, the top 40 candidates were selected as a practical balance between computational filtering and experimental feasibility.
            </p>
            
            <p className="font-semibold mt-6 mb-2">Step 4: Reactivity ranking</p>
            <p className="mb-4">
              The final step evaluates chemical reactivity using the electrostatic stabilization energy of the TS (ΔΔG_ele). This descriptor reflects how the enzyme's interior electric field stabilizes a reacting dipole, which correlates with changes in activation energy or enthalpy. For each MD snapshot: A QM cluster model of the reacting species and surrounding residues is built. Single-point energy calculations are performed with Gaussian16 via the EnzyHTP interface. The bond dipole is derived using Multiwfn99, and ΔΔG_ele is calculated as the negative dot product between the dipole and the local electric field.
            </p>
            <p className="mb-4">
              Mutants are ranked from negative to positive ΔΔG_ele, with more negative values indicating stronger TS stabilization relative to wild type. The top ten variants were recommended for experimental validation in this work. Importantly, the final number of selected mutants is case-dependent, determined by balancing experimental resources with the potential benefit of testing additional candidates.
            </p>
          </div>

          {/* Results Section */}
          <div ref={sectionRefs.results} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Results</h2>
            <h3 className="text-xl font-semibold mb-3">4.1 Favorable PBS Conformations Facilitate Catalysis in LCC-ICCG enzyme</h3>
            <p className="mb-4">
              There is an urgent need for circular recycling routes for commodity plastics. Among them, poly(ethylene) terephthalate (PET) is particularly important due to its global prevalence in packaging and textiles. Its high durability and moisture resistance, while valuable in use, have led to substantial environmental accumulation of PET waste. Current PET recycling options span mechanical (physical), chemical, and biological approaches. Within the biological realm, a major worldwide effort is underway to industrialize PET hydrolysis using enzymes, reflecting the promise of mild operating conditions and closed-loop monomer recovery. Enzymatic depolymerization of poly (ethylene terephthalate) (PET) has received considerable attention for closed-loop polyester recycling. A homogeneity study under industrial conditions reveals that LCC-ICCG outperforms the other the best-performing reported PET hydrolases (FAST-PETase, HotPETase), suggesting a path to scale-up. However, understanding of their PET-degrading activity and influencing factors remains incomplete, impeding the development of uniform approaches for enhancing PET hydrolases for industrial applications. 
            </p>
            <p className="mb-4">
              To understand the enhanced catalytic efficiency of LCC-ICCG, we performed molecular dynamics simulations and DFT calculations. In enzyme-catalyzed reactions, the proximity and orientation of these atoms are crucial for acylation to occur. The PBS of the enzyme-substrate complex, which reflects the optimal conformation for nucleophilic attack, can be evaluated by analyzing these geometric criteria. To quantify the PBS population, we selected reactive conformations that satisfy both the optimal nucleophilic attack angle (100° ≤ θ ≤ 110°) and the d(C-Oγ) distance within 3.5 Å. LCC-ICCG displayed a markedly higher fraction of reactive PBS conformations, reaching an occupancy of 37.3%, with the nucleophilic attack angle tightly constrained within the optimal 100°–110° range (Figure 4a). This suggests a more favorable alignment for the HOMO (nucleophile) and LUMO (π*(C=O) of the ester group), facilitating the nucleophilic attack. In comparison, FAST-PETase and HotPETase processed PBS conformations with lower occupancies of 11.3% and 8.2%, respectively (Figure 4 b,c). We further analyzed the structural characteristics of the PBSs by examining the non-covalent interactions within the enzyme-PET complex via IGMH analysis. Notably, LCC-ICCG formed significantly stronger non-covalent interactions between the active pocket and the ester bond compared to HotPETase and FAST-PETase. This was particularly evident in the interaction between V212 and the ester bond, where the resulting isosurface displayed a stronger binding network in LCC-ICCG (Figure 4d-f).
            </p>
            <p className="mb-4">
              The mechanism of serine hydrolases involved in a double-proton transfer mechanism, where aspartic acid abstracts a proton from a histidine. We measured the distances between the proton of the histidine (Nδ1 atom) and the carboxylate oxygen atoms of the nearby aspartic acid (H242/H237 and Asp), which is crucial for proton transfer. Interestingly, LCC-ICCG formed bifurcated hydrogen bonds between H242 (Nδ1-H···Oδ1D237, ~2.9 Å; Nδ1-H···Oδ2D237, ~3.0 Å), whereas HotPETase and FAST-PETase only formed a single hydrogen bond (Figure 4g). The strength of these hydrogen bonds was calculated using electron density at bond critical points (BCPs), revealing a bond strength of -5.6 kcal/mol for LCC-ICCG, compared to -1.8 kcal/mol and -2.1 kcal/mol for HotPETase and FAST-PETase, respectively. This stronger hydrogen bonding in LCC-ICCG supports a more effective proton transfer, which in turn enhances the nucleophilic attack at the acylation step. Additionally, the C-H···O hydrogen bond formed between V212 of LCC-ICCG and the non-carbonyl oxygen atom of the ester bond (O(C=O)) provides further stabilization to the PBS conformation. This interaction is absent in HotPETase and FAST-PETase, where I208 (the equivalent residue to V212) has a bulkier side chain, creating steric hindrance that reduces the pocket size and affects the substrate's positioning within the active site. The C-H···O hydrogen bond in LCC-ICCG, along with the reduced steric hindrance from the smaller V212 side chain, allows for a more favorable binding of the substrate in the active pocket, facilitating the acylation reaction. Moreover, in the LCC-ICCG system, the residue V212 forms hydrogen bonding interaction with the Oγ1D207 atom (N-H···O, ~3.1 Å), which helps stabilize the conformation of Asp and promotes the formation of a more stable interaction between D206 and H237. This improved interaction between H237 and D206 in LCC-ICCG enhances the basicity of D206, which is crucial for its role in proton transfer during the acylation stage. The stabilization of this interaction lowers the free energy barrier of the acylation step, thereby accelerating the overall PET depolymerization process. Finally, the QTAIM analysis revealed the LCC-ICCG complex have significant noncovalent interactions due to the of BCPs. The BCPs formed between V212, D210, and W190 stabilize the catalytic triad's location and maintain the conformational flexibility of the "wobbling" W190 residue, which plays a critical role in substrate binding and product release during the depolymerization process (Figure 4i).
            </p>
            <div className="my-6">
              <div className="flex justify-center mb-4">
                <img src="images/model/4.png" alt="Figure 4" className="w-3/4 my-4" />
              </div>
              <p className="italic text-center text-lg">
                Figure 4: PBS analysis and non-covalent interaction analysis of enzyme. (a) Distribution of d(C-Oγ) distances and Bürgi-Dunitz attack angles for LCC-ICCG, (b) HotPETase, and (c) FAST-PETase. (d) Non-covalent interaction analysis of LCC-ICCG, (e) HotPETase, and (f) FAST-PETase bound to the PET substrate. Blue regions represent hydrogen bonding attraction, while green indicates weak attractive interactions. (g) Distance analysis of the hydrogen bonds between Asp and His in the catalytic triad of the enzyme-PET complex. (h) Distance analysis between V212-D210 and V212-W190 in LCC-ICCG. (i) QTAIM analysis.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-8">4.2 Quantum and Molecular Simulations of PBDP Enzymatic Depolymerization</h3>
            <p className="mb-4">
              Candida antarctica lipase B (CALB) is one of the most extensively utilized commercial biocatalysts due to its high stability and broad substrate specificity. It has been successfully applied in a wide spectrum of reactions, including esterification, transesterification, as well as hydrolysis and depolymerization of ester-containing polymers in aqueous systems (6). The interaction between polyester substrates and CALB is critical for determining degradation efficiency. To gain molecular-level insight into this process, MD simulations were performed on PBDP0 and PBDP25, followed by PBS analysis to probe enzyme–substrate recognition and reactivity. Rather than relying solely on near-attack conformations, frontier molecular orbital information of transition states was used to define PBS structures, which represent TS-like conformations extracted from MD trajectories (7).
            </p>
            <p className="mb-4">
              Detailed mechanistic investigation indicated that the critical rate-limiting event involves the nucleophilic attack of the catalytic serine residue (S105) on the substrate carbonyl group. This process results in the transient formation of a high-energy tetrahedral intermediate, which plays a pivotal role in driving the catalytic cycle forward. PBS conformations were characterized by the nucleophilic distance d(C-OγS105) and attack angle (Figure 5c-i). Scatterplots revealed that the ester group of PBDP25 aligned toward OγS105, consistent with PRS conformations, while PBDP0 adopted an inverted orientation. Notably, 23.2% of PBDP25 structures exhibited reactive PRS conformations, whereas none were observed for PBDP0 (Figure 5). Cluster analysis indicated that residues A281 and W104 in the PBDP25–CALB complex acted as a "claw," capturing pyrrolidone groups within the catalytic tunnel (Figure 5d). In contrast, these residues were too distant to interact effectively in the PBDP0 complex. Atomic contact analysis confirmed that A281 and W104 maintained close interactions (3.5-4.0 Å) with pyrrolidone rings during simulations, compared with 5.2–5.8 Å for PBDP0 methylene groups (Figure 5e). IGMH and QTAIM analyses further highlighted stronger hydrogen-bonding and noncovalent interactions in PBDP25–CALB (Figure 5f, g), as evidenced by higher ρ values at bond critical points. These interactions facilitated the formation of PBS conformations, thereby enhancing substrate binding and overall biodegradability of PBDP copolyesters.
            </p>
            <p className="mb-4">
              Following cleavage of pyrrolidone-linked ester groups, degradation proceeded to TDA. To elucidate the mechanism, subsequent enzymatic steps were examined for PBDP25 using MD simulations and DFT cluster calculations. Two ester groups (E1 and E2) were found to bind CALB, with PRS populations of 31.4% and 47.5%, respectively (Figure 5a, b). Optimized transition states of the acylation step revealed proton transfer from Ser105 to His224 concurrent with nucleophilic attack on the carbonyl carbon (Figure 5c). The NεH224–OγS105 distances were 2.11 Å (E1) and 2.15 Å (E2).
            </p>
            <p className="mb-4">
              The intrinsic reaction coordinate–derived energy profiles revealed relatively low activation barriers, calculated to be 12.1 and 13.4 kcal/mol for the E1–CALB and E2–CALB complexes, respectively (Figure 5d). These values suggest that both complexes undergo catalysis with high efficiency. Notably, the obtained barriers are lower than those previously reported for CALB-catalyzed acylation reactions involving small molecular substrates, such as the cysteine–CALB variant QW4, which exhibits an activation barrier of 13.9 kcal/mol (8). This comparison highlights the favorable energetic landscape of the current system and underscores the potential of CALB in facilitating ester bond transformations with enhanced catalytic proficiency. Thus, CALB-catalyzed depolymerization of PBDP copolyesters is energetically favorable, highlighting the efficiency of pyrrolidone incorporation in promoting enzymatic biodegradation.
            </p>
            <div className="my-6">
              <div className="flex justify-center mb-4">
                <img src="images/model/5.png" alt="Figure 5" className="w-3/4 my-4" />
              </div>
              <p className="italic text-center text-lg">
                Figure 5: Comprehensive analysis of the catalytic mechanism of CALB-mediated degradation of PBDP copolyesters. (a) (i) Schematic representation of the BD angle. (ii, iii) Two-dimensional distributions of nucleophilic attack distance d(C-OγS105) and BD angle for (ii) PBDP25–CALB and (iii) PBDP0–CALB complexes obtained from MD simulations, highlighting the differences in PBS populations. (b) Representative binding conformations derived from clustering of MD trajectories for (i) PBDP25–CALB and (ii) PBDP0–CALB complexes. (c) Quantification of NCI at the enzyme–substrate interface by monitoring the sampling distances between substrate atoms and residue W104 across MD simulations. (d) Topological analysis of PBDP-CALB complex via popular QTAIM framework. The orange balls represented the existence of BCPs. (e) IGMH analysis of the enzyme-substrate complexes. (f, g) PBS analyses of (f) E1 and (g)E2 bound with CALB during MD simulations, showing distinct populations of catalytically competent conformations. (h) Optimized TS structures of the acylation step. Key distances are indicated in Å. (i) Free energy profiles of the enzymatic degradation pathway.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-8">4.3 Selective Enzymatic Recycling of PBDPs from Mixed Plastic Waste</h3>
            <p className="mb-4">
              Hydrolyzate obtained after enzymatic hydrolysis of PBDPs can be directly used as high-purity building blocks for polymer re-synthesis, providing an environmentally friendly and low-energy recycling route. This strategy not only aligns with the concept of a circular economy but also overcomes the limitations of conventional plastic recycling, where material properties often degrade after multiple cycles. A key challenge in sustainable recycling is the selective depolymerization of target polymers from complex mixed plastic waste streams. In this work, we demonstrate that PBDP20 can be selectively depolymerized and monomers efficiently recovered from a mixture containing common commodity plastics. As illustrated in Figure 6e, mixed films of PBDP20, polypropylene (PP), poly(vinyl chloride) (PVC), and PET were immersed in an aqueous buffer (PBS, pH 7.4) containing CALB (240 μg/mL) at 37 °C
            </p>
            <p className="mb-4">
              Due to the orthogonal reactivity introduced by the bio-based pyrrolidone diacid units in PBDP, and the intrinsic chemical stability of PP, PVC, and PET under the given mild conditions, only PBDP20 underwent rapid enzymatic depolymerization. After only 2 days, PBDP20 films exhibited pronounced fragmentation; the hydrophobic long-chain diacid 1,14-tetradecanedioic acid (TDA) precipitated as a fine white powder, whereas the pyrrolidone-based oligomers persisted in solution. The precipitated TDA was simply collected by filtration, washed, and dried, achieving a high-purity monomer recovery yield of 92%, while the other plastics in the mixture maintained their original morphology and mass (Figure 6f). Compared with previously reported enzymatic recycling systems (Figure 6g), the use of non-engineered, commercially available CALB in this study delivered recovery efficiencies that exceed most wild-type enzyme systems and are nearly comparable to protein-engineered hydrolases such as TurboPETase or engineered cutinases, without the complexity of enzyme modification. Importantly, the entire recycling process was conducted at 37 °C in water, drastically reducing energy requirements and avoiding toxic organic solvents typically involved in chemical methanolysis recycling. The CALB enzyme maintained stable catalytic activity over extended operation-control experiments confirmed that even after being stored at 37 °C for 10 days, CALB was still able to depolymerize PBDP at a comparable rate to freshly prepared enzyme. Furthermore, immobilized commercial CALB preparations are known to exhibit enhanced activity and recyclability, which suggests that an immobilized-enzyme-based process could further improve the efficiency, stability, and lower the cost of large-scale PBDP recycling.
            </p>
            <div className="my-6">
              <div className="flex justify-center mb-4">
                <img src="images/model/6.png" alt="Figure 5" className="w-3/4 my-4" />
              </div>
              <p className="italic text-center text-lg">
                Figure 5: (a) Mass loss of PBDP20/25 after 10 days: complete degradation under CALB catalysis; minimal loss in pure hydrolysis. (b) SEM: porous, fractured surfaces after enzymatic attack. (c) Enzymatic depolymerization and chemical recycling of PBDP20 carried out in the presence of mixed plastic waste streams containing PET, PP, and PVC. The results demonstrate the selectivity of the process, highlighting the efficient breakdown of PBDP20 even in a heterogeneous waste environment. (d) 1H NMR spectra comparison between virgin and recycled 2,5-thiophenedicarboxylic acid (TDA). (e) Comparison of monomer recovery efficiency: this work's CALB system vs. wild-type and engineered enzyme systems. (f) ¹H NMR: virgin vs. regenerated PBDP20. (g) DSC: regenerated polymer exhibits similar crystallinity to virgin. (h) Mechanical performance: regenerated retains or surpasses virgin polymer.
              </p>
            </div>
          </div>

          {/* Conclusion Section */}
          <div ref={sectionRefs.conclusion} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p className="mb-4">
              We developed a physics-guided computational tool, PBS, to predict beneficial mutations for catalyzing reactions of non-native substrates. PBS begins with the enzyme-substrate complex as an input, screens a mutant library through three selection steps (i.e., assessing thermostability, TS-analog binding, and electrostatic stabilization), and provides ten beneficial mutant candidates as an output. By unifying these case studies, we highlight how PBS serves as a cross-disciplinary framework that connects molecular recognition, catalytic mechanism elucidation, and rational materials design. This dual demonstration underscores the broader impact of PBS: advancing mechanistic understanding in enzymology while offering practical solutions to pressing challenges in global health and sustainability.
            </p>
          </div>

          {/* References Section */}
          <div ref={sectionRefs.references}>
            <h2 className="text-2xl font-bold mb-4">References</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Ebrahimi, S. B. & Samanta, D. Engineering protein-based therapeutics through structural and chemical design. <em>Nat. Commun</em>. 14, 2411 (2023).</li>
              <li>Listov, D., Goverde, C. A., Correia, B. E. & Fleishman, S. J. Opportunities and challenges in design and optimization of protein function. <em>Nat. Rev. Mol. Cell Biol. </em>25, 639–653 (2024).</li>
              <li>Hie, B. L. et al. Efficient evolution of human antibodies from general protein language models. <em>Nat. Biotechnol.</em>42, 275–283 (2024).</li>
              <li>Shao, Q., Jiang, Y., and Yang, Z.J. (2022). EnzyHTP: A High-Throughput Computational Platform for Enzyme Modeling. <em>J. Chem. Inf. Model.</em>62, 647–655.</li>
              <li>Hollmann, F., Sanchis, J., and Reetz, M.T. (2024). Learning from Protein Engineering by Deconvolution of Multi-Mutational Variants. <em>Angew. Chem. Int. Ed</em>. 63.</li>
              <li>Shao, Q., Jiang, Y., and Yang, Z.J. (2023). EnzyHTP Computational Directed Evolution with Adaptive Resource Allocation. <em>J. Chem. Inf. Model.</em>63, 5650–5659.</li>
              <li>M N. Zheng, Y.W. Li, W.L. Dong, W.X. Zhang, S.S. Feng, Q.Z. Zhang, W.X. Wang, Depolymerase-catalyzed polyethylene terephthalate hydrolysis: a unified mechanism revealed by quantum mechanics/molecular mechanics analysis, <em>ACS Sustainable Chem. Eng</em>. 10 (2022) 7341-7348.</li>
              <li>Zheng, M.; Li, Y.; Dong, W.; Feng, S.; Zhang, Q.; Wang, W. Computational Biotransformation of Polyethylene Terephthalate by Depolymerase: A QM/MM Approach. <em>J. Hazard. Mater.</em>2022, 423, 127017.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}