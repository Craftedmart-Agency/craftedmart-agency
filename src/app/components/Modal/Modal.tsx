// modal body
import  { useEffect } from 'react';
import { TiTick } from 'react-icons/ti';
import { RxCross2 } from "react-icons/rx";
// import { ImCross } from "react-icons/im";
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
  onConfirm?: () => void;
  type: 'confirm' | 'success' | 'warning' | string;
  autoCloseTime?: number;
}

const Modal = ({ isOpen, title, message, onClose, onConfirm, type, autoCloseTime }: ModalProps) => {
 
  // Auto close after specified time (for success or warning)
  useEffect(() => {
    if (isOpen && autoCloseTime) {
      const timer = setTimeout(() => {
        onClose();  // Auto-close the modal after the timeout
      }, autoCloseTime);

      return () => clearTimeout(timer);  // Clear timer if the component unmounts or re-renders
    }
  }, [isOpen, autoCloseTime, onClose]);

 

  if (!isOpen) return null;

  return (

    <div className={`modal-overlay`}>
      <div className={`modal-content w-1/2 sm:w-[70%] md:w-1/2 lg:w-1/3  flex-col  ${type==='confirm' ? 'border-b-8 border-b-red-500' : 'border-b-8 border-b-teal-400'}`}>
      <div className="flex flex-col items-center justify-around relative  w-full">
                {
                  type === 'confirm' ? 
                  <RxCross2 className="text-xl w-12 h-12 text-white bg-[#FE4B60] rounded-full warning-animation absolute -inset-y-12 "/>  :
                  <TiTick className="text-2xl w-12 h-12 text-white bg-teal-400 rounded-full succes-animation absolute -inset-y-12 "/>
                }
                <h2 className=" mt-10 mb-3 text-base md:text-2xl  font-semibold capitalize">{title}</h2>
                <p className=" md:text-xl mb-10 capitalize">{message}</p>
                </div>
      <div className="modal-actions">
          {type === 'confirm' && (<>
            <button onClick={onConfirm} className="px-3 py-1 rounded-sm font-semibold text-slate-700 bg-[#fe4b60d2] mr-4 hover:bg-[#fe4b60]">
              Yes
            </button>
          <button onClick={onClose} className=" px-3 py-1 rounded-sm font-semibold border border-red-400 hover:bg-[#fe4b6069]">
            No
          </button></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;

