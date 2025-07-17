const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "June 2023",
      credentialId: "AWS-123456",
      image: "/assets/aws-certified.png" // Update with your actual image path
    },
    {
      id: 2,
      title: "Google Professional Data Engineer",
      issuer: "Google Cloud",
      date: "March 2023",
      credentialId: "GCP-789012",
      image: "/assets/google-cloud-certified.png" // Update with your actual image path
    },
    {
      id: 3,
      title: "Microsoft Certified: Azure Administrator",
      issuer: "Microsoft",
      date: "January 2023",
      credentialId: "MS-345678",
      image: "/assets/azure-certified.png" // Update with your actual image path
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className=" rounded-xl shadow-lg p-6 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">My Certifications</h2>
        
        <div className="space-y-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="flex flex-col md:flex-row gap-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-300"
            >
              <div className="w-full md:w-1/4 flex justify-center">
                <img 
                  src={cert.image} 
                  alt={`${cert.issuer} certification badge`} 
                  className="h-24 w-24 object-contain"
                />
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-blue-100">{cert.issuer}</p>
                <div className="flex flex-col sm:flex-row justify-between mt-3 text-sm gap-2">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Issued: {cert.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Credential ID: {cert.credentialId}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-opacity-90 transition flex items-center gap-2 mx-auto">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download All Certificates
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certifications;