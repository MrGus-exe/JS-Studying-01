var inicio = (document.querySelector('input#txt1'))
var fim = (document.querySelector('input#txt2'))
var passo = (document.getElementById('txt3'))

lbl.innerHTML = ""
function teste(){
    var ninicio = Number(inicio.value)
    var nfim = Number(fim.value)
    var npasso = Number(passo.value)
    var lbl = document.getElementById('lbl')
    if (npasso >= 0 || npasso == null) {
        alert(' passo inválido ')
        npasso = 1
    }
   if(ninicio < nfim){
   
    for (let i = ninicio; i <= nfim; i += npasso) {
        
        lbl.innerHTML += ` ${i} `
        }
    }

    if (ninicio > nfim) {
        for (let i = ninicio; i >=  nfim; i -= npasso) {
            
            lbl.innerHTML += ` ${i} `

        }
    }

   
}
var button = document.getElementById("btn")
button.addEventListener("click", teste)

