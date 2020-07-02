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
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}
//validar se já passou por todas as perguntas 
Quiz.prototype.ehFim = function() {
    return this.questionIndex === this.questions.length;
}
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
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
            guess("btn" + i, choices[i]);
			//guessRight("btn" + i, choices[i]);
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
 
//function guessRight(id, guess) {
 //   var button = document.getElementById(id);
	
//	button.onmousedown = function()
//	{
//		button.bgColor = "#3f9430";
		
//	}
//			button.bgColor = "#3f9430";-->
//};

function mostrarQuantidadePerguntas() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function mostrarResultado() {
    var gameOverHTML = "<h1>Resultado: </h1>";

	if(quiz.score <= 4)  
	{	
		gameOverHTML += "<h2 id='score'> Aprendiz" + "</h2>";
		gameOverHTML += "<h2 id='score'> <img src='assets/images/iniciante.jpg' width='500' height='600'>"+ "</h2>";
		gameOverHTML += "<h2 id='score'> <a href='https://www.facebook.com/sharer/sharer.php?u=https://www.xteam.ml/'><img width='25' height='25' src='assets/images/facebook.jpg' alt=''></a>" + "</h2>";
		gameOverHTML += "<h2 id='score'> Calma Padawan! Você ainda é um jovem aprendiz e tem muito caminho a percorrer. Calma Padawan! Você ainda é um jovem aprendiz e tem muito caminho a percorrer." + "</h2>";
		gameOverHTML += "<h2 id='score'> Separamos as seguintes recomendações pra você não fazer feio na roda de amigos: La Casa de Papel, Lúcifer, Os Vingadores, IT" + "</h2>";			
		gameOverHTML += "<h2 id='score'> <img src='assets/images/iniciante_p.jpg' width='500' height='600'>"+ "</h2>";	
	}
	
	if(quiz.score >= 5 && quiz.score <=8)	
	{	
		gameOverHTML += "<h2 id='score'> Guerreiro" + "</h2>";
		gameOverHTML += "<h2 id='score'> <img src='assets/images/guerreiro.jpg' width='500' height='600'>"+ "</h2>";	
		gameOverHTML += "<h2 id='score'> <a href='https://www.facebook.com/sharer/sharer.php?u=https://www.xteam.ml/'><img width='25' height='25' src='assets/images/facebook.jpg' alt=''></a>" + "</h2>";
		gameOverHTML += "<h2 id='score'> A força habita em você! Dá pra ver que você não é um amador e leva os filmes à sério, mas é preciso muito treinamento pra se tornar um mestre da sétima arte! Então comece agora!" + "</h2>";
		gameOverHTML += "<h2 id='score'> Segura essa listinha que é quase lei pra quem gosta mesmo desse mundo: Você (You), 2001 - Uma Odisséia no Espaço, A Onda, Psicose" + "</h2>";
		gameOverHTML += "<h2 id='score'> <img src='assets/images/guerreiro_p.jpg' width='500' height='600'>"+ "</h2>";
	}
	
	if(quiz.score >= 9 && quiz.score <=10)
	{	
		gameOverHTML += "<h2 id='score'> Mestre" + "</h2>";
		gameOverHTML += "<h2 id='score'> <img src='assets/images/mestre.jpg' width='500' height='600'>"+ "</h2>";
		gameOverHTML += "<h2 id='score'> <a href='https://www.facebook.com/sharer/sharer.php?u=https://www.xteam.ml/'><img width='25' height='25' src='assets/images/facebook.jpg' alt=''></a>" + "</h2>";	
		gameOverHTML += "<h2 id='score'> Yoda! Tudo da sétima arte Você sabe! Que tal assistir um filme da Disney, só pra variar um pouco? Brincadeira! Temos uma lista de sugestão pra você, só não esquece que tem vida além da tela, belê?" + "</h2>";
		gameOverHTML += "<h2 id='score'> Recomendamos:  Cães de Aluguel, West World, 12 Homens e 1 sentença"  + "</h2>";
		gameOverHTML += "<h2 id='score'> <img src='assets/images/mestre_p.jpg' width='500' height='600'>"+ "</h2>";
	}
	
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
//lista das perguntas pre definidas
var questions = [
    new Question("Com grandes poderes vem grandes...", ["Responsabilidades", "Sacrifícios","Problemas", "Trabalhos"], "Responsabilidades"),	
    new Question("Qual dos seguintes NÃO é um personagem do Samuel L Jackson?", ["Nick Fury", "Mace Windu", "Jules Winnfield", "Capitão Holt"], "Capitão Holt"),	
    new Question("O que fazer se seu filho for raptado por mergulhadores?", ["Fazer amizade com uma mulher que sofre de perda de memória recente e cruzar os mares para encontrá-lo", "Usar um carro para voltar no tempo antes dele ser raptado e impedir que aconteça","Pedir ajuda à fada madrinha", "Torcer pra que volte com o Jason Momoa"], "Fazer amizade com uma mulher que sofre de perda de memória recente e cruzar os mares para encontrá-lo"),	
    new Question("'____ NÃO DIVIDE COMIDA!' quem disse isso, ou melhor gritou isso?", ["Homer Simpson", "Joey Tribianni", "Faustão", "Po (Kung Fu Panda)"], "Joey Tribianni"),
	new Question("Quem dirigiu o clássico Laranja Mecânica?", ["Steven Spielberg", "Quentin Tarantino", "Never nem see", "Stanley Kubrick"], "Stanley Kubrick"),	
	new Question("1.21 Gigawatts o que é isso?", ["A voltagem do martelo do Thor", "A velocidade da conexão necessária pra entrar na Matrix", "A força necessária pra voltar no tempo", "O quanto pesava o iceberg que bateu no Titanic"], "A força necessária pra voltar no tempo"),
	new Question("Qual desses artefatos Indiana Jones NÃO perseguiu?", ["Caveira de Cristal", "Pedra Filosofal","Cálice Sagrado", "Arca da Aliança"], "Pedra Filosofal"),
    new Question("Adriaaaaaan! Qual desses foi um oponente do boxeador mais famoso do cinema?", ["Apollo Creed", "Mike Tyson", "Mohamed Ali", "Dederick Tatum"], "Apollo Creed"),
    new Question("Na Escola do Rock, O professor exêntrico interpretado por Jack Black, treinou as crianças pra participar de qual evento?", ["Torneio de Rock Amador","Ozzyfest 2003","Rock In Rio", "Batalha das Bandas"], "Batalha das Bandas"),  
	new Question("Só essa pessoa poderia derrotar o diabo, qual das seguintes duplas lutou contra o próprio demônio e ainda saiu vencedor", ["Sylvester Stallone e Antonio Fagundes", "Arnold Schwarzenegger e Marcos Palmeira", "Jean Claude Van Damme e Cigano Igor", "Bruce Lee e Ney Latorraca"], "Arnold Schwarzenegger e Marcos Palmeira"),
];
 
//cria uma lista do quiz
var quiz = new Quiz(questions);

//mostrar pergunta e calcular o resultado 
calcular();
