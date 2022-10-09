// let materias = {
//     fisica: [90,5, 4, "Fisica"],
//     mate: [78,8, 1, "Matematicas"],
//     logica: [93,2, 0, "Logica"],
//     quimica: [60,7, 3, "Quimica"]
// }
//
// const aprobo = ()=> {
//     for (materia in materias) {
//
//         let asistencias = materias[materia][0];
//         let promedio = materias[materia][1];
//         let trabajos = materias[materia][2];
//
//         console.log(materias[materia][3]);
//
//         if (asistencias >= 90) {
//             console.log("%c Asistencias en orden ", "color:green");
//         } else {
//             console.log("%c Falta de asistencia", "color:red");
//         }
//         if (promedio >= 7) {
//             console.log("%c Promedio en orden ", "color:green");
//         } else {
//             console.log("%c Promedio desaprobado", "color:red");
//         }
//         if (trabajos >= 3) {
//             console.log("%cTrabajos en orden", "color:green");
//         } else {
//             console.log("%c Faltan trabajos", "color:red");
//         }
//     }
// }
//
// aprobo();

let trabajo = "240 minutos";
let estudio = "110 minutos";
let tp = "100 minutos";
let homework = "30 minutos";
let descanso = "10 minutos";

console.log("Tareas");


for (var i = 0; i <14; i++){
    if (i ===   0){
        console.group("Semana 1");
    }
    console.groupCollapsed("Dia " + (i + 1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
    if (i === 7){
            console.groupEnd();
            console.group("Semana 2");
    }
}

console.groupEnd();
console.groupEnd();




