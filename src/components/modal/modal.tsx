import { ModalProps } from './modal.interfaces';
import './modal.scss';

export const Modal = ({ children, handleModal }: ModalProps) => {
    return (
        <div className="modal-overlay" data-testid="modal-overlay" onClick={handleModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className='modal-content__control'>
                    <h2>Filters</h2>
                    <button className="close-button" onClick={handleModal}>×</button>
                </div>
                {children}
            </div>
        </div>
    )
}
