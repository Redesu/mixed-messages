//Random SMT physical skill message generator

const physicalSkills = ["Lunge", "Bestial Bite", "Hellish Slash", "Gram Slice", "Dream Needle", "Toxic Sting", "Critical Slash", "Madness Needle", "Aramasa", "Bouncing Claw", "Scratch Dance", "Berserker God", "Needle Spray", "Fang Breaker", "Pierce Armor", "Blinding Strike", "Heavy Blow", "Heat Wave", "Puncture Punch", "Venom Chaser", "Beatdown", "Blight", "Carnage Fang", "Crusher Onslaught", "Hysterical Slap", "Dream Fist", "Eat Whole", "Axel Claw", "Damascus Claw", "Critical Wave", "Dark Sword", "Acrobat Kick", "Fatal Sword", "Severing Bite", "Purple Smoke", "Steel Needle", "Frenzied Chomp", "Mighty Cleave", "Mortal Jihad", "Deathbound", "Rampage", "Mist Rush", "Wrath Tempest", "Madness Nails", "Nihil Claw", "Power Punch", "Hell Thrust", "Brave Blade", "Akashic Arts", "Mac an Luin", "Pandemonic Crush", "Megaton Press", "Yabusame Shot", "Figment Slash", "Myriad Slashes", "Hades Blast", "Titanomachia", "Hassou Tobi", "Catastrophe", "Karnak", "Gungnir", "Dancing Strike", "Astral Saintstrike", "Headcrush", "Somersault", "Panta Spane", "Andalucia", "Hell Spin", "Terrorblade", "Pestilence", "Javelin Rain", "Gaea Rage", "Deadly Fury"]
const physicalDemons = ["Yoshitsune", "Siegfried", "Futsunushi", "Girimekhala"];
const physicalDamage = Math.floor(Math.random() * 1000);
// Every time a user runs a program, they should get a new, randomized output.

const randomSkill = Math.floor(Math.random() * physicalSkills.length);
const randomDemon = Math.floor(Math.random() * physicalDemons.length);


console.log(physicalDemons[randomDemon] + ' used ' + physicalSkills[randomSkill] + ' and did ' + physicalDamage + ' damage!');