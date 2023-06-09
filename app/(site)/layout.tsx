import Navbar from '@/components/Navbar'
import '../globals.css'
import { Work_Sans } from 'next/font/google'
import Footer from '@/components/Footer'

const workSans = Work_Sans({
  display: 'swap',
  weight: ['400'],
  subsets: ['latin-ext']

})
type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <div id='modal'>
      <main className={workSans.className}>
        <Navbar />
        {children}
        <Footer/>
      </main>
    </div>
  )
}
