import { question } from 'readline-sync' // question is the function to get user input


// let HDD = "" // 128GB 256GB 1TB
// let RAM = "" // 8GB 16GB 32GB
// let processor = "" //i5, i7

// // let userOptions = ['Resolution']
// let screenResOptions = ['1920 x 1080', '2560 x 1440','3280 x 1620']
// let HDDOptions = ['128GB','256GB','1TB']
// let RAMOptions = ['8GB', '16GB', '32GB']
// let processorOptions = ['i5','i7']

// // for (let i in screenResOptions) 

// // for (let i=0; i < screenResOptions.length; i++){
// //     console.log(`${i} . ${screenResOptions[i]}`)
// // }

// // let screenOptionIndex = question('Please select a screen option index\n')
// // let screenResolution = screenResOptions[screenOptionIndex]
// // console.log(screenResolution)

// const listOptions = (options) => {
//     for (let i=0; i < options.length; i++){
//         console.log(`${i} . ${options[i]}`)
//     }
//     // let output = options[parseInt(q)]
//     // console.log
//     let optionIndex = question('Please select an option index.\n')
// }

// const q = () => {
//     let optionIndex = question('Please select an option index.\n')
//     console.log(optionIndex)
//     return optionIndex
// }

// listOptions(screenResOptions)
// q
// listOptions(HDDOptions)
// listOptions(RAMOptions)
// listOptions(processorOptions)

// /*
// for (let i in HDDOptions){
//     console.log(HDDOptions[i])  
// }
// for (let i=0; i < RAMOptions.length; i++){
//     console.log(RAMOptions[i])2
// }
// for (let i in processorOptions){
//     console.log(processorOptions[i])  
// }
// */
// const options = (Options) => {
//     for (let i in Options){
//         console.log(Options[i])
//     }
//     // 
// }


// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// TRAINER's CODE ..............

// Laptop Builder
// Allow users to select computer parts to create their laptop
// Display total price with selected parts

//  Step 1 : List down possible parts to select
// let screenResolution = ''
// let HDD = '' // 128 GB, 256 GB, 1TB
// let RAM = '' // 8GB, 16GB, 32 GB
// let processor = '' // i5, i7

let laptop = ['', '', '', '']

let totalPrice = 0
// Step 2 : Display possible options for each part
// const screenResolutionOptions = ['1920 x 1080', '2560 x 1440', '3280 x 1620']
const screenResolutionOptions = {
  '1920 x 1080': 200,
  '2560 x 1440': 400,
  '3280 x 1620': 600,
}

const hddOptions = {
  '128GB': 200,
  '256GB': 400,
  '1TB': 600,
}

const RAMOptions = {
  '8GB': 200,
  '16GB': 500,
  '32GB': 800,
}
const processorOptions = {
  i5: 400,
  i7: 700,
}

const options = [
  screenResolutionOptions,
  hddOptions,
  RAMOptions,
  processorOptions,
]

for (let index in options) {
  // console.log('Part ')
  const partsOptions = options[index]
  for (let i in partsOptions) {
    console.log(`${i} RM ${partsOptions[i]}`)
  }
  let optionIndex = question('Please select a item option index\n')
  const selectedOption = Object.keys(partsOptions)[optionIndex]

  laptop[index] = selectedOption

  totalPrice = totalPrice + options[index][selectedOption]
  console.log()
}

//  Step 3 : List price for each selected part

//  Step 4 : Select Option

//  Step 5 : Display all selected options
console.log('\nYour selected options are:')
// console.log(screenResolution)
// console.log(HDD)
// console.log(RAM)
// console.log(processor)
// totalPrice = screenResolutionOptions[screenResolution]

for (let part of laptop) {
  console.log(part)
}
console.log(`Your total price: ${totalPrice}`)

// TRAINER CODE v2
import { question } from 'readline-sync'

// Laptop Builder
// Allow users to select computer parts to create their laptop
// Display total price with selected parts

//  Step 1 : List down possible parts to select
// let screenResolution = ''
// let HDD = '' // 128 GB, 256 GB, 1TB
// let RAM = '' // 8GB, 16GB, 32 GB
// let processor = '' // i5, i7

let laptop = ['', '', '', '']

let totalPrice = 0

const screenResolutionOptions [
  ["1920 x 1080", 200, 300]
]

price = screenResolutionOptions[0][1]

const screenResolutionOptions = {
  '1920 x 1080': 200,
}

price = screenResolutionOptions['1920 x 1080']

const screenResolutionOptions = [
  {
    label: "1920 x 1080",
    price: 200,
    discount: 300,
  },
  {
    label: "2560 x 1440",
    price: 400
  }
]

price = screenResolutionOptions[0].price

const hddOptions = {
  '128GB': 200,
  '256GB': 400,
  '1TB': 600,
}

const RAMOptions = {
  '8GB': 200,
  '16GB': 500,
  '32GB': 800,
}
const processorOptions = {
  i5: 400,
  i7: 700,
}

const options = [
  screenResolutionOptions,
  hddOptions,
  RAMOptions,
  processorOptions,
]

for (let index in options) {
  // console.log('Part ')
  const partsOptions = options[index]
  for (let i in partsOptions) {
    console.log(`${i} RM ${partsOptions[i]}`)
  }
  let optionIndex = question('Please select a item option index\n')
  const selectedOption = Object.keys(partsOptions)[optionIndex]

  laptop[index] = selectedOption

  totalPrice = totalPrice + options[index][selectedOption]
  console.log()
}

//  Step 3 : List price for each selected part

//  Step 4 : Select Option

//  Step 5 : Display all selected options
console.log('\nYour selected options are:')
// console.log(screenResolution)
// console.log(HDD)
// console.log(RAM)
// console.log(processor)
// totalPrice = screenResolutionOptions[screenResolution]

for (let part of laptop) {
  console.log(part)
}
console.log(`Your total price: ${totalPrice}`)
