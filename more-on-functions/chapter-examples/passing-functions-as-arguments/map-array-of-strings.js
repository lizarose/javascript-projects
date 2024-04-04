let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()
let getFirstInitial = (name) => name[0];
let firstInitials = names.map(getFirstInitial);

console.log(firstInitials);
