import Header from "@/components/Header";
import About from "@/components/About";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-12 py-8">
      <Header />
      <About />
    </main>
  );
}
