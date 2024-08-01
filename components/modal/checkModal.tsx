import { transformUnit } from "@/utils/transformunit";
import { Modal } from "@geist-ui/core";

const CheckModal = ({state,setState, info}:{state:boolean, setState:Function, info:Object}) => {

  return (
    <>
      <Modal visible={state} onClose={() => setState(false)}>
        <Modal.Title>{info.case ? <p className="text-red-500">사기일 확률이 높습니다.</p> : <p className="text-green-400">안전할 확률이 높습니다.</p>}</Modal.Title>
        <Modal.Subtitle>조회결과</Modal.Subtitle>
        <Modal.Content>
          {
            info.case ?
            <div>
              <div>
                {`피해 건수 : ${info.case}건`}
              </div>
              <div>
                {`총 피해액 : ${transformUnit(info.amount)}원`}
              </div>
            </div>
            :
            <div> 현재 보고된 피해가 없습니다. </div>
          }
        </Modal.Content>
      </Modal>
    </>
  );
}

export default CheckModal;