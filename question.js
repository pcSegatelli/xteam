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
	switch (answer) {
	  case 0:
		  this.score = this.score+5;
		break;
	  case 1:
		this.score = this.score+10; 
		break;
	  case 2:
		this.score = this.score+15; 
		break;
    }
 
    this.questionIndex++;
}
 
//validar se já passou por todas as perguntas 
Quiz.prototype.ehFim = function() {
    return this.questionIndex === this.questions.length;
}
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
  
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
            guess("btn" + i, i);
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
		gameOverHTML += "<h2 id='score'> Iniciante!!!" + "</h2>";
		gameOverHTML += "<h2 id='score'> Calma Padawan! Você ainda é um jovem aprendiz e tem muito caminho a percorrer." + "</h2>";
		gameOverHTML += "<h2 id='score'> Recomendar séries/filmes da moda: la casa de papel, lúcifer, os vingadores, IT" + "</h2>";
	}
	
	if(quiz.score >= 100 && quiz.score <=120)	
	{	
		gameOverHTML += "<h2 id='score'> intemediário!!!" + "</h2>";
		gameOverHTML += "<h2 id='score'> A força habita em você! Dá pra ver que você não é um amador e leva os filmes à sério, mas é preciso muito treinamento pra se tornar um Jedi! Então comece agora! Segura essa listinha que é quase lei pra quem gosta mesmo desse mundo!" + "</h2>";
		gameOverHTML += "<h2 id='score'> Recomendar você, 2001 - uma odisséia no espaço, a onda, psicose" + "</h2>";
	}
	
	if(quiz.score >= 125 && quiz.score <=150)	
	{	
		gameOverHTML += "<h2 id='score'> Cinéfilo!!!" + "</h2>";
		gameOverHTML += "<h2 id='score'> Yoda! Tudo da sétima arte Você sabe! Que tal assistir Bambi, só pra variar um pouco? Brincadeira! Temos uma lista de sugestão pra você, só não esquece que tem vida além da tela, belê?" + "</h2>";
		gameOverHTML += "<h2 id='score'> Recomendar Cães de aluguel, west world, 12 homens e 1 sentença"  + "</h2>";
	}

    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 

//lista das perguntas pre definidas
var questions = [
    new Question("Quem disse a frase: Não tenha pena dos mortos, tenha pena dos vivos e acima de tudo daqueles que não tem amor", ["Rafiki (O Rei Leão)", "Gandalf (O Senhor dos anéis)","Alvo Dumbledore (Harry Potter)"], 0),
    new Question("Quantas vezes você foi perguntada(o) Tem alguém assistindo?", ["o que é isso?", "Só com minha série favorita", "Sempre vejo essa pergunta"], 0),
    new Question("Luke, eu sou...", ["Quem é Luke?", "o vilão desse filme","Seu pai"], 0),
    new Question("O que o Frodo bolseiro herdou?", ["Uma bolsa dãããã", "Uma montanha", "Um anel"],0),
    new Question("Quem dirigiu o clássico Laranja Mecânica?", ["Never nem see", "Steven Spielberg", "Stanley Kubrick"], 0),
	new Question("X-men, pantera negra e Thor são filmes da...", ["Globo Filmes", "DC", "Marvel"], 0),
	new Question("Com grandes poderes vem grandes...", ["Trabalhos", "Problemas", "Responsabilidades"], 0),
	new Question("O que acontece com Woody quando Andy vai para a faculdade?", ["Casa com a Dona Marocas", "Fica guardado na caixa com o Buzz", "Ele vai junto com o Andy"], 0),
	new Question("Aceita um balde de frango frito?", ["Frito? Tem muito colesterol!", "valeu, mas tô de dieta", "Só se for Los Pollos Hermanos"], 0),
	new Question("O que fazer se seu filho for levado por mergulhadores?", ["Pedir ajuda à fada madrinha", "Usar um carro para voltar no tempo antes dele ser raptado e impedir que aconteça", "Fazer amizade com uma mulher que sofre de perda de memória recente e cruzar os mares para encontrá-lo"], 0)
];
 
//cria uma lista do quiz
var quiz = new Quiz(questions);
 
//mostrar pergunta e calcular o resultado 
calcular();