import React from "react";
import ModalFrame from "../ModalFrame";
import ModalContent from "../modalItem/ModalContent";
import ModalTitle from "../modalItem/ModalTitle";
import { useQuery } from "@tanstack/react-query";
import { deleteEventApi } from "@/api/events";

type ReserveModalType = {
  setOnModal: React.Dispatch<React.SetStateAction<boolean>>;
  dimClick?: boolean;
  isDim?: boolean;
  onClose?: boolean;
  className?: string;
  eventId?:any;
};

const ReserveModal = ({
  setOnModal,
  dimClick,
  isDim = true,
  className,
  eventId
}: ReserveModalType) => {

  const { data, isSuccess, isError, error } = useQuery({
    queryKey: ["event-delete"],
    queryFn: () => deleteEventApi(eventId.id),
  });

  return (
    <ModalFrame
      setOnModal={setOnModal}
      isDim={isDim}
      onClose
      dimClick={dimClick}
      className={className}
    >
      <ModalTitle>
        <div>예약 등록 내역</div>
      </ModalTitle>

      <ModalContent>
        <div className="flex flex-row">
          <div>썸네일</div>
          <div>
            <div>이벤트명</div>
            <div>캐스팅</div>
            <div>일시</div>
            <div>장소</div>
          </div>
        </div>
      </ModalContent>
    </ModalFrame>
  );
};

export default ReserveModal;
