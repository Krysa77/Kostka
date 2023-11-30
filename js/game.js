var hody = [];

function suma(cisla) {
    return cisla.reduce((acc, value) => acc + value, 0);
}

function maximum(cisla) {
    return Math.max(...cisla);
}

function minimum(cisla) {
    return Math.min(...cisla);
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}

function updateTable() {
    var lastHod = hody[hody.length - 1];
    document.getElementById('result').innerHTML = '<p>Hod: ' + lastHod + '</p>' +
        '<p>Počet hodů: ' + hody.length + '</p>' +
        '<p>Součet hodů: ' + suma(hody) + '</p>' +
        '<p>Průměr hodů: ' + average(suma(hody), hody.length) + '</p>' +
        '<p>Nejvyšší hod: ' + maximum(hody) + '</p>' +
        '<p>Nejnižší hod: ' + minimum(hody) + '</p>';
}

function hod(pocetKostek) {
    var hodyKostek = [];
    for (var i = 0; i < pocetKostek; i++) {
        var h = Math.ceil(Math.random() * 6);
        hodyKostek.push(h);
    }
    hody = hody.concat(hodyKostek);

    // Aktualizuj obrazovky a tabulku
    for (var i = 0; i < pocetKostek; i++) {
        document.getElementsByClassName('cube')[i].src = 'img/kostka' + hodyKostek[i] + '.png';
    }

    updateTable();
}
