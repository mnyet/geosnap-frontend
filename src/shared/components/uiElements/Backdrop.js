import React from 'react'
import { createPortal } from 'react-dom';

export default function Backdrop(props) {
    const backdrop = <div className='fixed z-50 bg-accent-50 opacity-40 h-screen w-screen' onClick={props.onClick}></div>;

    // Injects the drawer content to the custom created div with an id of 'drawer-hook' in index.html

    return createPortal(backdrop, document.getElementById('backdrop-hook'));
}
