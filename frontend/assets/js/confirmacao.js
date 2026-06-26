function contadorCasamento(){

    const dataCasamento = new Date (2026, 11, 5, 18, 0, 0).getTime();

    const marcadorDias = document.getElementById('dias');
    const marcadorHoras = document.getElementById('horas');
    const marcadorMinutos = document.getElementById('minutos');
    const marcadorSegundos = document.getElementById('segundos');

    function atualizarContador(){

        const agora = new Date().getTime();
        const diferenca = dataCasamento - agora;

        if (diferenca < 0) {
            clearInterval(intervalo);
            marcadorDias.innerText = "00";
            marcadorHoras.innerText = "00";
            marcadorMinutos.innerText = "00";
            marcadorSegundos.innerText = "00";
            return;
        }

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        marcadorDias.innerText = dias < 10 ? '0' + dias : dias;
        marcadorHoras.innerText = horas < 10 ? '0' + horas : horas;
        marcadorMinutos.innerText = minutos < 10 ? '0' + minutos : minutos;
        marcadorSegundos.innerText = segundos < 10 ? '0' + segundos : segundos;

    };

    atualizarContador();
    const intervalo = setInterval(atualizarContador, 100);

};

function menuHamburguer() {
    const btnMenu = document.querySelector('.btn-menu');
    const navItems = document.querySelector('.nav-items');
    const btnClose = document.querySelector('.btn-close');

    btnMenu.addEventListener('click', () => {
        navItems.classList.toggle('active');

    });
    
    btnClose.addEventListener('click', ()=>{
        navItems.classList.remove('active');
    });

}

function submitFormulario(){

    const formulario = document.querySelector('.form-rsvp')
    const campoNome = document.getElementById('nome')
    const campoNumero_Convite = document.getElementById('numero-convite')
    const mensagemServer = document.querySelector('.mensagem-server')


    formulario.addEventListener('submit', async (event) => {
        event.preventDefault()

        const nome = campoNome.value
        const numero_convite = campoNumero_Convite.value
        
        const objJSON = {nome, numero_convite}

        const response = await fetch('/rsvp',{
            method:'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(objJSON)
        })

        const dados = await response.json()

        mensagemServer.textContent = dados.mensagem 
        if (response.ok ) {
            mensagemServer.classList.remove('erro')
            mensagemServer.classList.add('sucesso')
        }else{
            mensagemServer.classList.remove('sucesso')
            mensagemServer.classList.add('erro')
        }
    })
}

menuHamburguer();
contadorCasamento();
submitFormulario();

