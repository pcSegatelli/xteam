function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
  
//carregar as informações de cada pergunta
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
	this.score = this.score+answer;	
    this.questionIndex++;
}
 
//validar se já passou por todas as perguntas 
Quiz.prototype.ehFim = function() {
    return this.questionIndex === this.questions.length;
}

//-----------------------------------------------------------
function Resposta(indexPergunta, options)
{
	this.indexPergunta = indexPergunta;
	this.options = options;
}

function Resps(respostas) {
    this.respostas = respostas;
} 

Resps.prototype.getValQuest = function(index, indexChoice) {
	return this.respostas[index].options[indexChoice];
}
//----------------------------------------------------------- 
function shareFacebook(){

        var w = 630;
        var h = 360;

        var left = screen.width/2 - 630/2;
        var top = screen.height/2 - 360/2;

        window.open('http://www.facebook.com/sharer.php?u='+'https://www.xteam.ml/','Compartilhar no facebook', 'toolbar=no, location=no, directories=no, status=no, ' + 'menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width='+w+ ', height=' + h + ', top=' + top + ', left=' + left);
 }
//----------------------------------------------------------------------

function calcular() {
    if(quiz.ehFim()) {
        mostrarResultado();
    }
	
	//montar pergunta na tela
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // montar respostas na tela e pegar o id da resposta
        var choices = quiz.getQuestionIndex().choices;

        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("btnCh" + i);
            element.innerHTML = choices[i];
		
			//pegar o valor da resposta
			var valor = resps.getValQuest(quiz.questionIndex, i);

            guess("btn" + i, valor);
        }
 
        mostrarQuantidadePerguntas();
    }
};
 
//quando escolher resposta, calculo valor 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        calcular();
    }
};
 
function mostrarQuantidadePerguntas() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function mostrarResultado() {
    var gameOverHTML = "<h1>Resultado: </h1>";
	
	if(quiz.score <= 95)	
	{	
		gameOverHTML += "<h2 id='score'> Aprendiz" + "</h2>";
		gameOverHTML += "<h2 id='score'><img src='assets/iniciante.jpg'>"+ "</h2>";
		gameOverHTML += "<h2 id='score'> Calma Padawan! Você ainda é um jovem aprendiz e tem muito caminho a percorrer." + "</h2>";
		gameOverHTML += "<h2 id='score'> Separamos as seguintes recomendações pra você não fazer feio na roda de amigos: La Casa de Papel, Lúcifer, Os Vingadores, IT" + "</h2>";			
	}
	
	if(quiz.score >= 100 && quiz.score <=120)	
	{	
		gameOverHTML += "<h2 id='score'> Guerreiro" + "</h2>";
		gameOverHTML += "<h2 id='score'><img src='assets/guerreiro.jpg'>"+ "</h2>";	
		gameOverHTML += "<h2 id='score'> A força habita em você! Dá pra ver que você não é um amador e leva os filmes à sério, mas é preciso muito treinamento pra se tornar um mestre da sétima arte! Então comece agora!" + "</h2>";
		gameOverHTML += "<h2 id='score'> Segura essa listinha que é quase lei pra quem gosta mesmo desse mundo!	Recomendamos:  Você (You), 2001 - Uma Odisséia no Espaço, A Onda, Psicose" + "</h2>";
	}
	
	if(quiz.score >= 125 && quiz.score <=150)	
	{	
		gameOverHTML += "<h2 id='score'> Mestre" + "</h2>";
		gameOverHTML += "<h2 id='score'><img src='assets/mestre.jpg'>"+ "</h2>";
		gameOverHTML += "<h2 id='score'><div class='fb-share-button' data-href='https://www.your-domain.com/your-page.html'  data-layout='button_count'> </div>" + "</h2>";	
		gameOverHTML += "<h2 id='score'> Yoda! Tudo da sétima arte Você sabe! Que tal assistir Bambi, só pra variar um pouco? Brincadeira! Temos uma lista de sugestão pra você, só não esquece que tem vida além da tela, belê?" + "</h2>";
		gameOverHTML += "<h2 id='score'> Recomendamos: Cães de Aluguel, West World, 12 Homens e 1 sentença"  + "</h2>";
	}
	
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 

//lista das perguntas pre definidas
var questions = [
    new Question("Quem disse a frase: Não tenha pena dos mortos, tenha pena dos vivos e acima de tudo daqueles que não tem amor", ["Alvo Dumbledore (Harry Potter)", "Rafiki (O Rei Leão)","Gandalf (O Senhor dos anéis)"], 0),
    new Question("Quantas vezes você foi perguntada(o) Tem alguém assistindo?", ["o que é isso?", "Sempre vejo essa pergunta", "Só com minha série favorita <3"], 0),
    new Question("Luke, eu sou...", ["Seu pai", "o vilão desse filme","Quem é Luke?"], 0),
    new Question("O que o Frodo bolseiro herdou?", ["Uma bolsa dãããã", "Uma montanha", "Um anel"],0),
    new Question("Quem dirigiu o clássico Laranja Mecânica?", ["Steven Spielberg", "Stanley Kubrick", "Never nem see"], 0),
	new Question("X-men, pantera negra e Thor são filmes da...", ["Marvel", "DC", "Globo Filmes"], 0),
	new Question("Com grandes poderes vem grandes...", ["Problemas", "Trabalhos", "Responsabilidades"], 0),
	new Question("O que acontece com Woody quando Andy vai para a faculdade?", ["Casa com a Dona Marocas", "Ele vai junto com o Andy", "Fica guardado na caixa com o Buzz"], 0),
	new Question("Aceita um balde de frango frito?", ["Frito? Tem muito colesterol!", "valeu, mas tô de dieta", "Só se for Los Pollos Hermanos"], 0),
	new Question("O que fazer se seu filho for levado por mergulhadores?", ["Fazer amizade com uma mulher que sofre de perda de memória recente e cruzar os mares para encontrá-lo", "Usar um carro para voltar no tempo antes dele ser raptado e impedir que aconteça", "Pedir ajuda à fada madrinha"], 0)
];

var respostas = [
    new Resposta(1, [15, 5, 10]),
    new Resposta(2, [5, 15, 10]),
    new Resposta(3, [15, 10, 5]),
    new Resposta(4, [5,10,15]),
    new Resposta(5, [10, 15, 5]),
	new Resposta(6, [15, 10, 5]),
	new Resposta(7, [10, 5, 15]),
	new Resposta(8, [5,15,10]),
	new Resposta(9, [5,10,15]),
	new Resposta(10,[15, 10, 5])
];

//cria uma lista do quiz
var quiz = new Quiz(questions);

//criar uma lista de resultado
var resps = new Resps(respostas);
 
//mostrar pergunta e calcular o resultado 
calcular();
