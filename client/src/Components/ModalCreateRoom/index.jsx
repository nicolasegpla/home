import { createPortal } from "react-dom";



// eslint-disable-next-line react/prop-types
function ModalCreateRoom({ children }) {
    return(

            createPortal(
                <div className="modal-room" style={{display: children ? 'block' : 'none'}}>{children}</div>,
                document.getElementById('modal-room')
            )

    )
}

export { ModalCreateRoom }