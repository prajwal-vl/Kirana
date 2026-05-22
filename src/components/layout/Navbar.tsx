'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoIcon}>
          <ShoppingCart size={18} color="#fff" strokeWidth={2.5} />
        </div>
        Kirana<span className={styles.dot}>.</span>
      </Link>

      <div className={styles.links}>
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className={styles.link}>
            {link.label}
          </Link>
        ))}
      </div>

      <Link href="#pricing" className={styles.cta}>
        Start for Free
      </Link>
    </nav>
  )
}
