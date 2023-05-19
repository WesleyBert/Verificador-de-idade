function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById("txtano");
    var res = document.getElementById("res");
    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert("Informações incorretas, verifique as informações e tente novamente! ")
    }else{
        var  fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fAno.value);
        var genero = ''
        var img = document.createElement('img');//criando uma tag img
        img.setAttribute('id','foto') // adicionando id foto a tag img
       
        if(fsex[0].checked){
            genero = ""
            if(idade >= 0 && idade < 10) {
                img.setAttribute ('src', "img/kidM.png")
                genero="Criança"
            }else if(idade < 21){
                img.setAttribute ('src',"img/AdolecenteM.png")
                genero="adolecente"
            }else if(idade < 50 ){
                img.setAttribute ('src', "img/Adulto.png")
                genero = "Adulto"
            }else {
                img.setAttribute ('src', "img/Idoso.png")
                genero="Idoso"
            }
        }else if(fsex[1].checked){
            genero = ""
            if(idade >= 0 && idade < 10){
                img.setAttribute ('src', "img/kidF.png")
                genero = "Criança"
            }else if(idade < 21){
                img.setAttribute ('src', "img/AdolecenteF.png")
                genero = "Adolecente";
            }else if(idade < 50){
                img.setAttribute ('src', "img/Adulta.png")
                genero = "Adulta"
            }else{
                img.setAttribute('src',"img/Idosa.png")
                genero = "Idosa"
            }
        }
        res.style.textAlign='center'
        res.innerHTML = `${genero} com a idade de ${idade} anos`
        res.appendChild(img)
    }
}