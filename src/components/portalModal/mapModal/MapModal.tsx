import React from 'react'
import DaumPostcode from "react-daum-postcode";
import ModalFrame from '../ModalFrame'

type BasicModalType = {
  setOnModal: React.Dispatch<React.SetStateAction<boolean>>,
  dimClick?: boolean,
  isDim?: boolean,
  onClose?: boolean,
  className?: string,
  type?: 'searchAddress' | 'viewAddress',
}

// 이벤트 등록시 주소 찾기, 주소 클릭시 지도 보여주기
const MapModal = ({ setOnModal, dimClick, isDim = true, className, type }: BasicModalType) => {

  const onCompletePost = (data:any) => {
    // setModalState(false);
    // setInputAddressValue(data.address);
    // setInputZipCodeValue(data.zonecode);
    console.log('data', data);
  };

  return (
    <ModalFrame
      setOnModal={setOnModal}
      isDim={isDim}
      onClose
      dimClick={dimClick}
      className={className}
    >
      {
        type === 'searchAddress' && <>
          <DaumPostcode
            // style={postCodeStyle}
            onComplete={onCompletePost}
          ></DaumPostcode>
        </>
      }
      {
        type === 'viewAddress' && <></>
      }
    </ModalFrame>
  )
}

export default MapModal