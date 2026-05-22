import Link from 'next/link'
import { Zap } from 'lucide-react'
import PhoneMockup from '@/components/ui/PhoneMockup'
import { HERO_STATS } from '@/lib/constants'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.heroGrid} />

      <div className={styles.inner}>
        {/* Left: copy */}
        <div>
          <div className={`${styles.badge} animate`}>
            <span className={`${styles.pulseDot} pulse-dot`} />
            <Zap size={12} />
            AI-Powered Billing Platform
          </div>

          <h1 className={`${styles.heading} animate delay-1`}>
            Your kirana store,{' '}
            <em className={styles.accent}>smarter</em> than ever.
          </h1>

          <p className={`${styles.sub} animate delay-2`}>
            Scan barcodes, generate bills, track credit accounts, and get monthly
            AI insights — all from your phone. No notebook needed.
          </p>

          <div className={`${styles.actions} animate delay-3`}>
            <Link href="#pricing" className={styles.btnPrimary}>
              Get Started Free
            </Link>
            <Link href="#how" className={styles.btnSecondary}>
              See how it works →
            </Link>
          </div>

          <div className={`${styles.stats} animate delay-3`}>
            {HERO_STATS.map((s) => (
              <div key={s.label}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: phone */}
        <div className={styles.visual}>
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}
