"use client";

import { EventRows, UserRows } from "@/dummyData/DummyData";
import { useEffect, useMemo, useState } from "react";
import { HistoryTable } from "@/components/HistoryTable/HistoryTable";
import Header from "@/components/header/Header";
import NavTab from "@/components/NavTab/NavTab";
import { SideBar } from "@/components/sidebar/SideBar";
import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userSelector } from "@/recoil/user";
import { getCookie } from "@/util/authCookie";
import { userReserveApi } from "@/api/users";

export const UserColumns: IUserColumnsData[] = [
  {
    name: "이벤트명",
    speaker: "캐스팅",
    date: "일시",
    place: "장소",
  },
];

export const EventColumns: IEventColumnsData[] = [
  {
    name: "이벤트명",
    speaker: "캐스팅",
    date: "일시",
    place: "장소",
    totaluser: "예매좌수",
    maxseats: "최대좌석",
    cancel: "취소",
  },
];

const Index = () => {
  const page = 0;
  const size = 1;
  const getRole = useRecoilValue(userSelector("role"));
  const setIsLogin = useSetRecoilState(userSelector("isLogin"));
  const getIsLogin = useRecoilValue(userSelector("isLogin"));
  const [atk, setAtk] = useState("");

  useEffect(() => {
    const atk = getCookie("ticket-atk");
    setAtk(atk);
    setIsLogin(atk !== null);
    if (atk) {
      userReserveApi(atk, page, size).then((res) => {
        console.log("re정보: ", res);
        // 여기에서 API 응답을 처리합니다.
      });
    }
  }, []);
  //   setAtk(getCookie("ticket-atk"));
  //   setIsLogin(getCookie("ticket-atk") !== null ? true : false);

  // }, []);

  const columns = getRole === "ROLE_REGISTRANT" ? EventColumns : UserColumns;

  const rows = useMemo(() => {
    if (getRole === "ROLE_REGISTRANT") {
      return EventRows;
    } else {
      return UserRows;
    }
  }, [getRole]);

  useEffect(() => {
    console.log(getRole);
  });

  return (
    <>
      <Header />
      <NavTab />
      <main className="flex">
        <SideBar />
        <HistoryTable columns={columns} rows={rows} />
      </main>
    </>
  );
};

export default Index;