import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Visibility, 
  Psychology, 
  Construction, 
  RocketLaunch, 
  FilterList, 
  OpenInNew, 
  Analytics, 
  AccountTree, 
  Route, 
  SupportAgent, 
  Send 
} from "./components/Icons";

// Import teacher images
import drNantha from './img/dr_nantha.png';
import drLoo from './img/dr_loo.png';
import drFaith from './img/dr_faith.png';
import drKay from './img/dr_kay.png';

const Navbar = ({ activeSection }: { activeSection: string }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Vision", id: "hero" },
    { name: "Methodology", id: "methodology" },
    { name: "Practice Hub", id: "practice" },
    { name: "Feedback", id: "feedback" },
    { name: "Co-Pilot", id: "copilot" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-8 h-20 max-w-screen-2xl mx-auto font-headline tracking-tight">
        <div className="text-xl font-bold tracking-tighter text-primary">OUM × ND</div>
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm tracking-tight transition-all duration-300 ease-out cursor-pointer ${
                activeSection === item.id 
                  ? "text-primary border-b-2 border-primary pb-1" 
                  : "text-on-surface/60 hover:text-on-surface"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="w-20 md:hidden"></div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center px-8 md:px-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-surface via-surface/40 to-surface"></div>
        <img 
          className="w-full h-full object-cover opacity-20" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXvgCqh90On1FynfQyuLu7wXnDqP7_AMDZdkbGvLkfeZokMq_bZ_FOkplFEJvi4ESv3vIbFLaNa6L5FMlB6K7wEEwVhlTAEyG-PmW-x6Ob2BPgmUpcpk8pu_Tnc6u75MKkhe0UYPkHK5uOCQfX1zqHA069sdG9HrrefmJKR0QAafiTLdEc2POOzOSHVNJHt_hWznPF3YMYUhwXjkIw7jvv9mEQabrgA8eVQzHnUeCvHQqDsyb2s0JEHPYSyxyfiuSLUw-d5yr_ZzaA"
          alt="Hero Background"
          referrerPolicy="no-referrer"
        />
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest border border-outline-variant/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
          <span className="text-[0.6875rem] uppercase tracking-widest font-bold text-on-surface-variant">Systems Active: AI-Native V2.0</span>
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-on-surface">
          OUM × ND: <br/>
          <span className="text-gradient">The Future of AI-Native Education</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-12">
          Take the first step in transitioning from traditional 'watch and listen' models to the future. We transform AI into a 24/7 personal coach and virtual laboratory. Beyond simple chat, we reconstruct textbooks into interactive 3D practice environments.
        </p>
        <div className="flex flex-wrap gap-6">
          <button 
            onClick={() => scrollToSection('practice')}
            className="bg-primary text-background px-8 py-4 rounded font-bold text-sm uppercase tracking-widest hover:bg-primary-dim transition-all flex items-center gap-3 cursor-pointer"
          >
            Enter Lab <ArrowRight className="w-4 h-4" />
          </button>
          <button 
            onClick={() => scrollToSection('methodology')}
            className="glass-panel text-on-surface px-8 py-4 rounded font-bold text-sm uppercase tracking-widest hover:bg-surface-variant transition-all cursor-pointer"
          >
            View Methodology
          </button>
        </div>
      </motion.div>
    </section>
  );
};

const Methodology = () => (
  <section id="methodology" className="py-32 px-8 md:px-24 bg-surface-container-low">
    <div className="max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
        <div className="lg:col-span-5">
          <span className="text-secondary text-[0.6875rem] uppercase tracking-[0.2em] font-bold block mb-4">Pedagogical Framework</span>
          <h2 className="font-headline text-4xl font-bold mb-6 text-on-surface leading-tight">
            Cognitive Apprenticeship — Engineering Effective AI Learning Paths
          </h2>
        </div>
        <div className="lg:col-span-7 flex items-end">
          <p className="text-on-surface-variant text-lg leading-relaxed border-l-2 border-primary/20 pl-8">
            Translating pedagogical theory into AI product logic. We've digitized the master-apprentice relationship, providing continuous guidance that scales to every student.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Modeling", icon: Visibility, color: "primary", desc: "Observe expert thinking. AI-powered real-world teaching lets students see how experts analyze and solve problems." },
          { title: "Coaching", icon: Psychology, color: "secondary", desc: "Real-time AI accompaniment. An AI tutor monitors progress, providing prompts and guidance at critical junctures." },
          { title: "Scaffolding", icon: Construction, color: "tertiary", desc: "Task difficulty support. Step-by-step interactive paths for complex experiments help cross cognitive thresholds." },
          { title: "Fading", icon: RocketLaunch, color: "primary-dim", desc: "Independent problem solving. As proficiency grows, AI intervention decreases, allowing students to complete the loop independently." }
        ].map((item, i) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-8 bg-surface-container hover:bg-surface-variant transition-all duration-300 border-b-2 border-transparent hover:border-primary"
          >
            <div className={`w-12 h-12 flex items-center justify-center bg-${item.color}/10 text-${item.color} mb-8 rounded`}>
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="font-headline text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const PracticePlatform = () => {
  const demos = [
    { 
      course: "Occupational Safety", 
      title: "Fire Response Training", 
      url: "https://oum.johnsonhwang.space/fire_extinguisher",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCor8mQ5pnqe00iRQ18oZIy43gG7kSeHVpGquQ-_kV6km8IC28p30KvVZgUoJkNUOAYZpjOr8Z6E19jc7NDet8YHdKiacdAf5Z05Hq8s2D9QaujQh71zZUlD1AQKxdMsmlAQ8DEXzf__6VI4dodq_p3sziclXEILA_AqD2RR8G5KQKW3J7NupUwmerGi23-OZekLDYdZnjLttB4Nm_49QCijmIYXTJWK-izymm0yjcglxG_ONEi7WoEhQvUhWuQwiXLRvNlgScR0pdf"
    },
    { 
      course: "Requirements Engineering", 
      title: "Class Diagram Lab", 
      url: "https://oum.johnsonhwang.space/interactive_class_diagram",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoGkcU8veqflfBe0LhOBJBEBrj95sPOlM7_N6uQpgmPnu7Ev84AkOsCUbjWzsoDiqt19OQQYd0kLj3S1HcXz3zeci7bClUjXSE5p2H553u0tUmLQKYHYI9R_Wu7BtI9yvtqpqn0XyVhrbaf6bwZMAChmn5ilKhT0p9146P5E6unkeXBuInOOath9v-cxT_WuXa8YvF9hHH_IyOW1r86KZQKxUCEnIXO9VM20yLUNT0_z3L7notV_7PVwVdlgetBjMth7uZptAsNtKe"
    },
    { 
      course: "Teaching English to Young Learners", 
      title: "Storybook Classroom", 
      url: "https://oum.johnsonhwang.space/storybook_classroom",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuASRP5hTY_JS4kdjzQz1zZ66biH8m-RMTQwdfrsp38DbYUw10yuKRDIC6Nbn1MbTSgWl_uVfjsQY9hLd9JnzD3ttOKAdggnlEj6q_Z17kwZkvGVFbsRF1-o59FaLz6P3zvYhS_4UjabuGKWFiPT3B7tyKE1pnvYjkVBPkR0HSiCtnD74yf4nj710_AiRmyc5TOaewcwt-uWhfGrMCl3DHgiUvvUBxMneiS6iS0eXfqEINdd0Hw0FjmfyOCXxG-yrd7EoYFdTQLkWVOf"
    },
    { 
      course: "Advanced Managerial Economics", 
      title: "Simulation Lab on PED", 
      url: "https://oum.johnsonhwang.space/economy_simulation_lab",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIKBj3JRgEBb9WMnchWavoEIKo7N1kiELGi4gQ9ByJEm8NxFF8B13l0CosghYdblyc-aw3Bjd9CPsKUbcBWxC5QKOllFlLk3DDWq13KM1wX4Ff2JQIMoGe1JdUXgKcy5auFYciPfxchtHY7LYPDfR-lx-u2BWDceaQ-yBelUt-5yRVARR34tagUFEdCvFufj5kv49g9A-xj-GEXTp4SIEBT3c5n_S5sKxdw0WAIDfeq0GCLGNjkzPnv-6ZZFoJuNFVh1E_bnABtsXM"
    },
    { 
      course: "Human-Comp Interaction", 
      title: "Key Parts of HCI", 
      url: "https://oum.johnsonhwang.space/interactive-table",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj4d-F6DSUh0zSNE5QrvntQYlSTCmd7KbMtvqJbY6Uulnerz2ENjhyas4jW0NMY0clhkWKGRpV9BcseXeFMMn5-FoWnHH0P3NOivgAEiEXojIPrqJrg4cq-gN1w318d13THu1D1n3xqA1tYFyg90vyhTJ7nQJPi5eXXmnNHYR_lhSD1fot5RiOhLFsep5lwyNiqbEEbiM2Jc2naapDu8NyBKqy5y0esSB3eWZQGOdYc2tztlRXxhDpgpv0XNzfEN25lsrClDDl16kF"
    },
    { 
      course: "Applied Physics", 
      title: "Optics Lab", 
      url: "https://oum.johnsonhwang.space/aigc-component-3D-2",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZthy54mM1jBslLFNqeJA_zqdeT0YzWJXiSW7EeAH62Wz-wtww7PnR79xhiKeiqf1WnjrfLkntY__lfNkLqT7QJMyDX58Ok_5v-ZLHSUpBCIm6NWjA11KWDWreLldooGFgeJvay73x0qhKG3qQpVrSIcejHB6uy9LuxFKJNlkoKLypmuSXSH-4OHUqzfl7P_uUUmCTMywNRCz7iZQolnOzu6I_7P_Rg_qCSEnvXj0WGhOds8-13IqMSz2T0YTa7Fmfdfr3IB42oBBS"
    },
    { 
      course: "Applied Physics", 
      title: "Vernier Caliper Lab", 
      url: "https://oum.johnsonhwang.space/aigc-component-3D-1",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvzEL6HU-23MX5m6877eNkA8-DztPiIsU9v1CWMC8q29y8SvqDeh0dxhRQ0RYpW-R3HQB-FoKtVns-qxNJpaac9wmKtL62ETREE3kTqgeI6xzHrrf0PkVT5Rk0akunKkuxMtYr6xLIbbhyhFXnk0_-LFhE0ERjhb7huVtq7-YROg4dEm1GzKesvI5b3lAxEU9LN-M_eu-R9YlECtA6H90XhhJxk_WrmFOjhlJDZyWHi772JVos2_20562ObpgHTYih9gkVjou_uIo_"
    }
  ];

  return (
    <section id="practice" className="py-32 px-8 md:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-primary text-[0.6875rem] uppercase tracking-[0.2em] font-bold block mb-4">Module 01</span>
            <h2 className="font-headline text-5xl font-bold mb-6">AI Online Practice Platform — Learning by Doing</h2>
            <p className="text-on-surface-variant text-lg">Bridging the gap between learning and doing. AI-driven simulations provide real-time guidance, feedback, and assessment.</p>
          </div>
          <button className="p-4 border border-outline-variant/20 hover:bg-surface-container transition-all">
            <FilterList className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="font-headline text-sm font-bold tracking-widest uppercase text-on-surface-variant">STEM Lab Simulations</h3>
            <div className="h-px flex-grow bg-outline-variant/20"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((item, i) => (
              <motion.div 
                key={item.title + i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-[4/3] bg-surface-container overflow-hidden rounded-lg"
              >
                <img 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={item.img} 
                  alt={item.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/20 to-transparent"></div>
                
                {/* Course Name at Top Left */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="inline-block px-3 py-1 bg-secondary text-[10px] font-bold text-background uppercase tracking-tighter rounded-sm shadow-lg">
                    {item.course}
                  </span>
                </div>

                <div className="absolute bottom-0 p-8 w-full">
                  <h4 className="font-headline text-2xl font-bold text-on-surface mb-2">{item.title}</h4>
                  <a 
                    className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mt-4" 
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Launch Module <OpenInNew className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const TeacherFeedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  const feedbacks = [
    {
      name: "Dr. Nantha",
      role: "Requirements Engineering",
      avatar: drNantha,
      feedback: "I've just completed my review—thank you for the interactive courseware, it's very engaging and interesting. I do have a few suggestions for improvement. Overall, it's a great effort. Thank you!"
    },
    {
      name: "Dr. Loo",
      role: "Teaching English to Young Learners",
      avatar: drLoo,
      feedback: "The simulation is interactive, which makes it effective for reinforcing the Topic 6 through hands-on learning. I like how it connects theory to practice, particularly through storytelling, phonetics, and observing children's reactions. Overall, the format aligns well with the intended direction and has strong potential with further refinement."
    },
    {
      name: "Dr. Faith",
      role: "Advanced Managerial Economics",
      avatar: drFaith,
      feedback: "It demonstrates a commendable effort to integrate experiential learning into a traditionally theoretical subject. The inclusion of dynamic graphs, adjustable parameters, and real-time feedback mechanisms allows learners to visualize how changes in price influence quantity demanded, which is essential for deep conceptual understanding. Overall, it was a commendable effort; the interactive simulation shows significant potential as a self-instructional tool and, with further refinement, could greatly enhance the accuracy, clarity, and educational value of the material, ensuring that learners develop a solid and reliable understanding of price elasticity of demand. Thank you 👍"
    },
    {
      name: "Dr. Kay",
      role: "Occupational Safety",
      avatar: drKay,
      feedback: "The simulation is clear and easy to follow, with a simple layout that helps users focus on identifying the correct fire class. The visual cues, such as the burning materials and labelled options (A–F), support quick understanding and make the activity interactive."
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isHovering) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
      }, 8000); // Change every 8 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [feedbacks.length, isHovering]);

  return (
    <section id="feedback" className="py-32 px-8 md:px-24 bg-surface-container">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-primary text-[0.6875rem] uppercase tracking-[0.2em] font-bold block mb-4">Module 02</span>
            <h2 className="font-headline text-5xl font-bold mb-6">Faculty Team Feedback</h2>
            <p className="text-on-surface-variant text-lg">What educators are saying about our AI-native learning platform and how it's transforming their teaching experience.</p>
          </div>
        </div>

        <div 
          className="relative overflow-hidden max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {feedbacks.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="min-w-full p-4"
              >
                <div className="h-full p-10 bg-surface-variant/30 rounded-lg border border-outline-variant/20 hover:border-primary/30 transition-all shadow-lg">
                  <div className="flex items-center gap-6 mb-8">
                    <img 
                      src={item.avatar} 
                      alt={item.name} 
                      className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                    />
                    <div>
                      <h4 className="font-headline text-2xl font-bold">{item.name}</h4>
                      <p className="text-sm text-on-surface-variant mt-1">{item.role}</p>
                    </div>
                  </div>
                  <p className="text-on-surface text-lg leading-relaxed italic">"{item.feedback}"</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-12">
            {feedbacks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all ${index === currentIndex ? 'bg-primary w-12' : 'bg-outline-variant'}`}
                aria-label={`Go to feedback ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CoPilot = () => (
  <section id="copilot" className="py-32 px-8 md:px-24 bg-surface-container-low">
    <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
      <div className="lg:w-1/2">
        <span className="text-secondary text-[0.6875rem] uppercase tracking-[0.2em] font-bold block mb-4">Module 03</span>
        <h2 className="font-headline text-5xl font-bold mb-8 text-on-surface">AI-Intelligent Co-Pilot</h2>
        <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
          Addressing the pain points of isolation and low persistence. A 24/7 personal tutor that adapts to the student's level and the curriculum's difficulty.
        </p>
        <div className="space-y-6">
          {[
            { 
              title: "Adaptive Path", 
              icon: Route, 
              color: "primary", 
              desc: "Personalized learning plans based on continuous AI assessment and dynamic difficulty adjustment.",
              url: "https://oum.johnsonhwang.space/AdaptiveLearningPath"
            },
            { 
              title: "Real-time StudyPilot", 
              icon: SupportAgent, 
              color: "secondary", 
              desc: "Immediate, context-aware Q&A that eliminates learning blind spots as they appear.",
              url: "https://oum.johnsonhwang.space/AI-StudyPilot"
            }
          ].map((item) => (
            <a 
              key={item.title} 
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-6 p-6 glass-panel rounded-lg hover:bg-surface-variant/20 transition-all group cursor-pointer block"
            >
              <div className={`shrink-0 w-12 h-12 bg-${item.color}/20 text-${item.color} flex items-center justify-center rounded-full group-hover:scale-110 transition-transform`}>
                <item.icon className="w-6 h-6" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h4 className="font-headline text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                  <OpenInNew className="w-4 h-4 text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-on-surface-variant text-sm">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="lg:w-1/2 relative w-full">
        <div className="aspect-square w-full glass-panel rounded-2xl relative overflow-hidden p-8 shadow-[0_0_100px_rgba(129,236,255,0.05)]">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-center mb-12">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
                <div className="w-3 h-3 rounded-full bg-tertiary/40"></div>
                <div className="w-3 h-3 rounded-full bg-primary/40"></div>
              </div>
              <div className="text-[10px] font-bold text-on-surface-variant">CO-PILOT CONSOLE V4</div>
            </div>
            <div className="flex-grow space-y-6">
              <div className="p-4 bg-surface-variant/40 rounded border-l-4 border-primary max-w-[80%]">
                <p className="text-xs text-on-surface">"I see you're struggling with the 'Spring Constant' concept in the Physics lab. Would you like a breakdown of Hooke's Law?"</p>
              </div>
              <div className="p-4 bg-surface-container-high/60 rounded border-l-4 border-secondary max-w-[80%] ml-auto">
                <p className="text-xs text-on-surface">"Yes please, specifically how it applies to the displacement we just measured."</p>
              </div>
              <div className="p-4 bg-surface-variant/40 rounded border-l-4 border-primary max-w-[90%]">
                <p className="text-xs text-on-surface">"Calculating... Applying F = -kx. Based on your 0.5m measurement, the restoring force is..."</p>
                <div className="mt-4 h-16 w-full bg-surface-container-low rounded border border-outline-variant/10"></div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/10 flex items-center gap-4">
              <div className="flex-grow h-10 bg-black rounded-full border border-primary/30 px-4 flex items-center">
                <span className="text-xs text-on-surface-variant">Ask StudyPilot anything...</span>
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-background">
                <Send className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-[80px]"></div>
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary/10 rounded-full blur-[80px]"></div>
      </div>
    </div>
  </section>
);


const Footer = () => (
  <footer className="bg-surface border-t border-outline-variant/15">
    <div className="flex flex-col md:flex-row justify-between items-center px-12 py-8 w-full text-xs uppercase tracking-widest">
      <div className="text-primary font-bold mb-4 md:mb-0">OUM × ND</div>
          <div className="text-on-surface/40">
        © 2026 JOHNSONxAI ARCHIVE.
      </div>
    </div>
  </footer>
);

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "methodology", "practice", "feedback", "copilot"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Methodology />
        <PracticePlatform />
        <TeacherFeedback />
        <CoPilot />
        
        <section className="py-40 px-8 text-center bg-linear-to-b from-surface to-surface-container-low">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-4xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight"
          >
            Ready to redefine the <span className="text-gradient">boundaries of learning?</span>
          </motion.h2>
          <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto">
            Join our pilot program and integrate AI-native laboratories into your curriculum today.
          </p>

        </section>
      </main>
      <Footer />
    </div>
  );
}
