import Link from 'next/link'
import { Heart } from 'lucide-react'
import styles from './Footer.module.css'

const FOOTER_LINKS = ['Privacy', 'Terms', 'Contact', 'Blog']

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/" className={styles.logo}>
        Kirana<span className={styles.dot}>.</span>
      </Link>

      <div className={styles.links}>
        {FOOTER_LINKS.map((l) => (
          <Link key={l} href="#" className={styles.link}>
            {l}
          </Link>
        ))}
      </div>

      <p className={styles.copy}>
        © 2026 Kirana Technologies Pvt. Ltd. Made with{' '}
        <Heart size={12} className={styles.heart} fill="var(--saffron)" strokeWidth={0} /> in India
      </p>
    </footer>
  )
}
