import { ReactNode } from 'react'
import { Sidebar } from '@app/components/Sidebar'

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Sidebar />
      {children}
    </main>
  )
}
