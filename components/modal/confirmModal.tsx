import { Modal } from "@geist-ui/core";

const ConfirmModal = ({isVisible, setVisible, isFraud, amount, bankName, account, display}) => {
  const submit = async() => {
    console.log('송금');
    setVisible(false);
  }

  return (
    <>
      <Modal visible={isVisible} onClose={() => {setVisible(false)}}>
        <Modal.Title>
          송금확인
        </Modal.Title>
        <Modal.Subtitle>
          {bankName} {account}로 {display}원
        </Modal.Subtitle>
        <Modal.Content>
          {isFraud ? <div className="text-red-500 bold">사기 피해가 우려됩니다.</div> : ""}
          <div>
          송금하시겠습니까?
          </div>
        </Modal.Content>
        <Modal.Action onClick={() => {setVisible(false)}}>
          취소
        </Modal.Action>
        <Modal.Action onClick={submit}>
          보내기
        </Modal.Action>
      </Modal>
    </>
  );
}

export default ConfirmModal;