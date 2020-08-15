// replace `${i}` --> \`\${i}\`

const array = [

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [],
        // output
        [],
        //render
        {'render': true}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [{'comment': `custom text highlight color`}],
        //css
        [
            {'css': `body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.class::selection {`},
            {'comment': `
background-color: #xxxxxx;
color: #xxxxxx;
`},
{'css': `}`}
        ],
        //js
        [
            {'comment': `generate x divs with unique classes`},
            {'js': `let x = 100
for (let i=0; i<x; i++) {
    let div = document.createElement('div');
    div.classList.add(\`style\${i}\`);
    div.innerHTML = 'highlight me';
    document.body.appendChild(div);
}`},
{'comment': `generate x unique style tags`},
{'js': `let style = document.createElement('style');
for (let i=0; i<x; i++) {
    let c1 = Math.floor(Math.random() * (255 - 0)) + 0;
    let c2 = Math.floor(Math.random() * (255 - 0)) + 0;
    let c3 = Math.floor(Math.random() * (255 - 0)) + 0;
    style.innerHTML += \`.style\${i}::selection {
        background-color: rgb(\${c1}, \${c2}, \${c3});
    }\`
}
document.body.appendChild(style);`}
        ],
        // output
        [],
        //render
        {'render': true}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [
            {'comment': `Custom scroll bars`}
        ],
        //css
        [
            {'css': `/* width */
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #4b4b4b;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #999;
}

::-webkit-scrollbar-corner {
    background: #4b4b4b;
}`}
        ],
        //js
        [],
        // output
        [],
        //render
        {'render': true}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [
            {'comment': `media query max-width and max-height 
updates css when screen size changes`}
        ],
        //css
        [
            {'css': `@media screen and (max-width: 1200px) {
    .class {
        
    }
}`}
        ],
        //js
        [],
        // output
        [],
        //render
        {'render': true}
    ],

        // card ----------------------------------------------------- >
        [
            //html
            [
                {'comment': `media query keyframes`},
                {'html': `<div></div>`}
            ],
            //css
            [
                {'css': `div {
    width: 100px;
    height: 100px;
    background-color: red;
    animation: example 5s infinite;
}

@keyframes example {
    0%   {background-color: red;}
    25%  {background-color: yellow;}
    50%  {background-color: blue;}
    100% {background-color: green;}
}`}
            ],
            //js
            [],
            // output
            [],
            //render
            {'render': true}
        ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [],
        // output
        [],
        //render
        {'render': true}
    ],

];