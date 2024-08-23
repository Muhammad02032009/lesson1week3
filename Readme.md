# Lecture 4
$$ About-->Array-Methods $$
### __What is array in java Script ?__
* `Araay` in yak object meboshad ki dar khud yakchand qimmat novobasta az tipash megirad. Haryak qimmat dar massiv in element ba hisob meravad.
_______

__Array methods :__

1. `Pop()`-->Okhiron elementi masivro bar megardonad va onro az masivi asosi udalit mekunad
```javascript
let arr=[1,2,3,4,5]
let res=arr.pop()
console.log(res) // 5
```
2. `Push()`-->Elementhoro ba okhiri masiv yagjoya mekunad
```javascript
let arr=[1,2,3,4,5]
let res=arr.push(6,7)
console.log(res) // 7
console.log(arr) // [ 1,2,3,4,5,6,7]
```
3. `Unshift()`-->Elementhoro ba avvali masiv yagjoya mekunad
```javascript
let arr=[3,4,5]
let res=arr.unshift(1,2)
console.log(res) // 5
console.log(arr) // [ 1,2,3,4,5]
```
4. `Shift()`-->yakum elementi masivro bar megardonad va onro az masivi asosi udalit mekunad
```javascript
let arr=[1,2,3,4,5]
let res=arr.shift()
console.log(res) // 1
```
5. `toString()`-->elementhoro ba string megardonad 
```javascript
let arr=[1,2,3,4,5]
let res=arr.toString()
console.log(res) // "1,2,3,4,5"
```
6. `indexOf()`-->indexi elemnti dodashudaro dar masiv mebarorad
```javascript
let arr=[1,2,3,4,5]
let res=arr.indexOf(3)
console.log(res) // 2
```
7. `includes()`-->elementi dodashudaro dar masiv mesanjad `true` yo `false` budani onro muayyan mekunad 
```javascript
let arr=[1,2,3,4,5]
let res=arr.includes(3)
console.log(res) // true
```
8. `concat()`-->masivhoro yo elementhoi onhoro mechasponad
```javascript
let arr=[1,2,3]
let res=[4,5,6]
console.log(arr.concat(res)) // [1,2,3,4,5,6]
```
9. `slice()`-->du qimatro dar bar megirad va az qimati yakum to qimmati duyum elmenthoro az daruni masiv mebarorad
```javascript
let arr=[1,2,3,4,5]
let res=arr.slice(2,4)
console.log(res) // [3,4]
```
10. `splice()`-->splice odatan 3 parametrro qabul mekunad 1-  indexi elementi doxili masiv 2-shumorai elementhoi udalitshavanda 3-az bajoi on element qimati navi element
```javascript
let arr=["Salom","mardumi","tojik"]
let res=arr.splice(2,1,"js")
console.log(res) // 1
console.log(arr) // ["Salom","mardumi","js"]
```
___

##  JavaScript-->Array's->callback-methods 

1.`forEach()`-->se qimat megirad yakum element duyum indexi on va seyum xudi massiv
```javascript
let arr=[1,2,3,4,5]
let cnt=0
arr.forEach (function(element){
      cnt+=element
})
console.log(cnt)
```
2.`map()`-->map yac masivi navro bar megardonad ki dar on aperatsiyahoi guzaronidashuda mavjudand
```javascript
let arr=[1,2,3]
let map1=arr.map ((el)=>el*2)
console.log(map1) // [2,4,6]
```
3.`find()`-->tanho 1 elementi dodashudar0 az dokhili masiv meyobad 
```javascript
let arr=[1,2,8,9,6,4]
let find1=arr.find ((el)=>el>5)
console.log(find1) // [6]
```
4.`filter()`-->az rui usloviyai dodashuda elementho daruni masivro filtr mekunad
```javascript
let arr=["yak","du","se"]
let filter1=arr.filter ((el)=>el.length>2)
console.log(filter1) // ["yak"]
```
5.`toSorted()`-->elementhoi daruni masivro sortirovka mekunad.
```javascript
let arr=["c","a","b"]
let filter1=arr.tosorted ()
console.log(filter1) // ["a","b","c"]
```



## Mehcanisms
1.`Destructuring`-->elementhoi masivro ba peremena mebakhshid
```javascript
let a,b
[a,b]=[10,20]
```
2.`spread`-->elementhoi daruni masivro kopya mekard
```javascript
function sum(a,b,c)
{
      return a+b+c
}
let numbers=1,2,3
console.log(sum(...numbers))
```
3.`rest`-->argumenthoi beokhirro qabul mekunad
```javascript
function num(a,b,...arr)
arr(c,d,e,f)
```






