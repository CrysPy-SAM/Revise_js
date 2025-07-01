// function x() {
//     var i=1;
//     for(let i=1; i<=5; i++){
//      setTimeout(function () {
//         console.log(i);
//     },i*1000);
//     }
//     console.log("Namste JavaScript");
// }
// x();

function x() {
    var i=1;
    for(var i=1; i<=5; i++){
       function close(i) {
            setTimeout(function () {
        console.log(i);
    },i*1000);
       }
       close(i);
    }
    console.log("Namste JavaScript");
}
x();