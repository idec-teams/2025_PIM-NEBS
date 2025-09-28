import { useEffect, useRef, useState } from 'react';

export function ResultsAI() {
  const [activeSection, setActiveSection] = useState('introduction');
  const sectionRefs = {
    introduction: useRef<HTMLDivElement>(null),
    pbsDesign: useRef<HTMLDivElement>(null),
    overview: useRef<HTMLDivElement>(null),
    mdValidation: useRef<HTMLDivElement>(null),
    qmExplanation: useRef<HTMLDivElement>(null),
    qmComparison: useRef<HTMLDivElement>(null),
    prochiral: useRef<HTMLDivElement>(null),
    structural: useRef<HTMLDivElement>(null)
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
              Our integrated workflow
            </button>
            <button
              onClick={() => {
                sectionRefs.pbsDesign.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'pbsDesign' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              AI-Assisted Enzyme Design
            </button>
            <button
              onClick={() => {
                sectionRefs.overview.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'overview' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              An overview of the PBS workflow
            </button>
            <button
              onClick={() => {
                sectionRefs.mdValidation.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'mdValidation' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              Molecular Dynamics Validation
            </button>
            <button
              onClick={() => {
                sectionRefs.qmExplanation.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'qmExplanation' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              QM/MM calculations to explain activity enhancement
            </button>
            <button
              onClick={() => {
                sectionRefs.qmComparison.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'qmComparison' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              QM/MM calculations of FAST-PETase, LCC-ICCG, and HiC
            </button>
            <button
              onClick={() => {
                sectionRefs.prochiral.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'prochiral' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              Origin of Prochiral Selectivity
            </button>
            <button
              onClick={() => {
                sectionRefs.structural.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'structural' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              Structural and charge fluctuations
            </button>
          </nav>
        </div>
      </div>

      {/* Right Content */}
      <div className="md:w-3/4 text-2xl/10">
        <div className="bg-white p-6 rounded-lg shadow">
          {/* Introduction Section */}
          <div ref={sectionRefs.introduction} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our integrated workflow</h2>
            <p className="mb-4">
              Our integrated workflow: (1) AI design, (2) computational validation, (3) directed evolution, (4) material innovation, enabled us to create both highly active PET hydrolases and next-generation degradable plastics.
            </p>
            <p className="mb-4">
              Key takeaway for iDEC: This work bridges computation, synthetic biology, and materials science to offer a scalable solution for plastic waste recycling and green polymer design.
            </p>
          </div>

          {/* AI-Assisted Enzyme Design Section */}
          <div ref={sectionRefs.pbsDesign} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">AI-Assisted Enzyme Design (PBS strategy)</h2>
            <p className="mb-4">
              Based on this design strategy, we developed the PBS platform to achieve high‐throughput screening of enzyme mutations with high adaptability. The software framework can be divided into four operational modules, organized in a hierarchical structure from top to bottom, consisting of an amino acid mutation module, a protein-substrate docking module, a molecular dynamics simulation module, and an evaluation analysis module.
            </p>
            <p className="mb-4">
              Specifically, structural snapshots of the pre-reactive state are extracted from classical MD simulations and subjected to large-scale QM/MM optimization (Figure 1a). Transition-state structural features are then employed to define initial constraints in MD simulations, which are progressively relaxed to examine how amino acid mutations and substrate variations influence pre-reactive state stability. This strategy aims to construct catalytically active conformations-those that significantly lower activation energy and stabilize transition states-to capture the energetic determinants underlying substrate recognition and specificity. These parameters are derived from established organic reaction stereoelectronic principles, ensuring robust physical interpretability (Figure 1b). Once geometric definitions are applied to MD trajectories, PBS calculates the proportion of catalytically ready states within the ensemble. This approach bypasses the need for computationally intensive QM/MM free-energy mapping while still preserving mechanistic interpretability. Moreover, integration with PBS analysis allows estimation of the effect of sequence mutations, ligand modifications, or material design changes on catalytic readiness.
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-ai/1.webp" alt="Figure 1" className="w-3/4 my-4" />
            </div>
            <p className="italic text-center text-lg">
              Figure 1: Design strategies based on the PBS. (a) Schematic of the "PBS" parameter model in the Michaelis-Menten model of an enzyme-catalyzed reaction. (b) The steps consisted of three main phases: modeling, processing, and analysis.
            </p>
          </div>

          {/* An overview of the PBS workflow Section */}
          <div ref={sectionRefs.overview} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">An overview of the PBS workflow</h2>
            <p className="mb-4">
              PBS inputs the enzyme-substrate complex structure (i.e., considered as the ''WT'' structure) along with a target library of mutations and predicts beneficial mutations that accelerate the enzymatic reaction of a specified non-native substrate. Empowered by the EnzyHTP library, PBS serves as an automatically operated command line tool. The workflow involves four steps: mutation, thermostability screening, TS-analog binding screening, and reactivity ranking (Figure 2).
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-ai/2.webp" alt="Figure 2" className="w-3/4 my-4" />
            </div>
            <p className="italic text-center text-lg">
              Figure 2: PBS workflow. PBS proceeds through four modules: (1) Mutation-define the mutant library using site-saturation, random mutagenesis, rational design, or structure-guided selection; (2) Thermostability—remove variants with unfavorable folding free-energy changes (ΔΔG_fold) computed with Rosetta cartesian_ΔΔG (2); (3) TS-analog binding-retain thermostable variants that favorably bind a transition-state (TS) analog, approximated by the pre-reaction complex; binding enthalpy and an entropy proxy are estimated from MD trajectories via MM/PBSA energy and active-site RMSD, respectively; (4) Reactivity—rank survivors by the electrostatic stabilization energy of the TS relative to wild type (ΔE_ele). The top ten by ΔE_ele are nominated for experimental testing.
            </p>
          </div>

          {/* Molecular Dynamics Validation Section */}
          <div ref={sectionRefs.mdValidation} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Molecular Dynamics Validation: Favorable PBS Conformations Facilitate Catalysis in LCC-ICCG</h2>
            <p className="mb-4">
              Enzymatic depolymerization of poly (ethylene terephthalate) (PET) has received considerable attention for closed-loop polyester recycling. A homogeneity study under industrial conditions reveals that LCC-ICCG outperforms the other the best-performing reported PET hydrolases (FAST-PETase, HotPETase), suggesting a path to scale-up. However, understanding of their PET-degrading activity and influencing factors remains incomplete, impeding the development of uniform approaches for enhancing PET hydrolases for industrial applications.
            </p>
            <p className="mb-4">
              To probe the origin of the enhanced catalytic efficiency of LCC-ICCG, we carried out MD simulations and DFT calculations. In enzyme-catalyzed acylation, proper orientation and proximity of catalytic residues are critical. The PBS, defined by a nucleophilic attack angle of 100–110° and a d(C–Oγ) distance &lt;3.5 Å, was used as a metric. LCC-ICCG exhibited a markedly higher PBS population (37.3%) with angles tightly clustered within the optimal range (Figure 3a), compared to FAST-PETase (11.3%) and HotPETase (8.2%) (Figure 3b, c). This indicates more favorable HOMO–LUMO alignment for nucleophilic attack. IGMH analysis further revealed stronger noncovalent interactions in LCC-ICCG, particularly between V212 and the ester bond (Figure 3d–f). In the catalytic triad, LCC-ICCG formed bifurcated hydrogen bonds between H242 and D237 (~2.9 and ~3.0 Å), whereas FAST-PETase and HotPETase maintained only a single H-bond (Figure 3g). QTAIM analysis showed bond strengths of –5.6 kcal/mol for LCC-ICCG, significantly stronger than those in FAST-PETase and HotPETase (–1.8 and –2.1 kcal/mol). These stronger H-bonds enhance proton transfer, thereby promoting acylation.
            </p>
            <p className="mb-4">
              Additionally, a C–H···O interaction between V212 and the ester's non-carbonyl oxygen, absent in the other enzymes due to steric hindrance from I208, further stabilizes the PBS. V212 also forms an N–H···O bond (~3.1 Å) with D207, stabilizing the H237–D206 interaction and increasing D206 basicity, which lowers the acylation barrier. Finally, QTAIM revealed key BCPs involving V212, D210, and W190 that stabilize the catalytic triad and modulate the flexibility of W190, crucial for substrate binding and product release (Figure 3i).
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-ai/3.webp" alt="Figure 3" className="w-3/4 my-4" />
            </div>
            <p className="italic text-center text-lg">
              Figure 3: PBS analysis and non-covalent interaction analysis of enzyme. (a) Distribution of d(C-Oγ) distances and Bürgi-Dunitz attack angles for LCC-ICCG, (b) HotPETase, and (c) FAST-PETase. (d) Non-covalent interaction analysis of LCC-ICCG, (e) HotPETase, and (f) FAST-PETase bound to the PET substrate. Blue regions represent hydrogen bonding attraction, while green indicates weak attractive interactions. (g) Distance analysis of the hydrogen bonds between Asp and His in the catalytic triad of the enzyme-PET complex. (h) Distance analysis between V212-D210 and V212-W190 in LCC-ICCG. (i) QTAIM analysis.
            </p>
          </div>

          {/* QM/MM calculations to explain activity enhancement Section */}
          <div ref={sectionRefs.qmExplanation} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">QM/MM calculations to explain activity enhancement of LCC-ICCG</h2>
            <p className="mb-4">
              Here, we applied an extensive cluster model to examine the acylation step of engineered PET hydrolases. Representative conformations from MD trajectories were used for QM calculations, and the optimized transition states are shown in Figure 4a–c. In all cases, Ser was deprotonated by His, enabling nucleophilic attack on the ester carbonyl to form the first tetrahedral intermediate. The calculated C–Oγ distances in the TSs were 1.97 Å (LCC-ICCG), 2.04 Å (HotPETase), and 2.02 Å (FAST-PETase). The corresponding barriers were 15.5, 19.3, and 20.4 kcal/mol, respectively, with the LCC-ICCG value aligning well with experimental kinetics (kcat = 0.7-4.8 s⁻¹; 13.5-18.0 kcal/mol, Eyring equation).
            </p>
            <p className="mb-4">
              DIAS analysis further revealed that the lower barrier in LCC-ICCG stems from reduced distortion penalties, enhanced orbital overlap, and more favorable noncovalent interactions. In particular, dispersion contributions (-6.5 kcal/mol) and lower ΔE<sup>strain</sup> account for the stabilized tetrahedral intermediate (Figure 4d). These results highlight the role of active-site preorganization in lowering activation energies and accelerating PET depolymerization.
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-ai/4.webp" alt="Figure 4" className="w-3/4 my-4" />
            </div>
            <p className="italic text-center text-lg">
              Figure 4: Computed mechanism of enzymatic PET biodegradation. The potential energy profile is reported in kcal/mol. The optimized transition structures (a)LCC-ICCG, (b)HotPETase and (c)FAST-PETase during acylation are highlighted. The essential distances are given in Angstrom. (d) A distortion/interaction activation strain analysis was performed using the theozyme model.
            </p>
          </div>

          {/* QM/MM calculations of FAST-PETase, LCC-ICCG, and HiC Section */}
          <div ref={sectionRefs.qmComparison} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">QM/MM calculations of FAST-PETase, LCC-ICCG, and HiC</h2>
            <p className="mb-4">
              Multiscale QM/MM calculations were carried out to elucidate the catalytic mechanism and to validate the associated energy landscape. FAST-PETase, LCC-ICCG, and HiC were chosen as representative enzymes. The computational results unambiguously demonstrated that PET degradation proceeds via acylation and deacylation stages, irrespective of whether Si-face or Re-face binding is involved. Each of these stages can be further resolved into two concerted elementary steps. Notably, the Boltzmann-weighted average barrier of step ii for Re-face attack in FAST-PETase (33.1 kcal/mol) and LCC-ICCG (28.2 kcal/mol) is considerably high, indicating that this pathway is unlikely to occur during enzymatic PET degradation (Figure 5). In contrast, the Re-face attack in HiC exhibits a distinct behavior, with a markedly lower Boltzmann-weighted average barrier for step ii (20.2 kcal/mol), suggesting a more feasible reaction pathway compared with FAST-PETase and LCC-ICCG.
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-ai/5.webp" alt="Figure 5" className="w-3/4 my-4" />
            </div>
            <p className="italic text-center text-lg">
              Figure 5: (a) Energy profile comparison between Si-face and Re-face binding modes for the acylation process. Energies of 20 independent enzyme conformations were calculated.
            </p>
            <p className="mb-4">
              We reveal that both of the enzymes involve four elementary steps: (i) Ser-His-Asp-initiated nucleophilic attack, (ii) C-O bond cleavage, (iii) nucleophilic attack by water molecules, and (iv) IsPETase/ IsMHETase deacylation. Statistical results from 20 independent conformations highlight that step (i) and (iv) are competitive for determining the turnover rate while step (iv) is the rate-determining step. With the newly developed strategy, possible features (bonds, angles, dihedral angles, and charges) that influence the enzymatic catalysis were screened and identified. Robust relationship between active site features and activation energies were established. Distortion-interaction, hydrogen network, and noncovalent interaction analysis highlight the roles of distortion/interaction energy, hydrogen network, and weak interactions in the enzymatyic -catalyzed cascade degradation of PET.
            </p>
          </div>

          {/* Origin of Prochiral Selectivity Section */}
          <div ref={sectionRefs.prochiral} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Origin of Prochiral Selectivity in Different PET Hydrolases</h2>
            <p className="mb-4">
              To elucidate the origin of prochiral selectivity, we systematically investigated the effects of structural parameters, charge distribution, and intrinsic electric fields on the reaction energy barrier. From a structural perspective, we identified a consistent trend in the variation of key distances, angles, and dihedral angles along the reaction pathways, which is broadly conserved among the three enzymes examined (Figure 6). Nevertheless, distinct differences were also observed. For example, in Re-face binding of HiC, the PET@C1–Ser@O1 (3.5 ± 0.3 Å) and His@N1–Ser@H1 (1.9 ± 0.1 Å) distances were markedly longer than those in FAST-PETase (2.5 ± 0.1 and 1.7 ± 0.0 Å, respectively) and LCC-ICCG (2.7 ± 0.2 and 1.7 ± 0.1 Å, respectively). Moreover, during acylation, the hydrogen bonds in the oxyanion hole (PET@O4–Ser@H6 and PET@O4–Gln@H7) were significantly elongated in HiC, indicating weaker stabilization.
            </p>
            <p className="mb-4">
              Further correlation analysis revealed that, for both FAST-PETase and LCC-ICCG, the PET@O2–His@N1 distance and the PET@O2–His@N1–Ser@H1 angle exhibited strong linear relationships with the reaction energy barriers (R² = 0.87 and 0.90 for FAST-PETase; R² = 0.92 and 0.89 for LCC-ICCG, respectively) (Figure 6b, c). These findings suggest that longer PET@O2–His@N1 distances and smaller PET@O2–His@N1–Ser@H1 angles are critical determinants of prochiral selectivity in these two enzymes (Figure 6d).
            </p>
            <p className="mb-4">
              In contrast, HiC displayed poor correlation (R² = 0.03 and 0.36, respectively), and the coefficients of determination decreased markedly when including HiC in the analysis (e.g., PET@O2–His@N1 dropped from 0.76 to 0.46; PET@O2–His@N1–Ser@H1 dropped from 0.65 to 0.20). For HiC, the key determinants of prochiral selectivity instead involve the PET@O4–Gln@H7 and PET@C1–Ser@O1 distances. These results highlight that the weaker substrate binding and reduced oxyanion hole stability in HiC account for its lower activity in Re-face binding (Figure 6e).
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-ai/6.webp" alt="Figure 6" className="w-3/4 my-4" />
            </div>
            <p className="italic text-center text-lg">
              Figure 6: Influence of structure parameters on the selectivity. (a) Relevant structure variation along the reaction paths. (b−d) Correlation between distance of PET@O2-His@N1, angle of PET@O2-His@N1-Ser@H1, and energy barriers for FAST-PETase (b), LCCICCG (c), and two enzymes (FAST-PETase and LCC-ICCG together) (d), respectively. (e) Relationship between distances of PET@O4-Met@N4, PET@C1-Ser@O1, and energy barriers for HiC enzyme, respectively.
            </p>
          </div>

          {/* Structural and charge fluctuations Section */}
          <div ref={sectionRefs.structural} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Structural and charge fluctuations during depolymerization process</h2>
            <p className="mb-4">
              The changes of key structural and charge parameters during the whole catalytic process were systematically analyzed. As shown in, panels a∼c depict the charges of atoms PET@C1, PET@O4 and His@N1. Charge fluctuations of these three atoms are consistent with previous studies, with a consistent pattern of fluctuations. Charge of PET@C1 exhibit a "M" type fluctuation and the highest charge was found in the tetrahedral intermediate IM3 and IM8. Meanwhile, a "W"-shaped fluctuation was found for charge PET@O4, which indicate a dynamic charge transfer between the carbonyl carbon and <a href="https://www.sciencedirect.com/topics/engineering/carbonyl-oxygen">carbonyl oxygen</a>. This fluctuation of PET@O4 is related to the alterations in the <a href="https://www.sciencedirect.com/topics/materials-science/hydrogen-bonding">hydrogen bonding</a> networks D<sub>Tyr@H6-PET@O4</sub> and D<sub>Met@H7-PET@O4</sub>: the shorter the distance between D<sub>Tyr@H6-PET@O4</sub> and D<sub>Met@H7-PET@O4</sub>, the more negative charge PET@O4 carries. Indeed, the shortest distance between PET@O4 and <a href="https://www.sciencedirect.com/topics/chemistry/hydrogen-atom">hydrogen atoms</a> is observed in the IM3 and IM8 intermediates. This indicates that the stabilizing effect of <a href="https://www.sciencedirect.com/topics/engineering/oxygen-ion">oxygen ion</a> cavities on the transition state is stronger. Charge of His@N1 exhibits a similar fluctuation trend to that of PET@O4, however, His@H4 and Asp@O5 exhibit a distinctive "W"-shaped fluctuation curve throughout the reaction process, thereby revealing the subtle alterations occurring between these two atoms. In particular, during the deacylation phase of the reaction, in which water molecules are involved, the fluctuation range of <a href="https://www.sciencedirect.com/topics/chemistry/hydrogen-bonding">hydrogen bonding</a> in different conformations during the same period is approximately 0.3 Å. Notably, we also detected a conformation with a probability of 5% during the IM8 period, in which the proton is transferred to Asp175. This further enriches our understanding of the mechanism of this reaction.
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-ai/7.webp" alt="Figure 7" className="w-3/4 my-4" />
            </div>
            <p className="italic text-center text-lg">
              Figure 7: Structural and charge fluctuations during depolymerization process. we evidence that key features like charge C<sub>His@N1</sub> and angle A<sub>PET@C1-Ser@O1-His@H1</sub> significantly impact the <a href="https://www.sciencedirect.com/topics/chemistry/depolymerization">depolymerization</a> efficiency of LCC-ICCG. Non-covalent bond interaction and distortion/interaction analysis inform new insights on <a href="https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/enzyme">enzyme</a> engineer and may aid the recycling of enzymatic PET waste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}