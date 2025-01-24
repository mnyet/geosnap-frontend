import React, { useRef } from 'react'
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

export default function SideDrawer(props) {

    const drawerRef = useRef(null);

    // useRef is new in React 18 that is used for referencing HTML nodes to be referenced in react libraries such as this react-transition-group.

    const drawer = <CSSTransition
        in={props.show}
        timeout={200}
        classNames="slide-in-left"
        nodeRef={drawerRef}
        mountOnEnter
        unmountOnExit
    >
        <aside ref={drawerRef} onClick={props.onClick} className='fixed lg:hidden z-50 left-0 top-0 h-screen shadow-xl bg-accent-200 text-white w-3/6'>
            <div className='flex items-center h-full justify-center'>
                {props.children}
            </div>
        </aside>
    </CSSTransition>;

    // Injects the drawer content to the custom created div with an id of 'drawer-hook' in index.html

    return createPortal(drawer, document.getElementById('drawer-hook'));
}
