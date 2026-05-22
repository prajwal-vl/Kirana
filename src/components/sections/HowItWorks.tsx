import { Smartphone, Store, ScanLine, BarChart2 } from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import { STEPS } from '@/lib/constants'
import styles from './HowItWorks.module.css'

const ICON_MAP: Record<string, React.ElementType> = {
  Smartphone,
  Store,
  ScanLine,
  BarChart2,
}

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles.inner}>
        <SectionTag>How It Works</SectionTag>
        <h2 className={styles.title}>
          Up and running in
          <br /> under 5 minutes.
        </h2>

        <div className={styles.grid}>
          {STEPS.map((step, idx) => {
            const Icon = ICON_MAP[step.icon]
            const isLast = idx === STEPS.length - 1
            return (
              <div key={step.num} className={styles.card}>
                <div className={styles.stepNum}>{step.num}</div>
                <div className={styles.iconWrap}>
                  <Icon size={26} color="var(--saffron)" strokeWidth={1.8} />
                </div>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDesc}>{step.desc}</p>
                {!isLast && <div className={styles.arrow} />}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
