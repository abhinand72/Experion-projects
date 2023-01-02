const person = {
    name: 'Jhon Doe',
    age: 20,
    experience: [ 
        {
            company: 'company ABC',
            years: 2
        },
        {
            company: 'company XYZ',
            years:3
        }
        
    ]
};

person.experience.forEach(exp=>console.log(exp.company));

