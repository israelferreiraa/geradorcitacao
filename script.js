let btn = document.querySelector('.new-quote');
let citacao = document.querySelector('.quote');
let pessoa = document.querySelector('.person');

const citacoes = [{
    quote: `"A melhor maneira de se encontrar é se perder no serviço aos outros."`,
    person: `Mahatma Gandhi`
},{
    quote: `"Se você quer viver uma vida feliz, conecte-a a um objetivo, não a pessoas ou coisas."`,
    person: `Albert Einstein`
},{
    quote: `"No seu melhor, o homem é o mais nobre de todos os animais; separado da lei e da justiça, ele é o pior."`,
    person: `Aristóteles`
},{
    quote: `"Seu tempo é limitado, então não o desperdice vivendo a vida de outra pessoa."`,
    person: `Steve Jobs`
},{
    quote: `"Me diga e eu esqueço. Ensine-me e eu me lembro. Envolva-me e eu aprendo."`,
    person: `Benjamin Franklin`
},{
    quote: `"Se você olhar para o que tem na vida, sempre terá mais. Se você olhar para o que não tem na vida, nunca terá o suficiente."`,
    person: `Oprah Winfrey`
},{
    quote: `"Não importa o quão devagar você vá, contanto que não pare."`,
    person: `Confúcio`
},{
    quote: `"Nossas vidas começam a terminar no dia em que nos tornamos silenciosos sobre as coisas que importam."`,
    person: `Martin Luther King, Jr.`
}];


btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * citacoes.length);
  
    citacao.innerText = citacoes[random].quote
    pessoa.innerText = citacoes[random].person
})