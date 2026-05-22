import { CheckCircle2, Bot } from 'lucide-react'
import { MOCK_CUSTOMERS } from '@/lib/constants'
import styles from './FeatureVisuals.module.css'

export function BarcodeVisual() {
  return (
    <div className={styles.barcodeWrap}>
      <div className={styles.barcodeContainer}>
        <div className={`${styles.scanBeam} scan-beam`} />
      </div>
      <div className={styles.scanSuccess}>
        <CheckCircle2 size={14} color="var(--green-mid)" />
        Aashirvaad Aata 5kg — ₹285.00 added
      </div>
    </div>
  )
}

export function AnalyticsVisual() {
  const bars = [
    { month: 'Jan', height: '55%', cls: 'bar-fill-1' },
    { month: 'Feb', height: '70%', cls: 'bar-fill-2' },
    { month: 'Mar', height: '60%', cls: 'bar-fill-3' },
    { month: 'Apr', height: '85%', cls: 'bar-fill-4' },
    { month: 'May', height: '100%', cls: 'bar-fill-5' },
  ]

  return (
    <div className={styles.analyticsWrap}>
      <div className={styles.chartLabel}>Monthly Revenue — 2026</div>
      <div className={styles.chartBars}>
        {bars.map((b) => (
          <div key={b.month} className={styles.barCol}>
            <div className={styles.bar}>
              <div
                className={`${styles.barFill} ${b.cls}`}
                style={{ height: b.height }}
              />
            </div>
            <div className={styles.barMonth}>{b.month}</div>
          </div>
        ))}
      </div>
      <div className={styles.insightCard}>
        <Bot size={18} color="rgba(255,255,255,0.7)" />
        <p className={styles.insightText}>
          <strong>AI Insight:</strong> Aata &amp; Salt sales up 22% this month.
          Consider stocking more 5kg packs.
        </p>
      </div>
    </div>
  )
}

export function BillVisual() {
  const items = [
    { name: 'Aata 5kg × 1', price: '₹285.00' },
    { name: 'Tata Salt × 2', price: '₹44.00' },
    { name: 'Surf Excel 1kg', price: '₹349.00' },
    { name: 'Amul Butter', price: '₹169.50' },
  ]

  return (
    <div className={styles.billCard}>
      <div className={styles.billHeader}>
        <div>
          <div className={styles.billShop}>Sharma General Store</div>
          <div className={styles.billAddr}>Laxmi Nagar, Delhi</div>
        </div>
        <div className={styles.billNum}>BILL #0247</div>
      </div>
      <hr className={styles.dashed} />
      {items.map((i) => (
        <div key={i.name} className={styles.billRow}>
          <span>{i.name}</span>
          <strong>{i.price}</strong>
        </div>
      ))}
      <hr className={styles.dashed} />
      <div className={styles.billRow}>
        <span>GST (5%)</span>
        <strong>₹42.38</strong>
      </div>
      <hr className={styles.dashed} />
      <div className={styles.billTotal}>
        <span>Total</span>
        <span className={styles.totalAmt}>₹889.88</span>
      </div>
    </div>
  )
}

export function CreditVisual() {
  return (
    <div className={styles.creditWrap}>
      <div className={styles.creditLabel}>Udhar Book — Outstanding</div>
      {MOCK_CUSTOMERS.map((c) => (
        <div key={c.name} className={styles.customerRow}>
          <div
            className={styles.avatar}
            style={{ background: c.type === 'paid' ? 'var(--green)' : 'var(--saffron)' }}
          >
            {c.initials}
          </div>
          <div>
            <div className={styles.custName}>{c.name}</div>
            <div className={styles.custSeen}>Last: {c.lastSeen}</div>
          </div>
          <div
            className={`${styles.amount} ${
              c.type === 'due' ? styles.amountDue : styles.amountPaid
            }`}
          >
            {c.amount}
          </div>
        </div>
      ))}
    </div>
  )
}
