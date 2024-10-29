import localFont from "next/font/local";
// import "./globals.css"
import './globals.css'; // Global styles
import 'tailwindcss/tailwind.css'; // Tailwind CSS
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Book Wise ",
  description: "GitHub HacktoberFest",
};

export default function RootLayout({ children }) {
  
  return (
    
    <html lang="en">
      <body
         
        // className={`${geistSans.variable} ${geistMono.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
