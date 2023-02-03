function commonDivisor(a, b){
//while(a!=b){
//    a>b ? a-=b : b-=a;
//}
if(b){
    return commonDivisor(b, a%b);
}
else{
    console.log(a);
}

}

//commonDivisor(15, 5);
commonDivisor(2154, 458);
