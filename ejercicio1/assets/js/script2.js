    const boton = document.querySelectorAll('button'); //información de los botones ('all' ya que solo hay botones)
    const caja = document.getElementById('caja'); //rescate de info. caja

    function cambioColor(event) { //función para cambiar el color de la caja
        const color = event.target.style.backgroundColor;
        caja.style.backgroundColor = color;
    };

    boton.forEach(boton => { //evento 'click' para cambiar el color del fondo
        boton.addEventListener('click', cambioColor);
    });

    