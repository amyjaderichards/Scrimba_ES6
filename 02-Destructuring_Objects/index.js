const personalInformation = {
    firstName: 'Amy',
    lastName: 'Richards',
    city: 'Austin',
    state: 'Texas',
    zipCode: 73391
}


// no longer need to write out personalInformation.firstName etc.
const {firstName, lastName} = personalInformation;
console.log(`${firstName} ${lastName}`);

// you can also reassign to a new variable name 
const {firstName: fn, lastName: ln} = personalInformation;
console.log(`${fn} ${ln}`);