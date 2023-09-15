import Natigation from "@/components/Navigation"
import Banner from "@/components/Banner"
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="container">
      <Natigation />
      <Banner />
    </div>
  )
}
