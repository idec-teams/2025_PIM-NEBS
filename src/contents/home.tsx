

export function Home() {
  

  return (
    <div className="m-h-[100vh] bg-primary">
      <div className="container mx-auto">
        <div className="flex py-20">
          <img src="images/home/1.gif" className="w-1/3" />
        </div>
        <div className="flex py-20 justify-between">
          <div></div>
          <img src="images/home/1.png" className="w-2/3" />
        </div>
        <div className="flex py-20">
          <img src="images/home/2.png" className="w-1/3" />
        </div>
        <div className="flex py-20 justify-between">
          <div></div>
          <img src="images/home/3.png" className="w-2/3" />
        </div>
        <div className="flex py-20">
          <img src="images/home/4.png" className="w-1/3" />
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