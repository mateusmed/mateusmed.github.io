
function addTextoById(id, text){

    const span = document.createElement('span');
    const divText = document.getElementById(id);

    divText.innerHTML = '';
    span.textContent = '';
    divText.appendChild(span);
    span.style.animation = 'digitar 5s linear infinite';

    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {

            let character = text.charAt(i);

            if(character === '§') {
                span.innerHTML = span.innerHTML + '<br><br>';

            }else if(character === '_'){
                span.innerHTML  = span.innerHTML  + '&nbsp;&nbsp;&nbsp;&nbsp;';
            }else{
                span.innerHTML  = span.innerHTML  + character;
            }

            i++;
        } else {
            clearInterval(timer);
        }
    }, 100);

}

function main() {

    const textLeft = `
_ First and foremost, I would like you to turn on the sound of the gif to fully enjoy the experience of seeing cute kittens flying in space accompanied by an awesome 80s cyberpunk soundtrack. ... ... ... ... Did you turn it on? Excellent! §

_ If you have arrived here, I believe you may be interested in learning a little more about me. My name is Mateus, and I have been a developer for several years. Welcome to my nonsensical page. §

_ I discovered programming during an industrial automation course, where we programmed PLCs; at that time, I was impressed by what programming could achieve. We created all the hardware and then wrote the programming. Since then, my mind exploded, and I understood that every piece of hardware needs software; therefore, a body without a soul is a lifeless body. §

_ Since then, I have been continuously seeking to improve my knowledge and contribute to projects that simplify and facilitate people's lives. §

_ As I come up with more ideas, I will continue to improve this page. Thank you for reading everything. §

_ In the footer, you will find the link to my LinkedIn profile. Feel free to send me a message to exchange ideas; I also welcome suggestions on how to improve this page. §§

_ _ _ Warm regards.`;


    addTextoById('animated-text-left', textLeft);

    // setTimeout(() => {
    //     addTextoById('animated-text-left', textLeft);
    // }, 30000);

    const text = `_ Primeiramente, eu gostaria que você ligasse o som do gif para aproveitar a 
    experiência de ver muringas de gatinhos voando no espaço a um som zica pique anos 80 cyberpunk.
    ... ... ... ... ligou? excetente! §
    
    _ Se você chegou aqui, acredito que tenha interesse em saber um pouco mais sobre mim.
    Me chamo Mateus, sou desenvolvedor já tem alguns anos, seja bem vindo a minha página nonsense. § 
    
    _ Conheci a programação no curso de automação industrial, onde programávamos CLPS; nessa época 
    fiquei impressionado com o que a programação podia fazer. Criavamos todo o hardware
    e depois escrevíamos a programação, desde então minha mente explodiu e  
    entendi que todo hardware precisa de software; portanto, corpo sem alma é um corpo sem vida. §
    
    _ Desde então sigo buscando aprimorar meus conhecimentos e contribuir com projetos que 
    simplifique e facilite a vida das pessoas. §
    
    _ Assim que eu tiver mais ideias vou melhorando essa página, obrigado por ter lido tudo. §
    
    _  No rodapé está o link do meu linkedin, você pode me mandar uma mensagem para trocarmos uma idéia, 
    inclusive aceito sugestões de como melhorar essa página. §§
    
    _ _ _ Um forte abraço.
    `;

    addTextoById('animated-text-right', text);
}

main();
