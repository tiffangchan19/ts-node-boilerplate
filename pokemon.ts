/* Assignment Checklist:

[Done] Phases V1, V2, V3
[Done] Other Scenarios
[Incomplete] Advanced Scenario

*/

//==========================================================
// IMPORT LIBRARIES
import { question } from 'readline-sync'
import { isPrime } from "math-lib"

//==========================================================
// INTERFACE
interface Move {
    name: string
    damage: number
    type: string
    cat: string
}

interface Pokemon {
    name: string
    HP: number
    atk: number
    def: number
    moves: Move[]
    type: string
    weakness: [string]
    resistance: [string]
    state: string // Default: Conscious | Influcted: Poison, Sleep, Paralysis
}

//==========================================================
// POKEMON OBJECTS
// :: User's options
const pknA: Pokemon = { // CHARMANDER
    name: 'Charmander',
    HP: 15, // Ori: 39
    atk: 52, 
    def: 43,
    moves: [
        {  
            name: 'Tackle',
            damage: 5, // Ori: 40
            type: 'Normal',
            cat: 'Physical'
        },
        {
            name: 'Ember',
            damage: 8, // Ori: 40
            type: 'Fire',
            cat: 'Physical'
        }
    ],
    type: 'Fire',
    weakness: ['Water'],
    resistance: [''],
    state: 'Conscious'
}

const pknB: Pokemon = { // PIDGEY
    name: 'Pidgey',
    HP: 40, // Ori: 40; V1: 10
    atk: 45,
    def: 40,
    moves: [
        {  
            name: 'Tackle',
            damage: 5, // Ori: 40
            type: 'Normal',
            cat: 'Physical'
        }
    ],
    type: 'Flying',
    weakness: [''],
    resistance: [''],
    state: 'Conscious'
}

const pknC: Pokemon = { // SNORLAX
    name: 'Snorlax',
    HP: 160,
    atk: 110,
    def: 65,
    moves: [
        {  
            name: 'Rain Dance',
            damage: 1,
            type: 'Water',
            cat: 'Status'
        },
        {  
            name: 'Hyper Beam',
            damage: 150, 
            type: 'Normal',
            cat: 'Physical'
        },
        {  
            name: 'Surf',
            damage: 90,
            type: 'Water',
            cat: 'Physical'
        },
        {  
            name: 'Body Slam', // Paralyze
            damage: 85,
            type: 'Normal',
            cat: 'Physical'
        }
    ],
    type: 'Normal',
    weakness: [''],
    resistance: [''],
    state: 'Conscious'
}

const pknD: Pokemon = { // GASTLY
    name: 'Gastly',
    HP: 30,
    atk: 35,
    def: 30,
    moves: [
        {  
            name: 'Hypnosis', // Puts a target to sleep
            damage: 1,
            type: 'Psychic',
            cat: 'Status'
        },
        {  
            name: 'Toxic',
            damage: 1,
            type: 'Poison',
            cat: 'Status'
        },
        {  
            name: 'Dream Eater',
            damage: 100,
            type: 'Psychic',
            cat: 'Status'
        }
    ],
    type: 'Ghost',
    weakness: [''],
    resistance: [''],
    state: 'Conscious'
}

const pknE: Pokemon = { // TANGELA
    name: 'Tangela',
    HP: 65,
    atk: 55,
    def: 115,
    moves: [
        {  
            name: 'Leech Seed',
            damage: 1,
            type: 'Grass',
            cat: 'Status'
        },
        {  
            name: 'Vine Whip',
            damage: 65,
            type: 'Grass',
            cat: 'Physical'
        }
    ],
    type: 'Grass',
    weakness: ['Fire'],
    resistance: ['Water'],
    state: 'Conscious'
}

const pknF: Pokemon = { // METAPOD - HARDEN
    name: 'Metapod',
    HP: 200, // 50
    atk: 20,
    def: 55,
    moves: [
        {  
            name: 'Harden',
            damage: 1,
            type: 'Normal',
            cat: 'Status'
        }
    ],
    type: 'Bug',
    weakness: [''],
    resistance: [''],
    state: 'Conscious'
}

const pknG: Pokemon = { // SQUIRTLE - TAIL WHIP
    name: 'Squirtle',
    HP: 200, // Ori: 50
    atk: 20,
    def: 55,
    moves: [
        {  
            name: 'Tail Whip',
            damage: 1,
            type: 'Normal',
            cat: 'Status'
        }
    ],
    type: 'Water',
    weakness: ['Grass'],
    resistance: ['Fire'],
    state: 'Conscious'
}

