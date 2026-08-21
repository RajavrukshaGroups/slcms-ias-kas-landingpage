import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
}

export default function ContactForm() {
  const { ref, isInView } = useInView();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string) => {
    let errorMsg = '';
    const trimmed = value.trim();

    if (name === 'fullName') {
      if (!trimmed) {
        errorMsg = 'Full Name is required';
      } else if (!/^[a-zA-Z\s]+$/.test(trimmed)) {
        errorMsg = 'Name must contain letters and spaces only';
      } else if (trimmed.length < 3 || trimmed.length > 50) {
        errorMsg = 'Name must be between 3 and 50 characters';
      }
    }

    if (name === 'phone') {
      const cleanPhone = trimmed.replace(/[\s\-\(\)\+]/g, '');
      if (!trimmed) {
        errorMsg = 'Phone Number is required';
      } else if (!/^(?:91)?[6-9]\d{9}$/.test(cleanPhone)) {
        errorMsg = 'Please enter a valid 10-digit mobile number';
      }
    }

    if (name === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!trimmed) {
        errorMsg = 'Email Address is required';
      } else if (!emailRegex.test(trimmed)) {
        errorMsg = 'Please enter a valid email address (e.g. user@domain.com)';
      }
    }

    return errorMsg;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const val = formData[field as keyof typeof formData];
    const err = validateField(field, val);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const err = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameErr = validateField('fullName', formData.fullName);
    const phoneErr = validateField('phone', formData.phone);
    const emailErr = validateField('email', formData.email);

    const newErrors: FormErrors = {
      fullName: nameErr,
      phone: phoneErr,
      email: emailErr,
    };

    setErrors(newErrors);
    setTouched({ fullName: true, phone: true, email: true });

    if (!nameErr && !phoneErr && !emailErr) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-premium-light bg-gold-arc text-[#082B50] relative border-b border-[#E5E1D8] overflow-hidden" ref={ref}>
      {/* Top Gold Line Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#D9A900]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`flex flex-col items-center text-center mb-10 sm:mb-12 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="text-[14px] font-semibold tracking-[0.18em] text-[#082B50] uppercase font-sans">
              ADMISSION ENQUIRY &amp; CONTACT
            </span>
          </div>

          <h2 className="font-sans text-[30px] sm:text-[38px] lg:text-[48px] font-bold text-[#082B50] leading-[1.1] tracking-tight">
            Connect with Our <span className="text-[#087C73]">Civil Services Academy</span>
          </h2>
          <div className="w-16 h-1 bg-[#D9A900] mt-4 rounded-full" />
          <p className="mt-5 text-[15px] sm:text-[16px] text-[#24496B] font-normal leading-[1.6] max-w-2xl font-sans">
            Have questions about our 3-Year Integrated Degree + IAS/KAS Officer Program? Fill out the contact form below or reach out to our admission counselors directly.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start transition-all duration-700 delay-150 ease-out ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}
        >
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/95 backdrop-blur-xs border border-[#E5E1D8] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs hover-premium-card">
              <h3 className="font-sans text-[20px] sm:text-[24px] font-bold text-[#082B50] border-b border-[#E5E1D8] pb-4 flex items-center gap-2 leading-[1.2]">
                <Sparkles className="w-5 h-5 text-[#A87C00]" />
                <span>Sri Lakshmi Academy Contacts</span>
              </h3>

              <div className="space-y-5 text-[14px] font-sans">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 text-[#087C73] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">Call Admissions</span>
                    <a href="tel:+919535003404" className="text-[#082B50] hover:text-[#087C73] font-semibold text-[15px] transition-colors block mt-0.5">
                      +91 95350 03404
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 text-[#087C73] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">Email Us</span>
                    <a href="mailto:slgi2k3@gmail.com" className="text-[#082B50] hover:text-[#087C73] font-semibold text-[15px] transition-colors block mt-0.5">
                      slgi2k3@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 text-[#087C73] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">Campus Address</span>
                    <p className="text-[#24496B] leading-[1.6] text-[14px] mt-0.5">
                      Sri Lakshmi College of Management &amp; Science, Sunkadakatte, Off Magadi Road, Bangalore &ndash; 560091
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 text-[#087C73] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">Office Hours</span>
                    <p className="text-[#24496B] text-[14px] mt-0.5">Monday &ndash; Saturday: 9:00 AM &ndash; 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Admission Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E5E1D8] rounded-2xl p-6 sm:p-8 shadow-xs">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-teal-50 text-[#087C73] border border-teal-200 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-sans font-bold text-[20px] sm:text-[24px] text-[#082B50]">Thank You for Contacting Us!</h3>
                <p className="text-[#24496B] max-w-md mx-auto text-[15px] font-sans leading-[1.6]">
                  Your enquiry has been received. Our Civil Services admission counselor will contact you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ fullName: '', phone: '', email: '', message: '' });
                    setErrors({});
                    setTouched({});
                  }}
                  className="mt-4 px-6 py-2.5 bg-[#061C30] hover:bg-[#082B50] text-white font-bold text-[12px] uppercase tracking-wider rounded-lg transition-colors cursor-pointer font-sans"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="border-b border-[#E5E1D8] pb-4 mb-2">
                  <h3 className="font-sans font-bold text-[20px] text-[#082B50]">Contact Us</h3>
                  <p className="text-[13px] text-[#64748B] font-sans mt-1">Please fill in your details and we will respond promptly.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="text-[12px] font-bold text-[#082B50] uppercase tracking-wider block font-sans">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      maxLength={50}
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onBlur={() => handleBlur('fullName')}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      className={`w-full bg-[#F8F7F3] border rounded-lg px-4 py-3 text-sm text-[#082B50] placeholder-[#64748B] focus:outline-none focus:bg-white transition-colors font-sans ${
                        touched.fullName && errors.fullName
                          ? 'border-red-500 focus:border-red-600'
                          : 'border-[#E5E1D8] focus:border-[#087C73]'
                      }`}
                    />
                    {touched.fullName && errors.fullName && (
                      <p className="text-red-500 text-xs font-sans mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-[12px] font-bold text-[#082B50] uppercase tracking-wider block font-sans">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 95350 03404"
                      value={formData.phone}
                      onBlur={() => handleBlur('phone')}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={`w-full bg-[#F8F7F3] border rounded-lg px-4 py-3 text-sm text-[#082B50] placeholder-[#64748B] focus:outline-none focus:bg-white transition-colors font-sans ${
                        touched.phone && errors.phone
                          ? 'border-red-500 focus:border-red-600'
                          : 'border-[#E5E1D8] focus:border-[#087C73]'
                      }`}
                    />
                    {touched.phone && errors.phone && (
                      <p className="text-red-500 text-xs font-sans mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[12px] font-bold text-[#082B50] uppercase tracking-wider block font-sans">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onBlur={() => handleBlur('email')}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`w-full bg-[#F8F7F3] border rounded-lg px-4 py-3 text-sm text-[#082B50] placeholder-[#64748B] focus:outline-none focus:bg-white transition-colors font-sans ${
                      touched.email && errors.email
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-[#E5E1D8] focus:border-[#087C73]'
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p className="text-red-500 text-xs font-sans mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[12px] font-bold text-[#082B50] uppercase tracking-wider block font-sans">
                    Message / Questions
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your background or questions regarding the IAS/KAS preparation..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F8F7F3] border border-[#E5E1D8] rounded-lg px-4 py-3 text-sm text-[#082B50] placeholder-[#64748B] focus:outline-none focus:border-[#087C73] focus:bg-white transition-colors resize-none font-sans"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#D9A900] hover:bg-[#A87C00] text-[#061C30] font-bold uppercase tracking-wider text-[12px] sm:text-[13px] rounded-lg shadow-md transition-all flex items-center justify-center gap-2 font-sans cursor-pointer"
                >
                  <span>Submit Contact Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
