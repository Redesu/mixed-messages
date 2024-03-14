//Random SMT physical skill message generator

//List of demons skills and advices
const demons = {
    physicalDemons: ["Yoshitsune", "Siegfried", "Futsunushi", "Girimekhala"],
    physicalSkills: ["Lunge", "Bestial Bite", "Hellish Slash", "Gram Slice", "Dream Needle", "Toxic Sting", "Critical Slash", "Madness Needle", "Aramasa", "Bouncing Claw", "Scratch Dance", "Berserker God", "Needle Spray", "Fang Breaker", "Pierce Armor", "Blinding Strike", "Heavy Blow", "Heat Wave", "Puncture Punch", "Venom Chaser", "Beatdown", "Blight", "Carnage Fang", "Crusher Onslaught", "Hysterical Slap", "Dream Fist", "Eat Whole", "Axel Claw", "Damascus Claw", "Critical Wave", "Dark Sword", "Acrobat Kick", "Fatal Sword", "Severing Bite", "Purple Smoke", "Steel Needle", "Frenzied Chomp", "Mighty Cleave", "Mortal Jihad", "Deathbound", "Rampage", "Mist Rush", "Wrath Tempest", "Madness Nails", "Nihil Claw", "Power Punch", "Hell Thrust", "Brave Blade", "Akashic Arts", "Mac an Luin", "Pandemonic Crush", "Megaton Press", "Yabusame Shot", "Figment Slash", "Myriad Slashes", "Hades Blast", "Titanomachia", "Hassou Tobi", "Catastrophe", "Karnak", "Gungnir", "Dancing Strike", "Astral Saintstrike", "Headcrush", "Somersault", "Panta Spane", "Andalucia", "Hell Spin", "Terrorblade", "Pestilence", "Javelin Rain", "Gaea Rage", "Deadly Fury"],
    advice: ['attack', 'guard', 'use an item']
}


//Generates a random number based on the parameter number
const randomNumber = num => {
    return Math.floor(Math.random() * num)
}

//Store the actions
let yourTurn = [];


for (let demon in demons) {
    
    let action = randomNumber(demons[demon].length)

    switch (demon) {
        case 'physicalDemons':
            yourTurn.push(`Your demon is ${demons[demon][action]}`)
            break;
        case 'physicalSkills':
            yourTurn.push(`Your demon used the skill ${demons[demon][action]}`)
            break;
        case 'advice':
            yourTurn.push(`You should ${demons[demon][action]}`)
            break;
        default:
            yourTurn.push(`Need more info`)
    }
}

const formatTurn = turn => {
    const formatted = yourTurn.join('\n')
    console.log(formatted);
}

formatTurn(yourTurn);