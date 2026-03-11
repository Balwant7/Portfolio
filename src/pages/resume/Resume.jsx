import { GraduationCap, BookOpen, Download } from "lucide-react";

const skills = [
  { label: "FrontEnd Development", pct: "85%" },
  { label: "Backend Development", pct: "70%" },
  { label: "Database", pct: "60%" },
];

const TimelineItem = ({ title, role, date }) => (
  <div className="relative pl-6 border-l-2 border-[#0443F2]/40 ml-8 md:ml-20 mt-5">
    <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#0443F2]" />
    <h3 className="text-lg md:text-xl text-white font-semibold">{title}</h3>
    <p className="text-white/70 text-sm mt-1">{role}</p>
    <p className="text-white/40 text-xs mt-1">{date}</p>
  </div>
);

const Resume = () => {
  return (
    <>
      <div
        id="resume"
        className="bg-black w-full flex-col flex items-center justify-center pt-16 pb-24"
      >
        <div
          id="resumewrapper"
          className="bg-[#3D3D3D] w-[90%] rounded-xl pb-10"
        >
          <h1 className="text-white mb-5 text-[3rem] p-8 md:pl-12">
            <span className="underline underline-offset-8 decoration-[#0443F2]">
              Res
            </span>
            ume
          </h1>

          {/* Experience */}
          <div id="experience" className="mt-2">
            <span className="flex ml-6 md:ml-12 gap-4 items-center">
              <BookOpen size={36} color="#0443F2" />
              <h2 className="text-2xl md:text-3xl text-white">Experience</h2>
            </span>

            <TimelineItem
              title="FynTune Solution Private Limited"
              role="ReactJs Developer"
              date="09/2024 – Present"
            />
            <TimelineItem
              title="Openleaf"
              role="FrontEnd Developer Intern"
              date="07/2024 – 08/2024"
            />
            <TimelineItem
              title="Agix International Pvt Ltd."
              role="Web Developer Intern"
              date="03/2024 – 06/2024"
            />
          </div>

          {/* Education */}
          <div id="education" className="mt-14">
            <span className="flex ml-6 md:ml-12 gap-4 items-center">
              <GraduationCap size={36} color="#0443F2" />
              <h2 className="text-2xl md:text-3xl text-white">Education</h2>
            </span>

            <TimelineItem
              title="Bachelor of Engineering (Mumbai University)"
              role="Computer Engineering"
              date="2019 – 2023"
            />
          </div>

          {/* Skills */}
          <div id="skills" className="w-full px-8 md:px-16 mt-14">
            <h2 className="text-white text-2xl md:text-[2rem] mb-6">
              My Skills
            </h2>
            <div className="flex flex-col gap-6">
              {skills.map(({ label, pct }) => (
                <div key={label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white text-sm md:text-base">{label}</span>
                    <span className="text-white/50 text-sm">{pct}</span>
                  </div>
                  <div className="w-full rounded-full h-2.5 bg-white/10">
                    <div
                      className="h-2.5 bg-[#0443F2] rounded-full"
                      style={{ width: pct }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download button */}
        <a
          href="./Balwant_Singh_Resume.pdf"
          download="Balwant_Singh_Resume"
          className="mt-12 inline-flex items-center gap-2 text-white bg-[#0443F2] px-7 py-3.5 rounded-full font-medium hover:bg-blue-700 active:bg-[#021f6e] transition-colors duration-200 shadow-lg shadow-blue-900/30"
        >
          <Download size={18} />
          Download Resume
        </a>
      </div>
    </>
  );
};

export default Resume;
