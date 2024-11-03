// let a = ['1', '2', 3, 4, 5, 6]
// let b = ['1', '2', 3, 4, 5, 6, 9]
// // let b = ['1','2',3,4,5,'6']
// let bool = true
// const isEqual = (array, array2) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] !== array2[i]) {
//             return false
//         }

//     }
    
//     return true
// }

// isEqual(a, b)


// let arrayA = 'akjwdw wdwiIJWDWOIJ Adwdowiod AHDoiD iwoojDOawoIJWDo'

// function swapCase(str) {
//     let swappedStr = '';

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];

//         if (char === char.toLowerCase()) {
//             swappedStr += char.toUpperCase();
//         } else {
//             swappedStr += char.toLowerCase();
//         }
//     }
//     console.log(swappedStr);
    

//     return swappedStr;
// }
// swapCase(arrayA)

// const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
// function swapCase(str) {
//     let swappedStr = [];

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         swappedStr.push(char.slice(0,3).toUpperCase())
//     }
//     console.log(swappedStr);
//     return swappedStr;
// }

// swapCase(countries)



// function findCharIndexSum(str, char) {
//     let Sum = 0;
//     let a = false;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             Sum += i;
//             a = true;
//         }
//     }

//     return a ? Sum : -1;
// }

// console.log(findCharIndexSum('salam', 'a'));


// let a = [1,2,3,4,5,7,8,9,10,11]

// function medianFinder(array){
//     let median;
//     if(array.length % 2 === 1){
//         for (let i = 0; i < array.length; i++) {
//              median = array[i/2]             
//         }
//     }else{
//         for (let i = 0; i < array.length; i++) {
//              median = (array[Math.floor(i/2)] + array[Math.ceil(i/2)])
//         }
        
//     }
//     return median
// }

// console.log(medianFinder(a));

// let a = 'asd dss dssss dss'

// function wordcount(string){
//     let newArray = []
//     let count = 0
//     newArray = string.split(' ')
//     for (let i = 0; i < newArray.length; i++) {
//         newArray[i] ? count++ : ''
        
        
        
        
//     }
//     console.log(count);
    
// }
// wordcount(a)
