let marks=90;
let Grade;
switch(true){
    case marks>=90:
        Grade="A";
        break;
    case marks>80:
        Grade="B";
        break;
    case marks>70:
        Grade="c";
        break;
    case marks>60:
        Grade="d";
        break;
    case marks>50:
        Grade="e";
        break;
    case marks>40:
        Grade="f";
        break;
    default:
        Grade="fail"
}
console.log(Grade)