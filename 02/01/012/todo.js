#!/usr/bin/env node

'use strict'

/* eslint-disable no-var */

const readline = require('readline-sync')

const items = []

let input= ``

do {
	input = String(readline.question('enter command: ')).trim()

  //DETELE one item
  if (input.indexOf('remove ')===0){
    const space = input.indexOf(' ')
    const item = input.substring(space).trim()
    for (let i=0; i< items.length; i++) {
      if (items[i]===item) {
        console.log(`removing "${item}"`)
        items.splice(i,1)
     }
    }
  }

  //POST
	if (input.indexOf('add ') === 0) {  // ('add ') === 0 <-count from here
		const space = input.indexOf(' ') //const=cdrom// find where's space located
		const item = input.substring(space).trim().toLowerCase()//.trim=remove everything before space and .toLowerCase=change to lower case
    //a.check if the item is existed
   let existed = false
    for (let i=0; i< items.length; i++){
      if (items[i]===item) {
    //b. if ture,ignore the item and return
        existed = true
        console.log(`The item ${item} is existed.`)
      }
    }
    //c. if not =add item
    if (!existed){
		  console.log(`adding "${item}"`) //console.log = print `adding "${item}"`
		  items.push(item) //push=add item to items at the end of the list//ver1.1
    //items.unshift(item)//=add item to items at the begining
    }
	}
  
  //GET
	if (input.indexOf('list') === 0) {
		for (let i=0; i< items.length; i++) {
			console.log(`${i}. ${items[i]}`)
		}
	}
  
  //DETELE all item
  if (input.indexOf('removeall')===0){
    for (let i=0; i< items.length; i++) {
        console.log(`removing all item`)
        items.splice(-1)
     }
    }
} while (input !== 'exit')
//do=run ; while(condition)=stop to run