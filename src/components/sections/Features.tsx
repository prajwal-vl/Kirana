import SectionTag from '@/components/ui/SectionTag'
import {
  BarcodeVisual,
  AnalyticsVisual,
  BillVisual,
  CreditVisual,
} from '@/components/ui/FeatureVisuals'
import styles from './Features.module.css'

const FEATURES = [
  {
    num: '01 — SCANNING',
    title: 'Scan barcodes in under a second',
    desc: 'Point your phone camera at any product barcode or QR code. Kirana instantly fetches the product name, price, and GST details — no typing needed.',
    pills: ['Phone camera', 'Auto price lookup', 'Manual entry fallback', 'Works online easily'],
    Visual: BarcodeVisual,
    reverse: false,
  },
  {
    num: '02 — ANALYTICS',
    title: 'Monthly AI insights at a glance',
    desc: 'See your best-selling products, busiest hours, revenue trends, and profit margins — all automatically calculated from your bills. Export to Excel in one tap.',
    pills: ['Revenue charts', 'Top products', 'Excel export', 'AI summaries'],
    Visual: AnalyticsVisual,
    reverse: true,
  },
  {
    num: '03 — BILLING',
    title: 'Professional bills, instantly',
    desc: 'Auto-generated digital bills with GST, store name, and item breakdown. Send via WhatsApp or SMS in one tap. Print or save as PDF.',
    pills: ['GST ready', 'WhatsApp sharing', 'PDF export', 'Bill history'],
    Visual: BillVisual,
    reverse: false,
  },
  {
    num: '04 — CREDIT',
    title: 'Digital udhar book, zero confusion',
    desc: 'Replace your physical credit notebook with a digital ledger. Track who owes you, send payment reminders on WhatsApp, and see your total receivables instantly.',
    pills: ['Customer profiles', 'WhatsApp reminders', 'Payment history', 'Balance summary'],
    Visual: CreditVisual,
    reverse: true,
  },
]

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.inner}>
        <SectionTag light>Features</SectionTag>
        <h2 className={styles.title}>
          Everything your store needs,
          <br /> nothing it doesn&apos;t.
        </h2>
        <p className={styles.sub}>
          Built specifically for Indian kirana stores. Works offline. Supports Hindi
          product names.
        </p>

        <div className={styles.list}>
          {FEATURES.map((f) => (
            <div
              key={f.num}
              className={`${styles.row} ${f.reverse ? styles.reverse : ''}`}
            >
              <div className={styles.copy}>
                <div className={styles.featureNum}>{f.num}</div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
                <div className={styles.pills}>
                  {f.pills.map((p) => (
                    <span key={p} className={styles.pill}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.visual}>
                <f.Visual />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
