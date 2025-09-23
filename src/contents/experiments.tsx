import { useEffect, useRef, useState } from 'react';

export function Experiments() {
  const [activeSection, setActiveSection] = useState('overview');
  const sectionRefs = {
    overview: useRef<HTMLDivElement>(null),
    process: useRef<HTMLDivElement>(null),
    aiDesign: useRef<HTMLDivElement>(null),
    compSim: useRef<HTMLDivElement>(null),
    expValidation: useRef<HTMLDivElement>(null)
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
              Experiments Overview
            </button>
            <button
              onClick={() => {
                sectionRefs.process.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'process' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              Experiments Process
            </button>
            <button
              onClick={() => {
                sectionRefs.aiDesign.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'aiDesign' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              1. AI-Assisted Enzyme Design & Screening
            </button>
            <button
              onClick={() => {
                sectionRefs.compSim.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'compSim' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              2. Computational Simulations
            </button>
            <button
              onClick={() => {
                sectionRefs.expValidation.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'expValidation' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              3. Experimental Validation
            </button>
          </nav>
        </div>
      </div>

      {/* Right Content */}
      <div className="md:w-3/4 text-2xl/10">
        <div className="bg-white p-6 rounded-lg shadow">
          {/* Overview Section */}
          <div ref={sectionRefs.overview} className="mb-8">
            <h1 className="text-3xl font-bold mb-4"><strong>Experiments Overview</strong></h1>
            <p>Our experiment aims to engineer and screen high-performance PET-hydrolyzing enzyme variants, validate their thermostability, and PET-depolymerizing activity. We utilized AI design strategies, including mutation, thermostability screening, TS-analog binding screening, and reactivity ranking, combined with computational simulations, molecular dynamics (MD) simulations, and DFT calculations, to predict optimal enzyme mutants. Subsequently, experimental validation was conducted, involving gene construction, protein production and purification, melting temperature assessment, and characterization of PET-depolymerizing activity using amorphous PET powder/film.</p>
          </div>

          {/* Process Section */}
          <div ref={sectionRefs.process} className="mb-8">
            <h1 className="text-3xl font-bold mb-4"><strong>Experiments Process</strong></h1>
          </div>

          {/* AI-Assisted Enzyme Design & Screening Section */}
          <div ref={sectionRefs.aiDesign} className="mb-8">
            <h2 className="text-3xl font-bold mb-4"><strong>1. AI-Assisted Enzyme Design & Screening</strong></h2>
            
            <h3 className="text-2xl font-semibold mb-3"><strong>1.1 Mutation</strong></h3>
            <ul className="list-disc pl-8 mb-4">
              <li>Construct a mutant library using the prepared wild-type enzyme-substrate complex as a reference.</li>
              <li>Generate candidate variants via site-saturation mutagenesis, random mutagenesis, or rational design, with automation supported by the assign_mutant API.</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mb-3"><strong>1.2 Thermostability Screening</strong></h3>
            <ul className="list-disc pl-8 mb-4">
              <li>Evaluate the stability of each variant by calculating the change in folding free energy(ΔΔG_fold) relative to the wild type using Rosetta's cartesian_ddg protocol automated through the get_rosetta_ddg API in EnzyHTP.</li>
              <li>Rank mutants by ΔΔG_fold, positive values indicate destabilization, and discard approximately 60% of predicted unstable variants to reduce downstream computational costs.</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mb-3"><strong>1.3 TS-Analog Binding Screening</strong></h3>
            <ul className="list-disc pl-8 mb-4">
              <li>The reduced library is evaluated for transition-state (TS) analog binding. Mutant–substrate complexes are constructed by replacing target side chains (integrating PyMol and Amber).</li>
              <li>Use them as inputs for molecular dynamics (MD)simulations with constraints on reaction coordinates to approximate the pre-reaction complex as a TS analog.</li>
              <li>After equilibration, sample 100-ns production trajectories as conformational ensembles, for each mutant:</li>
              <ul>
                <li className="flex items-start before:content-['➣'] before:mr-2">Estimate binding enthalpy using the MM-PBSA method.</li>
                <li className="flex items-start before:content-['➣'] before:mr-2">Measure active-site flexibility via the RMSD of residues within 5 Å of the substrate. Lower RMSD = greater rigidity.</li>
              </ul>
              <li>Rank mutants by MM-PBSA (energy strong to weak binding)and active-site RMSD (rigid to flexible), then retain only consistently high-ranking variants, and select the top 40 candidates in this study.</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mb-3"><strong>1.4 Reactivity Ranking</strong></h3>
            <ul className="list-disc pl-8 mb-4">
              <li>Evaluate chemical reactivity using the electrostatic stabilization energy of the TS(ΔΔG_ele):</li>
              <ul>
                <li className="flex items-start before:content-['➣'] before:mr-2">Build a QM cluster model of the reacting species and surrounding residues for each MD snapshot.</li>
                <li className="flex items-start before:content-['➣'] before:mr-2">Perform single-point energy calculations with Gaussian16 via the EnzyHTP interface; derive the bond dipole using Multiwfn and calculate ΔΔG_ele as the negative dot product of the dipole and local electric field.</li>
              </ul>
              <li>Rank mutants from negative to positive ΔΔG_ele (more negative values = stronger TS stabilization) and recommend top variants for experimental validation (top 10 selected in this study).</li>
            </ul>
          </div>

          {/* Computational Simulations Section */}
          <div ref={sectionRefs.compSim} className="mb-8">
            <h2 className="text-3xl font-bold mb-4"><strong>2. Computational Simulations</strong></h2>
            
            <h3 className="text-2xl font-semibold mb-3"><strong>2.1 MD Simulations</strong></h3>
            <ul className="list-disc pl-8 mb-4">
              <li><strong>Initial Structure Preparation</strong>:</li>
              <ul>
                <li className="flex items-start before:content-['➣'] before:mr-2">Obtain enzyme structures from X-ray crystal structures (PDB IDs: 6THT for LCC-ICCG, 7QVH for HotPETase, 7SH6 for FAST-PETase).</li>
                <li className="flex items-start before:content-['➣'] before:mr-2">Use a PET trimer [2-hydroxyethyl-(mono-hydroxyethyl terephthalate)₃, abbreviated as 2-HE(MHET)₃] as the substrate; perform conformational sampling with the CREST tool (based on the GFN2-xTB method) and derive force field parameters for the substrate, electrostatic potential (ESP) calculations were carried out at the HF/6-31G(d) level, followed by a two-stage restrained electrostatic potential (RESP) charge fitting</li>
                <li className="flex items-start before:content-['➣'] before:mr-2">Conduct molecular docking using AutoDock Tools.</li>
              </ul>
              <li><strong>Simulation Execution</strong>:</li>
              <ul>
                <li className="flex items-start before:content-['➣'] before:mr-2">Use the GPU-accelerated pmemd.CUDA engine in Amber 22 package; solvate each enzyme–substrate complex in a cubic TIP3P water box (10 Å buffer) and neutralize with counterions (apply NPT periodic boundary conditions).</li>
                <li className="flex items-start before:content-['➣'] before:mr-2">Perform two-stage energy minimization: first, minimize water while restraining the solute, then minimize the full system.</li>
                <li className="flex items-start before:content-['➣'] before:mr-2">Heat the system from 0 K to 300 K over 100 ps (using Langevin thermostat), followed by 100 ps equilibration under the NVT ensemble, with Langevin temperature regulation, and pressure control via the Berendsen barostat.</li>
                <li className="flex items-start before:content-['➣'] before:mr-2">Run 50 ns unrestrained production simulations (300 K, 1 bar, 2 fs time step); repeat 3 times and extend "active" trajectories to 300 ns.</li>
              </ul>
              <li><strong>Data Analysis</strong>:</li>
              <ul>
                <li className="flex items-start before:content-['➣'] before:mr-2">Structural analyses, including root-mean-square deviation (RMSD), root-mean-square fluctuation (RMSF), and distance measurements, areperformed using CPPTRAJ.</li>
                <li className="flex items-start before:content-['➣'] before:mr-2">Calculate binding free energies and per-residue energy decomposition via the MM/GBSA method (using thousands of snapshots from equilibrated trajectories).</li>
              </ul>
            </ul>
            <div className='w-3/4 mx-auto flex flex-col justify-center'>
              <img src='images/experiments/1.png' className="w-full my-4" />
              <em className="mb-4 text-center text-lg"><strong>Figure 1</strong>: Workflow of MD simulation. The workflow can be roughly divided into six steps, namely generating topology, defining boxes, solvating, adding ions, minimizing energy, and equilibration.</em>
            </div>
            <p className="mb-4">&nbsp;</p>
            
            <h3 className="text-2xl font-semibold mb-3"><strong>2.2 DFT Calculation</strong></h3>
            <ul className="list-disc pl-8 mb-4">
              <li>Conformational searches were performed using the Conformer-Rotamer Ensemble Sampling Tool (CREST) of the XTB program with the semiempirical tight-binding method.</li>
              <li>Optimize low-energy conformers with the dispersion-included ωB97X-D functional in Gaussian 16 (6- 31+G (d,p) basis set.</li>
              <li>Predict reactive sites (nucleophile/electrophile) via Fukui function analysis; incorporate the SMD implicit solvation model for aqueous solution, and perform frequency calculations at the same theoretical level.</li>
              <li>Conduct IRC calculations to identify transition states, reactants, and products; perform IGMH analysis for noncovalent interactions.</li>
              <li>Use PyMOL, CYLview, and Visual Molecular Dynamics(VMD) for molecular graphics; use Multiwfn 3.7 for wavefunction analysis.</li>
            </ul>
          </div>

          {/* Experimental Validation Section */}
          <div ref={sectionRefs.expValidation} className="mb-8">
            <h2 className="text-3xl font-bold mb-4"><strong>3. </strong><strong>Experimental Validation</strong></h2>
            
            <h3 className="text-2xl font-semibold mb-3"><strong>3.1 </strong><strong>Experiment workflow</strong></h3>
            <ul className="list-disc pl-8 mb-4">
              <li><strong>First Stage:</strong>Variant Library Construction</li>
              <ul>
                <li className="flex items-start before:content-['➣'] before:mr-2">Construct a variant library to generate a diverse pool of enzyme candidates for subsequent activity screening.</li>
              </ul>
              <li><strong>Second Stage:</strong>High-Throughput Activity Assessment via PET Microparticle Hydrolysis</li>
              <ul>
                <li className="flex items-start before:content-['➣'] before:mr-2">Subject polyethylene terephthalate (PET)microparticles to hydrolysis by crude enzyme preparations.</li>
                <li className="flex items-start before:content-['➣'] before:mr-2">Rapidly evaluate the relative PET-depolymerizing activities of the variants by monitoring the absorbance at 240 nm, which reflects the release of aromatic hydrolysis products.</li>
                <li className="flex items-start before:content-['➣'] before:mr-2">Use this high-throughput assessment to identify variants exhibiting enhanced catalytic performance efficiently.</li>
              </ul>
              <li><strong>Third Stage: </strong>Variant Purification, Product Characterization & Selection for Next-Generation Evolution</li>
              <ul>
                <li className="flex items-start before:content-['➣'] before:mr-2">Select the variant showing the highest absorbance at 240 nm for further study and purify it to homogeneity.</li>
                <li className="flex items-start before:content-['➣'] before:mr-2">Accurately characterize the depolymerization products derived from PET hydrolysis of the purified variant using high-performance liquid chromatography HPLC.</li>
                <li className="flex items-start before:content-['➣'] before:mr-2">Choose the variant with the greatest catalytic activity as the starting enzyme for the next round of directed evolution, thereby establishing a systematic workflow for iterative enzyme engineering.</li>
              </ul>
            </ul>
            <img src='images/experiments/1-1.png' className="w-3/4 my-8 mx-auto" />
            <p className="mb-4">&nbsp;</p>
            
            <h3 className="text-2xl font-semibold mb-3"><strong>3.1 Materials Preparation</strong></h3>
            <ul className="list-disc pl-8 mb-4">
              <li>Purchase PET/TPAin Sigma-Aldrich (St. Louis, MO, USA), obtain MHET from Aladdin (Shanghai, China), and other high-purity reagents from Sigma-Aldrich.</li>
              <li>PET microparticles areprepared from amorphous PET film (ES301445, Goodfellow, Bad Nauheim, Germany; crystallinity 7.68%) following a reported procedure. Briefly, 2 g of PET is dissolved in 20 mL of trifluoroacetic acid (TFA, 90% v/v) at 50 °C for 2 h, followed by the slow addition of 20 mL of diluted TFA (20% v/v) under vigorous stirring for 2 h to precipitate the microparticles. After centrifugation at 2500 g for 1 h, the pellet is resuspended in 0.5% sodium dodecyl sulfate (SDS), homogenized by sonication, and washed to remove SDS. The final suspension is adjusted to 10 g L⁻¹ with ddH₂O.</li>
              <li>Prepare amorphous PET powder (8.17% crystallinity): Cut the same PET film, freeze in liquid nitrogen (3 min), using an automatic grinder (JXFSTPRP-24, Jingxin, Shanghai, China) at 75% output for 1 min. The resulting fragments are sieved through a 50-mesh screen to collect powders &lt;280 μm in diameter.</li>
              <li>Postconsumer PET (Pc-PET) powder (crystallinity 14.2%) is obtained from commercial water bottles (Wahaha, Hangzhou, China). The bottles aremelted at 280 °C, rapidly quenched in cold water, and subsequently immersed in liquid nitrogen for 3 min. The brittle samples are then ground into granules suitable for further experiments.</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mb-3"><strong>3.2 Gene Construction</strong></h3>
            <ul className="list-disc pl-8 mb-4">
              <li>Commercially synthesize genes encoding LCC variant ICCG (F243I/D238C/S283C/Y127G) and Fast-PETase (codon-optimized).</li>
              <li>Clone both genes into the pET26b(+) vector (NdeI 5&prime; end, XhoI 3&prime; end) and introduce a C-terminal hexa-histidine tag for protein purification.</li>
              <li>Construct site-directed variants:</li>
              <ul>
                <li className="flex items-start before:content-['➣'] before:mr-2">Amplify the full-length ICCG-expressing plasmid via polymerase chain reaction (PCR)using PrimeSTAR Max DNA Polymerase (TaKaRa, Beijing, China) using primers designed to introduce mutations and homologous sequences for assembly.</li>
                <li className="flex items-start before:content-['➣'] before:mr-2">Following amplification, the products aretreated with DpnI to remove template DNA, purified using the E.Z.N.A. Cycle Pure Kit (Omega Bio-Tek, USA), and subsequently cyclized with 2× MultiF Seamless Assembly Mix (RK21020, ABclonal, Wuhan, China).</li>
                <li className="flex items-start before:content-['➣'] before:mr-2">The recombinant plasmids arethen transformed into Escherichia coli BL21 (DE3) competent cells (TransGen Biotech, Beijing, China). All introduced mutations in ICCG are confirmed by Sanger sequencing (Tsingke, Qingdao, China). The nucleotide and amino acid sequences use in this study are provided in Supplementary Information.</li>
              </ul>
            </ul>
            
            <h3 className="text-2xl font-semibold mb-3"><strong>3.3 Production of Purified Proteins</strong></h3>
            <ul className="list-disc pl-8 mb-4">
              <li><strong>Small-Scale Purification</strong>:</li>
              <ul>
                <li className="flex items-start before:content-['➣'] before:mr-2">Inoculate LCC variants (E. coli BL21 (DE3)) into 1 mL LB medium (25 μg mL⁻¹ kanamycin); transfer overnight cultures to 5 mL fresh LB medium (25 μg mL⁻¹ kanamycin) and incubate at 37 °C to an OD600 = 1.0.</li>
                <li className="flex items-start before:content-['➣'] before:mr-2">Add 0.5 mM IPTG to induce protein expression for 16 h; centrifuge at 8000 rpmfor 10 min, filter supernatants (45 μm syringe filters), and perform affinity chromatography using Ni-NTA agarose (Qiagen, Germany).</li>
                <li className="flex items-start before:content-['➣'] before:mr-2">Wash off non-target proteins (20 mM Tris−HCl pH 8.0, 300 mM NaCl, 20 mM imidazole) and elute target proteins (20 mM Tris−HCl pH 8.0, 300 mM NaCl, 250 mM imidazole).</li>
                <li className="flex items-start before:content-['➣'] before:mr-2">Exchange buffer to storage buffer (20 mM Tris−HCl, pH 8.0, 100 mM NaCl) via Amicon Ultra-15 Centrifugal Filter Unit (10 kDa, Millipore); validate purity via SDS-PAGE and determine concentration (Enhanced BCA Protein Assay Kit).</li>
                <li className="flex items-start before:content-['➣'] before:mr-2">For intracellular-expressFast-PETase: Resuspend cell pellets in lysis buffer (20 mM Tris−HCl, pH 8.0, 300 mM NaCl), lyse via high-pressure homogenizer (AH-1500, ATS), centrifuge (12000 rpm, 20 min), and purify as above.</li>
              </ul>
              <li><strong>The massive</strong><strong>Purification (for Pc-PET Depolymerization)</strong>:</li>
              <ul>
                <li className="flex items-start before:content-['➣'] before:mr-2">For the massive purification of the proteins used to depolymerize Pc-PET, 2 L of the fermentation broth is cultured according to the above method. The supernatants are collected by centrifugation at 9000 rpm for 40 min and filtered with 0.45 μm filter membranes. The supernatant is then concentrated 100-fold and exchanged for the protein purification buffer 20 mM Tris−HCl, pH 8.0, 300 mM NaCl using the Vivaflow 200 cassette 10 kDa, Sartorius.</li>
                <li className="flex items-start before:content-['➣'] before:mr-2">The concentrated crude protein is purified using fast protein liquid chromatography, Ä KTAavant25, Cytiva, equipped with HisTrap HP His tag protein purification columns.</li>
              </ul>
            </ul>
            
            <h3 className="text-2xl font-semibold mb-3"><strong>3.4 Melting Temperature Assessment</strong></h3>
            <ul className="list-disc pl-8 mb-4">
              <li>The Tm values are determined by the differential scanning fluorimetry (DSF)method using the Protein Thermal Shift Dye Kit (Thermo Fisher). 5.0 μL of the Protein Thermal Shift Buffer, 5 μL of the diluted Protein Thermal Shift Dye (4×), and 10 μL of the protein are added to the reaction tubes on ice.</li>
              <li>DSF experiments are then carried out using the QuantStudio 3 Real-Time PCR System Applied Biosystems. The reaction mixture first reaches 25 °C at the speed of 1.6 °C s−1 and maintains it for 2 min, then rises to 99 °C at the speed of 0.05 °C s−1 and maintains it for 2 min. Protein Thermal Shift software is used for data processing.</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mb-3"><strong>3.5 Characterization of PET-Depolymerizing Activity</strong></h3>
            <h4 className="text-lg font-semibold mb-2"><strong>3.5.1 Using Amorphous PET Powder</strong></h4>
            <ul className="list-disc pl-8 mb-4">
              <li><strong>Standard Assay</strong>: Add 30 μg purified enzyme to 1 mL of1 M phosphate buffer (pH 8.5) with 10 mg amorphous PET powder and react at 72 °C.</li>
              <li><strong>Optimum pH/Temperature Screening</strong>: Conduct reactions at pH 7.0, 7.5, 8.0, 8.5, 9.0, as well as at 69, 72, 75, 78, 81, and 84 °C.After the reaction for a specific time, 1 mL of acetonitrile is added to stop the depolymerization.</li>
              <li><strong>HPLC Analysis</strong>: The concentration of depolymerization products (BHET, MHET, and TPA) is determined by high-performance liquid chromatography (HPLC). The LC-20AT chromatography system (Shimadzu, Kyoto, Japan), equipped with two pump modules, an autosampler, a column oven thermostat at 40 °C, and a UV detector at 240 nm is used. BHET, MHET, and TPA areseparated by the ZORBAX Extend-C18 column (150 × 4.6 mm, 5 μm, Agilent) using mobile phase A (0.1% v/v TFA) and mobile phase B (acetonitrile) at 0.6 mL min-1 (80% of mobile phase A).</li>
              <li><strong>K</strong><strong>inetic analysis</strong><strong>:</strong>depolymerization is carried out at 72 °C pH 8.5 for 0.5 h under the conditions of substrate saturation (<sup>inv</sup>MM). Ten g l-1 amorphous PET powder and 0-12<em> μ</em>M enzymes were used for <sup>inv</sup>MM analysis. GraphPad Prism is used for data fitting.</li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-2"><strong>3.5.2 Using Amorphous PET Film</strong></h4>
            <ul className="list-disc pl-8 mb-4">
              <li>Place 45 mg commercial amorphous PET film in 1.8 mL of 1 M phosphoric acid buffer (pH 8.5, 0.6 mg enzyme gPET-1); incubate in a water bath shaker (150 rpm, 78 °C) for 2–8 h.</li>
              <li>Stop reactions by adding 1.8 mL acetonitrile; detect product concentration via HPLC (as above).</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mb-3"><strong>3.6 Scanning Electron Microscopy (SEM)</strong></h3>
            <ul className="list-disc pl-8 mb-4">
              <li>The PET powder is dispersed and sprinkled on the sample stage, and a layer of the platinum conductive film is covered on the surface using vacuum evaporators (Cressington 108, UK). The sample is then observed for morphology by a field emission scanning electron microscope (Quanta 250 FEG, FEI, USA).</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mb-3"><strong>3.7 Synthesis & Characterization of PBTDPs</strong></h3>
            <ul className="list-disc pl-8 mb-4">
              <li><strong>Synthesis of EBPCA Monomer</strong>: Firstly, the renewable pyrrolidone diacid EBPCA is successfully synthesized from bio-based ethylenediamine and itaconic acid, as confirmed by 1H NMR and FT-IR spectra (Figure 1,2).</li>
            </ul>

            <div className='w-3/4 mx-auto flex flex-col justify-center'>
              <img src='images/experiments/2.png' className="w-full my-4" />
              <em className="mb-4 text-center text-lg"><strong>Figure 2</strong>: <sup>1</sup>H NMR (400 MHz, DMSO) of EBPCA monomer: 3.62-3.52 (2 H, m), 3.49 -3.42 (2 H, m), 3.40 (1 H, s), 3.32 (2 H, s), 3.21 (1 H, d), 3.10 (2 H, m), 2.40 (4 H, t).</em>
            </div>
            <div className='w-3/4 mx-auto flex flex-col justify-center'>
              <img src='images/experiments/3.png' className="w-full my-4" />
              <em className="mb-4 text-center text-lg"><strong>Figure 3</strong>: FT-IR spectra of EBPCA monomer powder.</em>
            </div>
            
            <p className="mb-4">&nbsp;</p>
            <ul className="list-disc pl-8 mb-4">
              <li><strong>DSC (Differential Scanning Calorimetry) Experimental Protocol </strong></li>
            </ul>
            <p className="mb-4">Sample Preparation and Instrument Setup​​<strong>. </strong></p>
            <p className="mb-4">Prepare the sample by weighing 5–15 mg of the material (depending on thermal activity) using an analytical balance, and place it in a crimped or hermetically sealed aluminum DSC pan (avoid overfilling to prevent sample overflow). Clean the reference pan with ethanol and dry thoroughly. Calibrate the DSC instrument using certified standards (e.g., indium for melting point and heat flow calibration, zinc for temperature accuracy) under a constant purge gas flow (typically 50 mL/min of high-purity nitrogen or argon). Set the initial temperature (e.g., 25°C) and stabilize the system for 10–15 minutes to equilibrate the sample, reference pan, and furnace.</p>
            <p className="mb-4">Initiate the DSC scan by programming the temperature ramp (e.g., 25°C → 300°C at 10°C/min) or step-isothermal conditions as required. Ensure the purge gas remains constant throughout the test to minimize oxidation or moisture effects. Monitor the real-time DSC curve (heat flow vs. temperature/time) on the software interface. If studying reversible transitions (e.g., crystallization), pause the scan at target temperatures for isothermal segments (e.g., hold at 150°C for 10 minutes) to observe kinetic behavior. After completing the scan, cool the system to room temperature at a controlled rate (e.g., 10°C/min) under continued purge gas flow. Remove the pans, clean the instrument, and save the raw data for post-processing (e.g., baseline correction, peak integration, and enthalpy calculation).</p>
            <div className='w-3/4 mx-auto flex flex-col justify-center'>
              <img src='images/experiments/4.png' className="w-full my-4" />
              <em className="mb-4 text-center text-lg"><strong>Figure 4</strong>: DSC curves of PBTDP samples during 1<sup>st</sup> heating scan.</em>
            </div>
            <p className="mb-4">The incorporation of aliphatic segments into aromatic polyesters has been shown to enhance hydrolytic degradability. Notably, even hydrophilic structural units that are not inherently degradable monomers—such as lactic acid, glycolic acid, diglycolic acid, and oxalic acid—can accelerate the degradation of aromatic polyesters by increasing water uptake and facilitating ester bond hydrolysis. For example, Dubois reported that introducing succinic acid and adipic acid into PBF led to preferential hydrolysis of the aliphatic segments, with amorphous domains degrading more rapidly than crystalline regions.</p>
            <p className="mb-4">Unlike the non-degradable nature of neat PBF, the incorporation of Td units disrupts crystallinity, thereby improving water penetration and enabling ester bond cleavage in the amorphous regions. As shown in Figure (a), PBFTd containing 10% Td units exhibited a 3% weight loss after 56 days in phosphate-buffered solution. Increasing the Td content to 60% resulted in an 8% weight loss, confirming a composition-dependent degradation behavior.</p>
            <p className="mb-4">The purple region illustrates the integrated area of the broad –OH stretching band at 3200–3600 cm⁻¹ in the FTIR spectra, corresponding to free hydroxyl groups. A marked increase in hydroxyl intensity after hydrolysis confirmed the occurrence of ester bond cleavage. Moreover, the degree of increase was positively correlated with Td content, further supporting the composition-dependent hydrolytic degradation of PBFTd.</p>
            <p className="mb-4">Despite this hydrolytic degradability, PBFTd exhibited a relatively slower degradation rate compared with other reported degradable PBF-based copolyesters. As shown in Figure (c), PBFTd degraded more slowly than oxalic acid–modified PBOF and diglycolic acid–modified PBDF, both of which contain highly hydrophilic moieties. Even PBAF, modified with adipic acid, showed slightly higher degradation efficiency than PBFTd. In contrast, the degradation rate of PBFTd was comparable to that of PBSF containing succinic acid units.</p>
            <p className="mb-4">&nbsp;</p>
            <div className='w-3/4 mx-auto flex flex-col justify-center'>
              <img src='images/experiments/5.png' className="w-full my-4" />
              <em className="mb-4 text-center text-lg"><strong>Figure 5</strong>: (a) Residual weight of PBFTd samples in phosphate-buffered saline (PBS) solutions as a function of hydrolysis time. (b) Structural evolution and changes in number-average molecular weight (Mn) of PBFTd before and after 56 days of hydrolysis. (c) Comparative hydrolytic degradation behavior of PBFTd versus aliphatic-segment–modified PBF and hydrophilic-monomer–modified PBF copolyesters.</em>
            </div>
            <p className="mb-4">&nbsp;</p>
            
            <h3 className="text-2xl font-semibold mb-3"><strong>3.8 ATR-FTIR Protocol for Hydroxyl Peak Analysis</strong></h3>
            <ul className="list-disc pl-8 mb-4">
              <li>Employ Fourier transform infrared spectroscopy (FTIR)with an attenuated total reflectance (ATR) accessory to analyze the evolution of hydroxyl groups in PBFTd samples before and after hydrolysis.</li>
              <li>Subject PBFTd films with different Td contents to hydrolytic treatment in PBS buffer under controlled conditions, then thoroughly wash them with deionized water and vacuum-dry at 40–50 °C to constant weight.</li>
              <li>Cut dried samples into uniform pieces and mount them on the ATR crystal diamond or ZnSe with consistent pressure to ensure reproducible contact.</li>
              <li>Record spectra on an FTIR spectrometer in ATR mode over the range of 4000–600 cm⁻¹, with a resolution of 4 cm⁻¹ and 32–64 scans per spectrum.</li>
              <li>Collect background spectra against a clean ATR crystal before each batch, and clean the crystal with ethanol between samples.</li>
              <li>Perform measurements under low humidity or with nitrogen purge to minimize interference from ambient moisture.</li>
              <li>Integrate the hydroxyl stretching region 3200–3600 cm⁻¹ to quantify free –OH groups generated by ester bond cleavage.</li>
              <li>Baseline-correct all spectra, and normalize the integrated hydroxyl area against an internal reference band such as aromatic C=C stretching at ~1505 cm⁻¹ to account for thickness and contact variations.</li>
              <li>Compare the normalized hydroxyl peak areas of hydrolyzed samples with those of untreated controls to evaluate composition-dependent increases in free hydroxyl groups.</li>
              <li>Analyze three independent replicates for each sample, and report mean values ± standard deviations.</li>
            </ul>
            <p className="mb-4">Confirm ester bond hydrolysis through a marked increase in the –OH peak intensity, where the degree of increase correlates positively with Td content, consistent with composition-dependent degradability.</p>
          </div>
        </div>
      </div>
    </div>
  );
}