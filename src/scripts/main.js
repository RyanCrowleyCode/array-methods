const businesses = [
    {
      purchasingAgent: { nameLast: "Kirlin", nameFirst: "Kristy" },
      phoneWork: "089.129.2290 x9400",
      orders: [7826.96, 8323.11, 5756.28, 6308.42, 5622.28],
      companyName: "Care-media",
      companyIndustry: "Education",
      addressZipCode: "56839",
      addressStateCode: "WI",
      addressFullStreet: "8417 Franklin Court Tunnel",
      addressCity: "Mouthcard"
    },
    {
      purchasingAgent: { nameLast: "Steuber", nameFirst: "Kamron" },
      phoneWork: "(833) 222-7579 x5874",
      orders: [6252.5, 9769.02, 9521.17, 7994.05, 7945.93],
      companyName: "Stanholding",
      companyIndustry: "Hospitality",
      addressZipCode: "09705",
      addressStateCode: "NY",
      addressFullStreet: "2889 Fawn Court Garden",
      addressCity: "Fellsmere"
    },
    {
      purchasingAgent: { nameLast: "Gutkowski", nameFirst: "Kaylee" },
      phoneWork: "235.266.6278",
      orders: [7634.43, 9766.72, 9953.45, 6559.8, 5054.9],
      companyName: "Highnix",
      companyIndustry: "Agriculture",
      addressZipCode: "49376",
      addressStateCode: "ME",
      addressFullStreet: "5734 Maple Avenue Throughway",
      addressCity: "Little Genesee"
    },
    {
      purchasingAgent: { nameLast: "Crona", nameFirst: "Lauren" },
      phoneWork: "1-449-987-3083 x23263",
      orders: [7384.52, 9252.72, 7272.65, 5251.84, 9680.08],
      companyName: "Conit",
      companyIndustry: "Defense",
      addressZipCode: "53326",
      addressStateCode: "IL",
      addressFullStreet: "5755 Hillside Drive Crossroad",
      addressCity: "Norval"
    },
    {
      purchasingAgent: { nameLast: "Krajcik", nameFirst: "Elvera" },
      phoneWork: "1-730-411-8580",
      orders: [6069.05, 8535.38, 5782.7, 7838.91, 7578.36],
      companyName: "Dong-tom",
      companyIndustry: "Energy",
      addressZipCode: "67071",
      addressStateCode: "KS",
      addressFullStreet: "4826 Arch Street Lights",
      addressCity: "Newburyport"
    },
    {
      purchasingAgent: { nameLast: "Kling", nameFirst: "Ellie" },
      phoneWork: "(868) 043-0950",
      orders: [6726.2, 8393.21, 8087.13, 6393.13, 8646.35],
      companyName: "Dan-dox",
      companyIndustry: "Manufacturing",
      addressZipCode: "98842",
      addressStateCode: "WV",
      addressFullStreet: "9767 Cedar Court Corner",
      addressCity: "Prince George"
    },
    {
      purchasingAgent: { nameLast: "Robel", nameFirst: "Otilia" },
      phoneWork: "(298) 305-1942 x53653",
      orders: [8676.05, 7430.69, 9379.81, 8074.29, 5998.75],
      companyName: "J-base",
      companyIndustry: "Health care",
      addressZipCode: "72993",
      addressStateCode: "FL",
      addressFullStreet: "9954 Buckingham Drive Mountains",
      addressCity: "Vesper"
    },
    {
      purchasingAgent: { nameLast: "Gusikowski", nameFirst: "Karolann" },
      phoneWork: "(743) 934-8981 x692",
      orders: [8650.08, 8042.69, 5555.72, 7467.86, 8851.43],
      companyName: "Span-fix",
      companyIndustry: "Construction",
      addressZipCode: "59860",
      addressStateCode: "MT",
      addressFullStreet: "4151 Orange Street Extension",
      addressCity: "Little Rock Air Force Base"
    },
    {
      purchasingAgent: { nameLast: "Hartmann", nameFirst: "Zena" },
      phoneWork: "727.635.6610 x6483",
      orders: [9415.89, 8935.45, 7413.91, 6830.96, 9746.57],
      companyName: "Sanaplane",
      companyIndustry: "Information",
      addressZipCode: "85156",
      addressStateCode: "NY",
      addressFullStreet: "4765 Fairview Avenue Locks",
      addressCity: "Dennisville"
    },
    {
      purchasingAgent: { nameLast: "Torphy", nameFirst: "Celia" },
      phoneWork: "(992) 079-1670 x71569",
      orders: [7431.21, 5911.85, 7954.86, 7141.52, 8416.79],
      companyName: "Ran-taxon",
      companyIndustry: "Manufacturing",
      addressZipCode: "96673",
      addressStateCode: "MD",
      addressFullStreet: "7157 Hudson Street Ford",
      addressCity: "Watrous"
    }
]

