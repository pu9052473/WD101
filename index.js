// const email = document.getElementById("email");
// email.addEventListener("input", () => validate(email));

// // const submit = document.getElementById('submit');
// // submit.addEventListener('click',() => validate(submit));

// // to modify the text come in the validation
// const name = document.getElementById("name");
// name.addEventListener("input", () => validate(name));

// const password = document.getElementById("password");
// password.addEventListener("input", () => validate(password));

// const dob = document.getElementById("dob");
// dob.addEventListener("input", () => validate(dob));

// function validate(element) {
//   if (element.validity.typeMismatch) {
//     element.setCustomValidity("Please fill the right details"); // this text is shown in validation when input is wrong
//     element.reportValidity(); //
//   } else {
//     element.setCustomValidity(""); // when input is right the is show nothing mean("")
//   }
// }

// let userform = document.getElementById("user-form");
// let retrieveEnrtries = () => {
//   let entries = localStorage.getItem("UserEntries");

//   console.log("Raw entries from localStorage:", entries, typeof entries);

//   try {
//     entries = entries ? JSON.parse(entries) : [];
//     console.log("Parsed entries:", entries);

//     if (!Array.isArray(entries)) {
//       entries = [];
//       console.log("Entries is not an array, set to empty array");
//     }
//   } catch (error) {
//     console.error("Error parsing JSON:", error);
//     entries = [];
//   }

//   return entries;
// };

// let Entries = retrieveEnrtries();

// let ShowEntries = () => {
//   let entries = retrieveEnrtries();
//   console.log("Type of Entries:", typeof Entries); //To see What is type of Entry
//   // Show Data In Tabular form

//   const TableENtry = entries
//     .map((entry) => {
//       const nameCell = `<td class="border px-4 py-2 ">${entry.name}</td>`;
//       const emailCell = `<td class="border px-4 py-2">${entry.email}</td>`;
//       const passwordCell = ` <td class="border px-4 py-2">${entry.password}</td>`;
//       const dobCell = `<td class="border px-4 py-2">${entry.dob}</td>`;
//       const acceptedtermscell = `<td class="border px-4 py-2 ">${entry.acceptTermsAndCondition}</td>`;

//       const Row = ` <tr> ${nameCell}  ${emailCell}  ${passwordCell}  ${dobCell}  ${acceptedtermscell} </tr> `;
//       return Row;
//     })
//     .join("\n");

//   const table = `<table class="table-auto w-full"><tr>
// <th class="px-4 py-2">Name</th> 
// <th class="px-4 py-2">Email</th> 
// <th class="px-4 py-2">Password</th> 
// <th class="px-4 py-2">Dob</th>
// <th >Accepted terms?</th>
// </tr>${TableENtry}</table> 
// `;
//   let details = document.getElementById("UserEntries");
//   details.innerHTML = table;
// };

// const saveUserForm = (event) => {
//   // event.preventDefault()
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const dob = document.getElementById("dob").value;

//   //validate Email Address
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (!emailRegex.test(email)) {
//     alert("Please enter a valid email address.");
//     return;
//   }

//   const dobDate = new Date(dob); // Validate date of birth
//   const currentDate = new Date();
//   const minAgeDate = new Date(
//     currentDate.getFullYear() - 55,
//     currentDate.getMonth(),
//     currentDate.getDate()
//   );
//   const maxAgeDate = new Date(
//     currentDate.getFullYear() - 18,
//     currentDate.getMonth(),
//     currentDate.getDate()
//   );

//   if (dobDate < minAgeDate || dobDate > maxAgeDate) {
//     alert("Date of birth must be between 18 and 55 years.");
//     return;
//   }

//   const acceptTermsAndCondition =
//     document.getElementById("acceptTerms").checked;

//   let existingEntries = retrieveEnrtries();
//   const entry = {
//     name,
//     email,
//     password,
//     dob,
//     acceptTermsAndCondition,
//   };
//   // Entries.push(entry);
//   // localStorage.setItem("UserEntries", JSON.stringify(Entries));
//   existingEntries.push(entry);

//   // Store the updated array back in localStorage
//   localStorage.setItem("UserEntries", JSON.stringify(existingEntries));

//   // Show the updated entries
//   ShowEntries();
// };
// //  localStorage.removeItem("UserEntries")                // to remove the entries from the page
// ShowEntries();


let userform = document.getElementById("user-form");
let retrieveEnrtries = () => {
    let entries = localStorage.getItem("UserEntries")
    if (entries) {
        entries = JSON.parse(entries);
    } else {
        entries = [];
    }
    return entries;
}
let Entries = retrieveEnrtries();

let ShowEntries = () => {
    let entries = retrieveEnrtries();
    // Show Data In Tabular form


    const TableENtry = entries.map((entry) => {
        const nameCell = `<td class="border px-4 py-2">${entry.name}</td>`;
        const emailCell = `<td class="border px-4 py-2">${entry.email}</td>`;
        const passwordCell = `<td class="border px-4 py-2">${entry.password}</td>`;
        const dobCell = `<td class="border px-4 py-2"   >${entry.dob}</td>`;

        const acceptedtermscell = `<td class="border px-4 py-2"   >${entry.acceptTermsAndCondition}</td>`;


        const Row = `<tr> ${nameCell} ${emailCell} ${passwordCell} ${dobCell}${acceptedtermscell} </tr>`;
        return Row;
    }).join("\n");

    const table = `<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th> 
    <th class="px-4 py-2">Email</th> 
    <th class="px-4 py-2">Password</th> 
    <th class="px-4 py-2">Dob</th>
    <th >Accepted terms?</th>
    </tr>${TableENtry}</table> 
    `;
    let details = document.getElementById("UserEntries");
    details.innerHTML = table;

}

const saveUserForm = (event) => {
    event.preventDefault()
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;

    //validate Email Address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate date of birth
    const dobDate = new Date(dob);
    const currentDate = new Date();
    const minAgeDate = new Date(currentDate.getFullYear() - 55, currentDate.getMonth(), currentDate.getDate());
    const maxAgeDate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());

    if (dobDate < minAgeDate || dobDate > maxAgeDate) {
        alert("Date of birth must be between 18 and 55 years.");
        return;
    }


    const acceptTermsAndCondition = document.getElementById("accecptterms").checked;


    const entry = {
        name,
        email,
        password,
        dob,
        acceptTermsAndCondition

    };
    Entries.push(entry);

    localStorage.setItem("UserEntries", JSON.stringify(Entries));
    ShowEntries();
}
userform.addEventListener("submit", saveUserForm);

ShowEntries();


