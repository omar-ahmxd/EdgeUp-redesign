import React, { useEffect } from 'react';
import { Linkedin } from 'lucide-react';
import IntersectionObserver from '../components/common/IntersectionObserver';

const leadershipTeam = [
  {
    name: "Khalid Mohamed",
    position: "Chair Managing Director",
    image: "/khalid-mohamed.jpeg",
    linkedin: "https://www.linkedin.com/in/omsmakhalid/"
  },
  {
    name: "Jubran Siddique",
    position: "Chief Executive Officer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjE2Wy3ZAA_uaEXnz5pvYbmGpxVOhv2q3mg&s",
    linkedin: "https://www.linkedin.com/in/jubransiddique/"
  }
];

const coreTeam = [
  // Leadership & Ops (surface first)
  { name: "Umar Sulaiman", position: "COO", email: "coo@edgeup.in", linkedin: "https://www.linkedin.com/in/mohammed-umar-7227888", image: "/umar.png" },
  { name: "Mohammed Nizamudeen", position: "CPO", email: "developer.sr@edgeup.in", linkedin: "https://www.linkedin.com/in/mohammed-nizamudeen-aa2827154", image: "/nizam.png" },
  { name: "Raadiyah Mohideen", position: "COS", email: "foundersoffice@edgeup.in", linkedin: "https://www.linkedin.com/in/raadiyah-mohideen-5482b4222", image: "/raadiyah.png" },
  { name: "Aishwarya Ramesh", position: "Head of Projects", email: "ra.upsc@edgeup.in", linkedin: "https://www.linkedin.com/in/aishwaryaramesh97/", image: "/aishwarya.jpg" },

  // Full Stack Developers
  { name: "Md Fasihuddin", position: "Full Stack Developer", linkedin: "https://www.linkedin.com/in/mohammed-fasihuddin-52bb8725b" },
  { name: "Arshad Uvais U", position: "Full Stack Developer" },
  { name: "Muhammed Aakif S", position: "Full Stack Developer", linkedin: "https://www.linkedin.com/in/muhammed-aakif" },
  { name: "Ahmed Ibrahim", position: "Full Stack Developer", linkedin: "https://www.linkedin.com/in/si11-ibrahim" },

  // DevOps Engineers
  { name: "Aaquib Suhail K", position: "DevOps Engineer", linkedin: "https://www.linkedin.com/in/aaquib-suhail-263273284" },
  { name: "Mohammed Junaid Basha K", position: "DevOps Engineer" },

  // AI / ML Engineers
  {
    name: "Mohamed Farhan",
    position: "AI Engineer",
    linkedin: "https://www.linkedin.com/in/farhan-mohamed-40068b2a0"
  },
  { name: "Mohammed Maksood Alam M", position: "AI Engineer", linkedin: "https://www.linkedin.com/in/mohammed-maksood-alam" },
  { name: "Mohammad Omar Ahmed", position: "AI Engineer", linkedin: "https://www.linkedin.com/in/omar-ahmxd" },
  {
    name: "Mohamed Sameer",
    position: "AI/ML Engineer",
    linkedin: "https://www.linkedin.com/in/mohamed-sameer-xt"
  }
];

const AboutTeamPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "EdgeUp - Our Team";
  }, []);

  return (
    <main className="overflow-hidden relative page-surface">
      <div className="page-overlay" />

      <IntersectionObserver>
        <section className="relative z-10 pt-28 pb-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 bg-[#094d88]/10 rounded-full text-[#094d88] text-sm font-semibold mb-6">
                About Team
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Meet the Team Behind EdgeUp
              </h1>
              <p className="text-lg text-gray-600">
                Leadership and core team members building the AI-powered educational ecosystem.
              </p>
            </div>

            <div className="space-y-16">
              <div>
                <div className="text-center max-w-3xl mx-auto mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
                  <p className="text-lg text-gray-600">Vision and direction for EdgeUp.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {leadershipTeam.map((member, index) => (
                    <div
                      key={index}
                      className="group bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100"
                      data-aos="fade-up"
                      data-aos-delay={index * 80}
                    >
                      <div className="w-24 h-24 mx-auto mb-5 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:border-[#10ac8b]/50 transition-colors">
                        {member.image ? (
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#094d88] to-[#10ac8b] flex items-center justify-center text-white text-lg font-bold">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        )}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1 text-lg">{member.name}</h3>
                      <p className="text-[#094d88] text-sm font-medium mb-2">{member.position}</p>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center mt-3 w-9 h-9 mx-auto rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#094d88] hover:border-[#10ac8b]/50 transition-colors"
                        >
                          <Linkedin size={16} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-center max-w-3xl mx-auto mb-8" data-aos="fade-up">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Tech & Operation Team</h2>
                  <p className="text-lg text-gray-600">
                    The operators and builders behind product, operations, and execution.
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {coreTeam.map((member, index) => {
                    const isExec = ['COO', 'CPO', 'COS', 'Head of Projects'].includes(member.position);
                    const cardClass = isExec
                      ? 'group bg-gray-50 rounded-3xl p-7 text-center hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-slate-100'
                      : 'group bg-gray-50 rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300';
                    const avatarSize = isExec ? 'w-24 h-24' : 'w-20 h-20';
                    const nameClass = isExec ? 'text-base md:text-lg' : 'text-sm';
                    const titleClass = isExec ? 'text-sm md:text-base' : 'text-xs';

                    return (
                      <div
                        key={index}
                        className={cardClass}
                        data-aos="fade-up"
                        data-aos-delay={index * 50}
                      >
                        <div className={`${avatarSize} mx-auto mb-4 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:border-[#10ac8b]/50 transition-colors`}>
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-[#094d88] to-[#10ac8b] flex items-center justify-center text-white text-lg font-bold">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          )}
                        </div>
                        <h3 className={`font-bold text-gray-900 mb-1 ${nameClass}`}>{member.name}</h3>
                        <p className={`text-[#094d88] font-medium mb-2 ${titleClass}`}>{member.position}</p>
                        <div className="space-y-1">
                          {member.email && (
                            <a
                              href={`mailto:${member.email}`}
                              className="text-gray-500 text-xs hover:text-[#10ac8b] transition-colors block truncate"
                              onClick={e => e.stopPropagation()}
                              onKeyDown={e => e.stopPropagation()}
                            >
                              {member.email}
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>
    </main>
  );
};

export default AboutTeamPage;