// TARGETING THE OUTPUT DIV ON INDEX.HTML
const outEl = document.querySelector("#output")

// ADDING H1 TO DOM FOR "ACTIVE BUSINESSESS"


// Printing all businesses to the DOM
const printAllBusinesses = function () {
  outEl.innerHTML = "<h1>Active Businesses</h1>"
  businesses.forEach(business => {
    // calculate total order amount
    const orderTotal = business.orders.reduce((total, currentValue) => total += currentValue, 0)

    const zipcodeKey = "addressZipCode"
    outEl.innerHTML += `
        <h2>
          ${business.companyName}
          ($${orderTotal.toFixed(2)})
        </h2>
        <section>
        ${business.addressFullStreet}
        </section>
        <section>
            ${business.addressCity}, ${business["addressStateCode"]} ${business[zipcodeKey]}
        </section>
        `
    outEl.innerHTML += "<hr/>"
  })
}

// calling the printAllBusniesses function
printAllBusinesses()

// // Array to contain all the New York businesses
// const newYorkBusinesses = businesses.filter(business => {
//     let inNewYork = false
  
//     if (business.addressStateCode === "NY") {
//         inNewYork = true
//     }
  
//     return inNewYork
//   })

  // Printing all NY businesses to the DOM
//   newYorkBusinesses.forEach(business => {
//     const zipcodeKey = "addressZipCode"
//     outEl.innerHTML += `
//         <h2>${business.companyName}</h2>
//         <section>
//         ${business.addressFullStreet}
//         </section>
//         <section>
//             ${business.addressCity}, ${business["addressStateCode"]} ${business[zipcodeKey]}
//         </section>
//         `
//     outEl.innerHTML += "<hr/>"
// });

// Array to contain all of the manufacturing businesses
// const manufacturingBusinesses = businesses.filter(business => {
//     let manufBiz = false
    
//     if (business.companyIndustry == "Manufacturing") {
//         manufBiz = true
//     }

//     return manufBiz
// })

// // Printing all Manufacturing Businesses to the DOM
// outEl.innerHTML = "<h1>Manufacturing Businesses</h1>"
// manufacturingBusinesses.forEach(business => {
//     const zipcodeKey = "addressZipCode"
//     outEl.innerHTML += `
//         <h2>${business.companyName}</h2>
//         <section>
//         ${business.addressFullStreet}
//         </section>
//         <section>
//             ${business.addressCity}, ${business["addressStateCode"]} ${business[zipcodeKey]}
//         </section>
//         `
//     outEl.innerHTML += "<hr/>"
// });


// PURCHASING AGENTS / MAP FUNCTION
// outEl.innerHTML += "<h1>Purchasing Agents</h1>";

// /*
//     Using map(), you extract the purchasing agent object
//     from each business and store it in a new array
// */
// const agents = businesses.map(business => {
//   return {
//     fullName: `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
//     company: business.companyName,
//     phoneNumber: business.phoneWork
//   }
// })

// console.table(agents)

// agents.forEach(agent => {
//   outEl.innerHTML += `
//   <h2>${agent.fullName}</h2>
//   <h3>${agent.company}</h3>
//   <h4>${agent.phoneNumber}</h4>`;
//   outEl.innerHTML += "<hr/>";
// });

// SEARCHING FOR COMPANY NAMES"
// const companySearchButton = document.querySelector("#companySearch")

