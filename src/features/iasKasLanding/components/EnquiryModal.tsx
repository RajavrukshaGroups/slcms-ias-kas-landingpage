import { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Phone, User, Mail, MessageSquare } from 'lucide-react';
import logoWebp from '../../../assets/images/logo.webp';

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
}

export default function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-4 bg-[#061C30]/80 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Modal Card Container */}
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#E5E1D8] overflow-hidden flex flex-col max-h-[90dvh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          type="button"
          className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close Enquiry Popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-[#061C30] text-white p-5 sm:p-7 relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A900]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-2.5 sm:mb-3">
            <img
              src={logoWebp}
              alt="Sri Lakshmi Logo"
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
              width={40}
              height={40}
            />
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#D9A900] font-sans block">
                ADMISSION 2026-27 OPEN
              </span>
              <h3 className="text-xs sm:text-base font-bold uppercase tracking-tight text-white font-sans leading-none mt-0.5">
                SRI LAKSHMI COLLEGE
              </h3>
            </div>
          </div>

          <h2 className="text-lg sm:text-2xl font-bold font-sans text-white leading-tight">
            Integrated <span className="text-[#D9A900]">IAS / KAS</span> Degree Program
          </h2>
          <p className="text-xs sm:text-sm text-white/80 font-sans mt-1">
            Get early civil services training alongside your degree. Fill out the quick enquiry below.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-teal-50 text-[#087C73] border border-teal-200 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-[#087C73]" />
              </div>
              <h4 className="font-sans font-bold text-xl text-[#082B50]">Enquiry Submitted!</h4>
              <p className="text-xs sm:text-sm text-[#24496B] max-w-xs mx-auto font-sans leading-relaxed">
                Thank you, <span className="font-bold">{formData.fullName}</span>. Our admission counselor will reach out to you on <span className="font-bold">{formData.phone}</span> shortly.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 px-6 py-2.5 bg-[#061C30] hover:bg-[#082B50] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer font-sans"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
              {/* Full Name */}
              <div className="space-y-1">
                <label htmlFor="modal-name" className="text-xs font-bold text-[#082B50] uppercase tracking-wider flex items-center gap-1.5 font-sans">
                  <User className="w-3.5 h-3.5 text-[#A87C00]" />
                  <span>Full Name <span className="text-red-500">*</span></span>
                </label>
                <input
                  id="modal-name"
                  type="text"
                  maxLength={50}
                  placeholder="Enter student name"
                  value={formData.fullName}
                  onBlur={() => handleBlur('fullName')}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  className={`w-full bg-[#F8F7F3] border rounded-lg px-3.5 py-2 text-base sm:text-sm text-[#082B50] placeholder-[#64748B] focus:outline-none focus:bg-white transition-colors font-sans ${
                    touched.fullName && errors.fullName
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-[#E5E1D8] focus:border-[#087C73]'
                  }`}
                />
                {touched.fullName && errors.fullName && (
                  <p className="text-red-500 text-xs font-sans mt-0.5">{errors.fullName}</p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-1">
                <label htmlFor="modal-phone" className="text-xs font-bold text-[#082B50] uppercase tracking-wider flex items-center gap-1.5 font-sans">
                  <Phone className="w-3.5 h-3.5 text-[#A87C00]" />
                  <span>Mobile Phone Number <span className="text-red-500">*</span></span>
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  placeholder="+91 95350 03404"
                  value={formData.phone}
                  onBlur={() => handleBlur('phone')}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={`w-full bg-[#F8F7F3] border rounded-lg px-3.5 py-2 text-base sm:text-sm text-[#082B50] placeholder-[#64748B] focus:outline-none focus:bg-white transition-colors font-sans ${
                    touched.phone && errors.phone
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-[#E5E1D8] focus:border-[#087C73]'
                  }`}
                />
                {touched.phone && errors.phone && (
                  <p className="text-red-500 text-xs font-sans mt-0.5">{errors.phone}</p>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-1">
                <label htmlFor="modal-email" className="text-xs font-bold text-[#082B50] uppercase tracking-wider flex items-center gap-1.5 font-sans">
                  <Mail className="w-3.5 h-3.5 text-[#A87C00]" />
                  <span>Email Address <span className="text-red-500">*</span></span>
                </label>
                <input
                  id="modal-email"
                  type="email"
                  placeholder="student@example.com"
                  value={formData.email}
                  onBlur={() => handleBlur('email')}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`w-full bg-[#F8F7F3] border rounded-lg px-3.5 py-2 text-base sm:text-sm text-[#082B50] placeholder-[#64748B] focus:outline-none focus:bg-white transition-colors font-sans ${
                    touched.email && errors.email
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-[#E5E1D8] focus:border-[#087C73]'
                  }`}
                />
                {touched.email && errors.email && (
                  <p className="text-red-500 text-xs font-sans mt-0.5">{errors.email}</p>
                )}
              </div>

              {/* Message / Questions Textarea */}
              <div className="space-y-1">
                <label htmlFor="modal-message" className="text-xs font-bold text-[#082B50] uppercase tracking-wider flex items-center gap-1.5 font-sans">
                  <MessageSquare className="w-3.5 h-3.5 text-[#A87C00]" />
                  <span>Message / Questions</span>
                </label>
                <textarea
                  id="modal-message"
                  rows={2.5}
                  placeholder="Ask about IAS/KAS coaching, hostel, degree courses, fees..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#F8F7F3] border border-[#E5E1D8] rounded-lg px-3.5 py-2 text-base sm:text-sm text-[#082B50] placeholder-[#64748B] focus:outline-none focus:border-[#087C73] focus:bg-white transition-colors font-sans resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#D9A900] hover:bg-[#A87C00] text-[#061C30] font-bold uppercase tracking-wider text-[12px] sm:text-[13px] rounded-lg shadow-md transition-all flex items-center justify-center gap-2 mt-1 cursor-pointer font-sans"
              >
                <span>Submit Admission Enquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
