import {
  FaUserGraduate,
  FaBriefcase,
  FaChalkboardTeacher,
  FaUserTie,
  FaTools,
  FaLaptopCode
} from "react-icons/fa";


const services = [
  {
    title: "PhD + Industry Experience",
    description: "Learn from a PhD in Computer Science with real-world industry exposure.",
    icon: <FaUserGraduate className="text-indigo-500 text-3xl mb-4" />
  },
  {
    title: "Job-Ready Training",
    description: "Focused on skills, projects, and workflows aligned with hiring expectations.",
    icon: <FaBriefcase className="text-emerald-500 text-3xl mb-4" />
  },
  {
    title: "Structured Teaching",
    description: "Clear explanations, strong fundamentals, and exam + interview readiness.",
    icon: <FaChalkboardTeacher className="text-blue-500 text-3xl mb-4" />
  },
  {
    title: "Personalized Mentorship",
    description: "One-on-one guidance tailored to your goals and background.",
    icon: <FaUserTie className="text-purple-500 text-3xl mb-4" />
  },
  {
    title: "Academic & Professional Support",
    description: "Support for school, university, certifications, and professionals.",
    icon: <FaLaptopCode className="text-red-500 text-3xl mb-4" />
  },
  {
    title: "Modern Tools & Practices",
    description: "Hands-on experience with modern programming and data tools.",
    icon: <FaTools className="text-slate-700 text-3xl mb-4" />
  }
];

export default function Services() {
  return (
    <section id="services" className="animate-fade-up bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
          Why Choose Me
        </h2>

        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-14">
          A blend of strong academic foundations, real-world industry experience,
          and learner-focused teaching designed to help you succeed.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl p-6
                        hover:shadow-lg hover:-translate-y-1
                        transition duration-300"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                {service.title}
              </h3>
              <p className="text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
