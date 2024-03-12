// filter() function is another array method we can use to filter out elements that meet a condition.
const countries=[
    'Tanzania',
    'United State',
    'Kenya',
    'Norway',
    'Netherlands',
    'Uganda',
    'Nigeria'
];

const countriesFilter = countries.filter((countries) => countries.startsWith('N'));

console.log(countriesFilter);
// we can also use square brackets notation on the charAt()

const countryfilter = countries.filter((country)=> country.charAt(0) == 'T');
console.log(countryfilter);

