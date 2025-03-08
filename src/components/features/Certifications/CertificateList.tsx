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
                <p className="font-dm-sans font-medium l:text-l text-m text-text-important-light">
                  {certificate.title}
                </p>
                <p className="font-dm-sans font-medium l:text-l text-m text-text-light">
                  {certificate.organization}
                </p>
                <p className="font-dm-sans font-normal l:text-l text-m text-text-light">
                  {certificate.date}
                </p>
              </div>

              <div>
                <a
                  href={certificate.link}
                  className="relative text-accent-light font-dm-sans font-medium l:text-l text-m 
             underline underline-offset-6 transition-all duration-300 
             before:absolute before:left-0 before:bottom-0 before:h-0 before:w-full 
             before:bg-accent-light before:transition-all before:duration-300 
             before:origin-bottom hover:text-primary-light 
             hover:before:h-full"
                >
                  <span className="relative hover:text-primary-light">
                    Certificate
                  </span>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
