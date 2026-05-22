import styles from './SectionTag.module.css'

interface SectionTagProps {
  children: React.ReactNode
  light?: boolean
}

export default function SectionTag({ children, light = false }: SectionTagProps) {
  return (
    <span className={`${styles.tag} ${light ? styles.light : ''}`}>
      {children}
    </span>
  )
}
