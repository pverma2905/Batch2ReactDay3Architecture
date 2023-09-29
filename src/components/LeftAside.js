import React from 'react'

export default function LeftAside(props) {
    return (
        <aside className={`${props.cls} col-2 g_border `} > {props.children}</aside >
    )
}
