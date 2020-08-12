(function(window){
	window.htmlentities = {
		/***@param {String} str **/
		encode : function(str) {
			var buf = [];
			for (var i=str.length-1;i>=0;i--) {
				buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
			}
			return buf.join('');
		},
	};
})(window);

let htmlCode = [];
let cssCode = [];
let jsCode = [];

for (i in array) {
    let pre;
    let code = '';
    let count = 0;
    let card = document.createElement('div');
    card.classList.add('card');
    let html = document.createElement('div');
    html.classList.add('code');
    pre = document.createElement('pre');
    pre.classList.add('tag');
    pre.innerHTML = htmlentities.encode('<html>');
    html.appendChild(pre);
    for (j in array[i][0]) {
        pre = document.createElement('pre');
        let string;
        if (array[i][0][j].comment) {
            pre.classList.add('comment');
            string = '<!-- ' + array[i][0][j].comment + ' -->';
        } else string = array[i][0][j].html;
        code += string;
        pre.innerHTML = htmlentities.encode(string);
        html.appendChild(pre);
        count++;
    }
    pre = document.createElement('pre');
    pre.classList.add('tag');
    pre.innerHTML = htmlentities.encode('</html>');
    html.appendChild(pre);
    if (count != 0) card.appendChild(html);
    htmlCode.push(code);
    code = '';
    count = 0;
    let css = document.createElement('div');
    css.classList.add('code');
    pre = document.createElement('pre');
    pre.classList.add('tag');
    pre.innerHTML = htmlentities.encode('<style>');
    css.appendChild(pre);
    for (j in array[i][1]) {
        pre = document.createElement('pre');
        let string;
        if (array[i][1][j].comment) {
            pre.classList.add('comment');
            string = '/* ' + array[i][1][j].comment + '*/';
        } else string = array[i][1][j].css;
        code += string;
        pre.innerHTML = htmlentities.encode(string);
        css.appendChild(pre);
        count++;
    }
    pre = document.createElement('pre');
    pre.classList.add('tag');
    pre.innerHTML = htmlentities.encode('</style>');
    css.appendChild(pre);
    if (count != 0) card.appendChild(css);
    cssCode.push(code);
    code = '';
    count = 0;
    let js = document.createElement('div');
    js.classList.add('code');
    pre = document.createElement('pre');
    pre.classList.add('tag');
    pre.innerHTML = htmlentities.encode('<script>');
    js.appendChild(pre);
    for (j in array[i][2]) {
        pre = document.createElement('pre');
        let string;
        if (array[i][2][j].comment) {
            pre.classList.add('comment');
            string = '// ' + array[i][2][j].comment;
        } else string = array[i][2][j].js;
        code += string;
        pre.innerHTML = htmlentities.encode(string);
        js.appendChild(pre);
        count++;
    }
    pre = document.createElement('pre');
    pre.classList.add('tag');
    pre.innerHTML = htmlentities.encode('</script>');
    js.appendChild(pre);
    if (count != 0) card.appendChild(js);
    jsCode.push(code);
    code = '';
    count = 0;
    let output = document.createElement('div');
    output.classList.add('output');
    for (j in array[i][3]) {
        pre = document.createElement('pre');
        if (array[i][3][j].comment) pre.classList.add('comment');
        pre.innerHTML = htmlentities.encode(array[i][3][j].output);
        output.appendChild(pre);
        count++;
    }
    if (count != 0) card.appendChild(output);
    count = 0;
    document.body.appendChild(card);
    let button;
    if (array[i][4].render) {
        buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        button = document.createElement('div');
        button.classList.add('button');
        button.innerHTML = 'render';
        buttonContainer.appendChild(button);
        card.appendChild(buttonContainer);
        if (card.offsetHeight != 400) button.classList.add('space1');
        else button.classList.add('space2');
    }
}
let buttons = document.querySelectorAll('.button');
for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', () => {buildApp(i)});
}

function buildApp(i) {
    if (document.querySelector('.app-container') != null) document.querySelector('.app-container').remove();
    let appContainer = document.createElement('div');
    appContainer.classList.add('app-container');
    let background = document.createElement('div');
    background.classList.add('background');
    background.addEventListener('click', () => {appContainer.remove(); document.body.removeAttribute('style')});
    appContainer.appendChild(background);
    let iframe = document.createElement('iframe');
    iframe.classList.add('smoke');
    let html = '<body>'+`<style>`+cssCode[i]+`</style>`+htmlCode[i]+`<script>`+jsCode[i]+`</script>`+'</body>';
    iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
    appContainer.appendChild(iframe);
    document.body.style.overflow = 'hidden';
    document.body.appendChild(appContainer);
}