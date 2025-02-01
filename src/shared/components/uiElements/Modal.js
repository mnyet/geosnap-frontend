import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import Backdrop from './Backdrop'

function ModalOverlay(props) {
    const content = (
        <div ref={props.modalRef} className={`modal ${props.className} z-50 fixed top-[10vh] left-[2%] w-[95%] lg:left-[10%] lg:w-[80%] border border-accent-500 rounded-md shadow-md bg-white`} style={props.style}>
            {/* Header of the Modal */}
            <header className={`modal__header w-full flex justify-center text-xl rounded-t-md font-semibold p-5 ${props.headerClass}`}>
                <h2 className='truncate'>{props.header}</h2>
            </header>

            {/* Form of the Modal */}
            <form onSubmit={props.onSubmit ? props.onSubmit : (event) => event.preventDefault()}>
                <div className={`modal__content ${props.contentClass}`}>
                    {/* Contents of the Modal */}
                    {props.children}
                </div>

                {/* Footer of the Modal */}
                <footer className={`modal__footer w-full flex justify-center rounded-b-md py-3 ${props.footerClass}`}>
                    {props.footer}
                </footer>
            </form>
        </div>
    )

    return (
        ReactDOM.createPortal(content, document.getElementById('modal-hook'))
    )
}

function Modal(props) {
    const modalRef = useRef(null);

    return (
        <React.Fragment>
            {props.show && <Backdrop onClick={props.onCancel} />}
            <CSSTransition
                in={props.show}
                mountOnEnter
                unmountOnExit
                timeout={300}
                nodeRef={modalRef}
                classNames="modal"
            >
                <ModalOverlay {...props} modalRef={modalRef} />
            </CSSTransition>
        </React.Fragment>
    )
}

export default Modal