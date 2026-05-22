import { Star } from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import { TESTIMONIALS } from '@/lib/constants'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionTag light>Trusted By Store Owners</SectionTag>
        <h2 className={styles.title}>Real stores, real results.</h2>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className={styles.card}>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.person}>
                <div className={styles.avatar}>{t.initials}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                  <div className={styles.stars}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={12} fill="#FFD700" color="#FFD700" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