const allPokemon = [ // putting all pokemons into 1 array
    pknA,pknB,pknC,pknD,pknE,pknF,pknG
]

// :: Default target
const pknTarget: Pokemon = { // TANGELA
    name: 'Tangela',
    HP: 65,
    atk: 55,
    def: 115,
    moves: [
        {  
            name: 'Vine Whip',
            damage: 65,
            type: 'Grass',
            cat: 'Physical'
        },
        {  
            name: 'Leech Seed',
            damage: 1,
            type: 'Grass',
            cat: 'Status'
        }
    ],
    type: 'Grass',
    weakness: ['Fire'],
    resistance: ['Water'],
    state: 'Conscious'
}

//==========================================================
//                     ATTACK FUNCTIONS
//==========================================================

// Damage by Moves affected by ATK/DEF
// Notes: returns (number: damageByMove), Certain Moves Effects (eg. Tail Whip, Harden) has to be implemented in the MAINS
const moveDamage = (attackerAtk, defenderDef, damage) => { //the moves chosen; eg: pknD.moves[i]
    let damageByMove = (attackerAtk/defenderDef*damage)/20
    return damageByMove
    // modified from https://bulbapedia.bulbagarden.net/wiki/Damage
}
// [CHECK] SNORLAX (atk:110) uses 'Hyper Beam' (damage:150) against TANGELA (def:115) // console.log(moveDamage(pknC.atk,pknE.def,pknC.moves[1].damage))

// STATUS EFFECT
// Notes: returns (string: Effects), logic has to be implemented in the MAINS
const statusEffects = (attacker, attackerMoves, defender) => {
    if (attackerMoves.name === 'Hypnosis') { // SLEEP
        defender.state = 'Sleep'
    } else if (attackerMoves.name === 'Toxic') { // POISON
        defender.state = 'Poison'
    } else if (attackerMoves.name === 'Body Slam') { // PARALYZE
        defender.state = 'Paralyze'
    }  else {
        defender.state = 'Conscious'
    }
    return defender.state
}
// [CHECK] console.log(statusEffects(pknC,pknC.moves[3],pknA))

// TYPE ADVANTAGE Check 
// Notes: last validation >> returns (number:'damage') 
const typeAdvantage = (attacker, attackerMoves, atkTotalDamage, defender) => { // (the Pokemon, the moves chosen; eg: pknD.moves[i])
    // variables: (pknTarget, pknTarget[0], pknA)
    let damage = 0
    // double the attacker's move damage if the defender is weak against the move type
    if (attackerMoves.type === 'Grass' || attackerMoves.type === 'Fire' || attackerMoves.type == 'Water') {
        if (defender.weakness.indexOf(attackerMoves.type)>=0 || defender.weakness.indexOf(attackerMoves.type)===-1) {
            damage = atkTotalDamage*2
            console.log(`It's super effective!`)
        } // halve the attacker's move damage if the defender is resistant against the move type
        else if (defender.resistance.indexOf(attackerMoves.type)>=0 || defender.resistance.indexOf(attackerMoves.type)===-1) {
            damage = atkTotalDamage/2
            console.log(`It's not effective!`)
        } 
    } else {
        damage = atkTotalDamage
        console.log(`It's not very effective!`)
    }
    // The Math.floor() function returns the largest integer less than or equal to a given number.
    return damage
}

// [CHECK] resistance (Grass attacks Water)  console.log(typeAdvantage(pknE, pknE.moves[1],dammage,pknG))

//==========================================================
//                      OTHER FUNCTIONS
//==========================================================

const chooseAMove = (chosenPokemon) => { 
    console.log('=============== Choose a Move ===================')
    for (let m in chosenPokemon.moves) {
        console.log(`${m}: ${chosenPokemon.moves[m].name}`)
    }
    let chooseMove = chosenPokemon.moves.length
    let selectedMove = ''
    let selectedMoveDamage = 0
    while (chooseMove >= chosenPokemon.moves.length) {
        chooseMove = Number(question('Select the move by its index.\n'))
        selectedMove = chosenPokemon.moves[chooseMove].name
        selectedMoveDamage = chosenPokemon.moves[chooseMove].damage
    }
    console.log(`${chosenPokemon.name} uses ${selectedMove}!`)
    return [selectedMove, chooseMove, selectedMoveDamage]
}

const checkPokemonStatus = (pokemon) => {
    if (pokemon.state === 'Poison') {
        // console.log(`${pokemon.name} is POISONED!`)
    } else if (pokemon.state === 'Sleep') {
        // console.log(`${pokemon.name} is SLEEPING.`)
    } else if (pokemon.state === 'Paralyze') {
        // console.log(`${pokemon.name} is PARALYZED`)
    }
    return pokemon.state
}

