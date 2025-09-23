interface HeaderProps {
  title: string;
  lead: string;
  banner: string;
}

export function Header({ title, banner }: HeaderProps) {
  return (
    <header className="py-5 mb-5 bg-cover bg-center" style={{ 
      backgroundImage: banner ? `url(${banner})` : 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(5px)'
    }}>
      <div className="container mx-auto h-150">
        <div className="h-full flex items-center justify-center">
          <div className="">
            <h1 className="text-[#567357] text-8xl text-center mt-5 mb-2 text-shadow">{title}</h1>
            {/* <p className="lead mb-5 text-white text-xl">{lead}</p> */}
          </div>
        </div>
      </div>
    </header>
  );
}
