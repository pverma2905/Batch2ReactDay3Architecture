import React from 'react'
import Header from './Header'
import LeftAside from './LeftAside'

import Footer from './Footer'

export default function Layout(props) {
    return (
        <>
            <Header />
            <main>
                <div className="container g_border h-100">
                    <div className="row h-100">
                        <LeftAside cls="g_leftaside">Left Aside</LeftAside>
                        {props.children}

                        <LeftAside cls="g_rightaside">Right Aside</LeftAside>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    )
}
