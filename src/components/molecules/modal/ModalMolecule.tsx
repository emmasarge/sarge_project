import React from 'react';

export const ModalMolecule = ({ isOpen, onClose, children, width }:any) => {
  const modalClassName = isOpen ? `modal open rounded-[3px]  ${width}` : 'modal closed';
  const overlayClassName = isOpen ? 'overlay open' : 'overlay';

  return (
    <div className={width}>
      <div className={overlayClassName} onClick={onClose}></div>
      <div className={modalClassName}>
        <div className='w-full justify-end flex items-end'>
        <div onClick={onClose} className='w-fit   text-right mr-0 text-[1.3em] cursor-pointer text-dark hover:text-[1.5em] transition-all duration-300 hover:duration-300  '>
          &times;
        </div></div>
        <div className='flex w-full '>
        {children}</div>
      </div>
    </div>
  );
};

