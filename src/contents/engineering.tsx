import { useEffect, useRef, useState } from 'react';

export function Engineering() {
  const [activeSection, setActiveSection] = useState('overview');
  const sectionRefs = {
    overview: useRef<HTMLDivElement>(null),
    cycle1: useRef<HTMLDivElement>(null),
    cycle2: useRef<HTMLDivElement>(null),
    cycle3: useRef<HTMLDivElement>(null)
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
          <nav className="flex flex-col space-y-3 text-2xl">
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
                sectionRefs.cycle1.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'cycle1' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              DBTL Cycle 1: AI-Guided Enzyme Design and Computational Validation
            </button>
            <button
              onClick={() => {
                sectionRefs.cycle2.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'cycle2' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              DBTL Cycle 2: Directed Evolution and Activity Optimization
            </button>
            <button
              onClick={() => {
                sectionRefs.cycle3.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'cycle3' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              DBTL Cycle 3: Material Design and Biodegradation Experiments
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
              Our project followed a systematic Design&ndash;Build&ndash;Test&ndash;Learn (DBTL) approach to tackle the challenge of PET recycling and sustainable plastic design. Instead of focusing on a single experiment, we iteratively refined our system across three tightly connected DBTL cycles, each addressing a different layer of the problem: enzyme activity, catalytic mechanism, and material design.
            </p>
            
          </div>

          {/* DBTL Cycle 1 Section */}
          <div ref={sectionRefs.cycle1} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">DBTL Cycle 1: AI-Guided Enzyme Design and Computational Validation</h2>
            <p className="mb-4">
              Our first Design&ndash;Build&ndash;Test&ndash;Learn (DBTL) cycle focused on developing a computationally guided pipeline for PET hydrolase engineering. The goal was to reduce the experimental burden by prioritizing variants most likely to improve catalytic efficiency.
            </p>
            
            <p className="mb-4"><strong>Design</strong></p>
            <p className="mb-4">
              We hypothesized that mutations that stabilize the Pre-reactive Binding State (PBS) of the enzyme&ndash;substrate complex would enhance catalytic efficiency by lowering the activation barrier. To test this hypothesis, we designed a computational workflow integrating our PBS platform with the EnzyHTP high-throughput enzyme modeling library.
            </p>
            
            <p className="mb-4"><strong>PBS decomposes enzyme design into four key modules:</strong></p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Mutation Module &ndash; generates a comprehensive mutant library using site-saturation mutagenesis or rational design.</li>
              <li>Thermostability Screening &ndash; eliminates destabilizing variants by computing folding free-energy changes (&Delta;&Delta;G_fold) with Rosetta cartesian_ddg.</li>
              <li>TS-Analog Binding Screening &ndash; retains variants that maintain strong transition-state analog binding, using MM-PBSA energy and active-site RMSD from MD trajectories.</li>
              <li>Reactivity Ranking &ndash; scores candidates by electrostatic stabilization energy (&Delta;E_ele) of the transition state relative to wild type.</li>
            </ol>
            
            <div className="my-6 flex flex-col items-center justify-center">
              <img src="images/engineering/1-1.webp" alt="Design strategies based on the PBS" className="w-3/4 my-4" />
              <img src="images/engineering/1-2.webp" alt="Design strategies based on the PBS" className="w-3/4 my-4" />
            </div>
            
            <p className="italic text-center text-lg mb-4">
              Figure 1: &nbsp;Design strategies based on the PBS. (a) Schematic of the &ldquo;PBS&rdquo; parameter model in the Michaelis-Menten model of an enzyme-catalyzed reaction. PBS calculation workflow. First, the protein and substrate undergo optimization. The protein is then mutated to generate various mutants, which are structurally optimized as well. &nbsp;The structural changes in the protein before and after mutation. The left side displays the original protein structure, while the right side shows the 3D model of the mutated protein, highlighting changes in key residues. Molecular docking simulations conducted to model the interaction between the protein mutants and the substrate. If the docking results meet the criteria for a NAC, the process proceeds to MD simulations. MD simulation module. Through MD simulations, the active conformation ratio of the mutants over time is analyzed, and their catalytic efficiency is calculated.
            </p>
            
            <p className="mb-4"><strong>Build</strong></p>
            <p className="mb-4">
              Using PBS and EnzyHTP, we constructed a mutant library of PET hydrolases targeting 23 hotspots predicted to influence substrate positioning and catalytic residue alignment. Mutant 3D structures were automatically generated and energy-minimized. Thermodynamically unstable variants (&Delta;&Delta;G_fold &gt; 0 kcal/mol) were filtered out, removing ~60% of initial candidates and reducing computational load for subsequent steps. The surviving set entered 100-ns MD simulations with restrained pre-reaction geometries to mimic transition-state analogs. This produced conformational ensembles for each candidate variant.&nbsp;
            </p>
            
            <p className="mb-4"><strong>Test</strong></p>
            <p className="mb-4">
              We then performed multi-scale computational validation.
            </p>
            <p className="mb-4">(1) We calculated MM-PBSA binding enthalpy and active-site RMSD to select variants with both strong TS analog binding and reduced conformational flexibility.</p>
            <p className="mb-4">(2) Catalytic Readiness: Extracted B&uuml;rgi&ndash;Dunitz attack angles (100&deg;&ndash;110&deg;) and nucleophilic distances (&le;3.5 &Aring;) from MD snapshots to measure the population of catalytically ready states.</p>
            <p className="mb-4">Electrostatic Stabilization: Built QM cluster models around the active site and computed &Delta;E_ele for each variant, ranking them by predicted activation barrier reduction.</p>
            <p className="mb-4">
              As a result, the best candidate, LCC-ICCG, exhibited 37.3% reactive PBS conformations, compared to 8.2% (FAST-PETase) and 11.3% (HotPETase). QM/MM results predicted an activation barrier of 15.5 kcal/mol, significantly lower than wild type (19.3 kcal/mol).
            </p>
            <p className="mb-4">
              The cluster model approach is a powerful tool for probing enzymatic mechanisms. Here, we applied an extensive cluster model to examine the acylation step of engineered PET hydrolases. The calculated C&ndash;O&gamma; distances in the TSs were 1.97 &Aring; (LCC-ICCG), 2.04 &Aring; (HotPETase), and 2.02 &Aring; (FAST-PETase). The corresponding barriers were 15.5, 19.3, and 20.4 kcal/mol, respectively, with the LCC-ICCG value aligning well with experimental kinetics (kcat = 0.7-4.8 s⁻&sup1;; 13.5&ndash;18.0 kcal/mol, Eyring equation).
            </p>
            <p className="mb-4">
              DIAS analysis further revealed that the lower barrier in LCC-ICCG stems from reduced distortion penalties, enhanced orbital overlap, and more favorable noncovalent interactions. In particular, dispersion contributions (-6.5 kcal/mol) and lower &Delta;E<sup>strain </sup>account for the stabilized tetrahedral intermediate, highlighting the role of active-site preorganization in lowering activation energies and accelerating PET depolymerization.
            </p>
            
            <div className="my-6 flex justify-center">
              <img src="images/engineering/2.webp" alt="Computed mechanism of enzymatic PET biodegradation" className="w-3/4 my-4" />
            </div>
            
            <p className="italic text-center text-lg mb-4">
              Figure&nbsp;2: Computed mechanism of enzymatic PET biodegradation. Computed mechanism of enzymatic PET biodegradation. The potential energy profile is reported in kcal/mol. The optimized transition structures (a)LCC-ICCG, (b)HotPETase and (c)FAST-PETase during acylation are highlighted. The essential distances are given in Angstrom. (d) A distortion/interaction activation strain analysis was performed using the theozyme model.
            </p>
            
            <p className="mb-4">
              Multiscale QM/MM calculations were carried out to elucidate the catalytic mechanism and to validate the associated energy landscape. FAST-PETase, LCC-ICCG were chosen as representative enzymes. The computational results unambiguously demonstrated that PET degradation proceeds via acylation and deacylation stages, irrespective of whether Si-face or Re-face binding is involved. Each of these stages can be further resolved into two concerted elementary steps. Notably, the Boltzmann-weighted average barrier of step ii for Re-face attack in FAST-PETase (33.1 kcal/mol) and LCC-ICCG (28.2 kcal/mol) is considerably high, indicating that this pathway is unlikely to occur during enzymatic PET degradation (Figure 5a, b). In contrast, the Re-face attack in HiC exhibits a distinct behavior, with a markedly lower Boltzmann-weighted average barrier for step ii (20.2 kcal/mol), suggesting a more feasible reaction pathway compared with FAST-PETase and LCC-ICCG.
            </p>
            
            <p className="mb-4"><strong>Learn</strong></p>
            <p className="mb-4">
              From this first cycle, we identified the top 10 mutants with the most negative &Delta;E_ele values (strongest TS stabilization). These variants were nominated for experimental validation in the next DBTL cycle.
            </p>
            <p className="mb-4">Our main insights included:</p>
            <p className="mb-4">Geometric Criteria Matter, Variants with higher PBS occupancy correlated strongly with predicted lower activation energy.</p>
            <p className="mb-4">Thermostability Filtering Saves Resources, Computational screening eliminated &gt;50% of mutants before wet-lab testing, focusing resources on the most promising candidates.</p>
            <p className="mb-4">Predictive Accuracy, the hit rate of PBS predictions will be further evaluated experimentally, but early computational data already aligned well with known kinetic trends.</p>
            
            <p className="mb-4"><strong>Engineering Success Highlight</strong><br />
              This computational pipeline allowed us to narrow thousands of theoretical variants to a manageable set of 10 high-potential candidates, reducing wet-lab screening time by over 60% while maintaining mechanistic interpretability.
            </p>
          </div>

          {/* DBTL Cycle 2 Section */}
          <div ref={sectionRefs.cycle2} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">DBTL Cycle 2: Directed Evolution and Activity Optimization</h2>
            <p className="mb-4">
              After computational design and in silico validation in Cycle 1, we moved into experimental directed evolution to iteratively improve PET hydrolase performance. This cycle included three successive rounds of mutagenesis and screening, with each round guided by insights from the previous one.
            </p>
            
            <p className="mb-4"><strong>Design</strong></p>
            <p className="mb-4">
              Based on PBS predictions and MD analysis from Cycle 1, we hypothesized that mutations near the catalytic pocket could enhance PET binding and lower the activation barrier.
            </p>
            <p className="mb-4">Our design strategy involved: Round 1: Saturation mutagenesis at 23 hotspots predicted to influence substrate positioning. Round 2: Combinatorial mutagenesis combining the best single mutant (H218Y) with additional sites (S100, S101, N246, S247, N248) identified by conservation and affinity analysis.</p>
            <p className="mb-4">Round 3: Hotspot diversification focusing on residues in conserved domains (W104, H164, A213, H242, I243) to expand sequence space and explore synergistic effects.</p>
            
            <p className="mb-4"><strong>Build</strong></p>
            <p className="mb-4">
              We constructed a total of &gt;40 mutant enzymes across the three rounds, expressed them in E. coli, and purified the proteins for activity testing. Each round narrowed the pool based on computational or experimental data, focusing resources on the most promising variants.
            </p>
            
            <p className="mb-4"><strong>Test</strong></p>
            <p className="mb-4">Round 1: High-throughput HPLC screening of 23 mutants identified eight with &gt;75% of ICCG activity. Six showed higher depolymerization activity, and H218Y emerged as the best, with +27% activity at 72 &deg;C.</p>
            <p className="mb-4">Round 2: Starting from H218Y, we combined it with additional beneficial mutations. H218Y/N248D displayed a further +21% activity improvement over H218Y, while H218Y/N248Q also outperformed the single mutant.</p>
            <p className="mb-4">Round 3: Using H218Y/N248D as the template, we introduced new hotspots.</p>
            <p className="mb-4">LCC-R2 (H218Y/N248D) and LCC-R3 (H218Y/N248D/S247A) were the top variants, showing 1.41&times; and 1.39&times; faster depolymerization rates than ICCG over 6 h at 72 &deg;C.</p>
            
            <p className="mb-4">Kinetic Analysis: Inverse Michaelis&ndash;Menten (mMM) kinetics were used due to PET&rsquo;s insolubility. k_cat values: LCC-R2 = 539.9 nmol&middot;g⁻&sup1;&middot;s⁻&sup1;; LCC-R3 = 525.7 nmol&middot;g⁻&sup1;&middot;s⁻&sup1;; ICCG = 426.3 nmol&middot;g⁻&sup1;&middot;s⁻&sup1;. This confirmed that the double-site mutation primarily drove catalytic acceleration, while S247A improved binding affinity without significantly affecting turnover.</p>
            
            <p className="mb-4">Benchmarking:&nbsp;At 72 &deg;C, both LCC-R2 and LCC-R3 efficiently depolymerized PET, whereas Fast-PETase became inactive, highlighting the thermal robustness of our engineered variants.</p>
            
            <div className="my-6 flex justify-center">
              <img src="images/engineering/3.webp" alt="Comparison of the depolymerization activity" className="w-3/4 my-4" />
            </div>
            
            <p className="italic text-center text-lg mb-4">
              Figure 3: Comparison of the depolymerization activity of ICCG, LCC-ICCG-R2, and LCC-ICCG-R2 on amorphous PET membranes: 45 mg of amorphous PET membrane was placed in 1.8 ml of 1 M phosphate buffer (pH 8.5) containing 27 &mu;g of enzyme and incubated at 78&deg;C and 150 rpm for 2-8 h. Product concentration was determined by HPLC.
            </p>
            
            <div className="my-6 flex justify-center">
              <img src="images/engineering/4.webp" alt="Comparison of mutant activity against amorphous PET powder" className="w-3/4 my-4" />
            </div>
            
            <p className="italic text-center text-lg mb-4">
              Figure 4: Comparison of mutant activity against amorphous PET powder at 69, 72, 75, 78, 81, and 84&deg;C. Reactions were performed at 69, 72, 75, 78, 81, and 84&deg;C using 10 g/L amorphous PET powder and 5 mg/g/L enzyme in 1 ml of 0.1 M phosphate buffer (pH 8.5) for 2 h. All data were homogenized based on the highest ICCG activity (75&deg;C).
            </p>
            
            <p className="mb-4"><strong>Learn</strong></p>
            <p className="mb-4">
              From this cycle, we gained several key insights: Activity vs. Stability Trade-off: H218Y increased activity but slightly reduced thermostability, which informed the combinatorial design in Round 2.
            </p>
            <p className="mb-4">Synergistic Mutations: N248D combined with H218Y produced a substantial activity boost, confirming our hypothesis that pocket polarity affects catalytic readiness.</p>
            <p className="mb-4">Affinity vs. Turnover: The S247A mutation increased PET affinity (higher absorbance), but did not increase k_cat, teaching us to differentiate between binding enhancement and catalytic rate improvement.</p>
            
            <p className="mb-4">Temperature Advantage: Engineered variants maintained high activity at 72 &deg;C, unlike Fast-PETase, suggesting our enzymes are better suited for industrial-scale high-temperature PET recycling. These lessons guided our decision to carry forward LCC-R2 and LCC-R3 into subsequent kinetic studies and material degradation tests in Cycle 3.</p>
            
            <p className="mb-4"><strong>Engineering Success Highlight</strong>: By combining computational guidance with iterative mutagenesis, we achieved &gt;1.4&times; catalytic activity improvement and superior high-temperature performance, demonstrating a clear DBTL-driven engineering success.</p>
          </div>

          {/* DBTL Cycle 3 Section */}
          <div ref={sectionRefs.cycle3} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">DBTL Cycle 3: Material Design and Biodegradation Experiments</h2>
            <p className="mb-4">
              After optimizing the enzyme performance in Cycles 1 and 2, we turned our attention to the design of next-generation biodegradable polyesters. The goal was to create materials that degrade efficiently under mild conditions and, in the case of PBFTd, respond to oxidative stimuli for controllable breakdown.
            </p>
            
            <p className="mb-4"><strong>Design</strong></p>
            <p className="mb-4">
              Our objective was to address two key challenges: (1) the poor degradability of conventional polyethylene (PE)-like polyesters and (2) the inability to control the degradation timing in biomedical or packaging applications. To overcome these issues, our design strategy was twofold.Firstly, to enhance hydrophilicity, we introduced bio-based pyrrolidone dicarboxylic acid (EBPCA) units into the polyester backbone, resulting in the formation of PBTDP copolyesters. The pyrrolidone ring not only serves as a hydrophilic site but also functions as a binding motif for Candida antarctica lipase B (CALB), potentially improving both hydrolysis and enzymatic degradation. Secondly, to enable reactive oxygen species (ROS)-responsive control over degradation, we incorporated thiodiacetic acid (TDA) into furan-based polyesters to synthesize PBFTd. The thioether groups in PBFTd are susceptible to oxidation by ROS, transforming into sulfoxides or sulfones. This oxidation increases the hydrophilicity of the polymer, thereby accelerating its degradation in response to ROS, and allowing for a stimulus-dependent degradation process.
            </p>
            
            <div className="my-6 flex justify-center">
              <img src="images/engineering/5.webp" alt="Molecular design concept for PBTDP and PBFTd" className="w-3/4 my-4" />
            </div>
            
            <p className="italic text-center text-lg mb-4">
              Figure 5: Molecular design concept for PBTDP and PBFTd
            </p>
            
            <p className="mb-4"><strong>Build</strong></p>
            <p className="mb-4">
              We synthesized and characterized a library of copolyesters with varying monomer ratios to investigate the effects on degradation and functionality. For the PBTDP series, we varied the EBPCA content from 0 to 25 mol%, creating the following compositions: PBTDP0, PBTDP5, PBTDP10, PBTDP15, PBTDP20, and PBTDP25. In the PBFTd series, we incorporated TDA in concentrations ranging from 10% to 60%, with the exact incorporation confirmed through FT-IR and NMR spectroscopy. The synthesis process utilized bio-based feedstocks, including itaconic acid and ethylenediamine, under polycondensation conditions. After synthesis, the products were precipitated, purified, and vacuum-dried to obtain the final materials. Structural verification of the copolyesters was conducted using proton (&sup1;H) NMR, carbon-13 (&sup1;&sup3;C) NMR, and FT-IR spectroscopy.
            </p>
            
            <div className="my-6 flex justify-center">
              <img src="images/engineering/6.webp" alt="Synthetic route and spectra of EBPCA and PBTDP copolyesters" className="w-3/4 my-4" />
            </div>
            
            <p className="italic text-center text-lg mb-4">
              Figure&nbsp;6: Synthetic route and spectra of EBPCA and PBTDP copolyesters
            </p>
            
            <p className="mb-4"><strong>Test</strong></p>
            <p className="mb-4">
              We systematically assessed hydrolysis behavior, enzymatic degradation, surface wettability, and morphology.
            </p>
            
            <p className="mb-4">Hydrolysis kinetics: PBTDP25 showed the fastest mass loss (only 60.6% residue weight after 50 days at 37 &deg;C), while PBTDP0 exhibited &lt;2% weight loss. SEM images revealed progressive surface cracking and porosity with increasing EBPCA content, correlating with enhanced water penetration.</p>
            
            <div className="my-6 flex justify-center">
              <img src="images/engineering/7.webp" alt="Residue weights of PBTDPs degraded in PBS solutions" className="w-3/4 my-4" />
            </div>
            
            <p className="italic text-center text-lg mb-4">
              Figure&nbsp;7: (a) Residue weights of PBTDPs degraded in PBS solutions over 50 days. (b) SEM photos of the surface morphologies of PBTDPs at 3500&times; after 10 days of Enzyme-catalyzed Degradation. (c) Depolymerization and recycling process of PBTDP20 from the mixed plastic waste containing PET, PP, ands PVC. (f) 1H NMR spectra of virgin and recycled TDA. (d) Comparison of monomer recovery at the optimum operation temperature in different cases of enzyme recycling.
            </p>
            
            <p className="mb-4">Enzymatic degradation: Under CALB catalysis, PBTDP25 completely fragmented within 10 days, whereas lower EBPCA-content polymers degraded more slowly. MD simulation showed closer A281/W104&ndash;pyrrolidone contacts (3.5&ndash;4.0 &Aring;) and a 23.2% population of reactive PRS conformations for PBTDP25, confirming enhanced enzyme recognition.</p>
            
            <div className="my-6 flex justify-center">
              <img src="images/engineering/8.webp" alt="PBS population analysis and noncovalent interaction maps" className="w-3/4 my-4" />
            </div>
            
            <p className="italic text-center text-lg mb-4">
              Figure&nbsp;8: PBS population analysis and noncovalent interaction maps of the enzymatic mechanism.
            </p>
            
            <p className="mb-4">Hydrophilicity: Water contact angle decreased from ~82&deg; (PBTDP0) to ~62&deg; (PBTDP25), indicating improved surface wettability. ROS-triggered degradation (PBFTd): Treatment with 1 M H₂O₂ led to &gt;95% oxidation within 5&ndash;7 days, converting thioethers to sulfoxides/sulfones. Post-oxidation hydrophilicity increased significantly (CA dropped to 52&deg;), resulting in up to 28.1% mass loss in 56 days, nearly 7&times; higher than unoxidized PBFTd.</p>
            
            <p className="mb-4">Mixed-plastic recycling: When blended with PP, PVC, and PET, PBTDP20 selectively degraded within 2 days, enabling 92% monomer recovery while leaving other plastics intac-a promising step toward selective enzymatic recycling.</p>
            
            <p className="mb-4"><strong>Learn</strong></p>
            <p className="mb-4">
              From this cycle, we learned several critical lessons about polyester design and degradability. Hydrophilicity&ndash;degradability correlation: Increasing EBPCA content proportionally increased hydrolysis rate and enzymatic susceptibility, confirming our design hypothesis.
            </p>
            <p className="mb-4">Structure&ndash;function insights: MD, IGMH, and QTAIM analyses revealed that pyrrolidone groups enhance noncovalent interactions with CALB and lower the free-energy barrier for nucleophilic attack (&Delta;G&Dagger; reduced by 7.1 kcal/mol). Stimuli-responsiveness: PBFTd oxidation successfully modulated hydrophilicity and degradation rate, demonstrating that triggered degradation is feasible. Circular economy potential: Enzymatic depolymerization of PBTDP20 enabled selective recycling under mild conditions, providing a low-energy route for polymer recovery.</p>
            
            <p className="mb-4">These findings provide a rational framework for designing next-generation sustainable plastics, integrating biobased feedstocks, enzymatic recycling compatibility, and environmental responsiveness.</p>
          </div>
        </div>
      </div>
    </div>
  );
}