import { Download, Eye, ExternalLink, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const certifications = [
  {
    id: 1,
    title: "AWS AI & ML Scholarship Challenge Badge",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "July 2025",
    credentialId: "",
    image: "", // Space for cloud URL
    credentialUrl: "https://cdn.getblueshift.com/bee/images/ed5b8755-0989-4944-9ca5-287bb68e4a22/Certification%20Badge%2010_1.jpg",
    downloadUrl: "https://cdn.getblueshift.com/bee/images/ed5b8755-0989-4944-9ca5-287bb68e4a22/Certification%20Badge%2010_1.jpg"
  },
  {
    id: 2,
    title: "AWS Educate Machine Learning",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "July 2025",
    credentialId: "6ccff52c-3823-49b6-a6b4-a9c2d5c3d3bc",
    image: "", // Space for cloud URL
    credentialUrl: "https://www.credly.com/earner/earned/badge/6ccff52c-3823-49b6-a6b4-a9c2d5c3d3bc",
    downloadUrl: "https://www.credly.com/earner/earned/badge/6ccff52c-3823-49b6-a6b4-a9c2d5c3d3bc"
  },
  {
    id: 3,
    title: "Introducing Generative AI with AWS",
    issuer: "Udacity",
    issueDate: "July 2025",
    credentialId: "07ffeaac-5966-11f0-96d3-8f73ca1868f4",
    image: "", // Space for cloud URL
    credentialUrl: "https://www.udacity.com/certificate/e/07ffeaac-5966-11f0-96d3-8f73ca1868f4",
    downloadUrl: "https://www.udacity.com/certificate/e/07ffeaac-5966-11f0-96d3-8f73ca1868f4"
  },
  {
    id: 4,
    title: "Java (Basic)",
    issuer: "HackerRank",
    issueDate: "July 2025",
    credentialId: "",
    image: "", // Space for cloud URL
    credentialUrl: "https://www.hackerrank.com/certificates/9426f7efa28a",
    downloadUrl: "https://www.hackerrank.com/certificates/9426f7efa28a"
  },
  {
    id: 5,
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    issueDate: "July 2025",
    credentialId: "",
    image: "", // Space for cloud URL
    credentialUrl: "https://www.hackerrank.com/certificates/bb13cb3038a4",
    downloadUrl: "https://www.hackerrank.com/certificates/bb13cb3038a4"
  },
  {
    id: 6,
    title: "Python (Basic)",
    issuer: "HackerRank Campus Club, AUFS",
    issueDate: "July 2025",
    credentialId: "",
    image: "", // Space for cloud URL
    credentialUrl: "https://www.hackerrank.com/certificates/92c7604b53f7",
    downloadUrl: "https://www.hackerrank.com/certificates/92c7604b53f7"
  },
  {
    id: 7,
    title: "AICTE AI & ML Virtual Intern",
    issuer: "All India Council for Technical Education (AICTE)",
    issueDate: "June 2025",
    credentialId: "4fc61a4b37dcb7cd71f13985076fc9ba",
    image: "", // Space for cloud URL
    credentialUrl: "https://drive.google.com/file/d/1rs08f3v5M6_ZKq3_-M7mZYD5yJ8FBmeW/view?usp=sharing",
    downloadUrl: "https://drive.google.com/file/d/1rs08f3v5M6_ZKq3_-M7mZYD5yJ8FBmeW/view?usp=sharing"
  },
  {
    id: 8,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    issueDate: "2025",
    credentialId: "",
    image: "", // Space for cloud URL
    credentialUrl: "#",
    downloadUrl: "#"
  }
];

export const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleViewCertificate = (cert) => {
    setSelectedCert(cert);
  };

  const handleCloseCertificate = () => {
    setSelectedCert(null);
  };

  const handleDownload = (cert) => {
    if (cert.downloadUrl && cert.downloadUrl !== "#") {
      window.open(cert.downloadUrl, '_blank');
    }
  };

  return (
    <>
      <section id="certifications" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My <span className="text-primary">Certifications</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Professional certifications and achievements that demonstrate my expertise
            in various technologies and domains.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden bg-secondary/20 flex items-center justify-center">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="text-muted-foreground text-center p-4">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                        <ExternalLink className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-sm">Certificate Image</p>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    Issued: {cert.issueDate}
                  </p>
                  {cert.credentialId && (
                    <p className="text-xs text-muted-foreground mb-4 font-mono">
                      ID: {cert.credentialId}
                    </p>
                  )}

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleViewCertificate(cert)}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        title="View Certificate"
                      >
                        <Eye size={20} />
                      </button>
                      <button
                        onClick={() => handleDownload(cert)}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        title="Download Certificate"
                        disabled={cert.downloadUrl === "#"}
                      >
                        <Download size={20} />
                      </button>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        title="View Credential"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={handleCloseCertificate}
              className="absolute -top-12 right-0 p-2 text-white hover:text-primary transition-colors duration-300 z-10"
              title="Close"
            >
              <X size={24} />
            </button>

            {/* Download Button */}
            <button
              onClick={() => handleDownload(selectedCert)}
              className="absolute -top-12 right-12 p-2 text-white hover:text-primary transition-colors duration-300 z-10"
              title="Download"
              disabled={selectedCert.downloadUrl === "#"}
            >
              <Download size={24} />
            </button>

            {/* Certificate Content */}
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              {selectedCert.image ? (
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              ) : (
                <div className="p-12 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <ExternalLink className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedCert.title}
                  </h3>
                  <p className="text-primary text-lg font-medium mb-2">
                    {selectedCert.issuer}
                  </p>
                  <p className="text-gray-600 mb-4">
                    Issued: {selectedCert.issueDate}
                  </p>
                  {selectedCert.credentialId && (
                    <p className="text-sm text-gray-500 font-mono">
                      Credential ID: {selectedCert.credentialId}
                    </p>
                  )}
                  <div className="mt-6">
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cosmic-button inline-flex items-center gap-2"
                    >
                      View Original Certificate <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};