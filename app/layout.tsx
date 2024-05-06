import Image from "next/image";
import type { ReactNode } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./nav/Nav";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Nav />

            <header className={styles.header}>
              
            </header>

            <Container>{children}</Container>

            <footer className={styles.footer}>
            </footer>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
