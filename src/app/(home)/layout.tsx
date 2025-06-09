import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <section className="flex flex-col min-h-screen">
      <Navbar />
      {children}
    </section>
  );
};

export default HomeLayout;
