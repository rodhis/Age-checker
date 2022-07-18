function verificar() {
    let d = new Date()
    let ano = d.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados inseridos e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade <= 10) {
                //Bebê e Criança
                img.setAttribute('src', 'bebe-homem.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-homem.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'adulto-homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-homem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade <= 10) {
                //Bebê e Criança
                img.setAttribute('src', 'bebe-mulher.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-mulher.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'adulto-mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-mulher.png')
           
        }
    }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um${(genero=='mulher')?"a":""} ${genero} com ${idade} anos.`
        res.appendChild(img)
    
    }
}
