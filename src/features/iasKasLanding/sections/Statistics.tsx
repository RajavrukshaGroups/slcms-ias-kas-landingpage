import { statistics } from '../data/statistics';
import { useCountUp } from '../hooks/useCountUp';

function StatItem({
  numIdx,
  value,
  suffix,
  label,
}: {
  numIdx: string;
  value: string;
  suffix: string;
  label: string;
}) {
  const numValue = parseInt(value, 10);
  const { count, ref } = useCountUp(numValue, 2000, true);

  return (
    <div ref={ref} className="text-center px-4 py-8 relative group">
      <span className="font-sans font-semibold text-[11px] text-[#D9A900]/80 uppercase tracking-[0.18em] block mb-2">
        {numIdx}
      </span>
      <div className="font-sans text-[36px] sm:text-[44px] font-bold text-[#D9A900] mb-2 leading-none">
        {count}
        <span>{suffix}</span>
      </div>
      <p className="text-[12px] font-bold text-white tracking-[0.12em] uppercase font-sans mt-3">
        {label}
      </p>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="py-12 sm:py-16 bg-[#061C30] border-b border-navy-900 text-white relative">
      {/* Subtle Gold Accent Top Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#D9A900] opacity-80" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {statistics.map((stat, index) => (
            <StatItem
              key={stat.label}
              numIdx={`STAT 0${index + 1}`}
              {...stat}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
