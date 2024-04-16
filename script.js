
function contar() {
    var ini = document.getElementById('txtIni').value
    var fim = document.getElementById('txtFim').value
    var pas = document.getElementById('txtPas').value
    var res = document.getElementById('res')

    if (ini.length == 0 ||fim.length == 0 || pas.length == 0  ) {
        alert('[ERRO] Faltam dados !!!')
    } else {
        res.innerHTML = 'Contando:<br> '
        var i = Number(ini)
        var f = Number(fim)
        var p = Number(pas)

        if(p<= 0){
            alert('Passo inválido!! Considerando Passo 1')
            p =1
        }

        if (i<f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
              
            }
        } else{
            //Contagem decrescente 
            for(let c = i; c>= f; c-=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}