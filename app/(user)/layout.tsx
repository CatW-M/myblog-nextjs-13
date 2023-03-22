import Header from '@/components/Header';
import '../../styles/globals.css';
import Banner from '@/components/Banner';

export const metadata = {
  title: 'The Blog',
  description: 'Generated with Next.js',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
