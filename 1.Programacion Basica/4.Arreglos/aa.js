function a(v){
    let r = []
    let b=0;
    for(let i=0; i<v.length; i++){
        if(v[i] % 2==0){
            r[b] = v[i];
            b++
        }
    }
    return r;
}

function b(v,m){
    let r = []
    let b=0;
    for(let i=0; i<v.length; i++){
        if(v[i] % m==0){
            r[b] = v[i];
            b++
        }
    }
    return r;
}

function c(a, i, j) {
    let r;
    if (a[i] === a[j]) {
        r = 0;
    } else if (a[i] < a[j]) {
        r = -1;
    } else {
        r = 1;
    }
    return r;
} 

function d(v){
    let r=0;
    for(let i=0; i<v.length; i++){
        r = v[i] +r
    }
    return r/v.length;
}

console.log(d([1,2,3,4,5]))