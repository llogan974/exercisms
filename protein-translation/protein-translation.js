
export const translate = (protein) => {

// Create a new Array
const codonVals = [
  ['AUG', 'Methionine'],
  ['UUU', 'Phenylalanine'],
  ['UUC', 'Phenylalanine'],
  ['UUA', 'Leucine'],
  ['UUG', 'Leucine'],
  ['UCU', 'Serine'],
  ['UCC', 'Serine'],
  ['UCA', 'Serine'],
  ['UCG', 'Serine'],
  ['UAU', 'Tyrosine'],
  ['UAC', 'Tyrosine'],
  ['UGU', 'Cysteine'],
  ['UGC', 'Cysteine'],
  ['UGG', 'Tryptophan'],
  ['UAA', 'STOP'],
  ['UAG', 'STOP'],
  ['UGA', 'STOP']

]

// Return empty array if no value passed in
if(!protein){
  return [];
}

// Turn string to an array
let proteinArray = [...protein];


let returnVal = [];

// Split initial letters into groups of 3.


// create a loop for initial letter string
for(let value of proteinArray){
  console.log(value);
  console.log(proteinArray);

  // value = proteinArray.splice(0,2).join('');

var value = proteinArray.map(function() => {
equifax kredit karma 733
transunion (mint) 758
Experian Idhsield 776
776 idshield, 758 on mint
});








  // Loop through codon values of newly created array above to find a match
  for (let [cod, codon] of codonVals){

    // If 'COD' matches, add to the returnVal array.
    if(cod == value){
      returnVal.push(codon);

    }
    // console.log(value);


  }



}
// it is returning with 1 proteing left over, the last three.

return returnVal;





}
