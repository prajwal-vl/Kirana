import Link from 'next/link'
import { Check, X } from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import { PLANS } from '@/lib/constants'
import styles from './Pricing.module.css'

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.inner}>
        <SectionTag>Pricing</SectionTag>
        <h2 className={styles.title}>Simple pricing, always.</h2>
        <p className={styles.sub}>
          Start free, upgrade when your store grows. No hidden charges, no long
          contracts.
        </p>

        <div className={styles.grid}>
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.card} ${plan.featured ? styles.featured : ''}`}
            >
              {plan.badge && <div className={styles.badge}>{plan.badge}</div>}

              <div className={`${styles.planName} ${plan.featured ? styles.lightText : styles.mutedText}`}>
                {plan.name}
              </div>

              <div className={`${styles.price} ${plan.featured ? styles.whiteText : styles.navyText}`}>
                {plan.price}
              </div>

              <div className={`${styles.period} ${plan.featured ? styles.dimText : styles.mutedText}`}>
                {plan.period}
              </div>

              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li
                    key={f.text}
                    className={`${styles.featureItem} ${
                      plan.featured ? styles.featureDark : styles.featureLight
                    } ${!f.included ? styles.excluded : ''}`}
                  >
                    {f.included ? (
                      <Check
                        size={16}
                        color={plan.featured ? 'var(--saffron-mid)' : 'var(--green-mid)'}
                        strokeWidth={2.5}
                      />
                    ) : (
                      <X size={16} color="var(--muted)" strokeWidth={2} />
                    )}
                    {f.text}
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className={`${styles.btn} ${
                  plan.ctaStyle === 'primary'
                    ? styles.btnPrimary
                    : plan.ctaStyle === 'dark'
                    ? styles.btnDark
                    : styles.btnOutline
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
