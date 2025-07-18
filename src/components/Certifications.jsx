import Certificate from "../assets/image1.jpg"; 
const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "June 2023",
      credentialId: "AWS-123456",
      image:Certificate,
    },
    {
      id: 2,
      title: "Google Professional Data Engineer",
      issuer: "Google Cloud",
      date: "March 2023",
      credentialId: "GCP-789012",
      image: "/assets/google-cloud-certified.png",
    },
    {
      id: 3,
      title: "Microsoft Certified: Azure Administrator",
      issuer: "Microsoft",
      date: "January 2023",
      credentialId: "MS-345678",
      image: "/assets/azure-certified.png",
    },
  ];

  return (
    <div className="bg-[#0f172a] text-white py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 text-center mb-8">
          Certifications
        </h2>
        <p className="text-lg text-center text-gray-300 mb-12">
          Professional certifications that validate my expertise and commitment to continuous learning
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#1e293b] rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
               <img
                src={cert.image}
                alt={`${cert.issuer} Badge`}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />

                <h3 className="text-xl font-semibold text-white text-center mb-1">{cert.title}</h3>
                <p className="text-sm text-blue-400 text-center">{cert.issuer}</p>

                <div className="mt-4 space-y-1 text-sm text-gray-400">
                  <p><span className="text-gray-400">Issued:</span> {cert.date}</p>
                  <p><span className="text-gray-400">Credential ID:</span> {cert.credentialId}</p>
                </div>

                <div className="mt-6 flex justify-between gap-3 text-sm">
                  {/* Preview Button */}
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg">
                    Preview
                  </button>

                  {/* Download Button */}
                  <button className="flex-1 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg border border-gray-600 hover:border-gray-500">
                    Download
                  </button>

                  {/* Verify Button */}
                  <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg">
                    Verify
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download All Certificates
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certifications;