function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours();

msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 4 && hora < 12) {
 img.src = 'noun-morning.png'  
 document.body.style.background = 'rgb(65, 145, 0);'

}else if (hora >= 12 && hora <18) {
    img.src = 'noun-afternoon.png'
    document.body.style.background = 'rgb(145, 111, 0);'

} else {
    img.src = 'noun-night.png'
    document.body.style.background = 'rgb(0, 2, 145)'
}
}