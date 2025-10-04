import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 注册ScrollTrigger插件
gsap.registerPlugin(ScrollTrigger);

export function Home() {
  const textRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // 创建一个函数来重置所有动画
    const resetAnimations = () => {
      textRefs.current.forEach((el, index) => {
        gsap.set(el, { 
          x: index % 2 === 0 ? -100 : 100, 
          opacity: 0 
        });
      });
    };

    // 初始化动画状态
    resetAnimations();

    // 为每个文本块创建ScrollTrigger动画
    textRefs.current.forEach((el, index) => {
      gsap.to(el, {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
          onLeaveBack: () => {
            // 当向后滚动离开时重置动画状态
            gsap.set(el, { 
              x: index % 2 === 0 ? -100 : 100, 
              opacity: 0 
            });
          }
        }
      });
    });

    // 监听滚动事件，当回到顶部时重置所有动画
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        if (window.scrollY === 0) {
          resetAnimations();
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);

    // 清理函数
    return () => {
      window.removeEventListener('scroll', handleScroll);
      textRefs.current.forEach(() => {
        ScrollTrigger.killAll();
      });
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <div className="m-h-[100vh] bg-primary">
      <div className="container mx-auto">
        <div className="flex py-20">
          <img src="images/home/1.gif" className="w-1/3" />
          <div className="flex-1 flex flex-col">
            <div className="bg-[url('images/home/5.png')] w-full h-10 bg-contain bg-repeat-x"></div>
            <div className="flex-1">
              <h1 className="text-4xl p-4 text-[#E58688] font-bold leading-relaxed">Protein Pre-Binding State (PBS) Framework Enables Mechanistic Insights and Engineering of Robust Biocatalysts for Plastic Depolymerization</h1>
            </div>
            <div className="bg-[url('images/home/5.png')] w-full h-10 bg-contain bg-repeat-x"></div>
          </div>
        </div>
        <div className="py-4 border-b-4 border-[#E58688]" style={{borderStyle: "dashed"}}>
          <h1 className="text-5xl font-bold text-[#567357]">Background: The Plastic Pollution Crisis</h1>
        </div>
        <div className="flex py-10 relative min-h-[500px] mb-20">
          <img src="images/home/1.png" className="w-[40%] absolute right-0 bottom-0" />
          <div className="w-[56%] text-3xl text-[#567357] border-4 border-[#E58688] p-4" ref={addToRefs}>
            As plastic pollution intensifies globally, traditional recycling and chemical degradation methods face high energy consumption, low efficiency, and severe environmental burdens. In green chemistry, enzymatic degradation has emerged as a sustainable alternative. Unlike harsh chemical or thermal treatments, enzyme-catalyzed depolymerization of polyesters such as PET occurs under mild conditions, with high selectivity and minimal by-products. This biological approach transforms non-degradable plastics into reusable monomers, advancing the circular economy of plastics.
          </div>
        </div>
        <div className="py-4 border-b-4 border-[#E58688]" style={{borderStyle: "dashed"}}>
          <h1 className="text-5xl font-bold text-[#567357]">What we do?</h1>
        </div>
        <div className="flex justify-between py-10  mb-20 relative">
          <img src="images/home/2.png" className="w-[40%] max-h-[500px] object-contain" />
          <div className="w-[56%] text-3xl text-[#567357] border-4 border-[#E58688] p-4" ref={addToRefs}>
            Our experiment aims to engineer and screen high-performance PET-hydrolyzing enzyme variants, validate their thermostability, and PET-depolymerizing activity.
          </div>
        </div>
        <div className="flex py-10 relative min-h-[500px] mb-20">
          <img src="images/home/3.png" className="w-[40%] absolute right-0 bottom-0" />
          <div className="w-[56%] text-3xl text-[#567357] border-4 border-[#E58688] p-4" ref={addToRefs}>
            <p>1. We utilized AI design strategies, including mutation, thermostability screening, TS-analog binding screening, and reactivity ranking, combined with computational simulations, molecular dynamics (MD) simulations, and DFT calculations, to predict optimal enzyme mutants. </p>
            <p>2. Subsequently, experimental validation was conducted, involving gene construction, protein production and purification, melting temperature assessment, and characterization of PET-depolymerizing activity using amorphous PET powder/film.</p>
          </div>
        </div>
        <div className="flex justify-between py-10  mb-20 relative">
          <img src="images/home/4.png" className="w-[40%] max-h-[500px] object-contain" />
          <div className="w-[56%] text-3xl text-[#567357] border-4 border-[#E58688] p-4" ref={addToRefs}>
            We hope our work advances PET-degrading enzyme development. Though industrial application needs further refinement, we will continue optimizing, aiming to contribute to solving global plastic pollution.
          </div>
        </div>
      </div>
      <div className="bg-[#567357]">
        <div className="container mx-auto py-20">
          <div className="grid grid-cols-4 gap-10">
            <div className="bg-gray-300 h-full text-[#567357] p-4">
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-lg">
                This team consists of many members who are passionate about various academic fields but are dedicated to becoming biology enthusiasts. By exploring the knowledge of synthetic biology, we aim to contribute to solving the real-world social problems in the world.
              </p>
            </div>
            <div className="bg-gray-300 h-full text-[#567357] p-4">
              <h3 className="text-xl font-bold mb-4">About Topic</h3>
              <p className="text-lg">
                Protein Pre-Binding State (PBS) Framework Enables Mechanistic Insights and Engineering of Robust Biocatalysts for Plastic Depolymerization.
              </p>
            </div>
            <div className="bg-gray-300 h-full text-[#567357] p-4">
              <h3 className="text-xl font-bold mb-4">Quicklinks</h3>
              <ul className="text-lg space-y-2">
                <li><a href="./description" className="hover:underline">Description</a></li>
                <li><a href="./design" className="hover:underline">Design</a></li>
                <li><a href="./model" className="hover:underline">Model</a></li>
                <li><a href="./engineering" className="hover:underline">Engineering</a></li>
                <li><a href="./experiments" className="hover:underline">Experiments</a></li>
                <li><a href="./results-ai" className="hover:underline">Results AI</a></li>
                <li><a href="./results-wet-lab" className="hover:underline">Results Wet Leb</a></li>
              </ul>
            </div>
            <div className="bg-gray-300 h-full text-[#567357] p-4">
              <h3 className="text-xl font-bold mb-4">Contact info</h3>
              <p className="text-lg">
                iDEC_2025 PIM-NEBS<br/>
                Email: <a href="mailto:pimnebs@163.com" className="hover:underline">pimnebs@163.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
