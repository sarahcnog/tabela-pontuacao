// ----------- Arquivos de entrada

var jogadores = [];
document.getElementById("container-body").style.display = "none";
document.getElementById("placar1").style.display = "none";
document.getElementById("placar2").style.display = "none";
document.getElementById("placar3").style.display = "none";

// ----------- Funções jogador

function adicionarJogador() {
  nomeJogador2 = document.getElementById("nomeJogador");
  nomeJogador = nomeJogador2.value;
  fotoJogador2 = document.getElementById("fotoJogador");
  fotoJogador =
    "<img src='" + fotoJogador2.value + "' alt='blank' class='foto-jogador'>";
  linkJogador2 = document.getElementById("linkJogador");
  linkJogador =
    "<a href='" +
    linkJogador2.value +
    "' target='blank' class='link-jogador'>@</a>";
  var add = {
    nome: nomeJogador,
    foto: fotoJogador,
    link: linkJogador,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  document.getElementById("container-body").style.display = "";
  document.getElementById("table").hidden = false;
  jogadores.push(add);
  exibeJogadoresNaTela(jogadores);
}

function removerJogador(i) {
  jogadores.splice(i, 1);
  exibeJogadoresNaTela(jogadores);
}

// ----------- Funções dos pesos

function pesos() {
  pesoVitoria2 = document.getElementById("pesoVitoriaId");
  pesoVitoria = pesoVitoria2.value;
  pesoEmpate2 = document.getElementById("pesoEmpateId");
  pesoEmpate = pesoEmpate2.value;
  pesoDerrota2 = document.getElementById("pesoDerrotaId");
  pesoDerrota = pesoDerrota2.value;
  document.getElementById("pesos").disabled = true;
  document.getElementById("addJogador").disabled = false;
}

// ----------- Função de cálculo dos pontos dos jogadores

function calculaPontos(jogador) {
  var pontos =
    jogador.vitorias * pesoVitoria +
    jogador.empates * pesoEmpate +
    jogador.derrotas * pesoDerrota;
  return pontos;
}

// ----------- Exibir informações na tela

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr>      <td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td class='coluna-pontos'>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td>Vitórias <button onClick='adicionarVitoria(" +
      i +
      ")' id='adicionar'>+</button><button onClick='removerVitoria(" +
      i +
      ")' id='remover'>-</button></td>";
    elemento +=
      "<td>Empates <button onClick='adicionarEmpate(" +
      i +
      ")' id='adicionar'>+</button><button onClick='removerEmpate(" +
      i +
      ")' id='remover'>-</button></td>";
    elemento +=
      "<td>Derrotas <button onClick='adicionarDerrota(" +
      i +
      ")' id='adicionar'>+</button><button onClick='removerDerrota(" +
      i +
      ")' id='remover'>-</button></td>";
    elemento +=
      "<td><button onClick='zeraJogador(" +
      i +
      ")' id='zerarJogador'>Zerar</button></td>";
    elemento +=
      "<td><button onClick='removerJogador(" +
      i +
      ")' id='removerJogador'>X</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

// ----------- Adicionando vitórias, empates e derrotas

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
  findLargest3();
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
  findLargest3();
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
  findLargest3();
}

// ----------- Removendo vitórias, empates e derrotas

function removerVitoria(i) {
  var jogador = jogadores[i];
  if (jogador.vitorias == 0) {
    jogador.vitorias == 0;
  } else {
    jogador.vitorias--;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
    findLargest3();
  }
}

function removerDerrota(i) {
  var jogador = jogadores[i];
  if (jogador.derrotas == 0) {
    jogador.derrotas == 0;
  } else {
    jogador.derrotas--;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
    findLargest3();
  }
}

function removerEmpate(i) {
  var jogador = jogadores[i];
  if (jogador.empates == 0) {
    jogador.empates = 0;
  } else {
    jogador.empates--;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
    findLargest3();
  }
}

// ----------- Função de zerar os pontos

function zerarPlacar() {
  tamanho = jogadores.length;
  for (var i = 0; i < tamanho; i++) {
    zeraJogador(i);
  }
  document.getElementById("placar1").style.display = "none";
  document.getElementById("placar2").style.display = "none";
  document.getElementById("placar3").style.display = "none";
}

function zeraJogador(i) {
  var jogador = jogadores[i];
  jogador.empates = 0;
  jogador.derrotas = 0;
  jogador.vitorias = 0;
  jogador.pontos = 0;
  exibeJogadoresNaTela(jogadores);
  findLargest3();
}

// ----------- Função novo jogo

function novoJogo() {
  document.location.reload(true);
}

// ----------- Print placar

function findLargest3() {
  var novaOrdem = jogadores.slice();
  const ordena = novaOrdem.sort((a, b) => {
    return b.pontos - a.pontos;
  });

  place1 = novaOrdem[0];
  place2 = novaOrdem[1];
  place3 = novaOrdem[2];

  var placar1 = document.getElementById("placar1");
  var placar1nome = "🥇 " + place1.nome;
  var placar1foto = place1.foto;
  var placar1link = place1.link;
  placar1.innerHTML = placar1foto + "<br>" + placar1nome + "<br>" + placar1link;
  var placar2 = document.getElementById("placar2");
  var placar2nome = "🥈 " + place2.nome;
  var placar2foto = place2.foto;
  var placar2link = place2.link;
  placar2.innerHTML = placar2foto + "<br>" + placar2nome + "<br>" + placar2link;
  var placar3 = document.getElementById("placar3");
  var placar3nome = "🥉 " + place3.nome;
  var placar3foto = place3.foto;
  var placar3link = place3.link;
  placar3.innerHTML = placar3foto + "<br>" + placar3nome + "<br>" + placar3link;
  document.getElementById("placar1").style.display = "";
  document.getElementById("placar2").style.display = "";
  document.getElementById("placar3").style.display = "";
}