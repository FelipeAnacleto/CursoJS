function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente Novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'criançamenino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'adolescenteh.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'Homema.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'criançamenina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'adolescentem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'giphy.webp')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}