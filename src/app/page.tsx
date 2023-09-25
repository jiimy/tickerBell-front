import NavTab from "@/components/NavTab/NavTab";
import Header from "@/components/header/Header";
import List from "@/components/list/List";
import { ticketDummyData } from "@/dummyData/DummyData";

export default function Home() {

  return (
    <main className="max-w-1200 m-auto">
      <Header />
      <NavTab />
      <List data={ticketDummyData} datatype="ranking" headerTitle="장르별 랭킹" />
      <List data={ticketDummyData} datatype="open" headerTitle="오픈 예정" />
      {/* <List data={ticketDummyData} /> */}
    </main>
  )
}
