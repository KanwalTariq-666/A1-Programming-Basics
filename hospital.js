//hospital.js

// Part 1: 


let hospital = {
    name: "Toronto General Hospital", 
    patients: [
        {
            ID: "ID#: ABC123", 
            fullName: "Jane Doe",
            dateOfBirth: "01-01-2001", 
            symptoms: ["cough", "flu"]
        },
        {
            ID: "ID#: JKL456", 
            fullName: "John Smith",
            dateOfBirth: "02-02-2002", 
            symptoms: ["migraine", "nausea"]
        },
        {
            ID: "ID#: XYZ789", 
            fullName: "Jonathan Doey", 
            dateOfBirth: "03-03-2003",
            symptoms: ["dizziness", "low blood pressure"]
        },
    ]

};


// Part 2:


function showPatients(hospital) {
    let hospitalName = hospital.name;
    let result = `<h1>${hospitalName}</h1>`;


    console.log(result);


    for (let i = 0; i < hospital.patients.length; i++) {
        let patientName = hospital.patients[i].fullName;
        let result2 = `<h2>${patientName},`;


        let patientBirth = hospital.patients[i].dateOfBirth;
        let result3 = `${patientBirth}</h2>`;
        
        console.log(result2 + result3);


        let theUl = "<ul>";
        console.log(theUl);


        for (let j = 0; j < hospital.patients[i].symptoms.length; j++) {
            let patientSymptom = hospital.patients[i].symptoms[j];
            let result4 = `<li>${patientSymptom}</li>`;
            console.log(result4);
        }


        let ulEnd = "</ul>";
        console.log(ulEnd);

    }
};

// Part 3


function getPatient(patients) {

    if (patients.length === 0) return null;

    let randomID = Math.floor(Math.random() * patients.length);

    return patients[randomID].ID;

}


let randomPatientId = getPatient(hospital.patients);
console.log(randomPatientId);



showPatients(hospital);







