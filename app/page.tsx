import Board from '@/components/Board'
import HeaderButtom from '@/components/HeaderButtom'
import HeaderTop from '@/components/HeaderTop'

import Image from 'next/image'

export default function Home() {
  return (
    <main >
      {/*Header */}
      
      <HeaderTop/>
      <HeaderButtom/>

       {/*Header */}
       <Board/>
     <h1>Trello 2.0 Ai</h1>
    </main>
  )
}
