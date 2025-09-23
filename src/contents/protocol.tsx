export function Protocol() {
  // 协议列表数据
  const protocols = [
    "PBS Model Workflow",
    "Computational Implementation of PBS",
    "How to Balance Computational Accuracy and Efficiency",
    "MD Simultaion",
    "DFT Calcluation",
    "Plasmid DNA Extraction Procedure",
    "Determination of BHET and MHET Hydrolase Activities",
    "HPLC Analysis of Degradation Products",
    "DNA Gel Extraction Procedure",
    "Determination of Enzyme Thermal Stability",
    "PET Degradation Assay",
    "Scanning Electron Microscopy (SEM) Analysis",
    "Degradation Experiment",
    "Characterization",
    "Fukui Funcation Analysis",
    "Characterization of the PET-Depolymerizing Activity"
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg p-6 mt-8 mb-8 shadow-md w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-6" style={{ color: '#567357' }}>Protocol</h1>
        <ul className="space-y-2">
          {protocols.map((protocol, index) => (
            <li key={index} className="mb-4">
              <a 
                href={`./pdf/protocol/${index}.${protocol}.pdf`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-blue-600 underline text-lg"
              >
                {index}. {protocol}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}