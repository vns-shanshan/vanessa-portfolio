import CertificateList from "@/components/features/Certifications/CertificateList";

export interface Certificate {
  title: string;
  organization: string;
  date: string;
  link: string;
}

const certificates: Certificate[] = [
  {
    title: "Software Engineer Bootcamp",
    organization: "General Assembly",
    date: "11/2024",
    link: "/sde.pdf",
  },
  {
    title: "UI UX Design Essentials",
    organization: "Udemy",
    date: "05/2024",
    link: "/uiux.pdf",
  },
  {
    title: "Meta Front-end Developer",
    organization: "Coursera",
    date: "08/2023",
    link: "/coursera.pdf",
  },
  {
    title: "Bachelor of Arts, Spanish",
    organization: "University of California, Irvine",
    date: "06/2018",
    link: "/uci.pdf",
  },
];

export default function Certifications() {
  return (
    <div id="certifications" className="flex flex-col l:gap-8 gap-6">
      <div>
        <h1 className="text-secondary-light font-semibold font-playfair-display l:text-2xl m:text-xl s:text-l">
          Certifications
        </h1>
      </div>

      <CertificateList certificates={certificates} />
    </div>
  );
}
