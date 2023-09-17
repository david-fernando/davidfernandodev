import Natigation from "@/components/Navigation"
import Banner from "@/components/Banner"
import Services from "@/components/Services"
import WhatsAppButton from "../components/WhatsAppButton"
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="container">
      <Natigation />
      <Banner />
      <Services />
      <WhatsAppButton />
    </div>
  )
}
