import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { AuthProvider } from "./Providers";

export const metadata = {
  title: "Threads",
  description: "Your favorite social by TomTom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className=" bg-threads-gray">
        <AuthProvider>{children}</AuthProvider>
        <ToastContainer position="bottom-right" />
      </body>
    </html>
  );
}
