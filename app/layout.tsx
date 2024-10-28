import './globals.css'; // Import your CSS and Tailwind styles
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: "Relay - Open Source HTTP Interceptor",
  description: "Capture, modify and run API requests directly in your browser.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-gray-25 to-gray-50">
        <Header />
        <main className="max-w-5xl px-3 mx-auto my-10 md:px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
