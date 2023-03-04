import React, {createElement as newEl} from 'react'


export function Header() {

    let menuMas: any[] = [
        newEl('a', {alt: '#', href: 'https://youtube.com', key: 1}, 'About us'),
        newEl('a', {alt: '#', href: 'https://youtube.com', key: 2}, 'For you'),
        newEl('a', {alt: '#', href: 'https://youtube.com', key: 3}, 'about company')
    ]

    return (
        newEl('div', {className: 'header'}, menuMas)
    )
}