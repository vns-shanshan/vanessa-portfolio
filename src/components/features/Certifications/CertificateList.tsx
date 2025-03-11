import FullBgBtn from "@/components/ui/FullBgBtn";
import { Certificate } from "@/sections/Certifications";

interface CertificateProps {
  certificates: Certificate[];
}

export default function CertificateList({ certificates }: CertificateProps) {
  return (
    <div>
      <ul className="flex flex-col gap-6 ">
        {certificates.map((certificate, i) => (
          <li key={i}>
            <div className="flex flex-row justify-between max-m:flex-col">
              <div className="flex flex-col gap-1">
                <p className="font-dm-sans font-medium l:text-l text-m text-text-important-light dark:text-text-important-dark">
                  {certificate.title}
                </p>
                <p className="font-dm-sans font-medium l:text-l text-m text-text-light dark:text-text-dark">
                  {certificate.organization}
                </p>
                <p className="font-dm-sans font-normal l:text-l text-m text-text-light dark:text-text-dark">
                  {certificate.date}
                </p>
              </div>

              <div>
                <FullBgBtn href={certificate.link}>Certificate</FullBgBtn>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