// companySearchButton.addEventListener("keypress", keyPressEvent => {
//   if (keyPressEvent.charCode === 13) {
//     const foundBusiness = businesses.find(business => business.companyName.toLowerCase().includes(keyPressEvent.target.value.toLowerCase()))

//     if (foundBusiness) {
//       outEl.innerHTML = `
//       <h2>${foundBusiness.companyName}</h2>
//       <section>${foundBusiness.addressFullStreet}</section>
//       <section>${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}</section>
//       `
//     }
//   }
// })

// // SEARCHING FOR PURCHASING AGENT FIRST NAME
// const searchBox = document.querySelector("#companySearch")

// searchBox.addEventListener("keypress", keyPressEvent => {
//   if (keyPressEvent.charCode === 13) {
//     const foundAgent = businesses.find(business => business.purchasingAgent.nameFirst.toLowerCase().includes(keyPressEvent.target.value.toLowerCase()))

//     if (foundAgent) {
//       outEl.innerHTML = `
//       <h2>${foundAgent.purchasingAgent.nameFirst} ${foundAgent.purchasingAgent.nameLast}</h2>
//       <section>${foundAgent.addressFullStreet}</section>
//       <section>${foundAgent.addressCity}, ${foundAgent.addressStateCode} ${foundAgent.addressZipCode}</section>
//       <section>${foundAgent.phoneWork}</section>
//       `
//     }
//   }
// })

// // SEARCHING FOR PURCHASING AGENT FIRST NAME or LAST NAME
// const searchBox = document.querySelector("#companySearch")

// searchBox.addEventListener("keypress", keyPressEvent => {
//   if (keyPressEvent.charCode === 13) {
//     const foundAgent = businesses.find(business => business.purchasingAgent.nameFirst.toLowerCase().includes(keyPressEvent.target.value.toLowerCase()) || business.purchasingAgent.nameLast.toLowerCase().includes(keyPressEvent.target.value.toLowerCase()))

//     if (foundAgent) {
//       outEl.innerHTML = `
//       <h2>${foundAgent.purchasingAgent.nameFirst} ${foundAgent.purchasingAgent.nameLast}</h2>
//       <section>${foundAgent.addressFullStreet}</section>
//       <section>${foundAgent.addressCity}, ${foundAgent.addressStateCode} ${foundAgent.addressZipCode}</section>
//       <section>${foundAgent.phoneWork}</section>
//       `
//     }
//   }
// })

// // SEARCHING FOR COMPANY NAME or (PURCHASING AGENT FIRST NAME or LAST NAME)
const searchBox = document.querySelector("#companySearch")

searchBox.addEventListener("keypress", keyPressEvent => {
  if (keyPressEvent.charCode === 13) {
    const foundAgent = businesses.find(business => business.purchasingAgent.nameFirst.toLowerCase().includes(keyPressEvent.target.value.toLowerCase()) || business.purchasingAgent.nameLast.toLowerCase().includes(keyPressEvent.target.value.toLowerCase()))

    const foundBusiness = businesses.find(business => business.companyName.toLowerCase().includes(keyPressEvent.target.value.toLowerCase()))

    outEl.innerHTML ="<h1>Search Results</h1>"
    // search for agent by name
    if (foundAgent) {
      outEl.innerHTML += `
      <h2>${foundAgent.purchasingAgent.nameFirst} ${foundAgent.purchasingAgent.nameLast}</h2>
      <section>${foundAgent.addressFullStreet}</section>
      <section>${foundAgent.addressCity}, ${foundAgent.addressStateCode} ${foundAgent.addressZipCode}</section>
      <section>${foundAgent.phoneWork}</section>
      <button id="startOver">Start Over</button>
      `
    } else if (foundBusiness) { // searching for business name instead
      outEl.innerHTML += `
      <h2>${foundBusiness.companyName}</h2>
      <section>${foundBusiness.addressFullStreet}</section>
      <section>${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}</section>
      <button id="startOver">Start Over</button>
      `
    } else {
      outEl.innerHTML += `
      <h3>No results found</h3>
      <button id="startOver">Start Over</button>
      `
    }
    const startOverButton = document.querySelector("#startOver")

    startOverButton.addEventListener("click", function () {
      searchBox.value = ""
      printAllBusinesses()
    })

  }
  })
