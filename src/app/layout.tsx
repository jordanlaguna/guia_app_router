import NavBar from './componets/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

type Time = {
  datetime : string;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const res = await fetch(
      'http://worldtimeapi.org/api/timezone/America/Costa_Rica', {
      cache : 'no-store',
      next:{
        revalidate : 5,
      }

      });
  const data: Time = await res.json(); 
  console.log(data)   
  return (
    <html lang="en">
      <body className={inter.className}> <NavBar></NavBar> {children} 
      <h3>{data.datetime}</h3>
      </body>
    </html>
  )
}