//==========================================================
//                          MAIN
//==========================================================

// Variables
let isMyTurn = true // From 'Phase - V1', you start first.
let countMyTurns = 0 // track my turns
let countEnemyTurns = 0 // track enemy's turns
let enemyPkn = pknTarget // Enemy's default pokemon: PIDGEY
let defaultPkn = pknA // Our default pokemon: CHARMANDER
let isSleep = false
let isPoison = false
let isParalyze = false
let countEnemyPoison = 0
let countPoison = 0
let enemyStatePoison = false
let enemyStateSleep = false
let enemyStateParalyze = false

// START
console.log('=================================================')
console.log('You are now battling Sabrina!')
console.log('Sabrina: I am Sabrina, try to defeat me.')
console.log(`Sabrina sent out ${enemyPkn.name}.`)
console.log(`Go, ${defaultPkn.name}!`)
console.log('====================  START  ====================')

while (defaultPkn.HP >0 && enemyPkn.HP > 0) {

    if (isMyTurn) {
        let pokemonStatus = checkPokemonStatus(defaultPkn)
        if (!isParalyze) {
            // Offer a change of Pokemon
            if(!isSleep) {
                let changePokemon = ''
                while (changePokemon != 'Y' && changePokemon != 'N') {
                    let askChangePokemon = question('Choose another pokemon? (Y/N)\n')
                    changePokemon = askChangePokemon.toUpperCase()
                }
                if (changePokemon === 'Y') {
                    console.log('============== Choose a Pokemon =================')
                for (let p in allPokemon) {
                    console.log(`${p}: ${allPokemon[p].name}`)
                } 
                let choosePokemon = allPokemon.length
                while (choosePokemon >= allPokemon.length) {
                    choosePokemon = Number(question('Select Pokemon by its index.\n'))
                    // skip a chance to attack
                }
                defaultPkn = allPokemon[choosePokemon]
                console.log(`Go, ${defaultPkn.name}!`)
                // Choose a move
                let selectedMove = chooseAMove(defaultPkn)
                console.log('=================================================')
                let addStatusDamage = 0
                let moveStatusEffect = statusEffects(defaultPkn,defaultPkn.moves[selectedMove[1]],enemyPkn)
        
                if (moveStatusEffect === 'Poison') {
                    enemyPkn.state = 'Poison'
                    addStatusDamage = enemyPkn.HP*0.1
                    enemyStatePoison = true
                    countEnemyPoison = 1  
                } else if (moveStatusEffect === 'Sleep') {
                    enemyStateSleep = true
                    enemyPkn.state = 'Sleep'
                } else if (moveStatusEffect === 'Paralyze') {
                    enemyStateParalyze = true
                    enemyPkn.state = 'Paralyze'
                }

                if (defaultPkn.state === 'Poison' && countPoison < 6) { // inflicted by Poison
                    defaultPkn.HP = defaultPkn.HP*0.9
                    countPoison +=1
                }
    
                // Inflict damage on enemy
                if (moveStatusEffect === 'Conscious' && selectedMove[0] != 'Tail Whip' && selectedMove[0] != 'Harden') {
                    let damageByMove = moveDamage(defaultPkn.atk,enemyPkn.def,selectedMove[2])
                    let totalDamage = Math.floor(typeAdvantage(defaultPkn,defaultPkn.moves[selectedMove[1]], damageByMove, enemyPkn))
                    
                    enemyPkn.HP = enemyPkn.HP - totalDamage
                    console.log(`${defaultPkn.name} hits ${enemyPkn.name} by ${totalDamage}.`)
                    console.log(`${enemyPkn.name}'s HP is now reduced to ${enemyPkn.HP}.`)
                } else {
                    if (selectedMove[0] === 'Tail Whip') {
                        enemyPkn.def = enemyPkn.def*0.9 // reduce enemy's def by 10%
                        console.log(`${enemyPkn.name}'s defense has fell!`)
                    } else if (selectedMove[0] === 'Harden') {
                        defaultPkn.def = defaultPkn.def*1.1 // increase my pokemon's defense by 10%
                        console.log(`${defaultPkn.name}'s defense has rose!`)
                    }
                }

                isMyTurn = !isMyTurn

                } else {
                    // Choose a move
                    defaultPkn = defaultPkn
                    let selectedMove = chooseAMove(defaultPkn)
                    console.log('=================================================')
                    let addStatusDamage = 0
                    let moveStatusEffect = statusEffects(defaultPkn,defaultPkn.moves[selectedMove[1]],enemyPkn)
        
                    if (moveStatusEffect === 'Poison') {
                        enemyPkn.state = 'Poison'
                        addStatusDamage = enemyPkn.HP*0.1
                        enemyStatePoison = true
                        countEnemyPoison = 1  
                    } else if (moveStatusEffect === 'Sleep') {
                        enemyStateSleep = true
                        enemyPkn.state = 'Sleep'
                    } else if (moveStatusEffect === 'Paralyze') {
                        enemyStateParalyze = true
                        enemyPkn.state = 'Paralyze'
                    }

                    if (defaultPkn.state === 'Poison' && countPoison < 6) { // inflicted by Poison
                        defaultPkn.HP = defaultPkn.HP*0.9
                        countPoison +=1
                    }
                    // Inflict damage on enemy
                    let damageByMove = moveDamage(defaultPkn.atk,enemyPkn.def,selectedMove[2])
                    let totalDamage = Math.floor(typeAdvantage(defaultPkn,defaultPkn.moves[selectedMove[1]], damageByMove, enemyPkn)) + addStatusDamage
    
                    enemyPkn.HP = enemyPkn.HP - totalDamage
                    console.log('=================================================')
                    console.log(`${defaultPkn.name} hits ${enemyPkn.name} by ${totalDamage}.`)
                    console.log(`${enemyPkn.name}'s HP is now reduced to ${enemyPkn.HP}.`)
                    isMyTurn = !isMyTurn
                }
            } else {
                console.log('=================================================')
                console.log(`${defaultPkn.name} is SLEEPING and cannot move!`)
                defaultPkn.state = 'Conscious'
                isMyTurn = !isMyTurn
            } 
        } else {
            console.log('=================================================')
            console.log(`${defaultPkn.name} is PARALYZED and cannot move!`)
            defaultPkn.state = 'Conscious'
            isMyTurn = !isMyTurn
        }

        // Checker: defaultPkn.HP = 0

    } else { // infliction done by enemy
        let enemyPokemonStatus = checkPokemonStatus(enemyPkn)
        if (!enemyStateParalyze) {
            if (!enemyStateSleep) {
                let selectedMove = enemyPkn.moves[0] // Enemy always uses the first move.
                console.log('=================================================')
                console.log(`${enemyPkn.name} uses ${selectedMove.name}!`)
                let addStatusDamage = 0
                let moveStatusEffect = statusEffects(enemyPkn,selectedMove,defaultPkn)
        
                if (moveStatusEffect === 'Poison') {
                    defaultPkn.state = 'Poison'
                    addStatusDamage = defaultPkn.HP*0.1
                    isPoison = true
                    countPoison = 1  
                } else if (moveStatusEffect === 'Sleep') {
                    isSleep = true
                    defaultPkn.state = 'Sleep'
                } else if (moveStatusEffect === 'Paralyze') {
                    isParalyze = true
                    defaultPkn.state = 'Paralyze'
                }

                if (enemyPokemonStatus === 'Poison' && countEnemyPoison < 6) { // inflicted by Poison
                    enemyPkn.HP = enemyPkn.HP*0.9
                    countEnemyPoison +=1
                }

                let damageByMove = moveDamage(enemyPkn.atk,defaultPkn.def,selectedMove.damage)
                let totalDamage = Math.floor(typeAdvantage(enemyPkn, selectedMove, selectedMove.damage, defaultPkn)) 
                defaultPkn.HP = defaultPkn.HP - totalDamage
                console.log('=================================================')
                console.log(`${enemyPkn.name} hits ${defaultPkn.name} by ${totalDamage}.`)
                console.log(`${defaultPkn.name}'s HP is now reduced to ${defaultPkn.HP}.`)
                isMyTurn = !isMyTurn
            } else {
                console.log('=================================================')
                console.log(`${enemyPkn.name} is SLEEPING and cannot move!`)
                enemyPkn.state = 'Conscious'
                enemyStateSleep = false
                isMyTurn = !isMyTurn
            }
        } else {
            console.log('=================================================')
            console.log(`${enemyPkn.name} is PARALYZED and cannot move!`)
            enemyPkn.state = 'Conscious'
            enemyStateParalyze = false
            isMyTurn = !isMyTurn
        }
    }
}

if (defaultPkn.HP <= 0) {
    console.log('=================================================')
    console.log(`Your ${defaultPkn.name} fainted!`)
    console.log(`You've LOST. GAME OVER!`)
  } else {
    console.log('=================================================')
    console.log(`Your ${enemyPkn.name} fainted!`)
    console.log(`You've WON. GAME OVER!`)
  }


//========================================================== // ==========================================================