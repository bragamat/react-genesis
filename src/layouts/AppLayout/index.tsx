import { ReactNode } from 'react'
import { Sidebar } from '../../components/Sidebar'

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Sidebar />
      {children}
    </main>
  )
}
