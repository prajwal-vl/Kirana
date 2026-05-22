import {
  PenLine,
  XCircle,
  BookOpen,
  TrendingDown,
  FolderX,
  Clock,
} from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import { PROBLEMS } from '@/lib/constants'
import styles from './Problem.module.css'

const ICON_MAP: Record<string, React.ElementType> = {
  PenLine,
  XCircle,
  BookOpen,
  TrendingDown,
  FolderX,
  Clock,
}

export default function Problem() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionTag>The Problem</SectionTag>
        <h2 className={styles.title}>
          Manual bookkeeping is <br /> costing you every day.
        </h2>
        <p className={styles.sub}>
          Over 1.2 crore kirana stores in India still run on handwritten notebooks
          and guesswork.
        </p>

        <div className={styles.grid}>
          {PROBLEMS.map((p) => {
            const Icon = ICON_MAP[p.icon]
            return (
              <div key={p.title} className={styles.card}>
                <div className={styles.iconWrap}>
                  <Icon size={22} color="var(--saffron)" strokeWidth={2} />
                </div>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
