
const linguagem = document.querySelector('.linguagem')
console.log(linguagem)

// chamar a div 
const areaDoCodigo = document.querySelector('#parteCode')
console.log(areaDoCodigo) 

const selecionaBotao = document.querySelector('#botao')
console.log(selecionaBotao) 

function aplicaHighlight() {
    const codigo = areaDoCodigo.innerText;
    areaDoCodigo.innerHTML = `<code class="preview-hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código" ></code>`
    areaDoCodigo.querySelector("code").textContent = codigo;
    // codeArea.firstChild.innerText = code.innerText
    hljs.highlightElement(areaDoCodigo.querySelector("code"))
}

selecionaBotao.addEventListener("click", () => aplicaHighlight())




