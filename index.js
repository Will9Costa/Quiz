const perguntas = [
    {
      pergunta: "Quem foi o apóstolo conhecido como 'o discípulo amado'?",
      respostas: [
        "Pedro",
        "Tiago",
        "João"
      ],
      correta: 2 // João
    },
    {
      pergunta: "Qual personagem do Novo Testamento era um cobrador de impostos antes de se tornar um dos doze apóstolos de Jesus?",
      respostas: [
        "Mateus",
        "Lucas",
        "André"
      ],
      correta: 0 // Mateus
    },
    {
      pergunta: "Quem foi o discípulo que negou Jesus três vezes antes de o galo cantar?",
      respostas: [
        "Pedro",
        "Judas",
        "João"
      ],
      correta: 0 // Pedro
    },
    {
      pergunta: "Qual personagem foi batizado por João Batista no rio Jordão?",
      respostas: [
        "Jesus",
        "Paulo",
        "Tiago"
      ],
      correta: 0 // Jesus
    },
    {
      pergunta: "Quem foi o discípulo que duvidou da ressurreição de Jesus até que ele aparecesse a ele pessoalmente?",
      respostas: [
        "Tomé",
        "André",
        "Simão"
      ],
      correta: 0 // Tomé
    },
    {
      pergunta: "Quem foi o discípulo que Jesus chamou enquanto ele trabalhava como coletor de peixes?",
      respostas: [
        "Simão Pedro",
        "João",
        "Paulo"
      ],
      correta: 0 // Simão Pedro
    },
    {
      pergunta: "Qual personagem do Novo Testamento foi inicialmente conhecido como Saulo?",
      respostas: [
        "Pedro",
        "João",
        "Paulo"
      ],
      correta: 2 // Paulo
    },
    {
      pergunta: "Quem foi o discípulo que foi escolhido para substituir Judas Iscariotes após sua traição a Jesus?",
      respostas: [
        "Matias",
        "Tiago",
        "Bartolomeu"
      ],
      correta: 0 // Matias
    },
    {
      pergunta: "Quem foi a mulher que ungiu Jesus com perfume caro em Betânia?",
      respostas: [
        "Maria Madalena",
        "Maria, irmã de Lázaro",
        "Maria, mãe de Jesus"
      ],
      correta: 1 // Maria, irmã de Lázaro
    },
    {
      pergunta: "Quem foi o discípulo que escreveu o Livro do Apocalipse?",
      respostas: [
        "João",
        "Paulo",
        "Lucas"
      ],
      correta: 0 // João
    }
  ];

  //buscar um elemento html (querySelector)
  const quiz = document.querySelector('#quiz')

  const template = document.querySelector('template')

//new cria coisas novas, tipo de datos ou objetos específicos (set)
//set é um conjunto, podendo adicionar ou tirar alguma informação
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
 
  //loop ou laço de repetição
  for(const item of perguntas) {
     const quizItem = template.content.cloneNode(true)
     quizItem.querySelector('h3').textContent = item.pergunta

     for(let resposta of item.respostas) {
       const dt = quizItem.querySelector('dl dt').cloneNode(true)
       dt.querySelector('span').textContent = resposta
       dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
       dt.querySelector('input').value = item.respostas.indexOf(resposta)
       dt.querySelector('input').onchange =  (event) => {
         const estaCorreta  = event.target.value == item.correta
        //verificação das corretas
         corretas.delete(item) 
         if(estaCorreta) {
           corretas.add(item)
         }

         mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
         
       }

      quizItem.querySelector('dl').appendChild(dt)
     }

     quizItem.querySelector('dl dt').remove()

     //coloca a pergunta na tela
     quiz.appendChild(quizItem)
  }