
// let a = [1,2];
// let b = [3,4];
// let char = '*';
// const concatFunc = (array,char,barray) => {
//     array.push(char)
//     array.splice(1,0,char)
//     barray.splice(1,0,char)
//     console.log(array.concat(barray).join(""));
// }   
// concatFunc(a,char,b)

// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// const firstThree = itCompanies.slice(0, 3);
// console.log('First 3 companies:', firstThree);

// const lastThree = itCompanies.slice(-3);
// console.log('Last 3 companies:', lastThree);

// const middleIndex = Math.floor(itCompanies.length / 2);
// let middleCompanies;
// if (itCompanies.length % 2 === 0) {
//   middleCompanies = itCompanies.slice(middleIndex - 1, middleIndex + 1);
// } else {
//   middleCompanies = itCompanies.slice(middleIndex, middleIndex + 1);
// }
// console.log('Middle company(ies):', middleCompanies);

// const sortedCompanies = [...itCompanies].sort();
// console.log('Sorted companies:', sortedCompanies);

// console.log('Companies in uppercase:');
// itCompanies.forEach(company => {
//   console.log(company.toUpperCase());
// });

// const companyToFind = 'Google';
// const foundCompany = itCompanies.includes(companyToFind) ? companyToFind : 'Company not found';
// console.log(companyToFind, foundCompany);

const companiesWithMoreThanOneO = [];
for (let i = 0; i < itCompanies.length; i++) {
  const company = itCompanies[i];
  const lowerCaseCompany = company.toLowerCase();
  let count = 0;
  for (let char of lowerCaseCompany) {
    if (char === 'o') {
      count++;
      if (count > 1) {
        companiesWithMoreThanOneO.push(company);
        break;
      }
    }
  }
}
console.log('Companies with more than one :', companiesWithMoreThanOneO);
