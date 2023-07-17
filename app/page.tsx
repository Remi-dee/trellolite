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

      <div className="bg-[url('../public/assets/wood.jpg')]">
        <Board />
      </div>

      <h1>Trellolite Ai, brought to you by Remi Daniel</h1>
    </main>
  );
}
