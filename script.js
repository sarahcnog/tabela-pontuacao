// ----------- Arquivos de entrada

var jogadores = [];
document.getElementById("container-body").style.display = "none";

// ----------- Funções jogador

function adicionarJogador() {
  nomeJogador2 = document.getElementById("nomeJogador");
  nomeJogador = nomeJogador2.value;
  fotoJogador2 = document.getElementById("fotoJogador");
  fotoJogador =
    "<img src='" + fotoJogador2.value + "' alt='blank' class='page-logo'>";
  var add = {
    nome: nomeJogador,
    foto: fotoJogador,
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
  findLargest3();
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
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
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
  }
}

// ----------- Função de zerar os pontos

function zerarPlacar() {
  tamanho = jogadores.length;
  for (var i = 0; i < tamanho; i++) {
    zeraJogador(i);
  }
}

function zeraJogador(i) {
  var jogador = jogadores[i];
  jogador.empates = 0;
  jogador.derrotas = 0;
  jogador.vitorias = 0;
  jogador.pontos = 0;
  exibeJogadoresNaTela(jogadores);
}

// Função novo jogo **

function novoJogo() {
  document.location.reload(true);
}

// Print placar **

function placarBest3() {
  var placar1 = document.getElementById("placar1");
  var placar2 = document.getElementById("placar2");
  var placar3 = document.getElementById("placar3");
  placar1.innerHTML = foto1;
  placar2.innerHTML = foto2;
  placar3.innerHTML = foto3;
}