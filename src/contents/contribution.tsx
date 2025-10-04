import { useEffect, useRef, useState } from 'react';

export function Contribution() {
  const [activeSection, setActiveSection] = useState('overview');
  const sectionRefs = {
    overview: useRef<HTMLDivElement>(null),
    method: useRef<HTMLDivElement>(null),
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
                sectionRefs.method.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer text-left px-3 py-2 rounded transition-colors ${
                activeSection === 'method' ? 'text-[#E58889] font-bold' : 'text-[#567357]'
              }`}
            >
              Method
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
            <p className="mb-4">Our team addresses the global plastic crisis by combining advanced enzyme engineering with computational innovation to accelerate plastic degradation and promote circular recycling.</p>
            <ol>
              <li>Innovation in Enzyme Engineering and Modeling.We focused on enhancing plastic-degrading enzymes such as LCC (leaf-branch compost cutinase) through directed evolution and AI-driven protein design. To support this effort, we developed the Pre-Binding State (PBS) model, which integrates mechanistic insights from classical reaction theories. PBS analyzes molecular dynamics (MD) trajectories to identify catalytically competent conformations, allowing us to predict the effects of mutations on enzyme activity while avoiding costly QM/MM free-energy mapping. This approach offers both efficiency and mechanistic interpretability, providing the iDEC community with a reusable tool for screening mutations and optimizing plastic-degrading enzymes.</li>
            </ol>
            <p className="mb-4">First, molecular dynamics (MD) simulations were performed to sample dynamic conformations of enzyme-PET complexes, which were then subjected to conformational clustering analysis to identify key residues (hotspots) critical for substrate binding. Virtual saturated mutagenesis was subsequently applied to these hotspots to reduce the binding affinity between the enzyme and PET chains. A rapid screening platform was established by leveraging the characteristic absorbance of benzene ring compounds at 240 nm for activity evaluation of mutant libraries. Based on this platform, directed evolution was carried out: In the first round, the H218Y single mutant was identified from the hotspot residues, exhibiting a 27% increase in catalytic activity compared to the wild-type enzyme. Building on the H218Y variant, the second round of optimization yielded the double mutant H218Y/N248D, which further enhanced activity by 23% relative to H218Y.</p>
            <p>&nbsp;</p>
            <ol start={2}>
              <li>Design of Sustainable and Degradable Materials.Beyond enzymes, we designed novel degradable polymers. PBTDP copolyesters demonstrated rapid enzymatic degradation at mild conditions with over 92% recovery of reusable monomers, enabling closed-loop recycling. Additionally, we developed oxidation-responsive PBFTd materials, which dynamically adjust hydrophilicity and hydrolysis rates under gentle oxidation while maintaining excellent barrier properties. These materials provide promising alternatives to conventional plastics and offer strategies for sustainable polymer design.</li>
            </ol>
            <p>&nbsp;</p>
            <ol start={3}>
              <li>Community Contribution and Collaboration. We place strong emphasis on sharing knowledge and tools. Our team released experimental data, computational protocols, and AI resources to the iDEC community, while also engaging with industry partners to accelerate the transition from laboratory research to real-world recycling applications. These contributions lower entry barriers and foster collaboration across disciplines.</li>
            </ol>
            <p>&nbsp;</p>
            <ol start={4}>
              <li>Broader Vision. Ultimately, we aim to redefine plastic waste as a valuable feedstock within a biology- and computation-powered circular economy. Our contributions highlight not only scientific innovation but also the importance of openness and collective action in tackling global challenges.</li>
            </ol>
            <p>&nbsp;</p>
          </div>

          {/* Method Section */}
          <div ref={sectionRefs.method} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Method</h2>
            <p className="mb-4">A green method</p>
            <p className="mb-4">Until recently, PET hydrolase engineering focused exclusively on rational and semi-rational design, in which, single mutations (~10<sup>3</sup>variants) and small mutant libraries (&lt;10<sup>3</sup>&nbsp;variants) were constructed based upon structural inspection, homology, domain swapping, and modeling. While directed evolution is a powerful technique for engineering enzymes (and other proteins) with improved and/or new function.&nbsp;it has lagged behind rational design for engineering PET hydrolases. The key limitation has been in the lack of high-throughput screening assays that can effectively evaluate the large enzyme libraries required for directed evolution by random mutagenesis (Figure b).</p>
            <img src='images/contribution/1.png' className='w-4/5 mx-auto my-6' />
            <p className="mb-4"><strong>Enzyme library types and methods to screen them.</strong>&nbsp;a Rational design, semirational design, and directed evolution are the three key laboratory approaches to engineering PET hydrolases. However, a screening approach to evaluate the library associated with the method is required. b Screening methods used to evaluate PET hydrolase libraries.</p>
            <p className="mb-4">&nbsp;</p>
            <p className="mb-4">Traditional enzyme optimization often relies on trial-and-error, but we use AI to predict LCC&rsquo;s structure-function relationships, identifying high-potential mutations for enhanced PET specificity and activity. MD simulations then model these mutants&rsquo; interactions with plastic substrates, revealing dynamic catalytic mechanisms and guiding rational design.</p>
          </div>
        </div>
      </div>
    </div>
  );
}