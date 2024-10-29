import localFont from "next/font/local";

};

export default function RootLayout({ children }) {
  
  return (
    
    <html lang="en">
      <body
         
        // className={`${geistSans.variable} ${geistMono.variable} `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
