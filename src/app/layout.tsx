import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kirana — Smart Billing for Local Stores',
  description:
    'AI-powered billing and analytics platform for Indian kirana stores. Scan barcodes, generate bills, track credit accounts, and get monthly insights.',
  keywords: ['kirana', 'billing', 'grocery store', 'POS', 'India', 'GST billing'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
