function customRender(reactElement,mainContainer){
    // const domelement = document.createElement(reactElement.type)
    // domelement.innerHTML = reactElement.children
    // domelement.setAttribute('href', reactElement.props.href)
    // domelement.setAttribute('target', reactElement.props.target)

    // mainContainer.appendChild(domelement)

    // version 2.0 more modular function adding element attribute through loop.
    
    const domelement = document.createElement(reactElement.type)
    domelement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue
        domelement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domelement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target:'_blank'
    },
    children: 'Click me to visit goooooogle'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)