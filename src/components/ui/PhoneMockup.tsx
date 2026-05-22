import { ScanLine, TrendingUp } from 'lucide-react'
import { MOCK_BILL_ITEMS } from '@/lib/constants'
import styles from './PhoneMockup.module.css'

export default function PhoneMockup() {
  return (
    <div className={styles.wrapper}>
      {/* Floating badges */}
      <div className={`${styles.floatBadge} ${styles.left}`}>
        <TrendingUp size={12} />
        <div>
          <div>Aata 5kg</div>
          <div className={styles.badgeSub}>Scanned ✓</div>
        </div>
      </div>

      <div className={styles.phoneFrame}>
        <div className={styles.notch} />
        <div className={styles.screen}>
          {/* Top bar */}
          <div className={styles.topBar}>
            <div className={styles.topRow}>
              <span className={styles.storeName}>Sharma General Store</span>
              <span className={styles.date}>22 May 2026</span>
            </div>
            <div className={styles.topRow} style={{ marginTop: 8 }}>
              <span className={styles.totalLabel}>BILL TOTAL</span>
            </div>
            <div className={styles.topRow}>
              <span className={styles.total}>₹ 847.50</span>
              <span className={styles.date}>4 items</span>
            </div>
          </div>

          {/* Bill items */}
          <div className={styles.items}>
            {MOCK_BILL_ITEMS.map((item) => (
              <div key={item.name} className={styles.item}>
                <div>
                  <div className={styles.itemName}>{item.name}</div>
                  <div className={styles.itemQty}>{item.qty}</div>
                </div>
                <div className={styles.itemPrice}>{item.price}</div>
              </div>
            ))}
          </div>

          {/* Scan button */}
          <div className={styles.scanBtn}>
            <ScanLine size={16} color="#fff" />
            Scan Next Item
          </div>
        </div>
      </div>

      {/* Right badge */}
      <div className={`${styles.floatBadge} ${styles.right}`}>
        <TrendingUp size={12} />
        <div>
          <div>₹48,200</div>
          <div className={styles.badgeSub}>This month</div>
        </div>
      </div>
    </div>
  )
}
