const pilandrome = (name) => {
    const reverse = name.split('').reverse().join('');
    return (name === reverse) ? console.log('Matches') : console.log('Doesnt match');
}


pilandrome('nan');