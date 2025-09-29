

export function Home() {
  

  return (
    <div className="m-h-[100vh] bg-primary">
      <div className="container mx-auto">
        <div className="flex py-20">
          <img src="images/home/1.gif" className="w-1/3" />
        </div>
        <div className="py-4 border-b-4 border-[#E58688]" style={{borderStyle: "dashed"}}>
          <h1 className="text-5xl font-bold text-[#567357]">Background: The Plastic Pollution Crisis</h1>
        </div>
        <div className="flex py-10 relative min-h-[500px] mb-20">
          <img src="images/home/1.png" className="w-[40%] absolute right-0 bottom-0" />
          <div className="w-[60%] text-3xl text-[#567357]">As plastic pollution intensifies globally, traditional recycling and chemical degradation methods face high energy consumption, low efficiency, and severe environmental burdens. In green chemistry, enzymatic degradation has emerged as a sustainable alternative. Unlike harsh chemical or thermal treatments, enzyme-catalyzed depolymerization of polyesters such as PET occurs under mild conditions, with high selectivity and minimal by-products. This biological approach transforms non-degradable plastics into reusable monomers, advancing the circular economy of plastics.</div>
        </div>
        <div className="py-4 border-b-4 border-[#E58688]" style={{borderStyle: "dashed"}}>
          <h1 className="text-5xl font-bold text-[#567357]">What we do?</h1>
        </div>
        <div className="flex justify-end py-10  min-h-[300px] mb-20 relative">
          <img src="images/home/2.png" className="w-[30%] absolute left-0 bottom-0 max-h-[250px] object-contain" />
          <div className="w-[70%] text-3xl text-[#567357]">Our experiment aims to engineer and screen high-performance PET-hydrolyzing enzyme variants, validate their thermostability, and PET-depolymerizing activity. </div>
        </div>
        <div className="flex py-10 relative min-h-[500px] mb-20">
          <img src="images/home/3.png" className="w-[40%] absolute right-0 bottom-0" />
          <div className="w-[60%] text-3xl text-[#567357]">
            <p>1. We utilized AI design strategies, including mutation, thermostability screening, TS-analog binding screening, and reactivity ranking, combined with computational simulations, molecular dynamics (MD) simulations, and DFT calculations, to predict optimal enzyme mutants. </p>
            <p>2. Subsequently, experimental validation was conducted, involving gene construction, protein production and purification, melting temperature assessment, and characterization of PET-depolymerizing activity using amorphous PET powder/film.</p>
          </div>
        </div>
        <div className="flex justify-end py-10  min-h-[300px] mb-20 relative">
          <img src="images/home/4.png" className="w-[30%] absolute left-0 bottom-0 max-h-[250px] object-contain" />
          <div className="w-[70%] text-3xl text-[#567357]">We hope our work advances PET-degrading enzyme development. Though industrial application needs further refinement, we will continue optimizing, aiming to contribute to solving global plastic pollution. </div>
        </div>
      </div>
      <div className="bg-[#567357]">
        <div className="container mx-auto py-20">
          <div className="grid grid-cols-4 gap-10">
            <div className="bg-gray-300 h-100"></div>
            <div className="bg-gray-300 h-100"></div>
            <div className="bg-gray-300 h-100"></div>
            <div className="bg-gray-300 h-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
}