import Link from 'next/link'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className={styles.inner}>
        <h2 className={styles.title}>
          Your store deserves better than a notebook.
        </h2>
        <p className={styles.sub}>
          Join thousands of kirana owners already billing smarter with Kirana. Free
          to start, takes 5 minutes to set up.
        </p>
        <div className={styles.actions}>
          <Link href="#" className={styles.btnPrimary}>
            Download Free →
          </Link>
          <Link href="#" className={styles.btnSecondary}>
            Watch a demo
          </Link>
        </div>
        <p className={styles.note}>
          Available on Android &amp; iOS · Works offline · Multi-Language supported
        </p>
      </div>
    </section>
  )
}
