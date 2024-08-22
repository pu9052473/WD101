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

//   if (dobDate > maxAgeDate || dobDate < minAgeDate) {
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




// Set min and max attributes on the date input field based on age range
const setDOBRange = () => {
    const currentDate = new Date();
    
    const minAgeDate = new Date(
      currentDate.getFullYear() - 55,
      currentDate.getMonth(),
      currentDate.getDate()
    );
  
    const maxAgeDate = new Date(
      currentDate.getFullYear() - 18,
      currentDate.getMonth(),
      currentDate.getDate()
    );
  
    // Format the dates to yyyy-mm-dd for the input field
    const formatDateString = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
  
    const dobInput = document.getElementById("dob");
    dobInput.setAttribute("min", formatDateString(minAgeDate));
    dobInput.setAttribute("max", formatDateString(maxAgeDate));
  };
  
  // Call the function to set the date range when the page loads
  document.addEventListener("DOMContentLoaded", setDOBRange);
  
  const email = document.getElementById("email");
  email.addEventListener("input", () => validate(email));
  
  const name = document.getElementById("name");
  name.addEventListener("input", () => validate(name));
  
  const password = document.getElementById("password");
  password.addEventListener("input", () => validate(password));
  
  const dob = document.getElementById("dob");
  dob.addEventListener("input", () => validate(dob));
  
  function validate(element) {
    if (element.id === "email" && element.validity.typeMismatch) {
      element.setCustomValidity("Please enter a valid email address.");
    } else if (element.id === "name" && element.value.trim() === "") {
      element.setCustomValidity("Name cannot be empty.");
    } else if (element.id === "password" && element.value.length < 4) {
      element.setCustomValidity("Password must be at least 4 characters long.");
    } else if (element.id === "dob") {
      const dobDate = new Date(element.value);
      const currentDate = new Date();
  
      const minAgeDate = new Date(
        currentDate.getFullYear() - 55,
        currentDate.getMonth(),
        currentDate.getDate()
      );
  
      const maxAgeDate = new Date(
        currentDate.getFullYear() - 18,
        currentDate.getMonth(),
        currentDate.getDate()
      );
  
      if (dobDate > maxAgeDate || dobDate < minAgeDate) {
        element.setCustomValidity("Date of birth must be between 18 and 55 years.");
      } else {
        element.setCustomValidity("");
      }
    } else {
      element.setCustomValidity("");
    }
  
    element.reportValidity();
  }
  
  let retrieveEnrtries = () => {
    let entries = localStorage.getItem("UserEntries");
  
    try {
      entries = entries ? JSON.parse(entries) : [];
  
      if (!Array.isArray(entries)) {
        entries = [];
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
      entries = [];
    }
  
    return entries;
  };
  
  let Entries = retrieveEnrtries();
  
  let ShowEntries = () => {
    let entries = retrieveEnrtries();
  
    const TableENtry = entries
      .map((entry) => {
        const nameCell = `<td class="border px-4 py-2 ">${entry.name}</td>`;
        const emailCell = `<td class="border px-4 py-2">${entry.email}</td>`;
        const passwordCell = ` <td class="border px-4 py-2">${entry.password}</td>`;
        const dobCell = `<td class="border px-4 py-2">${entry.dob}</td>`;
        const acceptedtermscell = `<td class="border px-4 py-2 ">${entry.acceptTermsAndCondition}</td>`;
  
        const Row = ` <tr> ${nameCell}  ${emailCell}  ${passwordCell}  ${dobCell}  ${acceptedtermscell} </tr> `;
        return Row;
      })
      .join("\n");
  
    const table = `<table class="table-auto w-full"><tr>
  <th class="px-4 py-2">Name</th> 
  <th class="px-4 py-2">Email</th> 
  <th class="px-4 py-2">Password</th> 
  <th class="px-4 py-2">Dob</th>
  <th class="px-4 py-2">Accepted terms?</th>
  </tr>${TableENtry}</table>`;
    
    let details = document.getElementById("UserEntries");
    details.innerHTML = table;
  };
  
  const saveUserForm = (event) => {
    // event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const acceptTermsAndCondition = document.getElementById("acceptTerms").checked;
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    const dobDate = new Date(dob);
    const currentDate = new Date();
  
    const minAgeDate = new Date(
      currentDate.getFullYear() - 55,
      currentDate.getMonth(),
      currentDate.getDate()
    );
  
    const maxAgeDate = new Date(
      currentDate.getFullYear() - 18,
      currentDate.getMonth(),
      currentDate.getDate()
    );
  
    if (dobDate > maxAgeDate || dobDate < minAgeDate) {
      alert("Date of birth must be between 18 and 55 years.");
      return;
    }
  
    let existingEntries = retrieveEnrtries();
    const entry = {
      name,
      email,
      password,
      dob,
      acceptTermsAndCondition,
    };
  
    existingEntries.push(entry);
  
    localStorage.setItem("UserEntries", JSON.stringify(existingEntries));
    ShowEntries();
  };
  
//   localStorage.removeItem("UserEntries")                // to remove the entries from the page

  ShowEntries();
  

