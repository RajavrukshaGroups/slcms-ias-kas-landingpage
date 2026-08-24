import { statistics } from '../data/statistics';
import { useCountUp } from '../hooks/useCountUp';
import { NumberCard } from '../components/cards/NumberCard';

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
    <div ref={ref} className="border-b sm:border-b-0 sm:border-r last:border-0 border-white/10">
      <NumberCard
        number={`${count}${suffix}`}
        label={label}
        subLabel={numIdx}
        variant="borderless"
      />
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="py-10 sm:py-16 bg-[#061C30] border-b border-navy-900 text-white relative">
      {/* Subtle Gold Accent Top Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#D9A900] opacity-80" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6 lg:gap-8">
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

