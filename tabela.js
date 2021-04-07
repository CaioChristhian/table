var sukuna = {
    nome: "Sukuna",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0,
    perfil: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2021/02/JUJUTSU-KAISEN-DEDO-DO-SUKUNA-VIRA-DOCE.jpg'
}
  
var gojo = {
    nome: "Gojo",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0,
    perfil: 'https://criticalhits.com.br/wp-content/uploads/2021/03/satoru-gojo.jpg'
}
  
sukuna.pontos = calculaPontos(sukuna)
gojo.pontos = calculaPontos(gojo)
  
function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}
  
var jogadores = [sukuna, gojo]
  
exibirJogadoresNaTela(jogadores)
  
function exibirJogadoresNaTela(jogadores){
    var html = ""
    for(var i = 0; i < jogadores.length; i++){
      html += `<tr><td><img src=${jogadores[i].perfil}"></td>`
      html += "<td>" + jogadores[i].nome + "</td>"
      html += "<td>" + jogadores[i].vitorias + "</td>"
      html += "<td>" + jogadores[i].empates + "</td>"
      html += "<td>" + jogadores[i].derrotas + "</td>"
      html += "<td>" + jogadores[i].pontos + "</td>"
      html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
      html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
      html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
      
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
}

function adicionarPersonagem() {
    var nomePersonagem = document.getElementById("addNome").value
    var imagem = document.getElementById("addImagem").value
    
    if (imagem.endsWith("jpg") || imagem.endsWith("png")) {
        var personagem = {
            nome: nomePersonagem,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            pontos: 0,
            perfil: imagem
        }
        jogadores.push(personagem)
        exibirJogadoresNaTela(jogadores)
        document.getElementById("addNome").value = ""
        document.getElementById("addImagem").value = ""
    } else {
        alert("Veja se a url termina em .jpg ou .png")
        document.getElementById("addNome").value = ""
        document.getElementById("addImagem").value = ""
    }
}

function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}
  
function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadoresNaTela(jogadores)
}
  
function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarJogador(){

}
