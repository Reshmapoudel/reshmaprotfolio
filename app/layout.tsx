import Footer from "../components/Footer";
import "./globals.css";
// import Footer from "../components/Footer";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>

      {/* <footer>
        <Footer />
      </footer> */}
    </html>
  );
}

// layout.tsx
// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <div>
//       {children}
//       <Footer />
//     </div>
//   );
// }
