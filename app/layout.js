import './globals.css';

export const metadata = {
  title: 'Contempo, by Lucía Clavijo',
  description: 'Portfolio de Lucía Clavijo.',
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
