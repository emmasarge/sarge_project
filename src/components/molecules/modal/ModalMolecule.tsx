import React from 'react';

export const ModalMolecule = ({ isOpen, onClose, children }:any) => {
  const modalClassName = isOpen ? 'modal open w-[95%]' : 'modal closed';
  const overlayClassName = isOpen ? 'overlay open' : 'overlay';

  return (
    <div>
      <div className={overlayClassName} onClick={onClose}></div>
      <div className={modalClassName}>
        <div onClick={onClose} className='w-full text-right'>
          &times;
        </div>
        <div className='flex w-full'>
        {children}</div>
      </div>
    </div>
  );
};

