var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Domingo"] = 0] = "Domingo";
    DiaSemana[DiaSemana["Segunda"] = 1] = "Segunda";
    DiaSemana[DiaSemana["Terca"] = 2] = "Terca";
    DiaSemana[DiaSemana["Quarta"] = 3] = "Quarta";
    DiaSemana[DiaSemana["Quinta"] = 4] = "Quinta";
    DiaSemana[DiaSemana["Sexta"] = 5] = "Sexta";
    DiaSemana[DiaSemana["Sabado"] = 6] = "Sabado";
})(DiaSemana || (DiaSemana = {}));
;
var dia1 = DiaSemana.Sabado;
var dia2 = DiaSemana.Terca;
if (dia1 > dia2) {
    console.log("Sabado é maior que terça feira");
}
else {
    console.log("Terça feira é maior que sabado");
}
var c1 = "yellow";
