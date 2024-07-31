const Modal_Frame = ({ children, onClose, onClick }) => {
  return (
    <>
      <div
        className="bg-orange-900 p-2 m-0  text-sm text-white"
        onClick={onClose}
      >
        <h2>
          <p>기관선택</p>
        </h2>
      </div>
      <div className="flex justify-center p-3">
        <button
          className="border bg-slate-200 border-slate-500 w-36 h-20"
          value={1}
          onClick={onClick}
        >
          은행
        </button>
        <button
          className="border bg-slate-200 border-slate-500 w-36 h-20"
          value={2}
          onClick={onClick}
        >
          증권사
        </button>
        <button
          className="border bg-slate-200 border-slate-500 w-36 h-20"
          value={3}
          onClick={onClick}
        >
          국세납부
        </button>
        <button
          className="border bg-slate-200 border-slate-500 w-36 h-20"
          value={4}
          onClick={onClick}
        >
          지방세입납부
        </button>
      </div>
      <div>{children}</div>
    </>
  );
};

export default Modal_Frame;
