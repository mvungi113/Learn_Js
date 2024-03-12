// for Each() finction is an array method that executes a callback function on each of its elements

const names = ['kindo', 'haji', 'mwaisha', 'anna'];
names.forEach((name)=>console.log(name));
// const nation = ['Tanzania', 'Kenya', 'Uganda', 'Somalia', 'Rwanda', 'Burundi'];
// nation.forEach((nationality) => console.log(nationality));


// to capitalize first letter  of names\\
const titleNames = [];
names.forEach((name)=> {
    const TitleName = name[0].toUpperCase() + name.slice(1);
    titleNames.push(TitleName);
});
console.log(titleNames);

