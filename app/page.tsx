import Board from "@/components/Board";
import HeaderButtom from "@/components/Summary";
import HeaderTop from "@/components/Header";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/*Header */}

      <HeaderTop />

      {/*Header */}
      <Board />
      <h1>Trellolite Ai, brought to you by Rem </h1>
    </main>
  );
}
