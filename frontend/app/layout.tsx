import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className='text-sm p-10 bg-background lg:text-base text-primary font-primary'>{children}</body>
    </html>
  )
}
