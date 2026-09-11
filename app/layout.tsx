
import Navbar from "../component/Navbar/Navbar";
import AuthProvider from "../context/AuthProvider";
import ReduxProvider from "../Reduxstore/ReduxProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
        <AuthProvider>
        <Navbar />
        {children}
        </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}