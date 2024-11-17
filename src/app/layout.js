import "./styles/globals.css";


export const metadata = {
  title: "Civision Front End",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Dashboard</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
