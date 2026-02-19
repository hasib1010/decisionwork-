import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "DecisionWorks — Decision Framework",
  description: "A structured framework that evaluates early-stage ideas and produces a finite outcome: Go, No-Go, or Modify.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}