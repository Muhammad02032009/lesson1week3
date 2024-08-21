// //task1
// function arr(num)
// {
//     let cnt=0
//     for (let i=0;i<=num.length-1;i++)
//     {
//         cnt+=num[i]
//     }
//     return cnt
// }
// console.log(arr([1,2,3,4,4,5,5,6,66]));




// //task2
// function max(num)
// {
//     let n=-Infinity
//     for (let i=0;i<=num.length;i++)
//     {
//         if (num[i]>n){n=num[i]}
//     }
//     return n
// }
// console.log(max([1,2,3,4]));





// //task3
// function juft(num)
// {
//     let cnt=0
//     for (let i=0;i<=num.length;i++)
//     {
//         if (num[i]%2==0){cnt++}
//     }
//     return cnt
// }
// console.log(juft([2,3,4,5,6]));





// //task4
// function tr(num,n1)
// {
//     return num.includes(n1)
// }
// console.log(tr([1,2,3,,4,44,,4,5,5,,5,5],2));




// //task5
// function ar(num)
// {
//     let cnt=0
//     let cnt1=0
//     for (let i=0;i<=num.length-1;i++)
//     {
//         cnt+=num[i]
//         cnt1++

//     }
//     return Math.floor(cnt/cnt1)
// }
// console.log(ar([1,2,3]));


let arr=[1,2,3,4,5]
let cnt=0
arr.forEach (function(element){
      cnt+=element
})
console.log(cnt)


