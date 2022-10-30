import "../styles/globals.css";
import type { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Hello, next-typescript-tailwindcss!</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
