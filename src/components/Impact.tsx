import { motion, useSpring, useTransform, useInView } from "motion/react";
import { Droplets, HandHelping, PiggyBank } from "lucide-react";
import { useEffect, useRef } from "react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (latest) => Math.floor(latest).toLocaleString());

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

const metrics = [
  {
    id: 1,
    value: 31000,
    label: "Lives Impacted",
    description: "Providing clean water, medical aid, and essential daily support.",
    icon: Droplets,
    suffix: "+",
  },
  {
    id: 2,
    value: 214,
    label: "Community Projects",
    description: "Building sustainable infrastructure and community support networks.",
    icon: HandHelping,
  },
  {
    id: 3,
    value: 36500000,
    label: "Funds Raised",
    description: "Directly funding life-saving initiatives and long-term care.",
    icon: PiggyBank,
    prefix: "$",
  },
];

export function Impact() {
  return (
    <section className="py-24 md:py-32 bg-[#F3EFE7] text-[#111111]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-start mb-16">
          <div className="max-w-2xl">
            <div className="bg-[#E8F5E9] text-[#10B981] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block">
              Our Impact
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-[1.1]">
              Measurable Change,<br /> Immeasurable Hope.
            </h2>
          </div>
          <p className="text-gray-600 max-w-sm text-base leading-relaxed">
            Every donation, every volunteer hour, and every shared story translates into real-world impact. Here is what we've achieved together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="bg-white rounded-[2.5rem] p-8 sm:p-10 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-8 p-4 bg-[#F3EFE7] rounded-full inline-block">
                <metric.icon className="w-8 h-8 text-[#111111]" />
              </div>
              
              <div className="text-4xl sm:text-5xl font-black text-[#111111] mb-3 tracking-tighter">
                {metric.prefix}
                <Counter value={metric.value} suffix={metric.suffix} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#111111]">
                {metric.label}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
