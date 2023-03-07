
import React from "react";

interface ModalProps {
    children: React.ReactNode,
    title: string
    close: () => void
}

export function Modal({children, title, close}: ModalProps){
    return (
        <>{/*Такой синтаксис называется Фрагментом.*/}
            <div className="modal-window" onClick={() => close()}/>
            <div className="modal-content">
                <h1 className="" >{title}</h1>
                {children}
            </div>       
        </>
    )
}