function printTable() {
    var Input1 = document.querySelector("#number1").value;
    var Input2 = document.querySelector("#number2").value;
    var result;
    for (i = 1; i <= Input2; i++) {
        result = document.write(Input1 + 'X' + i + '=' + Input1 * i + '<br>')
    }
}

// var tableNo=+prompt('Enter table no');
// var length=+prompt('Enter the length of table');
// for(var i=1;i<=length;i++){
//    document.write( tableNo+'X'+i+'='+tableNo*i+'<br>')
// }