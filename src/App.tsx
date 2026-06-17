import { useState, useEffect } from 'react';
import {
  Briefcase,
  Building2,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  MapPin,
  ShieldCheck,
  PiggyBank,
  BadgeDollarSign,
  BookOpen,
  Coffee,
  Users,
  Globe,
  ArrowRight,
  Share2,
  UploadCloud,
  X,
  Check,
  ChevronDown,
  Quote,
  Clock,
  MessageSquare,
  Video,
  FileCheck
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isApplying, setIsApplying] = useState(false);

  // Form handling
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', linkedin: '' });
  const [touched, setTouched] = useState({ firstName: false, lastName: false, email: false });
  const [errors, setErrors] = useState({ firstName: '', lastName: '', email: '' });

  useEffect(() => {
    const newErrors = { firstName: '', lastName: '', email: '' };
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    setErrors(newErrors);
  }, [formData]);

  const isValidForm = !errors.firstName && !errors.lastName && !errors.email;

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Web/Software Developer at Gallagher',
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      triggerToast("Link copied to clipboard!");
    }
  };

  const scrollToForm = () => {
    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { title: "Strong Communication", desc: "Comfortable reporting progress to colleagues across various disciplines.", icon: Users },
    { title: "Time Management", desc: "Capable of independently completing tasks within prescribed deadlines.", icon: Briefcase },
    { title: "Analytical Thinking", desc: "Ability to comprehend complex content structures and apply them effectively.", icon: Globe },
    { title: "Quality Focus", desc: "Adherence to quality assurance standards and expectations.", icon: ShieldCheck },
    { title: "Task Execution", desc: "Proficient in interpreting instructions from Jira tickets and understanding project requirements.", icon: CheckCircle2 },
    { title: "Problem-Solving", desc: "Proactive in identifying and flagging issues to project team members as they arise.", icon: Building2 }
  ];

  const benefits = [
    { icon: HeartPulse, text: "Medical Insurance and Parental Medical Insurance" },
    { icon: ShieldCheck, text: "Accidental Insurance and Life Insurance" },
    { icon: PiggyBank, text: "Retirals - Gratuity, Group Term Life, EPF, NPS" },
    { icon: BadgeDollarSign, text: "Flexi Benefits Plan - Tax Savings Plans" },
    { icon: BookOpen, text: "Educational expense reimbursement" },
    { icon: Coffee, text: "Annual Leave, Maternity/Paternity Leave, Mental Health Day" }
  ];

  const testimonials = [
    { text: "Gallagher has incredible career growth opportunities. The transition to remote work has been seamless and supportive.", author: "Alex Jenkins", role: "Frontend Developer" },
    { text: "The focus on diversity and wellness here is unmatched. It truly is a great place to balance life and interesting technical challenges.", author: "Sarah Li", role: "Software Engineer" }
  ];

  const faqs = [
    { q: "Is this role fully remote?", a: "We offer flexible working arrangements, including fully remote options depending on your location." },
    { q: "What is the tech stack?", a: "While we adapt to project needs, our core focuses heavily on modern Web technologies like React, TypeScript, and Node.js." },
    { q: "How long does the interview process take?", a: "Usually 2-3 weeks from initial screening to offer, depending on scheduling." }
  ];

  const timelineSteps = [
    { title: "Application Review", desc: "Our recruitment team reviews your profile.", icon: FileCheck },
    { title: "Initial Screening", desc: "A brief chat about your background and role fit.", icon: Clock },
    { title: "Technical Interview", desc: "Deep dive into your web development skills via video.", icon: Video },
    { title: "Final Discussion", desc: "Meeting with the team lead and culture fit chat.", icon: MessageSquare }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-mono text-slate-100 text-slate-100 pb-12 sm:pb-20 relative">
      {/* Floating Header */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 transform transition-transform duration-300 ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3 truncate">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
               <Building2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-slate-100 truncate hidden sm:block">Web/Software Developer</span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
             <button onClick={handleShare} aria-label="Share" className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-full transition-colors hidden sm:flex">
               <Share2 className="w-5 h-5" />
             </button>
             <button onClick={scrollToForm} className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full font-medium text-sm transition-colors whitespace-nowrap shadow-sm">
               Apply Now
             </button>
          </div>
        </div>
      </div>

      {/* Header / Hero Section */}
      <header className="bg-slate-900 border-b border-slate-800 pt-10 sm:pt-16 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl xl:max-w-5xl mx-auto">
          <div className="flex items-center space-x-2 text-cyan-500 font-semibold mb-3 sm:mb-4 text-xs sm:text-sm tracking-widest uppercase">
            <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Gallagher Careers</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-4 sm:mb-6 tracking-tight">
            Web/Software Developer
          </h1>
          <div className="flex flex-wrap gap-2 sm:gap-4 text-slate-400 mb-6 sm:mb-8">
            <div className="flex items-center space-x-2 bg-slate-800 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Remote / Flexible</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium">
              <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Full-time</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={scrollToForm} className="w-full sm:w-auto justify-center bg-cyan-500 hover:bg-cyan-600 text-white px-6 sm:px-8 py-3.5 rounded-full font-medium inline-flex items-center space-x-2 transition-colors">
              <span>Apply for this position</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={handleShare} className="w-full sm:w-auto justify-center bg-slate-900 border border-slate-700 hover:bg-slate-950 text-slate-300 px-6 sm:px-8 py-3.5 rounded-full font-medium inline-flex items-center space-x-2 transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share job</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        
        {/* Left Column (Primary Info) */}
        <div className="lg:col-span-2 space-y-8 sm:space-y-12">
          
          {/* Qualifications */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
              Qualifications
            </h2>
            <div className="bg-slate-900 p-4 sm:p-6 rounded-2xl border border-slate-800 shadow-sm space-y-4">
              <div className="flex items-start gap-3 sm:gap-4 text-sm sm:text-base">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                <div>
                  <span className="font-semibold block text-slate-100">Minimum Required Degree:</span>
                  <span className="text-slate-400">Bachelor of Computer Application (BCA), Bachelor of Computer Engineering (BE).</span>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4 text-sm sm:text-base">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                <div>
                  <span className="font-semibold block text-slate-100">Certificate(s) / Special Training:</span>
                  <span className="text-slate-400">Web/Software Development.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Skills & Experience */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Required Skills and Experience</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, idx) => (
                <div key={idx} className="bg-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 mb-3" />
                  <h3 className="font-bold text-slate-100 mb-1 sm:mb-2">{skill.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Inclusion and Diversity */}
          <section className="bg-cyan-950/40 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-cyan-900">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-cyan-100">We value inclusion and diversity</h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-cyan-200/80 leading-relaxed">
              <p>
                Inclusion and diversity (I&D) is a core part of our business, and it's embedded into the fabric of our organization. For more than 95 years, Gallagher has led with a commitment to sustainability and to support the communities where we live and work.
              </p>
              <p>
                Gallagher embraces our employees' diverse identities, experiences and talents, allowing us to better serve our clients and communities. We see inclusion as a conscious commitment and diversity as a vital strength. By embracing diversity in all its forms, we live out The Gallagher Way to its fullest.
              </p>
              <p className="text-xs sm:text-sm font-medium mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-cyan-800/50">
                Equal employment opportunity will be extended in all aspects of the employer-employee relationship, including recruitment, hiring, training, promotion, transfer, demotion, compensation, benefits, layoff, and termination.
              </p>
            </div>
          </section>

          {/* Interview Timeline */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Interview Timeline</h2>
            <div className="bg-slate-900 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 bottom-0 left-8 sm:left-12 w-0.5 bg-cyan-900 hidden sm:block" />
              <div className="space-y-8 relative">
                {timelineSteps.map((step, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 relative">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-950/40 text-cyan-500 rounded-full flex items-center justify-center shrink-0 border-4 border-slate-900 shadow-sm relative z-10 mx-auto sm:mx-0">
                      <step.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="text-center sm:text-left pt-1">
                      <h3 className="font-bold text-slate-100 mb-1">{step.title}</h3>
                      <p className="text-sm text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">What our team says</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {testimonials.map((test, idx) => (
                <div key={idx} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-sm flex flex-col justify-between">
                  <div>
                    <Quote className="w-8 h-8 text-cyan-800 mb-4" />
                    <p className="text-sm text-slate-300 leading-relaxed italic mb-6">"{test.text}"</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center font-bold text-slate-500">
                      {test.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-100 text-sm">{test.author}</h4>
                      <p className="text-xs text-slate-400">{test.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-900 rounded-2xl border border-slate-800 shadow-sm overflow-hidden transition-all duration-200">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)} 
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                  >
                    <span className="font-medium text-slate-100">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-200 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`px-5 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-48 pb-5 sm:pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm text-slate-400 leading-relaxed pt-2 border-t border-slate-800">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Application Form */}
          <section id="apply-form" className="bg-slate-900 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-sm mt-8 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-slate-100 flex items-center gap-3">
              Submit your application
            </h2>
            <form className="space-y-5" onSubmit={(e) => { 
                e.preventDefault(); 
                setTouched({ firstName: true, lastName: true, email: true });
                if (isValidForm) {
                  setIsApplying(true); 
                  setTimeout(() => { 
                    setIsApplying(false); 
                    triggerToast("Application submitted successfully!"); 
                    setFormData({ firstName: '', lastName: '', email: '', linkedin: '' });
                    setTouched({ firstName: false, lastName: false, email: false });
                  }, 1500); 
                }
              }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="firstName" className="text-sm font-medium text-slate-300">First Name <span className="text-red-500">*</span></label>
                  <input value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} onBlur={() => setTouched({...touched, firstName: true})} type="text" id="firstName" className={`bg-slate-900 text-slate-100 w-full px-4 py-2.5 rounded-xl border ${touched.firstName && errors.firstName ? 'border-red-500 focus:ring-red-500 bg-red-50/50' : 'border-slate-800 focus:ring-cyan-500'} focus:ring-2 focus:border-transparent outline-none transition-all shadow-sm`} />
                  {touched.firstName && errors.firstName && <p className="text-xs text-red-500 flex items-center gap-1 mt-1"><X className="w-3 h-3"/>{errors.firstName}</p>}
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="lastName" className="text-sm font-medium text-slate-300">Last Name <span className="text-red-500">*</span></label>
                  <input value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} onBlur={() => setTouched({...touched, lastName: true})} type="text" id="lastName" className={`bg-slate-900 text-slate-100 w-full px-4 py-2.5 rounded-xl border ${touched.lastName && errors.lastName ? 'border-red-500 focus:ring-red-500 bg-red-50/50' : 'border-slate-800 focus:ring-cyan-500'} focus:ring-2 focus:border-transparent outline-none transition-all shadow-sm`} />
                  {touched.lastName && errors.lastName && <p className="text-xs text-red-500 flex items-center gap-1 mt-1"><X className="w-3 h-3"/>{errors.lastName}</p>}
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address <span className="text-red-500">*</span></label>
                <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} onBlur={() => setTouched({...touched, email: true})} type="email" id="email" className={`bg-slate-900 text-slate-100 w-full px-4 py-2.5 rounded-xl border ${touched.email && errors.email ? 'border-red-500 focus:ring-red-500 bg-red-50/50' : 'border-slate-800 focus:ring-cyan-500'} focus:ring-2 focus:border-transparent outline-none transition-all shadow-sm`} />
                {touched.email && errors.email && <p className="text-xs text-red-500 flex items-center gap-1 mt-1"><X className="w-3 h-3"/>{errors.email}</p>}
              </div>
              <div className="space-y-1.5">
                <label htmlFor="linkedin" className="text-sm font-medium text-slate-300">LinkedIn Profile URL</label>
                <input value={formData.linkedin} onChange={(e) => setFormData({...formData, linkedin: e.target.value})} type="url" id="linkedin" className="bg-slate-900 text-slate-100 w-full px-4 py-2.5 rounded-xl border border-slate-800 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all shadow-sm" placeholder="https://linkedin.com/in/..." />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-300">Resume / CV <span className="text-red-500">*</span></label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-700 border-dashed rounded-xl hover:bg-slate-950 hover:border-cyan-700 transition-colors cursor-pointer relative shadow-sm">
                  <input id="file-upload" name="file-upload" type="file" className="bg-slate-900 text-slate-100 absolute inset-0 w-full h-full opacity-0 cursor-pointer" required />
                  <div className="space-y-1 text-center pointer-events-none">
                    <UploadCloud className="mx-auto h-10 w-10 text-slate-500" />
                    <div className="flex text-sm text-slate-400 justify-center">
                      <span className="relative rounded-md font-medium text-cyan-500">
                        Upload a file
                      </span>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-slate-400">PDF, DOC, DOCX up to 10MB</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <button type="submit" disabled={isApplying} className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 disabled:opacity-70 text-white px-8 py-3.5 rounded-full font-medium transition-colors flex items-center justify-center space-x-2">
                  {isApplying ? (
                    <>
                      <div className="w-5 h-5 border-2 border-slate-900/30 border-t-white rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Submit Application</span>
                  )}
                </button>
              </div>
            </form>
          </section>
        </div>

        {/* Right Column (Sidebar) */}
        <div className="space-y-8">
          <div className="bg-slate-900 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-sm sticky top-8">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <HeartPulse className="w-5 h-5 text-rose-500" />
              Compensation & Benefits
            </h3>
            <p className="text-sm text-slate-400 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-slate-800">
              On top of a competitive salary, great teams and exciting career opportunities, we offer a wide range of core benefits.
            </p>
            <ul className="space-y-3 sm:space-y-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <benefit.icon className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">{benefit.text}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-slate-800">
              <h4 className="font-semibold text-sm text-slate-100 mb-3">Plus additional perks:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Employee Wellness Programs
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Training Programs
                </li>
              </ul>
            </div>
          </div>
        </div>

      </main>

      {/* Toast Notification */}
      <div className={`fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 transform transition-all duration-300 ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}>
        <div className="bg-slate-800 text-white px-4 py-3 rounded-xl shadow-lg flex items-center space-x-3">
          <div className="bg-green-500/20 text-green-400 p-1 rounded-full">
            <Check className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium">{toastMessage}</span>
          <button onClick={() => setShowToast(false)} className="text-slate-500 hover:text-white p-1">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
