import {
  FaPython,
  FaJava,
  FaDatabase,
  FaBrain,
  FaCogs,
  FaChartLine
} from "react-icons/fa";


const subjects = [
  {
    title: "Python Programming",
    description: "Beginner to advanced Python for data analysis, automation, and machine learning.",
    icon: <FaPython className="text-indigo-500 text-3xl mb-4" />
  },
  {
    title: "Java Programming",
    description: "Object-oriented programming, data structures, and academic + industry preparation.",
    icon: <FaJava className="text-red-500 text-3xl mb-4" />
  },
  {
    title: "SQL & Databases",
    description: "SQL queries, relational databases, normalization, and real-world data systems.",
    icon: <FaDatabase className="text-emerald-500 text-3xl mb-4" />
  },
  {
    title: "Artificial Intelligence",
    description: "AI fundamentals, intelligent systems, and real-world applications.",
    icon: <FaBrain className="text-purple-500 text-3xl mb-4" />
  },
  {
    title: "Machine Learning",
    description: "Supervised & unsupervised learning, models, and hands-on projects.",
    icon: <FaChartLine className="text-blue-500 text-3xl mb-4" />
  },
  {
    title: "C / C++ / C#",
    description: "Core programming concepts, memory, performance, and system-level thinking.",
    icon: <FaCogs className="text-slate-600 text-3xl mb-4" />
  }
];


export default function Subjects() {
  return (
    <section id="subjects" className="animate-fade-up bg-slate-50 py-20 max-w-3xl mx-auto text-center">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
          Subjects & Expertise
        </h2>

        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-14">
          Comprehensive tutoring and job-ready training across core computer science,
          programming, AI, and data domains.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6
                        hover:shadow-xl hover:-translate-y-1
                        transition duration-300"
            >
              {subject.icon}
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                {subject.title}
              </h3>
              <p className="text-slate-600">
                {subject.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
