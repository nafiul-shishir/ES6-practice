const ages = [12, 14,16, 13, 11];
const ages2 =[15,16,12,10,8];

const allAges = ages.concat(ages2);
const allAges2 = [...ages, ...ages2];
console.log(allAges2);


const takaPoisa = [650,450,250];
const maximum = Math.max(...takaPoisa);
console.log(maximum);