import { useEffect, useRef, useState } from 'react';

export function ResultsWetLab() {
  const [activeSection, setActiveSection] = useState('directedEvolution');
  const sectionRefs = {
    directedEvolution: useRef<HTMLDivElement>(null),
    synthesisDegradation: useRef<HTMLDivElement>(null),
    cellMembrane: useRef<HTMLDivElement>(null)
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
                sectionRefs.synthesisDegradation.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'synthesisDegradation' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              Synthesis and Degradation of Novel Biodegradable Polyesters
            </button>
            <button
              onClick={() => {
                sectionRefs.cellMembrane.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'cellMembrane' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              Cell Membrane-Inspired Degradable Polyesters with ROS-Responsive Properties
            </button>
          </nav>
        </div>
      </div>

      {/* Right Content */}
      <div className="md:w-3/4 text-2xl/10">
        <div className="bg-white p-6 rounded-lg shadow">
          {/* Directed Evolution and Activity Screening Section */}
          <div ref={sectionRefs.directedEvolution} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Directed Evolution and Activity Screening</h2>
            <p className="mb-4">
              The establishment of a high-throughput screening workflow relies on four key elements: (i) a PET-degrading enzyme efficiently secreted into the extracellular environment, (ii) a PET substrate that can be easily quantified, (iii) a rapid and sensitive assay for enzymatic activity, and (iv) a culture medium free from interfering background signals. <em>Escherichia coli</em>&nbsp;BL21 (DE3) typically contains a high level of intracellular host proteins, while secreting very few extracellular proteins. If ICCG can be secreted into the extracellular milieu, the culture supernatant could be directly used as a crude enzyme solution for activity assays, thereby eliminating the need for cell disruption and protein purification. To this end, we first attempted to construct expression vectors enabling high-level expression and secretion of ICCG.
            </p>
            <p className="mb-4">
              Four signal peptides were fused to the N-terminus of ICCG: the highly efficient secretion signal peptide SPzof (screened in our laboratory), the Sec-dependent translocation signal peptide SPpee, a pelB signal peptide variant SPpeB.G58A, and the maltoporin signal peptide SPu. In addition, previous reports have shown that keratinases can be secreted extracellularly without a signal peptide. Based on this, we also constructed an ICCG expression vector lacking a signal peptide. These constructs were transformed into <em>E. coli</em>&nbsp;BL21 (DE3) for expression, with empty-vector&ndash;carrying <em>E. coli</em>&nbsp;BL21 (DE3) serving as a control.
            </p>
            <p className="mb-4">
              SDS-PAGE analysis was used to assess intracellular and extracellular protein levels. Remarkably, the signal peptide-free ICCG variant exhibited the highest secretion efficiency: nearly no residual ICCG was detected intracellularly, and densitometric analysis indicated that ICCG accounted for up to 90% of the total extracellular protein. In contrast, ICCG fused with signal peptide SPN2o achieved the highest expression level overall, but remained predominantly intracellular and showed poor secretion into the extracellular space (Figure 7).
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-wet-lab/1.webp" alt="Figure 1: SDS-PAGE analysis of ICCG secretion" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure 1: SDS-PAGE analysis of ICCG secretion. Extracellular, culture supernatant; M, molecular mass standard protein; Intracellular, cell lysate; l, E. coliBL21 (DE3); 2, SPN2.-ICCG; 3, ICCG without signal peptide; 4, SP,eв-ICCG; 5, SP,B.G58A-ICCG; 6,SPLamB-ICCG.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 mt-8">Round 1: Saturation Mutagenesis</h3>
            <p className="mb-4">
              In the first round of prediction, after virtual saturation mutagenesis and affinity analysis, 23 potential mutants with improved affinity were selected for activity validation. High-throughput initial screening identified eight mutants with relative activities greater than 75% of ICCG. These eight mutants were purified and tested for their depolymerization activity against amorphous PET powder. Six mutants showed improved activity compared to ICCG. The best mutant, H218Y, showed a 27% increase in PET depolymerization activity at 72&deg;C compared to ICCG (Figure 8).
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-wet-lab/2.webp" alt="Figure 2: Relative activity of the pure enzyme catalytic rescreen" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure 2: Relative activity of the pure enzyme catalytic rescreen, measured by HPLC after depolymerization of amorphous PET powder at 72&deg;C for 5 h. All data were obtained using homogenization according to ICCG.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 mt-8">Round 2: Combinatorial Mutagenesis</h3>
            <p className="mb-4">
              In the second round of engineering, the H218Y mutant was selected as the starting enzyme. Conservation analysis identified 16 mutations across 6 residues with higher affinity than the H218Y mutant. These mutants were then evaluated for activity using a high-throughput screening process. Six mutants exhibited absorbances exceeding 75% ICCG, targeting sites S100, S101, N246, S247, and N248. 2 double-site mutants, H218Y/N248Q, and H218Y/N248Q, exhibited higher absorbance than H218Y. Protein purification and enzyme activity assays revealed that the H218Y/N248D mutant exhibited a 21% increase in activity compared to H218Y (Figure 9).
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-wet-lab/3.webp" alt="Figure 3: Second round of evolution using H218Y as the starting enzyme" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure 3: Second round of evolution using H218Y as the starting enzyme. Relative activity of the pure enzyme was measured in a secondary screening, using the purified enzyme to depolymerize amorphous PET powder at 72&deg;C for 5 hours and then measured by HPLC. All data were obtained using homogenization according to ICCG.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 mt-8">Round 3: Hotspot Diversification</h3>
            <p className="mb-4">
              The third round of engineering used the double-site mutant H218Y/N248D as the starting enzyme. To increase diversity, hotspots within the conserved domains, including W104, H164, A213, H242, and I243, were introduced into the mutant design. Prediction showed that 17 mutants from 12 residues had higher affinity than H218Y/N248D. Of these, 7 mutants exhibited absorbance exceeding 75% of ICCG, representing 43.2% of all tested mutants (Figure 8). Based on site and absorbance values, mutants were selected for protein purification and PET depolymerization activity assays. All mutants in the third round exhibited higher activity than ICCG, with two mutants, H218Y/N248D/S247A and H218Y/N248D/I234Q, exhibiting higher activity than the best variant from the second round, H218Y/N248D (Figure 10).
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-wet-lab/4.webp" alt="Figure 4: Relative activity of the purified enzymes from the third round of evolution" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure 4: Relative activity of the purified enzymes from the third round of evolution, starting with H218Y/N248D, was measured by HPLC after depolymerization of amorphous PET powder at 72&deg;C for 5 hours. All data were obtained using homogenized enzymes according to ICCG.
              </p>
            </div>
            <div className="my-6 flex justify-center">
              <img src="images/results-wet-lab/5.webp" alt="Figure 5: Depolymerization curves of amorphous PET powders of ICCG, LCC-R2, and LCC-R3" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure 5: Depolymerization curves of amorphous PET powders of ICCG, LCC-R2, and LCC-R3. The depolymerization product is the sum of BHET, MHET, and TPA. Reactions were performed at 72&deg;C using 10 g of amorphous PET powder and 5 mg/gr of enzyme in 1 mL of 0.1 M phosphate buffer (pH 8.0). The product is the total molar amount of BHET, MHET, and TPA.
              </p>
            </div>
            
            <p className="mb-4">
              The two most active mutants, designated LCC-R3 (H218Y/N248D/S247A) and LCC-R2 (H218Y/N248D), were tested for changes in product concentration over time when reacting with amorphous PET powder (Figure 10). Within a 10-hour reaction period, these mutants produced only 18.5 mM of product upon PET decomposition, while LCC-R2 and LCC-R3 polymerized at rates significantly faster than ICCG. At 6 hours, the control LCC-R2 and LCC-R3 released 26.0 and 25.8 mM of product, respectively, representing 1.41- and 1.39-fold increases in ICCG, indicating enhanced catalytic activity.
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-wet-lab/6.webp" alt="Figure 6: Comparison of mutant activity against amorphous PET powder at different temperatures" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure 6: Comparison of mutant activity against amorphous PET powder at 69, 72, 75, 78, 81, and 84&deg;C. Reactions were performed at 69, 72, 75, 78, 81, and 84&deg;C using 10 g/L amorphous PET powder and 5 mg/g/L enzyme in 1 ml of 0.1 M phosphate buffer (pH 8.5) for 2 h. All data were homogenized based on the highest ICCG activity (75&deg;C).
              </p>
            </div>
            
            <p className="mb-4">
              We also compared the activities of these two mutants with those of the recently reported highly efficient PET depolymerase, Fast-PETase. At 50&deg;C, LCC-ICCG-R2&nbsp;and LCC-ICCG-R3 released 2.65 and 2.52mM of product, respectively, representing 2.30-fold and 2.1-fold the amounts of ICCG, respectively. However, the amounts released at 50&deg;C were still slightly lower than the 3.5 mM released by Fast-PETase. At 72&deg;C, Fast-PETase was inactive, and no product release was detected. LCC-ICCG -R2 and LCC-ICCG -R3, on the other hand, efficiently depolymerized PET at 72&deg;C, releasing 16.4 mM and 17.2 mM of product, respectively, 4.6-fold the amount released by Fast-PETase at 50&deg;C. This further demonstrates that higher reaction temperatures favor PET depolymerization by cutinase.
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-wet-lab/7.webp" alt="Figure 7: Comparison of the depolymerization activity of ICCG, LCC-ICCG-R2, and LCC-ICCG-R2 on amorphous PET membranes" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure 7:&nbsp;Comparison of the depolymerization activity of ICCG, LCC-ICCG-R2, and LCC-ICCG-R2 on amorphous PET membranes: 45 mg of amorphous PET membrane was placed in 1.8 ml of 1 M phosphate buffer (pH 8.5) containing 27 &mu;g of enzyme and incubated at 78&deg;C and 150 rpm for 2-8 h. Product concentration was determined by HPLC.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 mt-8">Enzyme activity test of the triple mutant</h3>
            <p className="mb-4">
              Before enzyme activity testing, ICCG and its mutants were quantified using a protein quantification kit coupled with a microplate reader. The triple mutant enzyme activity was tested using GfPET as the substrate, with reactions at 70&deg;C, 80&deg;C, and 90&deg;C for 24 h. After the completion of the enzyme activity test, several mutants were observed to have a significant hydrolysis effect on PET. The observed phenomena were photographed and revealed that at 70&deg;C, ICCG and the mutants completely degraded GfPET (Figure A), while PET flakes remained at 72&deg;C and 75&deg;C. At 72&deg;C, all enzyme reactions showed no significant change compared to the control (Figure B). However, at 75&deg;C, an interesting phenomenon was observed: PET fragments were degraded in the triple mutants, with KRP showing the highest concentration of small PET fragments, while no similar phenomenon was observed in ICCG (Figure C). This observation suggests that the modified triple mutant H218Y/N248D/S247A exhibited higher hydrolysis efficiency than ICCG at 75&deg;C.
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-wet-lab/8.webp" alt="Figure 8: Degradation of PET by the triple mutants at different temperatures" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure 8:&nbsp;A, B, and C represent the degradation of PET by the triple mutants at 72&deg;C, 78&deg;C, and 84&deg;C, respectively, after 24 h of reaction.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 mt-8">Experimental evaluation of the ability of PET hydrolase</h3>
            <p className="mb-4">
              Achieving a degradation rate of over 90% at high PET substrate concentrations is a key metric for evaluating the potential for industrial application of PET hydrolases. Experiments with high substrate concentrations can reveal enzyme defects that are difficult to detect at lower concentrations. For example, some PET hydrolases are susceptible to inhibition by the hydrolysis product TPA, resulting in a significant decrease in catalytic activity with increasing TPA concentration. Other enzymes, due to poor tolerance to organic solvents, produce large amounts of ethylene glycol when hydrolyzing PET at high substrate concentrations, reducing enzyme activity. However, the PET concentration should not be too high when evaluating enzymes, as this will cause TPA precipitation in the solution and affect the accuracy of liquid phase analysis. Marty et al. proposed that the maximum solubility of terephthalate between 25&deg;C and 70&deg;C is 13%, corresponding to a PET concentration of 165 g/kg in the reaction solution. Based on this, we systematically evaluated mutants using varying enzyme dosages.
            </p>
            <p className="mb-4">
              Reducing the enzyme dosage not only reduces costs in large-scale PET hydrolysis processes but, more importantly, allows for accurate comparison of the PET hydrolysis capabilities of different enzymes. Therefore, this study evaluated the PET hydrolysis performance of LCC-ICCG, LCC-ICCG-R2, and LCC-ICCG-R3 at an enzyme dosage of 0.5 mg genzyme gPET-1 and a substrate concentration of 165 g/kg. Experiments were conducted at 70&deg;C using amorphized PET (7.33% crystallinity) pretreated by heating and melting and rapid cooling. For the mutants, LCC-ICCG was used as a benchmark for comparison. Ultimately, the degradation rate of LCC-ICCG plateaued at 85%, while the PET hydrolysis performance of LCC-ICCG-R2 and LCC-ICCG-R3 exceeded 90%. Although LCC-ICCG achieved a PET degradation rate exceeding 90% at 1 mg g<sup>enzyme </sup>gPET-1, it failed to reach 90% under the more stringent conditions of lower enzyme dosages.
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-wet-lab/9.webp" alt="Figure 9: Comparison of PET depolymerization by LCC-ICCG, LCC-ICCG-R2, LCC-ICCG-R3 under high PET substrate concentrations" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure&nbsp;9: Comparison of PET depolymerization by LCC-ICCG、LCC-ICCG-R2、 LCC-ICCG-R3 under high PET substrate concentrations (165 g/kg) and 0.5 mg<sup>enzyme</sup>&nbsp;gPET<sup>-1</sup>&nbsp;enzyme loading in a bioreactor.
              </p>
            </div>
            
            <p className="mb-4">
              Since all enzymes utilize the pET-22b(+) plasmid, their transcription levels and expression efficiencies in E. coli are similar. The primary mechanism for the increased yield of the mutant proteins is likely due to improved folding efficiency. The combination of mutations may have reduced aggregation within the hydrophobic regions of the proteins, reduced inclusion body formation, and increased protein solubility. Upon centrifugation of cell lysates from LCC-ICCG-R2 and LCC-ICCG, significantly more insoluble precipitate was observed for LCC-ICCG than for LCC-ICCG-R2. SDS-PAGE analysis of the enzyme cell fragments revealed that the band at the corresponding molecular weight for LCC-ICCG was significantly thicker than that for the mutant, indicating that the mutations effectively reduced aggregation and precipitate formation due to hydrophobic interactions.
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-wet-lab/10.webp" alt="Figure 10: Analysis of two-point mutations that increase enzyme solubility" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure&nbsp;10:&nbsp;Analysis of two-point mutations that increase enzyme solubility. Comparison of precipitation after cell disruption between LCC-ICCG and LCC-ICCG-R2.
              </p>
            </div>
          </div>

          {/* Synthesis and Degradation of Novel Biodegradable Polyesters Section */}
          <div ref={sectionRefs.synthesisDegradation} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Synthesis and Degradation of Novel Biodegradable Polyesters</h2>
            
            <h3 className="text-xl font-semibold mb-3">PBTDP: Hydrophilicity-Enhanced Copolyesters</h3>
            <p className="mb-4">
              Conventional PE-like polyesters (e.g., PE-18,18) exhibit extremely slow degradation in natural environments, with a weight loss of &lt;0.2% after 50 days. Their recycling requires industrial composting conditions (60&deg;C) or strong chemical reagents (e.g., methanol), which hinders the realization of a green closed-loop cycle. In this study, bio-based pyrrolidone dicarboxylic acid (EBPCA) was synthesized via polycondensation of bio-based ethylenediamine and itaconic acid, and then incorporated as a comonomer into the polyester backbone to prepare the PBTDP series of polyesters (where x denotes the molar percentage of EBPCA). The pyrrolidone ring endows the material with dual functions: (1) acting as hydrophilic sites to enhance surface hydrophilicity; (2) serving as enzyme-binding sites to strengthen non-covalent interactions with lipase CALB. Performance tests revealed that when the EBPCA content was increased to 25 mol% (PBTDP25), the weight loss reached nearly 40% after 50 days of incubation in 37&deg;C water, significantly outperforming the conventional PE-like polyester (PBTDP0, with a weight loss of &lt;2%). Furthermore, enzymatic degradation efficiency under CALB catalysis was remarkably improved: PBTDP25 completely fragmented within 10 days, and the degradation rate increased positively with the EBPCA content.
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-wet-lab/11.webp" alt="Figure 11: Future research will be dedicated to facilitating more efficient and large-scale application of enzymatic recycling design" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure 11: Future research will be dedicated to facilitating more efficient and large-scale application of enzymatic recycling design based on immobilized enzyme technology to reduce the production inputs of a biocatalyst and make greater contributions to the greening of polymer enzymatic recycling.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Theoretical Calculation of Enzymatic Degradation of PBTDP</h3>
            <p className="mb-4">
              The interaction between polyester substrates and CALB is pivotal for enzymatic degradation. To probe the structural basis, molecular dynamics (MD) simulations were performed on PBTDP0 and PBTDP25. PBS analysis, reflecting enzyme&ndash;substrate recognition, revealed distinct conformational differences. CALB operates through a Ser-His-Asp catalytic triad, with nucleophilic attack by S105 as the rate-limiting step. PBS conformations were assessed using nucleophilic distance and attack angle criteria. PBTDP25 exhibited reactive PRS conformations (23.2%), whereas PBTDP0 failed to do so, indicating poor accessibility to the catalytic serine. Cluster analysis showed that in the PBTDP25&ndash;CALB complex, residues A281 and W104 formed a &ldquo;claw&rdquo; within the catalytic tunnel, stabilizing pyrrolidone groups. In contrast, these residues were spatially distant in the PBTDP0 complex, preventing effective capture. Atomic contact analysis confirmed closer interactions (3.5-4.0 &Aring;) between A281/W104 and pyrrolidone rings in PBTDP25, compared with longer distances (5.2-5.8 &Aring;) in PBTDP0.Noncovalent interaction (NCI) analysis further supported these results. IGMH and QTAIM revealed stronger hydrogen bonding and higher electron density (&rho;) values at bond critical points in the PBTDP25&ndash;CALB complex. By contrast, the methylene-rich PBTDP0 substrate formed weaker, less effective contacts, reducing PBS formation.
            </p>
            <p className="mb-4">
              Overall, pyrrolidone groups in PBTDP25 enhance enzyme recognition, strengthen noncovalent interactions, and increase PRS populations, thereby markedly improving biodegradability compared with PBTDP0. These findings underscore the importance of tailored copolyester design for enzymatic degradation.
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-wet-lab/12.webp" alt="Figure 12: Comparison of PBTDPs in different degradation environment" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure 12: (a) Comparison of PBTDPs in different degradation environment in 10 days. (b) SEM photos of the surface morphologies of PBTDPs at 3500&times; after 10 days of Enzyme-catalyzed Degradation.&nbsp;(c) The PBS analysis of the enzymatic mechanism. (i) Scheme of the Bürgi-Dunitz angle. The distribution of the d(C-O&gamma;<sup>S105</sup>) distances and BD angle was calculated in (ii) PBTDP25 and (iii) PBTDP0 bound with CALB. (d) The representative structures of (i) PBTDP25 and (ii) PBTDP0 bound with CALB during MD simulations. (e) Quantifying the noncovalent interaction by measuring the distance between PBTDPs and residues W104. (f) IGMH analysis of the PBTDPs-CALB system. Blue region represents hydrogen bonding interaction and green indicates van del Waals interaction. (g) QTAIM analysis of the PBTDP-CALB system. Bond critical points were shown in small orange spheres.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Synthesis of EBPCA monomer</h3>
            <p className="mb-4">
              IA (0.6 mol) and EDA (0.3 mol) were dissolved in 500 mL of water in 1000 mL three-necked round-bottom flasks equipped with a mechanical stirring. The reaction mixture was stirred at reflux (130 &deg;C) for 36h. The formed solution was subjected to reduced pressure to remove the water. Secondly, the products were precipitated, followed by filtration and washed with cold methanol, and drying in vacuo overnight at 50 &deg;C.
            </p>
            <p className="mb-4 font-semibold">Synthesis procedure</p>
            <div className="my-6 flex justify-center">
              <img src="images/results-wet-lab/13-1.webp" alt="Scheme 1: Synthesis of EBPCA monomer and PBTDP copolyesters" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Scheme 1<strong>:</strong>&nbsp;Synthesis of EBPCA monomer and PBTDP copolyesters.
              </p>
            </div>
            <p className="mb-4">
              Utilizing feedstocks derived from biomass to manufacture valuable polymers is an attractive approach. Firstly, the&nbsp;renewable pyrrolidone diacid EBPCA was successfully synthesized from bio-based ethylenediamine and itaconic acid,35&ndash;38 as confirmed by 1H NMR and FT-IR spectra. Characterization data for EBPCA monomer.
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-wet-lab/13.webp" alt="Figure 13: 1H NMR (400 MHz, DMSO) of EBPCA monomer" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure 13: <sup>1</sup>H&nbsp;NMR (400 MHz, DMSO) of EBPCA monomer:&nbsp;3.62-3.52 (2&nbsp;H, m), 3.49 -3.42 (2&nbsp;H, m), 3.40 (1&nbsp;H, s), 3.32 (2&nbsp;H, s), 3.21 (1 H, d), 3.10 (2&nbsp;H, m), 2.40 (4&nbsp;H, t).
              </p>
            </div>
            <div className="my-6 flex justify-center">
              <img src="images/results-wet-lab/14.webp" alt="Figure 14: FT-IR spectra of EBPCA monomer powder" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure 14: FT-IR&nbsp;spectra of EBPCA monomer powder
              </p>
            </div>
            <p className="mb-4">
              <sup>13</sup>C NMR provided more detailed structural information on PBTDPs, as shown in Fig. 2c and d. Peaks of A and B (173&ndash;174 ppm) were assigned to the carbonyl groups of ester bonds, and peak C at 172 ppm corresponded to the carbonyl groups of the lactam ring. Besides, peaks of E, F and I were attributed to the &ndash;CH2&ndash; of the pyrrolidone ring, respectively.
            </p>
            <p className="mb-4">
              Enzymatic recycling of PBTDPs from mixture plastics. The degraded products after enzymatic degradation can serve as building blocks for recycling, which represents an environmentally friendly strategy for enhancing the potential for the reuse of polymers within a circular economy. The enzymatic recycling and separation of targeted materials from mixed plastic waste streams is a key point toward sustainability. Thus, the depolymerization of PBTDP20 and monomer recovery from mixed plastic waste are shown. Pieces from various plastics, such as PP (blue), PVC (green) and PET (transparent), were mixed with PBTDP20. The polymer mixture was exposed to the same enzymatic solution. Because of the orthogonal reactivity and the chemical stability of the other plastic products under the given conditions, PBTDP20 was selectively depolymerized. Within 2 days, the bulk material started to break and the formed TDA precipitated as a fine powder, while pyrrolidone oligomers remained dissolved in the aqueous mixture. As a result, the TDA monomers with a recycling rate of 92% could be easily separated from the mixed.
            </p>
            <p className="mb-4">
              Similar to the hydrolysis process, PBTDP15, PBTDP20 and PBTDP25 degraded faster than PBTDPs with a lower ratio of pyrrolidone under enzymatic conditions, due to the improved hydrophilicity and reduced crystallinity of copolyesters themselves. Surprisingly, PBTDP20 and PBTDP25 were completely shattered after 10 days, while other specimens retained their entire frames.
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-wet-lab/15.webp" alt="Figure 15: Residue weights of PBTDPs degraded in PBS solutions during 50 days" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure&nbsp;15:&nbsp;(a) Residue weights of PBTDPs degraded in PBS solutions during 50 days. (b) SEM photos of the surface morphologies of PBTDPs at 3500&times; after 50 days of hydrolysis in PBS solutions. (c) Hydrolytic pathways were calculated with the DFT method. Fukui function analysis results of (i) PBTDP25 and (ii) PBTDP0 with an isosurface value of &plusmn; 0.005 (blue, negative; green, positive). (d) Free energy profile for hydrolytic mechanism. The relative free energy profiles calculated with &omega;B97X-D/6-31+G(d,p) level of theory. Energies are in kcal/mol. (e) The transition state structure of PBTDP25. (f) Interaction analysis between PBTDP25 and water molecules. Blue isosurface represents the hydrogen bonding attraction. (g) Hydrogen bond strength identification via QTAIM analysis. The water molecules are highlighted. Bond critical points are shown in small orange spheres.
              </p>
            </div>
            <p className="mb-4">
              The ATR-FTIR and 1H NMR spectra were also applied to compare the structural changes of the samples before and after degradation. Similar changes in absorption peaks corresponded to the cleavage of ester bonds A lower pyrrolidone remaining fraction showed faster degradation. In particular, the ester bonds in the BP segment were more significantly broken under enzyme catalysis, and were preferred over the BTD fraction. This indicated that the incorporation of pyrrolidone units facilitated enhanced binding of the material to the enzyme, thereby markedly augmenting the degradation of copolyester under enzyme-catalyzed circumstances
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Hydrolysis&nbsp;Behavior of PBTDPs</h3>
            <p className="mb-4">
              The hydrolysis experiment of PBTDPs was conducted in PBS solution at 37 &deg;C by using hot-pressed dumb-bell specimens. (Figure 11a) PBTDP0 was observed virtually no mass loss (&lt;2%) after hydrolysis for 50 days. PBTDP5 and PBTDP10 also showed high residue weights over 96%, respectively. As reported elsewhere, PE-like polyesters were usually difficult to hydrolyze directly in mild temperature due to the hydrophobicity of the methylene backbone and high crystallinity of polyesters.&nbsp;With the increase of BP units, the residue weight of PBTDPs continuously reduced, and PBTDP25 displayed the fastest hydrolysis rate, with 60.6% of the residue weight. The surface morphologies of samples after hydrolysis were studied using SEM. (Figure 11b) PBTDP0 and PBTDP5 maintained a flat morphology, as well as minimal corrosion appeared on the surface of the PBTDP10 after 50 days of hydrolysis. The images of PBTDP15 showed more cracks, which facilitated further surface degradation. Full planes were almost non-existent in PBTDP20 and PBTDP25, and the surface became irregular and more pores appeared. The change in molecular weight also demonstrated that the introduction of pyrrolidone as a hydrophilic group into the molecular chain could significantly improve the hydrolysis degradation.
            </p>
            <p className="mb-4">
              The above results illustrated that the pyrrolidone units were the most critical factor affecting the hydrolysis of polyesters. To further understand the hydrolytic pathways, the PBTDP0 and PBTDP25 were selected to perform theoretical calculations based on Fukui function analysis and DFT calculation. Specifically, the Fukui function analysis based on the low-energy conformers was conducted to illustrate the reactivity trends and site selectivity. Fukui indices (<strong>𝑓</strong><sup>+</sup>) represented the reducibility of carbonyl carbon according to nucleophilic attack ability. As a result, the ester bonds adjunct to the pyrrolidone functional groups (<strong>𝑓</strong><sup>+</sup>&nbsp;index of C1: 0.0843) were most reactive for nucleophilic attack among carbonyl carbons of PBTDP25 segment (Figure 19c-i). In contrast, the <strong>𝑓</strong><sup>+</sup>&nbsp;of PBTDP0 carbonyl carbons was low (0.0256), indicating their lower reactivity (Figure 5c-ii). The hydrolysis reaction of PBTDP25 was further studied via the final optimized geometries and the transition state structure was exhibited. The Gibbs activation energy of PBTDP25&rsquo;s hydrolysis process was calculated to be 23.2 kcal/mol, which is 7.1 kcal/mol lower than that of PBTDP0 (Figure 19d). The hydrolysis transition states of esters in PBTDP25 were calculated and shown in Figure 5e. To unravel the origin of preferable energy barrier of PBTDP25, the independent gradient model based on Hirshfeld partition (IGMH) was used to visualize and quantify the noncovalent interactions between PBTDP25 and water molecules. As a result, PBTDP25 processed the vast blue area, responding to the typical hydrogen bond (Figure 19f).
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-wet-lab/16.webp" alt="Figure 16: Macroscopic topography photos of PBTDPs before and after degradation experiments" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure 16:&nbsp;Macroscopic topography photos of PBTDPs before and after degradation experiments.&nbsp;
              </p>
            </div>
            <p className="mb-4">
              Similar to the hydrolysis process, PBTDP15, PBTDP20 and PBTDP25 degraded faster than PBTDPs with a lower ratio of pyrrolidone under enzymatic conditions, due to the improved hydrophilicity and reduced crystallinity of copolyesters themselves. Surprisingly, PBTDP20 and PBTDP25 were completely shattered after 10 days, while other specimens retained their entire frames.
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-wet-lab/17.webp" alt="Figure 17: Different plastic membrane prepared for mixed plastic recycling experiment" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure 17: Different plastic membrane prepared for mixed plastic recycling experiment.
              </p>
            </div>
            <div className="my-6 flex justify-center">
              <img src="images/results-wet-lab/18.webp" alt="Figure 18: Different plastic membranes were separated after recycling experiment" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure 18: Different plastic membranes were separated after recycling experiment.&nbsp;
              </p>
            </div>
            <p className="mb-4">
              Notably, the experimental temperature, which was set at 37 &deg;C to ensure enzyme activity, was quite mild,thus reducing energy consumption in the entire recycling procedure. Besides, the CALB enzyme was also able to maintain its activity for a long period during the recycling process. In a control experiment, it was found that the CALB enzyme was able to convert the PBTDP copolyester into a long-chain dibasic acid with comparable rapidity, despite having been stored at 37 &deg;C for 10 days.
            </p>
          </div>

          {/* Cell Membrane-Inspired Degradable Polyesters with ROS-Responsive Properties Section */}
          <div ref={sectionRefs.cellMembrane} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Cell Membrane-Inspired Degradable Polyesters with ROS-Responsive Properties</h2>
            <p className="mb-4">
              Reactive oxygen species (ROS) play a dual role in biological systems: they function as essential mediators in signal transduction and immune regulation, yet their excessive accumulation induces oxidative stress and contributes to various diseases. Hence, the development of functional polymers with controllable degradability and selective ROS responsiveness holds great promise for disease diagnosis and precision therapy. Furan-based polyesters derived from renewable feedstocks have attracted considerable attention due to their stability and biocompatibility. However, their rigid backbones and slow degradation limit biomedical applications. Incorporating heteroatom-containing diacids and tuning copolymerization ratios can achieve controllable degradation, though the lack of ROS-specific responsiveness remains a challenge.
            </p>
            <p className="mb-4">
              Here, PBFTd polyesters were designed with synergistic effects from furan rings and sulfur-containing chains, endowing them with excellent O₂, CO₂, and water vapor barrier properties. Upon H₂O₂ oxidation, the materials exhibited enhanced hydrophilicity and accelerated degradation, enabling controllable breakdown. The hydrolysis pathway was further elucidated by theoretical calculations, highlighting energy barrier variations and noncovalent interactions. These results demonstrate the potential of cell membrane-inspired polyesters for sustainable and biomedical applications.
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-wet-lab/19.webp" alt="Scheme Synthesis of PBFTd" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure 19: Scheme Synthesis of PBFTd.
              </p>
            </div>
            <p className="mb-4">
              Bio-based polyesters (such as FDCA-derived polymers) have demonstrated excellent thermal stability, mechanical strength, and biocompatibility, making them promising candidates for sustainable polymer applications. However, their rigid main chains lead to slow degradation rates and poor controllability. For example, PBF possesses favorable performance but remains difficult to achieve precise degradation under physiological or environmental conditions. Current strategies, such as PBSF copolyesters, enable biodegradation in composting or enzymatic environments but lack controllability in broader contexts. Similarly, PBDF copolyesters incorporating DGA achieve controlled hydrolytic degradation but fail to provide responsiveness to reactive oxygen species (ROS). Meanwhile, typical ROS-responsive polymers such as PPS show limited structural versatility, complex synthesis, and potential biosafety concerns.
            </p>
            <p className="mb-4">
              Inspired by the phospholipid bilayer of cell membranes, which regulates molecular transport via hydrophilic heads and hydrophobic tails, we introduced thiodiacetic acid (TDA)&mdash;a natural human metabolite with excellent biocompatibility and medical relevance&mdash;as a functional design unit. The thioether bond (-S-) in TDA can be oxidized by ROS (e.g., H₂O₂) into hydrophilic sulfoxide (-SO-) and sulfone (-SO₂-) groups, thereby endowing the polymer with ROS responsiveness. By copolymerizing TDA with rigid furan units derived from DMFD, we developed a novel copolyester, PBFTd. This design enables oxidation-triggered modulation of chain hydrophilicity, analogous to membrane-regulated molecular permeability, thereby controlling water access to ester bonds and tuning the hydrolytic degradation process.
            </p>
            <p className="mb-4">
              This approach not only confers controllable degradation under ROS conditions but is also expected to maintain or even surpass the outstanding properties of FDCA-based polyesters, including high thermal stability and excellent barrier performance. The development of PBFTd opens new avenues for the functionalization and intelligent design of bio-based polyesters, with promising applications in degradable packaging and biomedical devices.
            </p>
            <p className="mb-4">
              Highlight: These materials demonstrate selective degradation in mixed-plastic systems, allowing recovery of monomers with up to 92% recycling yield under mild conditions.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Hydrolytic and seawater degradation of PBFTd</h3>
            <p className="mb-4">
              The incorporation of aliphatic segments into aromatic polyesters shows enhanced hydrolytic degradability.&nbsp;Even hydrophilic structures that are not inherently degradable monomers&mdash;such as lactic acid, glycolic acid, diglycolic acid, and oxalic acid&mdash;can promote the degradation of aromatic polyesters. Dubois introduced succinic acid and adipic acid into PBF, and reported that aliphatic segments undergo hydrolysis more readily than aromatic segments, with amorphous domains degrading more rapidly than crystalline ones.
            </p>
            <p className="mb-4">
              In contrast to the non-degradable nature of neat PBF, the incorporation of Td units disrupts crystallinity, facilitating water penetration and ester bond cleavage in the amorphous regions, thereby imparting degradability. As shown in Figure 6(a), PBFTd with 10% Td units exhibit a 3% weight loss after 56 days in phosphate-buffered solutions. Increasing the Td contents to 60% results in a corresponding weight loss of 8%, indicating a composition-dependent degradation behavior.
            </p>
            <p className="mb-4">
              The structural evolution of PBFTd samples after hydrolysis was further analyzed. As shown in Figure 6(b), the yellow region highlights the relative changes in Td units as determined by NMR spectroscopy. A consistent decrease in Td units were observed post-hydrolysis. Specifically, PBFTd samples with 10% and 20% Td units showed a 1% reduction, while the sample with 30% Td units exhibited a 2% decrease. More pronounced reductions were observed in samples containing 40, 50, and 60% Td units, with decreases of 3%, 6%, and 16%, respectively, indicating greater susceptibility of higher Td-content materials to hydrolytic cleavage. The green region illustrates changes in number average molecular weight (<em>M</em><em><sub>n</sub></em>) before and after hydrolysis. All PBFTd samples exhibited <em>M</em><em><sub>n</sub></em>&nbsp;reduction, consistent with chain scission during hydrolysis. The extent of degradation increased with Td units, with Mn decreasing by 1.5-fold in low Td contents sample and up to 3.8-fold in the sample containing 60% Td units.
            </p>
            <p className="mb-4">
              The purple region shows the integrated area of the broad &ndash;OH stretching band at 3200&ndash;3600 cm⁻&sup1; in the FTIR spectra, corresponding to free hydroxyl groups. A marked increase in the hydroxyl area after hydrolysis confirms the occurrence of ester bond cleavage. Moreover, the intensity of this increase correlated positively with Td content, further supporting the composition-dependent hydrolytic degradation behavior.
            </p>
            <p className="mb-4">
              Despite the hydrolytic degradability of PBFTd, a comparison with previously reported degradable PBF-based copolyesters reveals its relatively slower degradation rate as shown in Figure 19 (c), PBFTd hydrolyzes more slowly than oxalic acid-modified PBOF and diglycolic acid-modified PBDF, both of which possess highly hydrophilic moieties. Even PBAF, modified with adipic acid, showed slightly higher degradation efficiency than PBFTd. In contrast, the hydrolytic rate of PBFTd was found to be comparable to that of PBSF containing succinic acid units.
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-wet-lab/20.webp" alt="Figure 20: Hydrolysis residue weight of PBFTd in PBS solutions over time" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure 20:<strong>&nbsp;</strong>(a)&nbsp;Hydrolysis residue weight of PBFTd in PBS solutions over time.&nbsp;(b)&nbsp;The structure and molecular weight changes of PBFTd before and after 56 days of hydrolysis. (c) Comparison chart of hydrolysis of PBFTd with similar aliphatic modified-PBF and hydrophilic monomer modified-PBF.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Oxidation&nbsp;Response of PBFTd</h3>
            <p className="mb-4">
              Incorporation of thioether bond into the polymer backbone fails to markedly enhance the hydrophilicity of PBF, thus limiting the acceleration of its controlled degradation. Inspired by the amphiphilic architecture of phospholipid bilayers in cell membranes&mdash;comprising hydrophilic head groups and hydrophobic tails&mdash;we oxidized the sulfur atoms in the PBFTd backbone into hydrophilic sulfoxide and sulfone moieties via a facile and efficient protocol. By modulating the content and ratio of sulfoxide and sulfone units, water ingress and permeation can be finely regulated, akin to membrane behavior. This, in turn, governs the accessibility of water molecules to ester bonds in the polymer chain, facilitating nucleophilic attack and enabling precise control over the degradation kinetics.
            </p>
            <p className="mb-4">
              The oxidation behavior of PBFTd<sub>20</sub>&nbsp;and PBFTd<sub>40</sub>&nbsp;was systematically investigated using H<sub>2</sub>O<sub>2</sub>&nbsp;at concentrations of 0.1 M and 1 M, respectively. The degree of oxidation was monitored over time as shown. When treated with 0.1 M H<sub>2</sub>O<sub>2</sub>, the oxidation proceeded slowly. After 7 days, PBFTd<sub>20</sub>&nbsp;exhibited an oxidation degree of only 37.7%, comprising 20.7% sulfoxide and 9.4% sulfone moieties. In contrast, PBFTd<sub>40</sub>&nbsp;reached an oxidation level of 69.8%, with 56.6% sulfoxide and 13.2% sulfone functionalities. A markedly enhanced oxidative efficiency was observed with 1 M H<sub>2</sub>O<sub>2</sub>. After 5 days, PBFTd<sub>20</sub>&nbsp;achieved an oxidation degree of 83.9%, comprising 63.8% sulfoxide and 20.3% sulfone. Upon prolonged treatment (7 days), full oxidation (100%) was attained, with 49.3% sulfoxide and 50.7% sulfone groups. PBFTd<sub>40</sub>&nbsp;displayed a similar trend, reaching 96.5% oxidation after 5 days (69.5% sulfoxide, 27.0% sulfone), and complete oxidation after 7 days with 47.8% sulfoxide and 52.2% sulfone. The successful incorporation of sulfoxide and sulfone functionalities was further confirmed by FTIR spectroscopy (Fig. 14(e) and (f)). Characteristic absorption bands corresponding to the asymmetric stretching of sulfoxides (&sim;1025 cm⁻&sup1;) and sulfones (&sim;1310 cm⁻&sup1;) emerged and intensified over time, consistent with the NMR analysis.
            </p>
            <p className="mb-4">
              The oxidation-induced chemical modification also manifested in a notable increase in hydrophilicity. The CA of PBFTd<sub>20</sub>&nbsp;decreased from 72.4&deg; to 53.9&deg;, while that of PBFTd<sub>40</sub>&nbsp;decreased from 68.9&deg; to 52.9&deg;, attributable to the growing presence of polar sulfoxide and sulfone groups, particularly the latter. The increased hydrophilicity was found to significantly promote the hydrolytic degradation of the polymer. Hydrolysis experiments conducted over 56 days on oxidized PBFTd<sub>20</sub>&nbsp;and PBFTd<sub>40</sub>&nbsp;revealed minimal weight loss attributable to hydrolysis during the oxidation process itself. However, post-oxidation degradation was evident (Fig. 14(g) and (h)): weight loss of PBFTd<sub>20</sub>&nbsp;increased from 1.8% (unoxidized) to 4.1% (0.1 M H₂O₂) and 20.2% (1 M H₂O₂), while PBFTd<sub>40</sub>&nbsp;showed an increase from 3.9% to 17.9% and 28.1%, respectively. Further mechanistic insights suggest that the oxidation transforms the thioether linkages in the polymer backbone into highly polar sulfoxide and sulfone units. These structural motifs, reminiscent of the hydrophilic headgroups of phospholipid membranes, enhance water accessibility to ester bonds, thereby enabling a controlled hydrolysis pathway.
            </p>
            <div className="my-6 flex justify-center">
              <img src="images/results-wet-lab/21.webp" alt="Figure 21: The NMR treated with 1M H2O2 for 5 and 7 days" className="w-3/4 my-4" />
            </div>
            <div className="my-6">
              <p className="italic text-center text-lg">
                Figure 21: The NMR treated with 1M H<sub>2</sub>O<sub>2</sub>&nbsp;for 5 and 7 days of (a)PBFTd<sub>20</sub>&nbsp;and (b)PBFTd<sub>40</sub>. The FTIR treated with 0.1M and1M H<sub>2</sub>O<sub>2</sub>&nbsp;for 5 and 7 days of (c)PBFTd<sub>20</sub>&nbsp;and (d)PBFTd<sub>40</sub>. Water contact angles and hydrolysis&nbsp;of (e) (g)PBFTd<sub>20</sub>&nbsp;and (f) (h)PBFTd<sub>40</sub>&nbsp;treat with 0.1M and 1M H<sub>2</sub>O<sub>2</sub>. (i) Schematic diagram of the oxidation response and accelerated hydrolysis of PBFTd.
              </p>
            </div>
            <p className="mb-4">
              Furthermore, the commercial immobilized versions of CALB typically exhibited increased reaction activity and better recyclability. It was expected to facilitate more efficient and low-cost scale application in enzymatic recycling design of PBTDP based on immobilized enzyme technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}