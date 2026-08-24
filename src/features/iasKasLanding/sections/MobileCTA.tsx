import { Phone, ArrowRight } from 'lucide-react';

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#E5E1D8] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom,0px)]">
      <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3">
        <a
          href="tel:+919535003404"
          className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-[#087C73] text-[#087C73] py-3 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors hover:bg-teal-50 font-sans"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <a
          href="#contact"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#D9A900] hover:bg-[#A87C00] text-[#061C30] py-3 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors font-sans"
        >
          Contact Us
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
