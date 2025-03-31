import "./globals.css";

export const metadata = {
  title: "Threads",
  description: "Your favorite social by TomTom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className=" bg-threads-gray">{children}</body>
    </html>
  );
}
