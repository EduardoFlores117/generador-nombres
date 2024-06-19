function BienRandom() {
    let Nombres = ['Eduardo', 'Yussif', 'Rogelio', 'Heyder'];
    let Apellidos = ['Flores', 'Graniel', 'Ix'];

    let primer = Math.floor(Math.random() * Nombres.length);
    let segundo = Math.floor(Math.random() * Apellidos.length);

    document.getElementById("ejemplo").innerHTML = "<h1>Nombre: " + Nombres[primer] + " " + Apellidos[segundo] + "</h1>";
}
