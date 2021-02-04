const pokemons = [
    {
        "id": 1,
        "name": "Bulbasaur",
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 49,
            "defense": 49,
            "sp.attack": 65,
            "sp.defense": 65
        }
    },
    {
        "id": 2,
        "name": "Ivysaur",
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 62,
            "defense": 63,
            "sp.attack": 80,
            "sp.defense": 80
        }
    },
    {
        "id": 3,
        "name": "Venusaur",
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 82,
            "defense": 83,
            "sp.attack": 100,
            "sp.defense": 100
        }
    },
    {
        "id": 4,
        "name": "Charmander",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 39,
            "speed": 60,
            "attack": 52,
            "defense": 43,
            "sp.attack": 60,
            "sp.defense": 50
        }
    },
    {
        "id": 5,
        "name": "Charmeleon",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 58,
            "speed": 60,
            "attack": 64,
            "defense": 58,
            "sp.attack": 80,
            "sp.defense": 65
        }
    },
    {
        "id": 6,
        "name": "Charizard",
        "type": [
            "Fire",
            "Flying"
        ],
        "base": {
            "hp": 78,
            "speed": 60,
            "attack": 84,
            "defense": 78,
            "sp.attack": 109,
            "sp.defense": 85
        }
    },
    {
        "id": 7,
        "name": "Squirtle",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 44,
            "speed": 60,
            "attack": 48,
            "defense": 65,
            "sp.attack": 50,
            "sp.defense": 64
        }
    },
    {
        "id": 8,
        "name": "Wartortle",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 59,
            "speed": 60,
            "attack": 63,
            "defense": 80,
            "sp.attack": 65,
            "sp.defense": 80
        }
    },
    {
        "id": 9,
        "name": "Blastoise",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 79,
            "speed": 60,
            "attack": 83,
            "defense": 100,
            "sp.attack": 85,
            "sp.defense": 105
        }
    },
    {
        "id": 10,
        "name": "Caterpie",
        "type": [
            "Bug"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 30,
            "defense": 35,
            "sp.attack": 20,
            "sp.defense": 20
        }
    },
    {
        "id": 11,
        "name": "Metapod",
        "type": [
            "Bug"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 20,
            "defense": 55,
            "sp.attack": 25,
            "sp.defense": 25
        }
    },
    {
        "id": 12,
        "name": "Butterfree",
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 45,
            "defense": 50,
            "sp.attack": 90,
            "sp.defense": 80
        }
    },
    {
        "id": 13,
        "name": "Weedle",
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 35,
            "defense": 30,
            "sp.attack": 20,
            "sp.defense": 20
        }
    },
    {
        "id": 14,
        "name": "Kakuna",
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 25,
            "defense": 50,
            "sp.attack": 25,
            "sp.defense": 25
        }
    },
    {
        "id": 15,
        "name": "Beedrill",
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 90,
            "defense": 40,
            "sp.attack": 45,
            "sp.defense": 80
        }
    },
    {
        "id": 16,
        "name": "Pidgey",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 45,
            "defense": 40,
            "sp.attack": 35,
            "sp.defense": 35
        }
    },
    {
        "id": 17,
        "name": "Pidgeotto",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 63,
            "speed": 60,
            "attack": 60,
            "defense": 55,
            "sp.attack": 50,
            "sp.defense": 50
        }
    },
    {
        "id": 18,
        "name": "Pidgeot",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 83,
            "speed": 60,
            "attack": 80,
            "defense": 75,
            "sp.attack": 70,
            "sp.defense": 70
        }
    },
    {
        "id": 19,
        "name": "Rattata",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 30,
            "speed": 60,
            "attack": 56,
            "defense": 35,
            "sp.attack": 25,
            "sp.defense": 35
        }
    },
    {
        "id": 20,
        "name": "Raticate",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 81,
            "defense": 60,
            "sp.attack": 50,
            "sp.defense": 70
        }
    },
    {
        "id": 21,
        "name": "Spearow",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 60,
            "defense": 30,
            "sp.attack": 31,
            "sp.defense": 31
        }
    },
    {
        "id": 22,
        "name": "Fearow",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 90,
            "defense": 65,
            "sp.attack": 61,
            "sp.defense": 61
        }
    },
    {
        "id": 23,
        "name": "Ekans",
        "type": [
            "Poison"
        ],
        "base": {
            "hp": 35,
            "speed": 60,
            "attack": 60,
            "defense": 44,
            "sp.attack": 40,
            "sp.defense": 54
        }
    },
    {
        "id": 24,
        "name": "Arbok",
        "type": [
            "Poison"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 95,
            "defense": 69,
            "sp.attack": 65,
            "sp.defense": 79
        }
    },
    {
        "id": 25,
        "name": "Pikachu",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 35,
            "speed": 60,
            "attack": 55,
            "defense": 40,
            "sp.attack": 50,
            "sp.defense": 50
        }
    },
    {
        "id": 26,
        "name": "Raichu",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 90,
            "defense": 55,
            "sp.attack": 90,
            "sp.defense": 80
        }
    },
    {
        "id": 27,
        "name": "Sandshrew",
        "type": [
            "Ground"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 75,
            "defense": 85,
            "sp.attack": 20,
            "sp.defense": 30
        }
    },
    {
        "id": 28,
        "name": "Sandslash",
        "type": [
            "Ground"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 100,
            "defense": 110,
            "sp.attack": 45,
            "sp.defense": 55
        }
    },
    {
        "id": 29,
        "name": "Nidoran♀",
        "type": [
            "Poison"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 47,
            "defense": 52,
            "sp.attack": 40,
            "sp.defense": 40
        }
    },
    {
        "id": 30,
        "name": "Nidorina",
        "type": [
            "Poison"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 62,
            "defense": 67,
            "sp.attack": 55,
            "sp.defense": 55
        }
    },
    {
        "id": 31,
        "name": "Nidoqueen",
        "type": [
            "Poison",
            "Ground"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 92,
            "defense": 87,
            "sp.attack": 75,
            "sp.defense": 85
        }
    },
    {
        "id": 32,
        "name": "Nidoran♂",
        "type": [
            "Poison"
        ],
        "base": {
            "hp": 46,
            "speed": 60,
            "attack": 57,
            "defense": 40,
            "sp.attack": 40,
            "sp.defense": 40
        }
    },
    {
        "id": 33,
        "name": "Nidorino",
        "type": [
            "Poison"
        ],
        "base": {
            "hp": 61,
            "speed": 60,
            "attack": 72,
            "defense": 57,
            "sp.attack": 55,
            "sp.defense": 55
        }
    },
    {
        "id": 34,
        "name": "Nidoking",
        "type": [
            "Poison",
            "Ground"
        ],
        "base": {
            "hp": 81,
            "speed": 60,
            "attack": 102,
            "defense": 77,
            "sp.attack": 85,
            "sp.defense": 75
        }
    },
    {
        "id": 35,
        "name": "Clefairy",
        "type": [
            "Fairy"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 45,
            "defense": 48,
            "sp.attack": 60,
            "sp.defense": 65
        }
    },
    {
        "id": 36,
        "name": "Clefable",
        "type": [
            "Fairy"
        ],
        "base": {
            "hp": 95,
            "speed": 60,
            "attack": 70,
            "defense": 73,
            "sp.attack": 95,
            "sp.defense": 90
        }
    },
    {
        "id": 37,
        "name": "Vulpix",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 38,
            "speed": 60,
            "attack": 41,
            "defense": 40,
            "sp.attack": 50,
            "sp.defense": 65
        }
    },
    {
        "id": 38,
        "name": "Ninetales",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 73,
            "speed": 60,
            "attack": 76,
            "defense": 75,
            "sp.attack": 81,
            "sp.defense": 100
        }
    },
    {
        "id": 39,
        "name": "Jigglypuff",
        "type": [
            "Normal",
            "Fairy"
        ],
        "base": {
            "hp": 115,
            "speed": 60,
            "attack": 45,
            "defense": 20,
            "sp.attack": 45,
            "sp.defense": 25
        }
    },
    {
        "id": 40,
        "name": "Wigglytuff",
        "type": [
            "Normal",
            "Fairy"
        ],
        "base": {
            "hp": 140,
            "speed": 60,
            "attack": 70,
            "defense": 45,
            "sp.attack": 85,
            "sp.defense": 50
        }
    },
    {
        "id": 41,
        "name": "Zubat",
        "type": [
            "Poison",
            "Flying"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 45,
            "defense": 35,
            "sp.attack": 30,
            "sp.defense": 40
        }
    },
    {
        "id": 42,
        "name": "Golbat",
        "type": [
            "Poison",
            "Flying"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 80,
            "defense": 70,
            "sp.attack": 65,
            "sp.defense": 75
        }
    },
    {
        "id": 43,
        "name": "Oddish",
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 50,
            "defense": 55,
            "sp.attack": 75,
            "sp.defense": 65
        }
    },
    {
        "id": 44,
        "name": "Gloom",
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 65,
            "defense": 70,
            "sp.attack": 85,
            "sp.defense": 75
        }
    },
    {
        "id": 45,
        "name": "Vileplume",
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 80,
            "defense": 85,
            "sp.attack": 110,
            "sp.defense": 90
        }
    },
    {
        "id": 46,
        "name": "Paras",
        "type": [
            "Bug",
            "Grass"
        ],
        "base": {
            "hp": 35,
            "speed": 60,
            "attack": 70,
            "defense": 55,
            "sp.attack": 45,
            "sp.defense": 55
        }
    },
    {
        "id": 47,
        "name": "Parasect",
        "type": [
            "Bug",
            "Grass"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 95,
            "defense": 80,
            "sp.attack": 60,
            "sp.defense": 80
        }
    },
    {
        "id": 48,
        "name": "Venonat",
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 55,
            "defense": 50,
            "sp.attack": 40,
            "sp.defense": 55
        }
    },
    {
        "id": 49,
        "name": "Venomoth",
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 65,
            "defense": 60,
            "sp.attack": 90,
            "sp.defense": 75
        }
    },
    {
        "id": 50,
        "name": "Diglett",
        "type": [
            "Ground"
        ],
        "base": {
            "hp": 10,
            "speed": 60,
            "attack": 55,
            "defense": 25,
            "sp.attack": 35,
            "sp.defense": 45
        }
    },
    {
        "id": 51,
        "name": "Dugtrio",
        "type": [
            "Ground"
        ],
        "base": {
            "hp": 35,
            "speed": 60,
            "attack": 100,
            "defense": 50,
            "sp.attack": 50,
            "sp.defense": 70
        }
    },
    {
        "id": 52,
        "name": "Meowth",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 45,
            "defense": 35,
            "sp.attack": 40,
            "sp.defense": 40
        }
    },
    {
        "id": 53,
        "name": "Persian",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 70,
            "defense": 60,
            "sp.attack": 65,
            "sp.defense": 65
        }
    },
    {
        "id": 54,
        "name": "Psyduck",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 52,
            "defense": 48,
            "sp.attack": 65,
            "sp.defense": 50
        }
    },
    {
        "id": 55,
        "name": "Golduck",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 82,
            "defense": 78,
            "sp.attack": 95,
            "sp.defense": 80
        }
    },
    {
        "id": 56,
        "name": "Mankey",
        "type": [
            "Fighting"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 80,
            "defense": 35,
            "sp.attack": 35,
            "sp.defense": 45
        }
    },
    {
        "id": 57,
        "name": "Primeape",
        "type": [
            "Fighting"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 105,
            "defense": 60,
            "sp.attack": 60,
            "sp.defense": 70
        }
    },
    {
        "id": 58,
        "name": "Growlithe",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 70,
            "defense": 45,
            "sp.attack": 70,
            "sp.defense": 50
        }
    },
    {
        "id": 59,
        "name": "Arcanine",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 110,
            "defense": 80,
            "sp.attack": 100,
            "sp.defense": 80
        }
    },
    {
        "id": 60,
        "name": "Poliwag",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 50,
            "defense": 40,
            "sp.attack": 40,
            "sp.defense": 40
        }
    },
    {
        "id": 61,
        "name": "Poliwhirl",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 65,
            "defense": 65,
            "sp.attack": 50,
            "sp.defense": 50
        }
    },
    {
        "id": 62,
        "name": "Poliwrath",
        "type": [
            "Water",
            "Fighting"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 95,
            "defense": 95,
            "sp.attack": 70,
            "sp.defense": 90
        }
    },
    {
        "id": 63,
        "name": "Abra",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 25,
            "speed": 60,
            "attack": 20,
            "defense": 15,
            "sp.attack": 105,
            "sp.defense": 55
        }
    },
    {
        "id": 64,
        "name": "Kadabra",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 35,
            "defense": 30,
            "sp.attack": 120,
            "sp.defense": 70
        }
    },
    {
        "id": 65,
        "name": "Alakazam",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 50,
            "defense": 45,
            "sp.attack": 135,
            "sp.defense": 95
        }
    },
    {
        "id": 66,
        "name": "Machop",
        "type": [
            "Fighting"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 80,
            "defense": 50,
            "sp.attack": 35,
            "sp.defense": 35
        }
    },
    {
        "id": 67,
        "name": "Machoke",
        "type": [
            "Fighting"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 100,
            "defense": 70,
            "sp.attack": 50,
            "sp.defense": 60
        }
    },
    {
        "id": 68,
        "name": "Machamp",
        "type": [
            "Fighting"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 130,
            "defense": 80,
            "sp.attack": 65,
            "sp.defense": 85
        }
    },
    {
        "id": 69,
        "name": "Bellsprout",
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 75,
            "defense": 35,
            "sp.attack": 70,
            "sp.defense": 30
        }
    },
    {
        "id": 70,
        "name": "Weepinbell",
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 90,
            "defense": 50,
            "sp.attack": 85,
            "sp.defense": 45
        }
    },
    {
        "id": 71,
        "name": "Victreebel",
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 105,
            "defense": 65,
            "sp.attack": 100,
            "sp.defense": 70
        }
    },
    {
        "id": 72,
        "name": "Tentacool",
        "type": [
            "Water",
            "Poison"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 40,
            "defense": 35,
            "sp.attack": 50,
            "sp.defense": 100
        }
    },
    {
        "id": 73,
        "name": "Tentacruel",
        "type": [
            "Water",
            "Poison"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 70,
            "defense": 65,
            "sp.attack": 80,
            "sp.defense": 120
        }
    },
    {
        "id": 74,
        "name": "Geodude",
        "type": [
            "Rock",
            "Ground"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 80,
            "defense": 100,
            "sp.attack": 30,
            "sp.defense": 30
        }
    },
    {
        "id": 75,
        "name": "Graveler",
        "type": [
            "Rock",
            "Ground"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 95,
            "defense": 115,
            "sp.attack": 45,
            "sp.defense": 45
        }
    },
    {
        "id": 76,
        "name": "Golem",
        "type": [
            "Rock",
            "Ground"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 120,
            "defense": 130,
            "sp.attack": 55,
            "sp.defense": 65
        }
    },
    {
        "id": 77,
        "name": "Ponyta",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 85,
            "defense": 55,
            "sp.attack": 65,
            "sp.defense": 65
        }
    },
    {
        "id": 78,
        "name": "Rapidash",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 100,
            "defense": 70,
            "sp.attack": 80,
            "sp.defense": 80
        }
    },
    {
        "id": 79,
        "name": "Slowpoke",
        "type": [
            "Water",
            "Psychic"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 65,
            "defense": 65,
            "sp.attack": 40,
            "sp.defense": 40
        }
    },
    {
        "id": 80,
        "name": "Slowbro",
        "type": [
            "Water",
            "Psychic"
        ],
        "base": {
            "hp": 95,
            "speed": 60,
            "attack": 75,
            "defense": 110,
            "sp.attack": 100,
            "sp.defense": 80
        }
    },
    {
        "id": 81,
        "name": "Magnemite",
        "type": [
            "Electric",
            "Steel"
        ],
        "base": {
            "hp": 25,
            "speed": 60,
            "attack": 35,
            "defense": 70,
            "sp.attack": 95,
            "sp.defense": 55
        }
    },
    {
        "id": 82,
        "name": "Magneton",
        "type": [
            "Electric",
            "Steel"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 60,
            "defense": 95,
            "sp.attack": 120,
            "sp.defense": 70
        }
    },
    {
        "id": 83,
        "name": "Farfetch'd",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 52,
            "speed": 60,
            "attack": 90,
            "defense": 55,
            "sp.attack": 58,
            "sp.defense": 62
        }
    },
    {
        "id": 84,
        "name": "Doduo",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 35,
            "speed": 60,
            "attack": 85,
            "defense": 45,
            "sp.attack": 35,
            "sp.defense": 35
        }
    },
    {
        "id": 85,
        "name": "Dodrio",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 110,
            "defense": 70,
            "sp.attack": 60,
            "sp.defense": 60
        }
    },
    {
        "id": 86,
        "name": "Seel",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 45,
            "defense": 55,
            "sp.attack": 45,
            "sp.defense": 70
        }
    },
    {
        "id": 87,
        "name": "Dewgong",
        "type": [
            "Water",
            "Ice"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 70,
            "defense": 80,
            "sp.attack": 70,
            "sp.defense": 95
        }
    },
    {
        "id": 88,
        "name": "Grimer",
        "type": [
            "Poison"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 80,
            "defense": 50,
            "sp.attack": 40,
            "sp.defense": 50
        }
    },
    {
        "id": 89,
        "name": "Muk",
        "type": [
            "Poison"
        ],
        "base": {
            "hp": 105,
            "speed": 60,
            "attack": 105,
            "defense": 75,
            "sp.attack": 65,
            "sp.defense": 100
        }
    },
    {
        "id": 90,
        "name": "Shellder",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 30,
            "speed": 60,
            "attack": 65,
            "defense": 100,
            "sp.attack": 45,
            "sp.defense": 25
        }
    },
    {
        "id": 91,
        "name": "Cloyster",
        "type": [
            "Water",
            "Ice"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 95,
            "defense": 180,
            "sp.attack": 85,
            "sp.defense": 45
        }
    },
    {
        "id": 92,
        "name": "Gastly",
        "type": [
            "Ghost",
            "Poison"
        ],
        "base": {
            "hp": 30,
            "speed": 60,
            "attack": 35,
            "defense": 30,
            "sp.attack": 100,
            "sp.defense": 35
        }
    },
    {
        "id": 93,
        "name": "Haunter",
        "type": [
            "Ghost",
            "Poison"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 50,
            "defense": 45,
            "sp.attack": 115,
            "sp.defense": 55
        }
    },
    {
        "id": 94,
        "name": "Gengar",
        "type": [
            "Ghost",
            "Poison"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 65,
            "defense": 60,
            "sp.attack": 130,
            "sp.defense": 75
        }
    },
    {
        "id": 95,
        "name": "Onix",
        "type": [
            "Rock",
            "Ground"
        ],
        "base": {
            "hp": 35,
            "speed": 60,
            "attack": 45,
            "defense": 160,
            "sp.attack": 30,
            "sp.defense": 45
        }
    },
    {
        "id": 96,
        "name": "Drowzee",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 48,
            "defense": 45,
            "sp.attack": 43,
            "sp.defense": 90
        }
    },
    {
        "id": 97,
        "name": "Hypno",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 85,
            "speed": 60,
            "attack": 73,
            "defense": 70,
            "sp.attack": 73,
            "sp.defense": 115
        }
    },
    {
        "id": 98,
        "name": "Krabby",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 30,
            "speed": 60,
            "attack": 105,
            "defense": 90,
            "sp.attack": 25,
            "sp.defense": 25
        }
    },
    {
        "id": 99,
        "name": "Kingler",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 130,
            "defense": 115,
            "sp.attack": 50,
            "sp.defense": 50
        }
    },
    {
        "id": 100,
        "name": "Voltorb",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 30,
            "defense": 50,
            "sp.attack": 55,
            "sp.defense": 55
        }
    },
    {
        "id": 101,
        "name": "Electrode",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 50,
            "defense": 70,
            "sp.attack": 80,
            "sp.defense": 80
        }
    },
    {
        "id": 102,
        "name": "Exeggcute",
        "type": [
            "Grass",
            "Psychic"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 40,
            "defense": 80,
            "sp.attack": 60,
            "sp.defense": 45
        }
    },
    {
        "id": 103,
        "name": "Exeggutor",
        "type": [
            "Grass",
            "Psychic"
        ],
        "base": {
            "hp": 95,
            "speed": 60,
            "attack": 95,
            "defense": 85,
            "sp.attack": 125,
            "sp.defense": 75
        }
    },
    {
        "id": 104,
        "name": "Cubone",
        "type": [
            "Ground"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 50,
            "defense": 95,
            "sp.attack": 40,
            "sp.defense": 50
        }
    },
    {
        "id": 105,
        "name": "Marowak",
        "type": [
            "Ground"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 80,
            "defense": 110,
            "sp.attack": 50,
            "sp.defense": 80
        }
    },
    {
        "id": 106,
        "name": "Hitmonlee",
        "type": [
            "Fighting"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 120,
            "defense": 53,
            "sp.attack": 35,
            "sp.defense": 110
        }
    },
    {
        "id": 107,
        "name": "Hitmonchan",
        "type": [
            "Fighting"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 105,
            "defense": 79,
            "sp.attack": 35,
            "sp.defense": 110
        }
    },
    {
        "id": 108,
        "name": "Lickitung",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 55,
            "defense": 75,
            "sp.attack": 60,
            "sp.defense": 75
        }
    },
    {
        "id": 109,
        "name": "Koffing",
        "type": [
            "Poison"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 65,
            "defense": 95,
            "sp.attack": 60,
            "sp.defense": 45
        }
    },
    {
        "id": 110,
        "name": "Weezing",
        "type": [
            "Poison"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 90,
            "defense": 120,
            "sp.attack": 85,
            "sp.defense": 70
        }
    },
    {
        "id": 111,
        "name": "Rhyhorn",
        "type": [
            "Ground",
            "Rock"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 85,
            "defense": 95,
            "sp.attack": 30,
            "sp.defense": 30
        }
    },
    {
        "id": 112,
        "name": "Rhydon",
        "type": [
            "Ground",
            "Rock"
        ],
        "base": {
            "hp": 105,
            "speed": 60,
            "attack": 130,
            "defense": 120,
            "sp.attack": 45,
            "sp.defense": 45
        }
    },
    {
        "id": 113,
        "name": "Chansey",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 250,
            "speed": 60,
            "attack": 5,
            "defense": 5,
            "sp.attack": 35,
            "sp.defense": 105
        }
    },
    {
        "id": 114,
        "name": "Tangela",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 55,
            "defense": 115,
            "sp.attack": 100,
            "sp.defense": 40
        }
    },
    {
        "id": 115,
        "name": "Kangaskhan",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 105,
            "speed": 60,
            "attack": 95,
            "defense": 80,
            "sp.attack": 40,
            "sp.defense": 80
        }
    },
    {
        "id": 116,
        "name": "Horsea",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 30,
            "speed": 60,
            "attack": 40,
            "defense": 70,
            "sp.attack": 70,
            "sp.defense": 25
        }
    },
    {
        "id": 117,
        "name": "Seadra",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 65,
            "defense": 95,
            "sp.attack": 95,
            "sp.defense": 45
        }
    },
    {
        "id": 118,
        "name": "Goldeen",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 67,
            "defense": 60,
            "sp.attack": 35,
            "sp.defense": 50
        }
    },
    {
        "id": 119,
        "name": "Seaking",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 92,
            "defense": 65,
            "sp.attack": 65,
            "sp.defense": 80
        }
    },
    {
        "id": 120,
        "name": "Staryu",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 30,
            "speed": 60,
            "attack": 45,
            "defense": 55,
            "sp.attack": 70,
            "sp.defense": 55
        }
    },
    {
        "id": 121,
        "name": "Starmie",
        "type": [
            "Water",
            "Psychic"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 75,
            "defense": 85,
            "sp.attack": 100,
            "sp.defense": 85
        }
    },
    {
        "id": 122,
        "name": "Mr. Mime",
        "type": [
            "Psychic",
            "Fairy"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 45,
            "defense": 65,
            "sp.attack": 100,
            "sp.defense": 120
        }
    },
    {
        "id": 123,
        "name": "Scyther",
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 110,
            "defense": 80,
            "sp.attack": 55,
            "sp.defense": 80
        }
    },
    {
        "id": 124,
        "name": "Jynx",
        "type": [
            "Ice",
            "Psychic"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 50,
            "defense": 35,
            "sp.attack": 115,
            "sp.defense": 95
        }
    },
    {
        "id": 125,
        "name": "Electabuzz",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 83,
            "defense": 57,
            "sp.attack": 95,
            "sp.defense": 85
        }
    },
    {
        "id": 126,
        "name": "Magmar",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 95,
            "defense": 57,
            "sp.attack": 100,
            "sp.defense": 85
        }
    },
    {
        "id": 127,
        "name": "Pinsir",
        "type": [
            "Bug"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 125,
            "defense": 100,
            "sp.attack": 55,
            "sp.defense": 70
        }
    },
    {
        "id": 128,
        "name": "Tauros",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 100,
            "defense": 95,
            "sp.attack": 40,
            "sp.defense": 70
        }
    },
    {
        "id": 129,
        "name": "Magikarp",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 20,
            "speed": 60,
            "attack": 10,
            "defense": 55,
            "sp.attack": 15,
            "sp.defense": 20
        }
    },
    {
        "id": 130,
        "name": "Gyarados",
        "type": [
            "Water",
            "Flying"
        ],
        "base": {
            "hp": 95,
            "speed": 60,
            "attack": 125,
            "defense": 79,
            "sp.attack": 60,
            "sp.defense": 100
        }
    },
    {
        "id": 131,
        "name": "Lapras",
        "type": [
            "Water",
            "Ice"
        ],
        "base": {
            "hp": 130,
            "speed": 60,
            "attack": 85,
            "defense": 80,
            "sp.attack": 85,
            "sp.defense": 95
        }
    },
    {
        "id": 132,
        "name": "Ditto",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 48,
            "speed": 60,
            "attack": 48,
            "defense": 48,
            "sp.attack": 48,
            "sp.defense": 48
        }
    },
    {
        "id": 133,
        "name": "Eevee",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 55,
            "defense": 50,
            "sp.attack": 45,
            "sp.defense": 65
        }
    },
    {
        "id": 134,
        "name": "Vaporeon",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 130,
            "speed": 60,
            "attack": 65,
            "defense": 60,
            "sp.attack": 110,
            "sp.defense": 95
        }
    },
    {
        "id": 135,
        "name": "Jolteon",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 65,
            "defense": 60,
            "sp.attack": 110,
            "sp.defense": 95
        }
    },
    {
        "id": 136,
        "name": "Flareon",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 130,
            "defense": 60,
            "sp.attack": 95,
            "sp.defense": 110
        }
    },
    {
        "id": 137,
        "name": "Porygon",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 60,
            "defense": 70,
            "sp.attack": 85,
            "sp.defense": 75
        }
    },
    {
        "id": 138,
        "name": "Omanyte",
        "type": [
            "Rock",
            "Water"
        ],
        "base": {
            "hp": 35,
            "speed": 60,
            "attack": 40,
            "defense": 100,
            "sp.attack": 90,
            "sp.defense": 55
        }
    },
    {
        "id": 139,
        "name": "Omastar",
        "type": [
            "Rock",
            "Water"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 60,
            "defense": 125,
            "sp.attack": 115,
            "sp.defense": 70
        }
    },
    {
        "id": 140,
        "name": "Kabuto",
        "type": [
            "Rock",
            "Water"
        ],
        "base": {
            "hp": 30,
            "speed": 60,
            "attack": 80,
            "defense": 90,
            "sp.attack": 55,
            "sp.defense": 45
        }
    },
    {
        "id": 141,
        "name": "Kabutops",
        "type": [
            "Rock",
            "Water"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 115,
            "defense": 105,
            "sp.attack": 65,
            "sp.defense": 70
        }
    },
    {
        "id": 142,
        "name": "Aerodactyl",
        "type": [
            "Rock",
            "Flying"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 105,
            "defense": 65,
            "sp.attack": 60,
            "sp.defense": 75
        }
    },
    {
        "id": 143,
        "name": "Snorlax",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 160,
            "speed": 60,
            "attack": 110,
            "defense": 65,
            "sp.attack": 65,
            "sp.defense": 110
        }
    },
    {
        "id": 144,
        "name": "Articuno",
        "type": [
            "Ice",
            "Flying"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 85,
            "defense": 100,
            "sp.attack": 95,
            "sp.defense": 125
        }
    },
    {
        "id": 145,
        "name": "Zapdos",
        "type": [
            "Electric",
            "Flying"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 90,
            "defense": 85,
            "sp.attack": 125,
            "sp.defense": 90
        }
    },
    {
        "id": 146,
        "name": "Moltres",
        "type": [
            "Fire",
            "Flying"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 100,
            "defense": 90,
            "sp.attack": 125,
            "sp.defense": 85
        }
    },
    {
        "id": 147,
        "name": "Dratini",
        "type": [
            "Dragon"
        ],
        "base": {
            "hp": 41,
            "speed": 60,
            "attack": 64,
            "defense": 45,
            "sp.attack": 50,
            "sp.defense": 50
        }
    },
    {
        "id": 148,
        "name": "Dragonair",
        "type": [
            "Dragon"
        ],
        "base": {
            "hp": 61,
            "speed": 60,
            "attack": 84,
            "defense": 65,
            "sp.attack": 70,
            "sp.defense": 70
        }
    },
    {
        "id": 149,
        "name": "Dragonite",
        "type": [
            "Dragon",
            "Flying"
        ],
        "base": {
            "hp": 91,
            "speed": 60,
            "attack": 134,
            "defense": 95,
            "sp.attack": 100,
            "sp.defense": 100
        }
    },
    {
        "id": 150,
        "name": "Mewtwo",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 106,
            "speed": 60,
            "attack": 110,
            "defense": 90,
            "sp.attack": 154,
            "sp.defense": 90
        }
    },
    {
        "id": 151,
        "name": "Mew",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 100,
            "defense": 100,
            "sp.attack": 100,
            "sp.defense": 100
        }
    },
    {
        "id": 152,
        "name": "Chikorita",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 49,
            "defense": 65,
            "sp.attack": 49,
            "sp.defense": 65
        }
    },
    {
        "id": 153,
        "name": "Bayleef",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 62,
            "defense": 80,
            "sp.attack": 63,
            "sp.defense": 80
        }
    },
    {
        "id": 154,
        "name": "Meganium",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 82,
            "defense": 100,
            "sp.attack": 83,
            "sp.defense": 100
        }
    },
    {
        "id": 155,
        "name": "Cyndaquil",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 39,
            "speed": 60,
            "attack": 52,
            "defense": 43,
            "sp.attack": 60,
            "sp.defense": 50
        }
    },
    {
        "id": 156,
        "name": "Quilava",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 58,
            "speed": 60,
            "attack": 64,
            "defense": 58,
            "sp.attack": 80,
            "sp.defense": 65
        }
    },
    {
        "id": 157,
        "name": "Typhlosion",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 78,
            "speed": 60,
            "attack": 84,
            "defense": 78,
            "sp.attack": 109,
            "sp.defense": 85
        }
    },
    {
        "id": 158,
        "name": "Totodile",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 65,
            "defense": 64,
            "sp.attack": 44,
            "sp.defense": 48
        }
    },
    {
        "id": 159,
        "name": "Croconaw",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 80,
            "defense": 80,
            "sp.attack": 59,
            "sp.defense": 63
        }
    },
    {
        "id": 160,
        "name": "Feraligatr",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 85,
            "speed": 60,
            "attack": 105,
            "defense": 100,
            "sp.attack": 79,
            "sp.defense": 83
        }
    },
    {
        "id": 161,
        "name": "Sentret",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 35,
            "speed": 60,
            "attack": 46,
            "defense": 34,
            "sp.attack": 35,
            "sp.defense": 45
        }
    },
    {
        "id": 162,
        "name": "Furret",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 85,
            "speed": 60,
            "attack": 76,
            "defense": 64,
            "sp.attack": 45,
            "sp.defense": 55
        }
    },
    {
        "id": 163,
        "name": "Hoothoot",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 30,
            "defense": 30,
            "sp.attack": 36,
            "sp.defense": 56
        }
    },
    {
        "id": 164,
        "name": "Noctowl",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 50,
            "defense": 50,
            "sp.attack": 86,
            "sp.defense": 96
        }
    },
    {
        "id": 165,
        "name": "Ledyba",
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 20,
            "defense": 30,
            "sp.attack": 40,
            "sp.defense": 80
        }
    },
    {
        "id": 166,
        "name": "Ledian",
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 35,
            "defense": 50,
            "sp.attack": 55,
            "sp.defense": 110
        }
    },
    {
        "id": 167,
        "name": "Spinarak",
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 60,
            "defense": 40,
            "sp.attack": 40,
            "sp.defense": 40
        }
    },
    {
        "id": 168,
        "name": "Ariados",
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 90,
            "defense": 70,
            "sp.attack": 60,
            "sp.defense": 70
        }
    },
    {
        "id": 169,
        "name": "Crobat",
        "type": [
            "Poison",
            "Flying"
        ],
        "base": {
            "hp": 85,
            "speed": 60,
            "attack": 90,
            "defense": 80,
            "sp.attack": 70,
            "sp.defense": 80
        }
    },
    {
        "id": 170,
        "name": "Chinchou",
        "type": [
            "Water",
            "Electric"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 38,
            "defense": 38,
            "sp.attack": 56,
            "sp.defense": 56
        }
    },
    {
        "id": 171,
        "name": "Lanturn",
        "type": [
            "Water",
            "Electric"
        ],
        "base": {
            "hp": 125,
            "speed": 60,
            "attack": 58,
            "defense": 58,
            "sp.attack": 76,
            "sp.defense": 76
        }
    },
    {
        "id": 172,
        "name": "Pichu",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 20,
            "speed": 60,
            "attack": 40,
            "defense": 15,
            "sp.attack": 35,
            "sp.defense": 35
        }
    },
    {
        "id": 173,
        "name": "Cleffa",
        "type": [
            "Fairy"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 25,
            "defense": 28,
            "sp.attack": 45,
            "sp.defense": 55
        }
    },
    {
        "id": 174,
        "name": "Igglybuff",
        "type": [
            "Normal",
            "Fairy"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 30,
            "defense": 15,
            "sp.attack": 40,
            "sp.defense": 20
        }
    },
    {
        "id": 175,
        "name": "Togepi",
        "type": [
            "Fairy"
        ],
        "base": {
            "hp": 35,
            "speed": 60,
            "attack": 20,
            "defense": 65,
            "sp.attack": 40,
            "sp.defense": 65
        }
    },
    {
        "id": 176,
        "name": "Togetic",
        "type": [
            "Fairy",
            "Flying"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 40,
            "defense": 85,
            "sp.attack": 80,
            "sp.defense": 105
        }
    },
    {
        "id": 177,
        "name": "Natu",
        "type": [
            "Psychic",
            "Flying"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 50,
            "defense": 45,
            "sp.attack": 70,
            "sp.defense": 45
        }
    },
    {
        "id": 178,
        "name": "Xatu",
        "type": [
            "Psychic",
            "Flying"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 75,
            "defense": 70,
            "sp.attack": 95,
            "sp.defense": 70
        }
    },
    {
        "id": 179,
        "name": "Mareep",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 40,
            "defense": 40,
            "sp.attack": 65,
            "sp.defense": 45
        }
    },
    {
        "id": 180,
        "name": "Flaaffy",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 55,
            "defense": 55,
            "sp.attack": 80,
            "sp.defense": 60
        }
    },
    {
        "id": 181,
        "name": "Ampharos",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 75,
            "defense": 85,
            "sp.attack": 115,
            "sp.defense": 90
        }
    },
    {
        "id": 182,
        "name": "Bellossom",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 80,
            "defense": 95,
            "sp.attack": 90,
            "sp.defense": 100
        }
    },
    {
        "id": 183,
        "name": "Marill",
        "type": [
            "Water",
            "Fairy"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 20,
            "defense": 50,
            "sp.attack": 20,
            "sp.defense": 50
        }
    },
    {
        "id": 184,
        "name": "Azumarill",
        "type": [
            "Water",
            "Fairy"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 50,
            "defense": 80,
            "sp.attack": 60,
            "sp.defense": 80
        }
    },
    {
        "id": 185,
        "name": "Sudowoodo",
        "type": [
            "Rock"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 100,
            "defense": 115,
            "sp.attack": 30,
            "sp.defense": 65
        }
    },
    {
        "id": 186,
        "name": "Politoed",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 75,
            "defense": 75,
            "sp.attack": 90,
            "sp.defense": 100
        }
    },
    {
        "id": 187,
        "name": "Hoppip",
        "type": [
            "Grass",
            "Flying"
        ],
        "base": {
            "hp": 35,
            "speed": 60,
            "attack": 35,
            "defense": 40,
            "sp.attack": 35,
            "sp.defense": 55
        }
    },
    {
        "id": 188,
        "name": "Skiploom",
        "type": [
            "Grass",
            "Flying"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 45,
            "defense": 50,
            "sp.attack": 45,
            "sp.defense": 65
        }
    },
    {
        "id": 189,
        "name": "Jumpluff",
        "type": [
            "Grass",
            "Flying"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 55,
            "defense": 70,
            "sp.attack": 55,
            "sp.defense": 95
        }
    },
    {
        "id": 190,
        "name": "Aipom",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 70,
            "defense": 55,
            "sp.attack": 40,
            "sp.defense": 55
        }
    },
    {
        "id": 191,
        "name": "Sunkern",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 30,
            "speed": 60,
            "attack": 30,
            "defense": 30,
            "sp.attack": 30,
            "sp.defense": 30
        }
    },
    {
        "id": 192,
        "name": "Sunflora",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 75,
            "defense": 55,
            "sp.attack": 105,
            "sp.defense": 85
        }
    },
    {
        "id": 193,
        "name": "Yanma",
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 65,
            "defense": 45,
            "sp.attack": 75,
            "sp.defense": 45
        }
    },
    {
        "id": 194,
        "name": "Wooper",
        "type": [
            "Water",
            "Ground"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 45,
            "defense": 45,
            "sp.attack": 25,
            "sp.defense": 25
        }
    },
    {
        "id": 195,
        "name": "Quagsire",
        "type": [
            "Water",
            "Ground"
        ],
        "base": {
            "hp": 95,
            "speed": 60,
            "attack": 85,
            "defense": 85,
            "sp.attack": 65,
            "sp.defense": 65
        }
    },
    {
        "id": 196,
        "name": "Espeon",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 65,
            "defense": 60,
            "sp.attack": 130,
            "sp.defense": 95
        }
    },
    {
        "id": 197,
        "name": "Umbreon",
        "type": [
            "Dark"
        ],
        "base": {
            "hp": 95,
            "speed": 60,
            "attack": 65,
            "defense": 110,
            "sp.attack": 60,
            "sp.defense": 130
        }
    },
    {
        "id": 198,
        "name": "Murkrow",
        "type": [
            "Dark",
            "Flying"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 85,
            "defense": 42,
            "sp.attack": 85,
            "sp.defense": 42
        }
    },
    {
        "id": 199,
        "name": "Slowking",
        "type": [
            "Water",
            "Psychic"
        ],
        "base": {
            "hp": 95,
            "speed": 60,
            "attack": 75,
            "defense": 80,
            "sp.attack": 100,
            "sp.defense": 110
        }
    },
    {
        "id": 200,
        "name": "Misdreavus",
        "type": [
            "Ghost"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 60,
            "defense": 60,
            "sp.attack": 85,
            "sp.defense": 85
        }
    },
    {
        "id": 201,
        "name": "Unown",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 48,
            "speed": 60,
            "attack": 72,
            "defense": 48,
            "sp.attack": 72,
            "sp.defense": 48
        }
    },
    {
        "id": 202,
        "name": "Wobbuffet",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 190,
            "speed": 60,
            "attack": 33,
            "defense": 58,
            "sp.attack": 33,
            "sp.defense": 58
        }
    },
    {
        "id": 203,
        "name": "Girafarig",
        "type": [
            "Normal",
            "Psychic"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 80,
            "defense": 65,
            "sp.attack": 90,
            "sp.defense": 65
        }
    },
    {
        "id": 204,
        "name": "Pineco",
        "type": [
            "Bug"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 65,
            "defense": 90,
            "sp.attack": 35,
            "sp.defense": 35
        }
    },
    {
        "id": 205,
        "name": "Forretress",
        "type": [
            "Bug",
            "Steel"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 90,
            "defense": 140,
            "sp.attack": 60,
            "sp.defense": 60
        }
    },
    {
        "id": 206,
        "name": "Dunsparce",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 70,
            "defense": 70,
            "sp.attack": 65,
            "sp.defense": 65
        }
    },
    {
        "id": 207,
        "name": "Gligar",
        "type": [
            "Ground",
            "Flying"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 75,
            "defense": 105,
            "sp.attack": 35,
            "sp.defense": 65
        }
    },
    {
        "id": 208,
        "name": "Steelix",
        "type": [
            "Steel",
            "Ground"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 85,
            "defense": 200,
            "sp.attack": 55,
            "sp.defense": 65
        }
    },
    {
        "id": 209,
        "name": "Snubbull",
        "type": [
            "Fairy"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 80,
            "defense": 50,
            "sp.attack": 40,
            "sp.defense": 40
        }
    },
    {
        "id": 210,
        "name": "Granbull",
        "type": [
            "Fairy"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 120,
            "defense": 75,
            "sp.attack": 60,
            "sp.defense": 60
        }
    },
    {
        "id": 211,
        "name": "Qwilfish",
        "type": [
            "Water",
            "Poison"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 95,
            "defense": 85,
            "sp.attack": 55,
            "sp.defense": 55
        }
    },
    {
        "id": 212,
        "name": "Scizor",
        "type": [
            "Bug",
            "Steel"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 130,
            "defense": 100,
            "sp.attack": 55,
            "sp.defense": 80
        }
    },
    {
        "id": 213,
        "name": "Shuckle",
        "type": [
            "Bug",
            "Rock"
        ],
        "base": {
            "hp": 20,
            "speed": 60,
            "attack": 10,
            "defense": 230,
            "sp.attack": 10,
            "sp.defense": 230
        }
    },
    {
        "id": 214,
        "name": "Heracross",
        "type": [
            "Bug",
            "Fighting"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 125,
            "defense": 75,
            "sp.attack": 40,
            "sp.defense": 95
        }
    },
    {
        "id": 215,
        "name": "Sneasel",
        "type": [
            "Dark",
            "Ice"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 95,
            "defense": 55,
            "sp.attack": 35,
            "sp.defense": 75
        }
    },
    {
        "id": 216,
        "name": "Teddiursa",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 80,
            "defense": 50,
            "sp.attack": 50,
            "sp.defense": 50
        }
    },
    {
        "id": 217,
        "name": "Ursaring",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 130,
            "defense": 75,
            "sp.attack": 75,
            "sp.defense": 75
        }
    },
    {
        "id": 218,
        "name": "Slugma",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 40,
            "defense": 40,
            "sp.attack": 70,
            "sp.defense": 40
        }
    },
    {
        "id": 219,
        "name": "Magcargo",
        "type": [
            "Fire",
            "Rock"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 50,
            "defense": 120,
            "sp.attack": 90,
            "sp.defense": 80
        }
    },
    {
        "id": 220,
        "name": "Swinub",
        "type": [
            "Ice",
            "Ground"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 50,
            "defense": 40,
            "sp.attack": 30,
            "sp.defense": 30
        }
    },
    {
        "id": 221,
        "name": "Piloswine",
        "type": [
            "Ice",
            "Ground"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 100,
            "defense": 80,
            "sp.attack": 60,
            "sp.defense": 60
        }
    },
    {
        "id": 222,
        "name": "Corsola",
        "type": [
            "Water",
            "Rock"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 55,
            "defense": 95,
            "sp.attack": 65,
            "sp.defense": 95
        }
    },
    {
        "id": 223,
        "name": "Remoraid",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 35,
            "speed": 60,
            "attack": 65,
            "defense": 35,
            "sp.attack": 65,
            "sp.defense": 35
        }
    },
    {
        "id": 224,
        "name": "Octillery",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 105,
            "defense": 75,
            "sp.attack": 105,
            "sp.defense": 75
        }
    },
    {
        "id": 225,
        "name": "Delibird",
        "type": [
            "Ice",
            "Flying"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 55,
            "defense": 45,
            "sp.attack": 65,
            "sp.defense": 45
        }
    },
    {
        "id": 226,
        "name": "Mantine",
        "type": [
            "Water",
            "Flying"
        ],
        "base": {
            "hp": 85,
            "speed": 60,
            "attack": 40,
            "defense": 70,
            "sp.attack": 80,
            "sp.defense": 140
        }
    },
    {
        "id": 227,
        "name": "Skarmory",
        "type": [
            "Steel",
            "Flying"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 80,
            "defense": 140,
            "sp.attack": 40,
            "sp.defense": 70
        }
    },
    {
        "id": 228,
        "name": "Houndour",
        "type": [
            "Dark",
            "Fire"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 60,
            "defense": 30,
            "sp.attack": 80,
            "sp.defense": 50
        }
    },
    {
        "id": 229,
        "name": "Houndoom",
        "type": [
            "Dark",
            "Fire"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 90,
            "defense": 50,
            "sp.attack": 110,
            "sp.defense": 80
        }
    },
    {
        "id": 230,
        "name": "Kingdra",
        "type": [
            "Water",
            "Dragon"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 95,
            "defense": 95,
            "sp.attack": 95,
            "sp.defense": 95
        }
    },
    {
        "id": 231,
        "name": "Phanpy",
        "type": [
            "Ground"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 60,
            "defense": 60,
            "sp.attack": 40,
            "sp.defense": 40
        }
    },
    {
        "id": 232,
        "name": "Donphan",
        "type": [
            "Ground"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 120,
            "defense": 120,
            "sp.attack": 60,
            "sp.defense": 60
        }
    },
    {
        "id": 233,
        "name": "Porygon2",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 85,
            "speed": 60,
            "attack": 80,
            "defense": 90,
            "sp.attack": 105,
            "sp.defense": 95
        }
    },
    {
        "id": 234,
        "name": "Stantler",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 73,
            "speed": 60,
            "attack": 95,
            "defense": 62,
            "sp.attack": 85,
            "sp.defense": 65
        }
    },
    {
        "id": 235,
        "name": "Smeargle",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 20,
            "defense": 35,
            "sp.attack": 20,
            "sp.defense": 45
        }
    },
    {
        "id": 236,
        "name": "Tyrogue",
        "type": [
            "Fighting"
        ],
        "base": {
            "hp": 35,
            "speed": 60,
            "attack": 35,
            "defense": 35,
            "sp.attack": 35,
            "sp.defense": 35
        }
    },
    {
        "id": 237,
        "name": "Hitmontop",
        "type": [
            "Fighting"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 95,
            "defense": 95,
            "sp.attack": 35,
            "sp.defense": 110
        }
    },
    {
        "id": 238,
        "name": "Smoochum",
        "type": [
            "Ice",
            "Psychic"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 30,
            "defense": 15,
            "sp.attack": 85,
            "sp.defense": 65
        }
    },
    {
        "id": 239,
        "name": "Elekid",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 63,
            "defense": 37,
            "sp.attack": 65,
            "sp.defense": 55
        }
    },
    {
        "id": 240,
        "name": "Magby",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 75,
            "defense": 37,
            "sp.attack": 70,
            "sp.defense": 55
        }
    },
    {
        "id": 241,
        "name": "Miltank",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 95,
            "speed": 60,
            "attack": 80,
            "defense": 105,
            "sp.attack": 40,
            "sp.defense": 70
        }
    },
    {
        "id": 242,
        "name": "Blissey",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 255,
            "speed": 60,
            "attack": 10,
            "defense": 10,
            "sp.attack": 75,
            "sp.defense": 135
        }
    },
    {
        "id": 243,
        "name": "Raikou",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 85,
            "defense": 75,
            "sp.attack": 115,
            "sp.defense": 100
        }
    },
    {
        "id": 244,
        "name": "Entei",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 115,
            "speed": 60,
            "attack": 115,
            "defense": 85,
            "sp.attack": 90,
            "sp.defense": 75
        }
    },
    {
        "id": 245,
        "name": "Suicune",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 75,
            "defense": 115,
            "sp.attack": 90,
            "sp.defense": 115
        }
    },
    {
        "id": 246,
        "name": "Larvitar",
        "type": [
            "Rock",
            "Ground"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 64,
            "defense": 50,
            "sp.attack": 45,
            "sp.defense": 50
        }
    },
    {
        "id": 247,
        "name": "Pupitar",
        "type": [
            "Rock",
            "Ground"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 84,
            "defense": 70,
            "sp.attack": 65,
            "sp.defense": 70
        }
    },
    {
        "id": 248,
        "name": "Tyranitar",
        "type": [
            "Rock",
            "Dark"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 134,
            "defense": 110,
            "sp.attack": 95,
            "sp.defense": 100
        }
    },
    {
        "id": 249,
        "name": "Lugia",
        "type": [
            "Psychic",
            "Flying"
        ],
        "base": {
            "hp": 106,
            "speed": 60,
            "attack": 90,
            "defense": 130,
            "sp.attack": 90,
            "sp.defense": 154
        }
    },
    {
        "id": 250,
        "name": "Ho-Oh",
        "type": [
            "Fire",
            "Flying"
        ],
        "base": {
            "hp": 106,
            "speed": 60,
            "attack": 130,
            "defense": 90,
            "sp.attack": 110,
            "sp.defense": 154
        }
    },
    {
        "id": 251,
        "name": "Celebi",
        "type": [
            "Psychic",
            "Grass"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 100,
            "defense": 100,
            "sp.attack": 100,
            "sp.defense": 100
        }
    },
    {
        "id": 252,
        "name": "Treecko",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 45,
            "defense": 35,
            "sp.attack": 65,
            "sp.defense": 55
        }
    },
    {
        "id": 253,
        "name": "Grovyle",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 65,
            "defense": 45,
            "sp.attack": 85,
            "sp.defense": 65
        }
    },
    {
        "id": 254,
        "name": "Sceptile",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 85,
            "defense": 65,
            "sp.attack": 105,
            "sp.defense": 85
        }
    },
    {
        "id": 255,
        "name": "Torchic",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 60,
            "defense": 40,
            "sp.attack": 70,
            "sp.defense": 50
        }
    },
    {
        "id": 256,
        "name": "Combusken",
        "type": [
            "Fire",
            "Fighting"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 85,
            "defense": 60,
            "sp.attack": 85,
            "sp.defense": 60
        }
    },
    {
        "id": 257,
        "name": "Blaziken",
        "type": [
            "Fire",
            "Fighting"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 120,
            "defense": 70,
            "sp.attack": 110,
            "sp.defense": 70
        }
    },
    {
        "id": 258,
        "name": "Mudkip",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 70,
            "defense": 50,
            "sp.attack": 50,
            "sp.defense": 50
        }
    },
    {
        "id": 259,
        "name": "Marshtomp",
        "type": [
            "Water",
            "Ground"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 85,
            "defense": 70,
            "sp.attack": 60,
            "sp.defense": 70
        }
    },
    {
        "id": 260,
        "name": "Swampert",
        "type": [
            "Water",
            "Ground"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 110,
            "defense": 90,
            "sp.attack": 85,
            "sp.defense": 90
        }
    },
    {
        "id": 261,
        "name": "Poochyena",
        "type": [
            "Dark"
        ],
        "base": {
            "hp": 35,
            "speed": 60,
            "attack": 55,
            "defense": 35,
            "sp.attack": 30,
            "sp.defense": 30
        }
    },
    {
        "id": 262,
        "name": "Mightyena",
        "type": [
            "Dark"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 90,
            "defense": 70,
            "sp.attack": 60,
            "sp.defense": 60
        }
    },
    {
        "id": 263,
        "name": "Zigzagoon",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 38,
            "speed": 60,
            "attack": 30,
            "defense": 41,
            "sp.attack": 30,
            "sp.defense": 41
        }
    },
    {
        "id": 264,
        "name": "Linoone",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 78,
            "speed": 60,
            "attack": 70,
            "defense": 61,
            "sp.attack": 50,
            "sp.defense": 61
        }
    },
    {
        "id": 265,
        "name": "Wurmple",
        "type": [
            "Bug"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 45,
            "defense": 35,
            "sp.attack": 20,
            "sp.defense": 30
        }
    },
    {
        "id": 266,
        "name": "Silcoon",
        "type": [
            "Bug"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 35,
            "defense": 55,
            "sp.attack": 25,
            "sp.defense": 25
        }
    },
    {
        "id": 267,
        "name": "Beautifly",
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 70,
            "defense": 50,
            "sp.attack": 100,
            "sp.defense": 50
        }
    },
    {
        "id": 268,
        "name": "Cascoon",
        "type": [
            "Bug"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 35,
            "defense": 55,
            "sp.attack": 25,
            "sp.defense": 25
        }
    },
    {
        "id": 269,
        "name": "Dustox",
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 50,
            "defense": 70,
            "sp.attack": 50,
            "sp.defense": 90
        }
    },
    {
        "id": 270,
        "name": "Lotad",
        "type": [
            "Water",
            "Grass"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 30,
            "defense": 30,
            "sp.attack": 40,
            "sp.defense": 50
        }
    },
    {
        "id": 271,
        "name": "Lombre",
        "type": [
            "Water",
            "Grass"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 50,
            "defense": 50,
            "sp.attack": 60,
            "sp.defense": 70
        }
    },
    {
        "id": 272,
        "name": "Ludicolo",
        "type": [
            "Water",
            "Grass"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 70,
            "defense": 70,
            "sp.attack": 90,
            "sp.defense": 100
        }
    },
    {
        "id": 273,
        "name": "Seedot",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 40,
            "defense": 50,
            "sp.attack": 30,
            "sp.defense": 30
        }
    },
    {
        "id": 274,
        "name": "Nuzleaf",
        "type": [
            "Grass",
            "Dark"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 70,
            "defense": 40,
            "sp.attack": 60,
            "sp.defense": 40
        }
    },
    {
        "id": 275,
        "name": "Shiftry",
        "type": [
            "Grass",
            "Dark"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 100,
            "defense": 60,
            "sp.attack": 90,
            "sp.defense": 60
        }
    },
    {
        "id": 276,
        "name": "Taillow",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 55,
            "defense": 30,
            "sp.attack": 30,
            "sp.defense": 30
        }
    },
    {
        "id": 277,
        "name": "Swellow",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 85,
            "defense": 60,
            "sp.attack": 75,
            "sp.defense": 50
        }
    },
    {
        "id": 278,
        "name": "Wingull",
        "type": [
            "Water",
            "Flying"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 30,
            "defense": 30,
            "sp.attack": 55,
            "sp.defense": 30
        }
    },
    {
        "id": 279,
        "name": "Pelipper",
        "type": [
            "Water",
            "Flying"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 50,
            "defense": 100,
            "sp.attack": 95,
            "sp.defense": 70
        }
    },
    {
        "id": 280,
        "name": "Ralts",
        "type": [
            "Psychic",
            "Fairy"
        ],
        "base": {
            "hp": 28,
            "speed": 60,
            "attack": 25,
            "defense": 25,
            "sp.attack": 45,
            "sp.defense": 35
        }
    },
    {
        "id": 281,
        "name": "Kirlia",
        "type": [
            "Psychic",
            "Fairy"
        ],
        "base": {
            "hp": 38,
            "speed": 60,
            "attack": 35,
            "defense": 35,
            "sp.attack": 65,
            "sp.defense": 55
        }
    },
    {
        "id": 282,
        "name": "Gardevoir",
        "type": [
            "Psychic",
            "Fairy"
        ],
        "base": {
            "hp": 68,
            "speed": 60,
            "attack": 65,
            "defense": 65,
            "sp.attack": 125,
            "sp.defense": 115
        }
    },
    {
        "id": 283,
        "name": "Surskit",
        "type": [
            "Bug",
            "Water"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 30,
            "defense": 32,
            "sp.attack": 50,
            "sp.defense": 52
        }
    },
    {
        "id": 284,
        "name": "Masquerain",
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 60,
            "defense": 62,
            "sp.attack": 100,
            "sp.defense": 82
        }
    },
    {
        "id": 285,
        "name": "Shroomish",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 40,
            "defense": 60,
            "sp.attack": 40,
            "sp.defense": 60
        }
    },
    {
        "id": 286,
        "name": "Breloom",
        "type": [
            "Grass",
            "Fighting"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 130,
            "defense": 80,
            "sp.attack": 60,
            "sp.defense": 60
        }
    },
    {
        "id": 287,
        "name": "Slakoth",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 60,
            "defense": 60,
            "sp.attack": 35,
            "sp.defense": 35
        }
    },
    {
        "id": 288,
        "name": "Vigoroth",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 80,
            "defense": 80,
            "sp.attack": 55,
            "sp.defense": 55
        }
    },
    {
        "id": 289,
        "name": "Slaking",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 150,
            "speed": 60,
            "attack": 160,
            "defense": 100,
            "sp.attack": 95,
            "sp.defense": 65
        }
    },
    {
        "id": 290,
        "name": "Nincada",
        "type": [
            "Bug",
            "Ground"
        ],
        "base": {
            "hp": 31,
            "speed": 60,
            "attack": 45,
            "defense": 90,
            "sp.attack": 30,
            "sp.defense": 30
        }
    },
    {
        "id": 291,
        "name": "Ninjask",
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "hp": 61,
            "speed": 60,
            "attack": 90,
            "defense": 45,
            "sp.attack": 50,
            "sp.defense": 50
        }
    },
    {
        "id": 292,
        "name": "Shedinja",
        "type": [
            "Bug",
            "Ghost"
        ],
        "base": {
            "hp": 1,
            "speed": 60,
            "attack": 90,
            "defense": 45,
            "sp.attack": 30,
            "sp.defense": 30
        }
    },
    {
        "id": 293,
        "name": "Whismur",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 64,
            "speed": 60,
            "attack": 51,
            "defense": 23,
            "sp.attack": 51,
            "sp.defense": 23
        }
    },
    {
        "id": 294,
        "name": "Loudred",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 84,
            "speed": 60,
            "attack": 71,
            "defense": 43,
            "sp.attack": 71,
            "sp.defense": 43
        }
    },
    {
        "id": 295,
        "name": "Exploud",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 104,
            "speed": 60,
            "attack": 91,
            "defense": 63,
            "sp.attack": 91,
            "sp.defense": 73
        }
    },
    {
        "id": 296,
        "name": "Makuhita",
        "type": [
            "Fighting"
        ],
        "base": {
            "hp": 72,
            "speed": 60,
            "attack": 60,
            "defense": 30,
            "sp.attack": 20,
            "sp.defense": 30
        }
    },
    {
        "id": 297,
        "name": "Hariyama",
        "type": [
            "Fighting"
        ],
        "base": {
            "hp": 144,
            "speed": 60,
            "attack": 120,
            "defense": 60,
            "sp.attack": 40,
            "sp.defense": 60
        }
    },
    {
        "id": 298,
        "name": "Azurill",
        "type": [
            "Normal",
            "Fairy"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 20,
            "defense": 40,
            "sp.attack": 20,
            "sp.defense": 40
        }
    },
    {
        "id": 299,
        "name": "Nosepass",
        "type": [
            "Rock"
        ],
        "base": {
            "hp": 30,
            "speed": 60,
            "attack": 45,
            "defense": 135,
            "sp.attack": 45,
            "sp.defense": 90
        }
    },
    {
        "id": 300,
        "name": "Skitty",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 45,
            "defense": 45,
            "sp.attack": 35,
            "sp.defense": 35
        }
    },
    {
        "id": 301,
        "name": "Delcatty",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 65,
            "defense": 65,
            "sp.attack": 55,
            "sp.defense": 55
        }
    },
    {
        "id": 302,
        "name": "Sableye",
        "type": [
            "Dark",
            "Ghost"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 75,
            "defense": 75,
            "sp.attack": 65,
            "sp.defense": 65
        }
    },
    {
        "id": 303,
        "name": "Mawile",
        "type": [
            "Steel",
            "Fairy"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 85,
            "defense": 85,
            "sp.attack": 55,
            "sp.defense": 55
        }
    },
    {
        "id": 304,
        "name": "Aron",
        "type": [
            "Steel",
            "Rock"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 70,
            "defense": 100,
            "sp.attack": 40,
            "sp.defense": 40
        }
    },
    {
        "id": 305,
        "name": "Lairon",
        "type": [
            "Steel",
            "Rock"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 90,
            "defense": 140,
            "sp.attack": 50,
            "sp.defense": 50
        }
    },
    {
        "id": 306,
        "name": "Aggron",
        "type": [
            "Steel",
            "Rock"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 110,
            "defense": 180,
            "sp.attack": 60,
            "sp.defense": 60
        }
    },
    {
        "id": 307,
        "name": "Meditite",
        "type": [
            "Fighting",
            "Psychic"
        ],
        "base": {
            "hp": 30,
            "speed": 60,
            "attack": 40,
            "defense": 55,
            "sp.attack": 40,
            "sp.defense": 55
        }
    },
    {
        "id": 308,
        "name": "Medicham",
        "type": [
            "Fighting",
            "Psychic"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 60,
            "defense": 75,
            "sp.attack": 60,
            "sp.defense": 75
        }
    },
    {
        "id": 309,
        "name": "Electrike",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 45,
            "defense": 40,
            "sp.attack": 65,
            "sp.defense": 40
        }
    },
    {
        "id": 310,
        "name": "Manectric",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 75,
            "defense": 60,
            "sp.attack": 105,
            "sp.defense": 60
        }
    },
    {
        "id": 311,
        "name": "Plusle",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 50,
            "defense": 40,
            "sp.attack": 85,
            "sp.defense": 75
        }
    },
    {
        "id": 312,
        "name": "Minun",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 40,
            "defense": 50,
            "sp.attack": 75,
            "sp.defense": 85
        }
    },
    {
        "id": 313,
        "name": "Volbeat",
        "type": [
            "Bug"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 73,
            "defense": 75,
            "sp.attack": 47,
            "sp.defense": 85
        }
    },
    {
        "id": 314,
        "name": "Illumise",
        "type": [
            "Bug"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 47,
            "defense": 75,
            "sp.attack": 73,
            "sp.defense": 85
        }
    },
    {
        "id": 315,
        "name": "Roselia",
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 60,
            "defense": 45,
            "sp.attack": 100,
            "sp.defense": 80
        }
    },
    {
        "id": 316,
        "name": "Gulpin",
        "type": [
            "Poison"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 43,
            "defense": 53,
            "sp.attack": 43,
            "sp.defense": 53
        }
    },
    {
        "id": 317,
        "name": "Swalot",
        "type": [
            "Poison"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 73,
            "defense": 83,
            "sp.attack": 73,
            "sp.defense": 83
        }
    },
    {
        "id": 318,
        "name": "Carvanha",
        "type": [
            "Water",
            "Dark"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 90,
            "defense": 20,
            "sp.attack": 65,
            "sp.defense": 20
        }
    },
    {
        "id": 319,
        "name": "Sharpedo",
        "type": [
            "Water",
            "Dark"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 120,
            "defense": 40,
            "sp.attack": 95,
            "sp.defense": 40
        }
    },
    {
        "id": 320,
        "name": "Wailmer",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 130,
            "speed": 60,
            "attack": 70,
            "defense": 35,
            "sp.attack": 70,
            "sp.defense": 35
        }
    },
    {
        "id": 321,
        "name": "Wailord",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 170,
            "speed": 60,
            "attack": 90,
            "defense": 45,
            "sp.attack": 90,
            "sp.defense": 45
        }
    },
    {
        "id": 322,
        "name": "Numel",
        "type": [
            "Fire",
            "Ground"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 60,
            "defense": 40,
            "sp.attack": 65,
            "sp.defense": 45
        }
    },
    {
        "id": 323,
        "name": "Camerupt",
        "type": [
            "Fire",
            "Ground"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 100,
            "defense": 70,
            "sp.attack": 105,
            "sp.defense": 75
        }
    },
    {
        "id": 324,
        "name": "Torkoal",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 85,
            "defense": 140,
            "sp.attack": 85,
            "sp.defense": 70
        }
    },
    {
        "id": 325,
        "name": "Spoink",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 25,
            "defense": 35,
            "sp.attack": 70,
            "sp.defense": 80
        }
    },
    {
        "id": 326,
        "name": "Grumpig",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 45,
            "defense": 65,
            "sp.attack": 90,
            "sp.defense": 110
        }
    },
    {
        "id": 327,
        "name": "Spinda",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 60,
            "defense": 60,
            "sp.attack": 60,
            "sp.defense": 60
        }
    },
    {
        "id": 328,
        "name": "Trapinch",
        "type": [
            "Ground"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 100,
            "defense": 45,
            "sp.attack": 45,
            "sp.defense": 45
        }
    },
    {
        "id": 329,
        "name": "Vibrava",
        "type": [
            "Ground",
            "Dragon"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 70,
            "defense": 50,
            "sp.attack": 50,
            "sp.defense": 50
        }
    },
    {
        "id": 330,
        "name": "Flygon",
        "type": [
            "Ground",
            "Dragon"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 100,
            "defense": 80,
            "sp.attack": 80,
            "sp.defense": 80
        }
    },
    {
        "id": 331,
        "name": "Cacnea",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 85,
            "defense": 40,
            "sp.attack": 85,
            "sp.defense": 40
        }
    },
    {
        "id": 332,
        "name": "Cacturne",
        "type": [
            "Grass",
            "Dark"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 115,
            "defense": 60,
            "sp.attack": 115,
            "sp.defense": 60
        }
    },
    {
        "id": 333,
        "name": "Swablu",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 40,
            "defense": 60,
            "sp.attack": 40,
            "sp.defense": 75
        }
    },
    {
        "id": 334,
        "name": "Altaria",
        "type": [
            "Dragon",
            "Flying"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 70,
            "defense": 90,
            "sp.attack": 70,
            "sp.defense": 105
        }
    },
    {
        "id": 335,
        "name": "Zangoose",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 73,
            "speed": 60,
            "attack": 115,
            "defense": 60,
            "sp.attack": 60,
            "sp.defense": 60
        }
    },
    {
        "id": 336,
        "name": "Seviper",
        "type": [
            "Poison"
        ],
        "base": {
            "hp": 73,
            "speed": 60,
            "attack": 100,
            "defense": 60,
            "sp.attack": 100,
            "sp.defense": 60
        }
    },
    {
        "id": 337,
        "name": "Lunatone",
        "type": [
            "Rock",
            "Psychic"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 55,
            "defense": 65,
            "sp.attack": 95,
            "sp.defense": 85
        }
    },
    {
        "id": 338,
        "name": "Solrock",
        "type": [
            "Rock",
            "Psychic"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 95,
            "defense": 85,
            "sp.attack": 55,
            "sp.defense": 65
        }
    },
    {
        "id": 339,
        "name": "Barboach",
        "type": [
            "Water",
            "Ground"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 48,
            "defense": 43,
            "sp.attack": 46,
            "sp.defense": 41
        }
    },
    {
        "id": 340,
        "name": "Whiscash",
        "type": [
            "Water",
            "Ground"
        ],
        "base": {
            "hp": 110,
            "speed": 60,
            "attack": 78,
            "defense": 73,
            "sp.attack": 76,
            "sp.defense": 71
        }
    },
    {
        "id": 341,
        "name": "Corphish",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 43,
            "speed": 60,
            "attack": 80,
            "defense": 65,
            "sp.attack": 50,
            "sp.defense": 35
        }
    },
    {
        "id": 342,
        "name": "Crawdaunt",
        "type": [
            "Water",
            "Dark"
        ],
        "base": {
            "hp": 63,
            "speed": 60,
            "attack": 120,
            "defense": 85,
            "sp.attack": 90,
            "sp.defense": 55
        }
    },
    {
        "id": 343,
        "name": "Baltoy",
        "type": [
            "Ground",
            "Psychic"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 40,
            "defense": 55,
            "sp.attack": 40,
            "sp.defense": 70
        }
    },
    {
        "id": 344,
        "name": "Claydol",
        "type": [
            "Ground",
            "Psychic"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 70,
            "defense": 105,
            "sp.attack": 70,
            "sp.defense": 120
        }
    },
    {
        "id": 345,
        "name": "Lileep",
        "type": [
            "Rock",
            "Grass"
        ],
        "base": {
            "hp": 66,
            "speed": 60,
            "attack": 41,
            "defense": 77,
            "sp.attack": 61,
            "sp.defense": 87
        }
    },
    {
        "id": 346,
        "name": "Cradily",
        "type": [
            "Rock",
            "Grass"
        ],
        "base": {
            "hp": 86,
            "speed": 60,
            "attack": 81,
            "defense": 97,
            "sp.attack": 81,
            "sp.defense": 107
        }
    },
    {
        "id": 347,
        "name": "Anorith",
        "type": [
            "Rock",
            "Bug"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 95,
            "defense": 50,
            "sp.attack": 40,
            "sp.defense": 50
        }
    },
    {
        "id": 348,
        "name": "Armaldo",
        "type": [
            "Rock",
            "Bug"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 125,
            "defense": 100,
            "sp.attack": 70,
            "sp.defense": 80
        }
    },
    {
        "id": 349,
        "name": "Feebas",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 20,
            "speed": 60,
            "attack": 15,
            "defense": 20,
            "sp.attack": 10,
            "sp.defense": 55
        }
    },
    {
        "id": 350,
        "name": "Milotic",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 95,
            "speed": 60,
            "attack": 60,
            "defense": 79,
            "sp.attack": 100,
            "sp.defense": 125
        }
    },
    {
        "id": 351,
        "name": "Castform",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 70,
            "defense": 70,
            "sp.attack": 70,
            "sp.defense": 70
        }
    },
    {
        "id": 352,
        "name": "Kecleon",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 90,
            "defense": 70,
            "sp.attack": 60,
            "sp.defense": 120
        }
    },
    {
        "id": 353,
        "name": "Shuppet",
        "type": [
            "Ghost"
        ],
        "base": {
            "hp": 44,
            "speed": 60,
            "attack": 75,
            "defense": 35,
            "sp.attack": 63,
            "sp.defense": 33
        }
    },
    {
        "id": 354,
        "name": "Banette",
        "type": [
            "Ghost"
        ],
        "base": {
            "hp": 64,
            "speed": 60,
            "attack": 115,
            "defense": 65,
            "sp.attack": 83,
            "sp.defense": 63
        }
    },
    {
        "id": 355,
        "name": "Duskull",
        "type": [
            "Ghost"
        ],
        "base": {
            "hp": 20,
            "speed": 60,
            "attack": 40,
            "defense": 90,
            "sp.attack": 30,
            "sp.defense": 90
        }
    },
    {
        "id": 356,
        "name": "Dusclops",
        "type": [
            "Ghost"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 70,
            "defense": 130,
            "sp.attack": 60,
            "sp.defense": 130
        }
    },
    {
        "id": 357,
        "name": "Tropius",
        "type": [
            "Grass",
            "Flying"
        ],
        "base": {
            "hp": 99,
            "speed": 60,
            "attack": 68,
            "defense": 83,
            "sp.attack": 72,
            "sp.defense": 87
        }
    },
    {
        "id": 358,
        "name": "Chimecho",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 50,
            "defense": 80,
            "sp.attack": 95,
            "sp.defense": 90
        }
    },
    {
        "id": 359,
        "name": "Absol",
        "type": [
            "Dark"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 130,
            "defense": 60,
            "sp.attack": 75,
            "sp.defense": 60
        }
    },
    {
        "id": 360,
        "name": "Wynaut",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 95,
            "speed": 60,
            "attack": 23,
            "defense": 48,
            "sp.attack": 23,
            "sp.defense": 48
        }
    },
    {
        "id": 361,
        "name": "Snorunt",
        "type": [
            "Ice"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 50,
            "defense": 50,
            "sp.attack": 50,
            "sp.defense": 50
        }
    },
    {
        "id": 362,
        "name": "Glalie",
        "type": [
            "Ice"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 80,
            "defense": 80,
            "sp.attack": 80,
            "sp.defense": 80
        }
    },
    {
        "id": 363,
        "name": "Spheal",
        "type": [
            "Ice",
            "Water"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 40,
            "defense": 50,
            "sp.attack": 55,
            "sp.defense": 50
        }
    },
    {
        "id": 364,
        "name": "Sealeo",
        "type": [
            "Ice",
            "Water"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 60,
            "defense": 70,
            "sp.attack": 75,
            "sp.defense": 70
        }
    },
    {
        "id": 365,
        "name": "Walrein",
        "type": [
            "Ice",
            "Water"
        ],
        "base": {
            "hp": 110,
            "speed": 60,
            "attack": 80,
            "defense": 90,
            "sp.attack": 95,
            "sp.defense": 90
        }
    },
    {
        "id": 366,
        "name": "Clamperl",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 35,
            "speed": 60,
            "attack": 64,
            "defense": 85,
            "sp.attack": 74,
            "sp.defense": 55
        }
    },
    {
        "id": 367,
        "name": "Huntail",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 104,
            "defense": 105,
            "sp.attack": 94,
            "sp.defense": 75
        }
    },
    {
        "id": 368,
        "name": "Gorebyss",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 84,
            "defense": 105,
            "sp.attack": 114,
            "sp.defense": 75
        }
    },
    {
        "id": 369,
        "name": "Relicanth",
        "type": [
            "Water",
            "Rock"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 90,
            "defense": 130,
            "sp.attack": 45,
            "sp.defense": 65
        }
    },
    {
        "id": 370,
        "name": "Luvdisc",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 43,
            "speed": 60,
            "attack": 30,
            "defense": 55,
            "sp.attack": 40,
            "sp.defense": 65
        }
    },
    {
        "id": 371,
        "name": "Bagon",
        "type": [
            "Dragon"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 75,
            "defense": 60,
            "sp.attack": 40,
            "sp.defense": 30
        }
    },
    {
        "id": 372,
        "name": "Shelgon",
        "type": [
            "Dragon"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 95,
            "defense": 100,
            "sp.attack": 60,
            "sp.defense": 50
        }
    },
    {
        "id": 373,
        "name": "Salamence",
        "type": [
            "Dragon",
            "Flying"
        ],
        "base": {
            "hp": 95,
            "speed": 60,
            "attack": 135,
            "defense": 80,
            "sp.attack": 110,
            "sp.defense": 80
        }
    },
    {
        "id": 374,
        "name": "Beldum",
        "type": [
            "Steel",
            "Psychic"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 55,
            "defense": 80,
            "sp.attack": 35,
            "sp.defense": 60
        }
    },
    {
        "id": 375,
        "name": "Metang",
        "type": [
            "Steel",
            "Psychic"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 75,
            "defense": 100,
            "sp.attack": 55,
            "sp.defense": 80
        }
    },
    {
        "id": 376,
        "name": "Metagross",
        "type": [
            "Steel",
            "Psychic"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 135,
            "defense": 130,
            "sp.attack": 95,
            "sp.defense": 90
        }
    },
    {
        "id": 377,
        "name": "Regirock",
        "type": [
            "Rock"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 100,
            "defense": 200,
            "sp.attack": 50,
            "sp.defense": 100
        }
    },
    {
        "id": 378,
        "name": "Regice",
        "type": [
            "Ice"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 50,
            "defense": 100,
            "sp.attack": 100,
            "sp.defense": 200
        }
    },
    {
        "id": 379,
        "name": "Registeel",
        "type": [
            "Steel"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 75,
            "defense": 150,
            "sp.attack": 75,
            "sp.defense": 150
        }
    },
    {
        "id": 380,
        "name": "Latias",
        "type": [
            "Dragon",
            "Psychic"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 80,
            "defense": 90,
            "sp.attack": 110,
            "sp.defense": 130
        }
    },
    {
        "id": 381,
        "name": "Latios",
        "type": [
            "Dragon",
            "Psychic"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 90,
            "defense": 80,
            "sp.attack": 130,
            "sp.defense": 110
        }
    },
    {
        "id": 382,
        "name": "Kyogre",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 100,
            "defense": 90,
            "sp.attack": 150,
            "sp.defense": 140
        }
    },
    {
        "id": 383,
        "name": "Groudon",
        "type": [
            "Ground"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 150,
            "defense": 140,
            "sp.attack": 100,
            "sp.defense": 90
        }
    },
    {
        "id": 384,
        "name": "Rayquaza",
        "type": [
            "Dragon",
            "Flying"
        ],
        "base": {
            "hp": 105,
            "speed": 60,
            "attack": 150,
            "defense": 90,
            "sp.attack": 150,
            "sp.defense": 90
        }
    },
    {
        "id": 385,
        "name": "Jirachi",
        "type": [
            "Steel",
            "Psychic"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 100,
            "defense": 100,
            "sp.attack": 100,
            "sp.defense": 100
        }
    },
    {
        "id": 386,
        "name": "Deoxys",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 150,
            "defense": 50,
            "sp.attack": 150,
            "sp.defense": 50
        }
    },
    {
        "id": 387,
        "name": "Turtwig",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 68,
            "defense": 64,
            "sp.attack": 45,
            "sp.defense": 55
        }
    },
    {
        "id": 388,
        "name": "Grotle",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 89,
            "defense": 85,
            "sp.attack": 55,
            "sp.defense": 65
        }
    },
    {
        "id": 389,
        "name": "Torterra",
        "type": [
            "Grass",
            "Ground"
        ],
        "base": {
            "hp": 95,
            "speed": 60,
            "attack": 109,
            "defense": 105,
            "sp.attack": 75,
            "sp.defense": 85
        }
    },
    {
        "id": 390,
        "name": "Chimchar",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 44,
            "speed": 60,
            "attack": 58,
            "defense": 44,
            "sp.attack": 58,
            "sp.defense": 44
        }
    },
    {
        "id": 391,
        "name": "Monferno",
        "type": [
            "Fire",
            "Fighting"
        ],
        "base": {
            "hp": 64,
            "speed": 60,
            "attack": 78,
            "defense": 52,
            "sp.attack": 78,
            "sp.defense": 52
        }
    },
    {
        "id": 392,
        "name": "Infernape",
        "type": [
            "Fire",
            "Fighting"
        ],
        "base": {
            "hp": 76,
            "speed": 60,
            "attack": 104,
            "defense": 71,
            "sp.attack": 104,
            "sp.defense": 71
        }
    },
    {
        "id": 393,
        "name": "Piplup",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 53,
            "speed": 60,
            "attack": 51,
            "defense": 53,
            "sp.attack": 61,
            "sp.defense": 56
        }
    },
    {
        "id": 394,
        "name": "Prinplup",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 64,
            "speed": 60,
            "attack": 66,
            "defense": 68,
            "sp.attack": 81,
            "sp.defense": 76
        }
    },
    {
        "id": 395,
        "name": "Empoleon",
        "type": [
            "Water",
            "Steel"
        ],
        "base": {
            "hp": 84,
            "speed": 60,
            "attack": 86,
            "defense": 88,
            "sp.attack": 111,
            "sp.defense": 101
        }
    },
    {
        "id": 396,
        "name": "Starly",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 55,
            "defense": 30,
            "sp.attack": 30,
            "sp.defense": 30
        }
    },
    {
        "id": 397,
        "name": "Staravia",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 75,
            "defense": 50,
            "sp.attack": 40,
            "sp.defense": 40
        }
    },
    {
        "id": 398,
        "name": "Staraptor",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 85,
            "speed": 60,
            "attack": 120,
            "defense": 70,
            "sp.attack": 50,
            "sp.defense": 60
        }
    },
    {
        "id": 399,
        "name": "Bidoof",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 59,
            "speed": 60,
            "attack": 45,
            "defense": 40,
            "sp.attack": 35,
            "sp.defense": 40
        }
    },
    {
        "id": 400,
        "name": "Bibarel",
        "type": [
            "Normal",
            "Water"
        ],
        "base": {
            "hp": 79,
            "speed": 60,
            "attack": 85,
            "defense": 60,
            "sp.attack": 55,
            "sp.defense": 60
        }
    },
    {
        "id": 401,
        "name": "Kricketot",
        "type": [
            "Bug"
        ],
        "base": {
            "hp": 37,
            "speed": 60,
            "attack": 25,
            "defense": 41,
            "sp.attack": 25,
            "sp.defense": 41
        }
    },
    {
        "id": 402,
        "name": "Kricketune",
        "type": [
            "Bug"
        ],
        "base": {
            "hp": 77,
            "speed": 60,
            "attack": 85,
            "defense": 51,
            "sp.attack": 55,
            "sp.defense": 51
        }
    },
    {
        "id": 403,
        "name": "Shinx",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 65,
            "defense": 34,
            "sp.attack": 40,
            "sp.defense": 34
        }
    },
    {
        "id": 404,
        "name": "Luxio",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 85,
            "defense": 49,
            "sp.attack": 60,
            "sp.defense": 49
        }
    },
    {
        "id": 405,
        "name": "Luxray",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 120,
            "defense": 79,
            "sp.attack": 95,
            "sp.defense": 79
        }
    },
    {
        "id": 406,
        "name": "Budew",
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 30,
            "defense": 35,
            "sp.attack": 50,
            "sp.defense": 70
        }
    },
    {
        "id": 407,
        "name": "Roserade",
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 70,
            "defense": 65,
            "sp.attack": 125,
            "sp.defense": 105
        }
    },
    {
        "id": 408,
        "name": "Cranidos",
        "type": [
            "Rock"
        ],
        "base": {
            "hp": 67,
            "speed": 60,
            "attack": 125,
            "defense": 40,
            "sp.attack": 30,
            "sp.defense": 30
        }
    },
    {
        "id": 409,
        "name": "Rampardos",
        "type": [
            "Rock"
        ],
        "base": {
            "hp": 97,
            "speed": 60,
            "attack": 165,
            "defense": 60,
            "sp.attack": 65,
            "sp.defense": 50
        }
    },
    {
        "id": 410,
        "name": "Shieldon",
        "type": [
            "Rock",
            "Steel"
        ],
        "base": {
            "hp": 30,
            "speed": 60,
            "attack": 42,
            "defense": 118,
            "sp.attack": 42,
            "sp.defense": 88
        }
    },
    {
        "id": 411,
        "name": "Bastiodon",
        "type": [
            "Rock",
            "Steel"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 52,
            "defense": 168,
            "sp.attack": 47,
            "sp.defense": 138
        }
    },
    {
        "id": 412,
        "name": "Burmy",
        "type": [
            "Bug"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 29,
            "defense": 45,
            "sp.attack": 29,
            "sp.defense": 45
        }
    },
    {
        "id": 413,
        "name": "Wormadam",
        "type": [
            "Bug",
            "Grass"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 59,
            "defense": 85,
            "sp.attack": 79,
            "sp.defense": 105
        }
    },
    {
        "id": 414,
        "name": "Mothim",
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 94,
            "defense": 50,
            "sp.attack": 94,
            "sp.defense": 50
        }
    },
    {
        "id": 415,
        "name": "Combee",
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "hp": 30,
            "speed": 60,
            "attack": 30,
            "defense": 42,
            "sp.attack": 30,
            "sp.defense": 42
        }
    },
    {
        "id": 416,
        "name": "Vespiquen",
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 80,
            "defense": 102,
            "sp.attack": 80,
            "sp.defense": 102
        }
    },
    {
        "id": 417,
        "name": "Pachirisu",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 45,
            "defense": 70,
            "sp.attack": 45,
            "sp.defense": 90
        }
    },
    {
        "id": 418,
        "name": "Buizel",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 65,
            "defense": 35,
            "sp.attack": 60,
            "sp.defense": 30
        }
    },
    {
        "id": 419,
        "name": "Floatzel",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 85,
            "speed": 60,
            "attack": 105,
            "defense": 55,
            "sp.attack": 85,
            "sp.defense": 50
        }
    },
    {
        "id": 420,
        "name": "Cherubi",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 35,
            "defense": 45,
            "sp.attack": 62,
            "sp.defense": 53
        }
    },
    {
        "id": 421,
        "name": "Cherrim",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 60,
            "defense": 70,
            "sp.attack": 87,
            "sp.defense": 78
        }
    },
    {
        "id": 422,
        "name": "Shellos",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 76,
            "speed": 60,
            "attack": 48,
            "defense": 48,
            "sp.attack": 57,
            "sp.defense": 62
        }
    },
    {
        "id": 423,
        "name": "Gastrodon",
        "type": [
            "Water",
            "Ground"
        ],
        "base": {
            "hp": 111,
            "speed": 60,
            "attack": 83,
            "defense": 68,
            "sp.attack": 92,
            "sp.defense": 82
        }
    },
    {
        "id": 424,
        "name": "Ambipom",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 100,
            "defense": 66,
            "sp.attack": 60,
            "sp.defense": 66
        }
    },
    {
        "id": 425,
        "name": "Drifloon",
        "type": [
            "Ghost",
            "Flying"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 50,
            "defense": 34,
            "sp.attack": 60,
            "sp.defense": 44
        }
    },
    {
        "id": 426,
        "name": "Drifblim",
        "type": [
            "Ghost",
            "Flying"
        ],
        "base": {
            "hp": 150,
            "speed": 60,
            "attack": 80,
            "defense": 44,
            "sp.attack": 90,
            "sp.defense": 54
        }
    },
    {
        "id": 427,
        "name": "Buneary",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 66,
            "defense": 44,
            "sp.attack": 44,
            "sp.defense": 56
        }
    },
    {
        "id": 428,
        "name": "Lopunny",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 76,
            "defense": 84,
            "sp.attack": 54,
            "sp.defense": 96
        }
    },
    {
        "id": 429,
        "name": "Mismagius",
        "type": [
            "Ghost"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 60,
            "defense": 60,
            "sp.attack": 105,
            "sp.defense": 105
        }
    },
    {
        "id": 430,
        "name": "Honchkrow",
        "type": [
            "Dark",
            "Flying"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 125,
            "defense": 52,
            "sp.attack": 105,
            "sp.defense": 52
        }
    },
    {
        "id": 431,
        "name": "Glameow",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 49,
            "speed": 60,
            "attack": 55,
            "defense": 42,
            "sp.attack": 42,
            "sp.defense": 37
        }
    },
    {
        "id": 432,
        "name": "Purugly",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 71,
            "speed": 60,
            "attack": 82,
            "defense": 64,
            "sp.attack": 64,
            "sp.defense": 59
        }
    },
    {
        "id": 433,
        "name": "Chingling",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 30,
            "defense": 50,
            "sp.attack": 65,
            "sp.defense": 50
        }
    },
    {
        "id": 434,
        "name": "Stunky",
        "type": [
            "Poison",
            "Dark"
        ],
        "base": {
            "hp": 63,
            "speed": 60,
            "attack": 63,
            "defense": 47,
            "sp.attack": 41,
            "sp.defense": 41
        }
    },
    {
        "id": 435,
        "name": "Skuntank",
        "type": [
            "Poison",
            "Dark"
        ],
        "base": {
            "hp": 103,
            "speed": 60,
            "attack": 93,
            "defense": 67,
            "sp.attack": 71,
            "sp.defense": 61
        }
    },
    {
        "id": 436,
        "name": "Bronzor",
        "type": [
            "Steel",
            "Psychic"
        ],
        "base": {
            "hp": 57,
            "speed": 60,
            "attack": 24,
            "defense": 86,
            "sp.attack": 24,
            "sp.defense": 86
        }
    },
    {
        "id": 437,
        "name": "Bronzong",
        "type": [
            "Steel",
            "Psychic"
        ],
        "base": {
            "hp": 67,
            "speed": 60,
            "attack": 89,
            "defense": 116,
            "sp.attack": 79,
            "sp.defense": 116
        }
    },
    {
        "id": 438,
        "name": "Bonsly",
        "type": [
            "Rock"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 80,
            "defense": 95,
            "sp.attack": 10,
            "sp.defense": 45
        }
    },
    {
        "id": 439,
        "name": "Mime Jr.",
        "type": [
            "Psychic",
            "Fairy"
        ],
        "base": {
            "hp": 20,
            "speed": 60,
            "attack": 25,
            "defense": 45,
            "sp.attack": 70,
            "sp.defense": 90
        }
    },
    {
        "id": 440,
        "name": "Happiny",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 5,
            "defense": 5,
            "sp.attack": 15,
            "sp.defense": 65
        }
    },
    {
        "id": 441,
        "name": "Chatot",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 76,
            "speed": 60,
            "attack": 65,
            "defense": 45,
            "sp.attack": 92,
            "sp.defense": 42
        }
    },
    {
        "id": 442,
        "name": "Spiritomb",
        "type": [
            "Ghost",
            "Dark"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 92,
            "defense": 108,
            "sp.attack": 92,
            "sp.defense": 108
        }
    },
    {
        "id": 443,
        "name": "Gible",
        "type": [
            "Dragon",
            "Ground"
        ],
        "base": {
            "hp": 58,
            "speed": 60,
            "attack": 70,
            "defense": 45,
            "sp.attack": 40,
            "sp.defense": 45
        }
    },
    {
        "id": 444,
        "name": "Gabite",
        "type": [
            "Dragon",
            "Ground"
        ],
        "base": {
            "hp": 68,
            "speed": 60,
            "attack": 90,
            "defense": 65,
            "sp.attack": 50,
            "sp.defense": 55
        }
    },
    {
        "id": 445,
        "name": "Garchomp",
        "type": [
            "Dragon",
            "Ground"
        ],
        "base": {
            "hp": 108,
            "speed": 60,
            "attack": 130,
            "defense": 95,
            "sp.attack": 80,
            "sp.defense": 85
        }
    },
    {
        "id": 446,
        "name": "Munchlax",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 135,
            "speed": 60,
            "attack": 85,
            "defense": 40,
            "sp.attack": 40,
            "sp.defense": 85
        }
    },
    {
        "id": 447,
        "name": "Riolu",
        "type": [
            "Fighting"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 70,
            "defense": 40,
            "sp.attack": 35,
            "sp.defense": 40
        }
    },
    {
        "id": 448,
        "name": "Lucario",
        "type": [
            "Fighting",
            "Steel"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 110,
            "defense": 70,
            "sp.attack": 115,
            "sp.defense": 70
        }
    },
    {
        "id": 449,
        "name": "Hippopotas",
        "type": [
            "Ground"
        ],
        "base": {
            "hp": 68,
            "speed": 60,
            "attack": 72,
            "defense": 78,
            "sp.attack": 38,
            "sp.defense": 42
        }
    },
    {
        "id": 450,
        "name": "Hippowdon",
        "type": [
            "Ground"
        ],
        "base": {
            "hp": 108,
            "speed": 60,
            "attack": 112,
            "defense": 118,
            "sp.attack": 68,
            "sp.defense": 72
        }
    },
    {
        "id": 451,
        "name": "Skorupi",
        "type": [
            "Poison",
            "Bug"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 50,
            "defense": 90,
            "sp.attack": 30,
            "sp.defense": 55
        }
    },
    {
        "id": 452,
        "name": "Drapion",
        "type": [
            "Poison",
            "Dark"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 90,
            "defense": 110,
            "sp.attack": 60,
            "sp.defense": 75
        }
    },
    {
        "id": 453,
        "name": "Croagunk",
        "type": [
            "Poison",
            "Fighting"
        ],
        "base": {
            "hp": 48,
            "speed": 60,
            "attack": 61,
            "defense": 40,
            "sp.attack": 61,
            "sp.defense": 40
        }
    },
    {
        "id": 454,
        "name": "Toxicroak",
        "type": [
            "Poison",
            "Fighting"
        ],
        "base": {
            "hp": 83,
            "speed": 60,
            "attack": 106,
            "defense": 65,
            "sp.attack": 86,
            "sp.defense": 65
        }
    },
    {
        "id": 455,
        "name": "Carnivine",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 74,
            "speed": 60,
            "attack": 100,
            "defense": 72,
            "sp.attack": 90,
            "sp.defense": 72
        }
    },
    {
        "id": 456,
        "name": "Finneon",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 49,
            "speed": 60,
            "attack": 49,
            "defense": 56,
            "sp.attack": 49,
            "sp.defense": 61
        }
    },
    {
        "id": 457,
        "name": "Lumineon",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 69,
            "speed": 60,
            "attack": 69,
            "defense": 76,
            "sp.attack": 69,
            "sp.defense": 86
        }
    },
    {
        "id": 458,
        "name": "Mantyke",
        "type": [
            "Water",
            "Flying"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 20,
            "defense": 50,
            "sp.attack": 60,
            "sp.defense": 120
        }
    },
    {
        "id": 459,
        "name": "Snover",
        "type": [
            "Grass",
            "Ice"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 62,
            "defense": 50,
            "sp.attack": 62,
            "sp.defense": 60
        }
    },
    {
        "id": 460,
        "name": "Abomasnow",
        "type": [
            "Grass",
            "Ice"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 92,
            "defense": 75,
            "sp.attack": 92,
            "sp.defense": 85
        }
    },
    {
        "id": 461,
        "name": "Weavile",
        "type": [
            "Dark",
            "Ice"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 120,
            "defense": 65,
            "sp.attack": 45,
            "sp.defense": 85
        }
    },
    {
        "id": 462,
        "name": "Magnezone",
        "type": [
            "Electric",
            "Steel"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 70,
            "defense": 115,
            "sp.attack": 130,
            "sp.defense": 90
        }
    },
    {
        "id": 463,
        "name": "Lickilicky",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 110,
            "speed": 60,
            "attack": 85,
            "defense": 95,
            "sp.attack": 80,
            "sp.defense": 95
        }
    },
    {
        "id": 464,
        "name": "Rhyperior",
        "type": [
            "Ground",
            "Rock"
        ],
        "base": {
            "hp": 115,
            "speed": 60,
            "attack": 140,
            "defense": 130,
            "sp.attack": 55,
            "sp.defense": 55
        }
    },
    {
        "id": 465,
        "name": "Tangrowth",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 100,
            "defense": 125,
            "sp.attack": 110,
            "sp.defense": 50
        }
    },
    {
        "id": 466,
        "name": "Electivire",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 123,
            "defense": 67,
            "sp.attack": 95,
            "sp.defense": 85
        }
    },
    {
        "id": 467,
        "name": "Magmortar",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 95,
            "defense": 67,
            "sp.attack": 125,
            "sp.defense": 95
        }
    },
    {
        "id": 468,
        "name": "Togekiss",
        "type": [
            "Fairy",
            "Flying"
        ],
        "base": {
            "hp": 85,
            "speed": 60,
            "attack": 50,
            "defense": 95,
            "sp.attack": 120,
            "sp.defense": 115
        }
    },
    {
        "id": 469,
        "name": "Yanmega",
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "hp": 86,
            "speed": 60,
            "attack": 76,
            "defense": 86,
            "sp.attack": 116,
            "sp.defense": 56
        }
    },
    {
        "id": 470,
        "name": "Leafeon",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 110,
            "defense": 130,
            "sp.attack": 60,
            "sp.defense": 65
        }
    },
    {
        "id": 471,
        "name": "Glaceon",
        "type": [
            "Ice"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 60,
            "defense": 110,
            "sp.attack": 130,
            "sp.defense": 95
        }
    },
    {
        "id": 472,
        "name": "Gliscor",
        "type": [
            "Ground",
            "Flying"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 95,
            "defense": 125,
            "sp.attack": 45,
            "sp.defense": 75
        }
    },
    {
        "id": 473,
        "name": "Mamoswine",
        "type": [
            "Ice",
            "Ground"
        ],
        "base": {
            "hp": 110,
            "speed": 60,
            "attack": 130,
            "defense": 80,
            "sp.attack": 70,
            "sp.defense": 60
        }
    },
    {
        "id": 474,
        "name": "Porygon-Z",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 85,
            "speed": 60,
            "attack": 80,
            "defense": 70,
            "sp.attack": 135,
            "sp.defense": 75
        }
    },
    {
        "id": 475,
        "name": "Gallade",
        "type": [
            "Psychic",
            "Fighting"
        ],
        "base": {
            "hp": 68,
            "speed": 60,
            "attack": 125,
            "defense": 65,
            "sp.attack": 65,
            "sp.defense": 115
        }
    },
    {
        "id": 476,
        "name": "Probopass",
        "type": [
            "Rock",
            "Steel"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 55,
            "defense": 145,
            "sp.attack": 75,
            "sp.defense": 150
        }
    },
    {
        "id": 477,
        "name": "Dusknoir",
        "type": [
            "Ghost"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 100,
            "defense": 135,
            "sp.attack": 65,
            "sp.defense": 135
        }
    },
    {
        "id": 478,
        "name": "Froslass",
        "type": [
            "Ice",
            "Ghost"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 80,
            "defense": 70,
            "sp.attack": 80,
            "sp.defense": 70
        }
    },
    {
        "id": 479,
        "name": "Rotom",
        "type": [
            "Electric",
            "Ghost"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 50,
            "defense": 77,
            "sp.attack": 95,
            "sp.defense": 77
        }
    },
    {
        "id": 480,
        "name": "Uxie",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 75,
            "defense": 130,
            "sp.attack": 75,
            "sp.defense": 130
        }
    },
    {
        "id": 481,
        "name": "Mesprit",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 105,
            "defense": 105,
            "sp.attack": 105,
            "sp.defense": 105
        }
    },
    {
        "id": 482,
        "name": "Azelf",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 125,
            "defense": 70,
            "sp.attack": 125,
            "sp.defense": 70
        }
    },
    {
        "id": 483,
        "name": "Dialga",
        "type": [
            "Steel",
            "Dragon"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 120,
            "defense": 120,
            "sp.attack": 150,
            "sp.defense": 100
        }
    },
    {
        "id": 484,
        "name": "Palkia",
        "type": [
            "Water",
            "Dragon"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 120,
            "defense": 100,
            "sp.attack": 150,
            "sp.defense": 120
        }
    },
    {
        "id": 485,
        "name": "Heatran",
        "type": [
            "Fire",
            "Steel"
        ],
        "base": {
            "hp": 91,
            "speed": 60,
            "attack": 90,
            "defense": 106,
            "sp.attack": 130,
            "sp.defense": 106
        }
    },
    {
        "id": 486,
        "name": "Regigigas",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 110,
            "speed": 60,
            "attack": 160,
            "defense": 110,
            "sp.attack": 80,
            "sp.defense": 110
        }
    },
    {
        "id": 487,
        "name": "Giratina",
        "type": [
            "Ghost",
            "Dragon"
        ],
        "base": {
            "hp": 150,
            "speed": 60,
            "attack": 100,
            "defense": 120,
            "sp.attack": 100,
            "sp.defense": 120
        }
    },
    {
        "id": 488,
        "name": "Cresselia",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 120,
            "speed": 60,
            "attack": 70,
            "defense": 120,
            "sp.attack": 75,
            "sp.defense": 130
        }
    },
    {
        "id": 489,
        "name": "Phione",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 80,
            "defense": 80,
            "sp.attack": 80,
            "sp.defense": 80
        }
    },
    {
        "id": 490,
        "name": "Manaphy",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 100,
            "defense": 100,
            "sp.attack": 100,
            "sp.defense": 100
        }
    },
    {
        "id": 491,
        "name": "Darkrai",
        "type": [
            "Dark"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 90,
            "defense": 90,
            "sp.attack": 135,
            "sp.defense": 90
        }
    },
    {
        "id": 492,
        "name": "Shaymin",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 100,
            "defense": 100,
            "sp.attack": 100,
            "sp.defense": 100
        }
    },
    {
        "id": 493,
        "name": "Arceus",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 120,
            "speed": 60,
            "attack": 120,
            "defense": 120,
            "sp.attack": 120,
            "sp.defense": 120
        }
    },
    {
        "id": 494,
        "name": "Victini",
        "type": [
            "Psychic",
            "Fire"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 100,
            "defense": 100,
            "sp.attack": 100,
            "sp.defense": 100
        }
    },
    {
        "id": 495,
        "name": "Snivy",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 45,
            "defense": 55,
            "sp.attack": 45,
            "sp.defense": 55
        }
    },
    {
        "id": 496,
        "name": "Servine",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 60,
            "defense": 75,
            "sp.attack": 60,
            "sp.defense": 75
        }
    },
    {
        "id": 497,
        "name": "Serperior",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 75,
            "defense": 95,
            "sp.attack": 75,
            "sp.defense": 95
        }
    },
    {
        "id": 498,
        "name": "Tepig",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 63,
            "defense": 45,
            "sp.attack": 45,
            "sp.defense": 45
        }
    },
    {
        "id": 499,
        "name": "Pignite",
        "type": [
            "Fire",
            "Fighting"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 93,
            "defense": 55,
            "sp.attack": 70,
            "sp.defense": 55
        }
    },
    {
        "id": 500,
        "name": "Emboar",
        "type": [
            "Fire",
            "Fighting"
        ],
        "base": {
            "hp": 110,
            "speed": 60,
            "attack": 123,
            "defense": 65,
            "sp.attack": 100,
            "sp.defense": 65
        }
    },
    {
        "id": 501,
        "name": "Oshawott",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 55,
            "defense": 45,
            "sp.attack": 63,
            "sp.defense": 45
        }
    },
    {
        "id": 502,
        "name": "Dewott",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 75,
            "defense": 60,
            "sp.attack": 83,
            "sp.defense": 60
        }
    },
    {
        "id": 503,
        "name": "Samurott",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 95,
            "speed": 60,
            "attack": 100,
            "defense": 85,
            "sp.attack": 108,
            "sp.defense": 70
        }
    },
    {
        "id": 504,
        "name": "Patrat",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 55,
            "defense": 39,
            "sp.attack": 35,
            "sp.defense": 39
        }
    },
    {
        "id": 505,
        "name": "Watchog",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 85,
            "defense": 69,
            "sp.attack": 60,
            "sp.defense": 69
        }
    },
    {
        "id": 506,
        "name": "Lillipup",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 60,
            "defense": 45,
            "sp.attack": 25,
            "sp.defense": 45
        }
    },
    {
        "id": 507,
        "name": "Herdier",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 80,
            "defense": 65,
            "sp.attack": 35,
            "sp.defense": 65
        }
    },
    {
        "id": 508,
        "name": "Stoutland",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 85,
            "speed": 60,
            "attack": 110,
            "defense": 90,
            "sp.attack": 45,
            "sp.defense": 90
        }
    },
    {
        "id": 509,
        "name": "Purrloin",
        "type": [
            "Dark"
        ],
        "base": {
            "hp": 41,
            "speed": 60,
            "attack": 50,
            "defense": 37,
            "sp.attack": 50,
            "sp.defense": 37
        }
    },
    {
        "id": 510,
        "name": "Liepard",
        "type": [
            "Dark"
        ],
        "base": {
            "hp": 64,
            "speed": 60,
            "attack": 88,
            "defense": 50,
            "sp.attack": 88,
            "sp.defense": 50
        }
    },
    {
        "id": 511,
        "name": "Pansage",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 53,
            "defense": 48,
            "sp.attack": 53,
            "sp.defense": 48
        }
    },
    {
        "id": 512,
        "name": "Simisage",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 98,
            "defense": 63,
            "sp.attack": 98,
            "sp.defense": 63
        }
    },
    {
        "id": 513,
        "name": "Pansear",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 53,
            "defense": 48,
            "sp.attack": 53,
            "sp.defense": 48
        }
    },
    {
        "id": 514,
        "name": "Simisear",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 98,
            "defense": 63,
            "sp.attack": 98,
            "sp.defense": 63
        }
    },
    {
        "id": 515,
        "name": "Panpour",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 53,
            "defense": 48,
            "sp.attack": 53,
            "sp.defense": 48
        }
    },
    {
        "id": 516,
        "name": "Simipour",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 98,
            "defense": 63,
            "sp.attack": 98,
            "sp.defense": 63
        }
    },
    {
        "id": 517,
        "name": "Munna",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 76,
            "speed": 60,
            "attack": 25,
            "defense": 45,
            "sp.attack": 67,
            "sp.defense": 55
        }
    },
    {
        "id": 518,
        "name": "Musharna",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 116,
            "speed": 60,
            "attack": 55,
            "defense": 85,
            "sp.attack": 107,
            "sp.defense": 95
        }
    },
    {
        "id": 519,
        "name": "Pidove",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 55,
            "defense": 50,
            "sp.attack": 36,
            "sp.defense": 30
        }
    },
    {
        "id": 520,
        "name": "Tranquill",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 62,
            "speed": 60,
            "attack": 77,
            "defense": 62,
            "sp.attack": 50,
            "sp.defense": 42
        }
    },
    {
        "id": 521,
        "name": "Unfezant",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 115,
            "defense": 80,
            "sp.attack": 65,
            "sp.defense": 55
        }
    },
    {
        "id": 522,
        "name": "Blitzle",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 60,
            "defense": 32,
            "sp.attack": 50,
            "sp.defense": 32
        }
    },
    {
        "id": 523,
        "name": "Zebstrika",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 100,
            "defense": 63,
            "sp.attack": 80,
            "sp.defense": 63
        }
    },
    {
        "id": 524,
        "name": "Roggenrola",
        "type": [
            "Rock"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 75,
            "defense": 85,
            "sp.attack": 25,
            "sp.defense": 25
        }
    },
    {
        "id": 525,
        "name": "Boldore",
        "type": [
            "Rock"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 105,
            "defense": 105,
            "sp.attack": 50,
            "sp.defense": 40
        }
    },
    {
        "id": 526,
        "name": "Gigalith",
        "type": [
            "Rock"
        ],
        "base": {
            "hp": 85,
            "speed": 60,
            "attack": 135,
            "defense": 130,
            "sp.attack": 60,
            "sp.defense": 80
        }
    },
    {
        "id": 527,
        "name": "Woobat",
        "type": [
            "Psychic",
            "Flying"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 45,
            "defense": 43,
            "sp.attack": 55,
            "sp.defense": 43
        }
    },
    {
        "id": 528,
        "name": "Swoobat",
        "type": [
            "Psychic",
            "Flying"
        ],
        "base": {
            "hp": 67,
            "speed": 60,
            "attack": 57,
            "defense": 55,
            "sp.attack": 77,
            "sp.defense": 55
        }
    },
    {
        "id": 529,
        "name": "Drilbur",
        "type": [
            "Ground"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 85,
            "defense": 40,
            "sp.attack": 30,
            "sp.defense": 45
        }
    },
    {
        "id": 530,
        "name": "Excadrill",
        "type": [
            "Ground",
            "Steel"
        ],
        "base": {
            "hp": 110,
            "speed": 60,
            "attack": 135,
            "defense": 60,
            "sp.attack": 50,
            "sp.defense": 65
        }
    },
    {
        "id": 531,
        "name": "Audino",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 103,
            "speed": 60,
            "attack": 60,
            "defense": 86,
            "sp.attack": 60,
            "sp.defense": 86
        }
    },
    {
        "id": 532,
        "name": "Timburr",
        "type": [
            "Fighting"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 80,
            "defense": 55,
            "sp.attack": 25,
            "sp.defense": 35
        }
    },
    {
        "id": 533,
        "name": "Gurdurr",
        "type": [
            "Fighting"
        ],
        "base": {
            "hp": 85,
            "speed": 60,
            "attack": 105,
            "defense": 85,
            "sp.attack": 40,
            "sp.defense": 50
        }
    },
    {
        "id": 534,
        "name": "Conkeldurr",
        "type": [
            "Fighting"
        ],
        "base": {
            "hp": 105,
            "speed": 60,
            "attack": 140,
            "defense": 95,
            "sp.attack": 55,
            "sp.defense": 65
        }
    },
    {
        "id": 535,
        "name": "Tympole",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 50,
            "defense": 40,
            "sp.attack": 50,
            "sp.defense": 40
        }
    },
    {
        "id": 536,
        "name": "Palpitoad",
        "type": [
            "Water",
            "Ground"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 65,
            "defense": 55,
            "sp.attack": 65,
            "sp.defense": 55
        }
    },
    {
        "id": 537,
        "name": "Seismitoad",
        "type": [
            "Water",
            "Ground"
        ],
        "base": {
            "hp": 105,
            "speed": 60,
            "attack": 95,
            "defense": 75,
            "sp.attack": 85,
            "sp.defense": 75
        }
    },
    {
        "id": 538,
        "name": "Throh",
        "type": [
            "Fighting"
        ],
        "base": {
            "hp": 120,
            "speed": 60,
            "attack": 100,
            "defense": 85,
            "sp.attack": 30,
            "sp.defense": 85
        }
    },
    {
        "id": 539,
        "name": "Sawk",
        "type": [
            "Fighting"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 125,
            "defense": 75,
            "sp.attack": 30,
            "sp.defense": 75
        }
    },
    {
        "id": 540,
        "name": "Sewaddle",
        "type": [
            "Bug",
            "Grass"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 53,
            "defense": 70,
            "sp.attack": 40,
            "sp.defense": 60
        }
    },
    {
        "id": 541,
        "name": "Swadloon",
        "type": [
            "Bug",
            "Grass"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 63,
            "defense": 90,
            "sp.attack": 50,
            "sp.defense": 80
        }
    },
    {
        "id": 542,
        "name": "Leavanny",
        "type": [
            "Bug",
            "Grass"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 103,
            "defense": 80,
            "sp.attack": 70,
            "sp.defense": 80
        }
    },
    {
        "id": 543,
        "name": "Venipede",
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "hp": 30,
            "speed": 60,
            "attack": 45,
            "defense": 59,
            "sp.attack": 30,
            "sp.defense": 39
        }
    },
    {
        "id": 544,
        "name": "Whirlipede",
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 55,
            "defense": 99,
            "sp.attack": 40,
            "sp.defense": 79
        }
    },
    {
        "id": 545,
        "name": "Scolipede",
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 100,
            "defense": 89,
            "sp.attack": 55,
            "sp.defense": 69
        }
    },
    {
        "id": 546,
        "name": "Cottonee",
        "type": [
            "Grass",
            "Fairy"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 27,
            "defense": 60,
            "sp.attack": 37,
            "sp.defense": 50
        }
    },
    {
        "id": 547,
        "name": "Whimsicott",
        "type": [
            "Grass",
            "Fairy"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 67,
            "defense": 85,
            "sp.attack": 77,
            "sp.defense": 75
        }
    },
    {
        "id": 548,
        "name": "Petilil",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 35,
            "defense": 50,
            "sp.attack": 70,
            "sp.defense": 50
        }
    },
    {
        "id": 549,
        "name": "Lilligant",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 60,
            "defense": 75,
            "sp.attack": 110,
            "sp.defense": 75
        }
    },
    {
        "id": 550,
        "name": "Basculin",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 92,
            "defense": 65,
            "sp.attack": 80,
            "sp.defense": 55
        }
    },
    {
        "id": 551,
        "name": "Sandile",
        "type": [
            "Ground",
            "Dark"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 72,
            "defense": 35,
            "sp.attack": 35,
            "sp.defense": 35
        }
    },
    {
        "id": 552,
        "name": "Krokorok",
        "type": [
            "Ground",
            "Dark"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 82,
            "defense": 45,
            "sp.attack": 45,
            "sp.defense": 45
        }
    },
    {
        "id": 553,
        "name": "Krookodile",
        "type": [
            "Ground",
            "Dark"
        ],
        "base": {
            "hp": 95,
            "speed": 60,
            "attack": 117,
            "defense": 80,
            "sp.attack": 65,
            "sp.defense": 70
        }
    },
    {
        "id": 554,
        "name": "Darumaka",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 90,
            "defense": 45,
            "sp.attack": 15,
            "sp.defense": 45
        }
    },
    {
        "id": 555,
        "name": "Darmanitan",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 105,
            "speed": 60,
            "attack": 140,
            "defense": 55,
            "sp.attack": 30,
            "sp.defense": 55
        }
    },
    {
        "id": 556,
        "name": "Maractus",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 86,
            "defense": 67,
            "sp.attack": 106,
            "sp.defense": 67
        }
    },
    {
        "id": 557,
        "name": "Dwebble",
        "type": [
            "Bug",
            "Rock"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 65,
            "defense": 85,
            "sp.attack": 35,
            "sp.defense": 35
        }
    },
    {
        "id": 558,
        "name": "Crustle",
        "type": [
            "Bug",
            "Rock"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 105,
            "defense": 125,
            "sp.attack": 65,
            "sp.defense": 75
        }
    },
    {
        "id": 559,
        "name": "Scraggy",
        "type": [
            "Dark",
            "Fighting"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 75,
            "defense": 70,
            "sp.attack": 35,
            "sp.defense": 70
        }
    },
    {
        "id": 560,
        "name": "Scrafty",
        "type": [
            "Dark",
            "Fighting"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 90,
            "defense": 115,
            "sp.attack": 45,
            "sp.defense": 115
        }
    },
    {
        "id": 561,
        "name": "Sigilyph",
        "type": [
            "Psychic",
            "Flying"
        ],
        "base": {
            "hp": 72,
            "speed": 60,
            "attack": 58,
            "defense": 80,
            "sp.attack": 103,
            "sp.defense": 80
        }
    },
    {
        "id": 562,
        "name": "Yamask",
        "type": [
            "Ghost"
        ],
        "base": {
            "hp": 38,
            "speed": 60,
            "attack": 30,
            "defense": 85,
            "sp.attack": 55,
            "sp.defense": 65
        }
    },
    {
        "id": 563,
        "name": "Cofagrigus",
        "type": [
            "Ghost"
        ],
        "base": {
            "hp": 58,
            "speed": 60,
            "attack": 50,
            "defense": 145,
            "sp.attack": 95,
            "sp.defense": 105
        }
    },
    {
        "id": 564,
        "name": "Tirtouga",
        "type": [
            "Water",
            "Rock"
        ],
        "base": {
            "hp": 54,
            "speed": 60,
            "attack": 78,
            "defense": 103,
            "sp.attack": 53,
            "sp.defense": 45
        }
    },
    {
        "id": 565,
        "name": "Carracosta",
        "type": [
            "Water",
            "Rock"
        ],
        "base": {
            "hp": 74,
            "speed": 60,
            "attack": 108,
            "defense": 133,
            "sp.attack": 83,
            "sp.defense": 65
        }
    },
    {
        "id": 566,
        "name": "Archen",
        "type": [
            "Rock",
            "Flying"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 112,
            "defense": 45,
            "sp.attack": 74,
            "sp.defense": 45
        }
    },
    {
        "id": 567,
        "name": "Archeops",
        "type": [
            "Rock",
            "Flying"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 140,
            "defense": 65,
            "sp.attack": 112,
            "sp.defense": 65
        }
    },
    {
        "id": 568,
        "name": "Trubbish",
        "type": [
            "Poison"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 50,
            "defense": 62,
            "sp.attack": 40,
            "sp.defense": 62
        }
    },
    {
        "id": 569,
        "name": "Garbodor",
        "type": [
            "Poison"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 95,
            "defense": 82,
            "sp.attack": 60,
            "sp.defense": 82
        }
    },
    {
        "id": 570,
        "name": "Zorua",
        "type": [
            "Dark"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 65,
            "defense": 40,
            "sp.attack": 80,
            "sp.defense": 40
        }
    },
    {
        "id": 571,
        "name": "Zoroark",
        "type": [
            "Dark"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 105,
            "defense": 60,
            "sp.attack": 120,
            "sp.defense": 60
        }
    },
    {
        "id": 572,
        "name": "Minccino",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 50,
            "defense": 40,
            "sp.attack": 40,
            "sp.defense": 40
        }
    },
    {
        "id": 573,
        "name": "Cinccino",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 95,
            "defense": 60,
            "sp.attack": 65,
            "sp.defense": 60
        }
    },
    {
        "id": 574,
        "name": "Gothita",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 30,
            "defense": 50,
            "sp.attack": 55,
            "sp.defense": 65
        }
    },
    {
        "id": 575,
        "name": "Gothorita",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 45,
            "defense": 70,
            "sp.attack": 75,
            "sp.defense": 85
        }
    },
    {
        "id": 576,
        "name": "Gothitelle",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 55,
            "defense": 95,
            "sp.attack": 95,
            "sp.defense": 110
        }
    },
    {
        "id": 577,
        "name": "Solosis",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 30,
            "defense": 40,
            "sp.attack": 105,
            "sp.defense": 50
        }
    },
    {
        "id": 578,
        "name": "Duosion",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 40,
            "defense": 50,
            "sp.attack": 125,
            "sp.defense": 60
        }
    },
    {
        "id": 579,
        "name": "Reuniclus",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 110,
            "speed": 60,
            "attack": 65,
            "defense": 75,
            "sp.attack": 125,
            "sp.defense": 85
        }
    },
    {
        "id": 580,
        "name": "Ducklett",
        "type": [
            "Water",
            "Flying"
        ],
        "base": {
            "hp": 62,
            "speed": 60,
            "attack": 44,
            "defense": 50,
            "sp.attack": 44,
            "sp.defense": 50
        }
    },
    {
        "id": 581,
        "name": "Swanna",
        "type": [
            "Water",
            "Flying"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 87,
            "defense": 63,
            "sp.attack": 87,
            "sp.defense": 63
        }
    },
    {
        "id": 582,
        "name": "Vanillite",
        "type": [
            "Ice"
        ],
        "base": {
            "hp": 36,
            "speed": 60,
            "attack": 50,
            "defense": 50,
            "sp.attack": 65,
            "sp.defense": 60
        }
    },
    {
        "id": 583,
        "name": "Vanillish",
        "type": [
            "Ice"
        ],
        "base": {
            "hp": 51,
            "speed": 60,
            "attack": 65,
            "defense": 65,
            "sp.attack": 80,
            "sp.defense": 75
        }
    },
    {
        "id": 584,
        "name": "Vanilluxe",
        "type": [
            "Ice"
        ],
        "base": {
            "hp": 71,
            "speed": 60,
            "attack": 95,
            "defense": 85,
            "sp.attack": 110,
            "sp.defense": 95
        }
    },
    {
        "id": 585,
        "name": "Deerling",
        "type": [
            "Normal",
            "Grass"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 60,
            "defense": 50,
            "sp.attack": 40,
            "sp.defense": 50
        }
    },
    {
        "id": 586,
        "name": "Sawsbuck",
        "type": [
            "Normal",
            "Grass"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 100,
            "defense": 70,
            "sp.attack": 60,
            "sp.defense": 70
        }
    },
    {
        "id": 587,
        "name": "Emolga",
        "type": [
            "Electric",
            "Flying"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 75,
            "defense": 60,
            "sp.attack": 75,
            "sp.defense": 60
        }
    },
    {
        "id": 588,
        "name": "Karrablast",
        "type": [
            "Bug"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 75,
            "defense": 45,
            "sp.attack": 40,
            "sp.defense": 45
        }
    },
    {
        "id": 589,
        "name": "Escavalier",
        "type": [
            "Bug",
            "Steel"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 135,
            "defense": 105,
            "sp.attack": 60,
            "sp.defense": 105
        }
    },
    {
        "id": 590,
        "name": "Foongus",
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "hp": 69,
            "speed": 60,
            "attack": 55,
            "defense": 45,
            "sp.attack": 55,
            "sp.defense": 55
        }
    },
    {
        "id": 591,
        "name": "Amoonguss",
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "hp": 114,
            "speed": 60,
            "attack": 85,
            "defense": 70,
            "sp.attack": 85,
            "sp.defense": 80
        }
    },
    {
        "id": 592,
        "name": "Frillish",
        "type": [
            "Water",
            "Ghost"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 40,
            "defense": 50,
            "sp.attack": 65,
            "sp.defense": 85
        }
    },
    {
        "id": 593,
        "name": "Jellicent",
        "type": [
            "Water",
            "Ghost"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 60,
            "defense": 70,
            "sp.attack": 85,
            "sp.defense": 105
        }
    },
    {
        "id": 594,
        "name": "Alomomola",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 165,
            "speed": 60,
            "attack": 75,
            "defense": 80,
            "sp.attack": 40,
            "sp.defense": 45
        }
    },
    {
        "id": 595,
        "name": "Joltik",
        "type": [
            "Bug",
            "Electric"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 47,
            "defense": 50,
            "sp.attack": 57,
            "sp.defense": 50
        }
    },
    {
        "id": 596,
        "name": "Galvantula",
        "type": [
            "Bug",
            "Electric"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 77,
            "defense": 60,
            "sp.attack": 97,
            "sp.defense": 60
        }
    },
    {
        "id": 597,
        "name": "Ferroseed",
        "type": [
            "Grass",
            "Steel"
        ],
        "base": {
            "hp": 44,
            "speed": 60,
            "attack": 50,
            "defense": 91,
            "sp.attack": 24,
            "sp.defense": 86
        }
    },
    {
        "id": 598,
        "name": "Ferrothorn",
        "type": [
            "Grass",
            "Steel"
        ],
        "base": {
            "hp": 74,
            "speed": 60,
            "attack": 94,
            "defense": 131,
            "sp.attack": 54,
            "sp.defense": 116
        }
    },
    {
        "id": 599,
        "name": "Klink",
        "type": [
            "Steel"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 55,
            "defense": 70,
            "sp.attack": 45,
            "sp.defense": 60
        }
    },
    {
        "id": 600,
        "name": "Klang",
        "type": [
            "Steel"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 80,
            "defense": 95,
            "sp.attack": 70,
            "sp.defense": 85
        }
    },
    {
        "id": 601,
        "name": "Klinklang",
        "type": [
            "Steel"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 100,
            "defense": 115,
            "sp.attack": 70,
            "sp.defense": 85
        }
    },
    {
        "id": 602,
        "name": "Tynamo",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 35,
            "speed": 60,
            "attack": 55,
            "defense": 40,
            "sp.attack": 45,
            "sp.defense": 40
        }
    },
    {
        "id": 603,
        "name": "Eelektrik",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 85,
            "defense": 70,
            "sp.attack": 75,
            "sp.defense": 70
        }
    },
    {
        "id": 604,
        "name": "Eelektross",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 85,
            "speed": 60,
            "attack": 115,
            "defense": 80,
            "sp.attack": 105,
            "sp.defense": 80
        }
    },
    {
        "id": 605,
        "name": "Elgyem",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 55,
            "defense": 55,
            "sp.attack": 85,
            "sp.defense": 55
        }
    },
    {
        "id": 606,
        "name": "Beheeyem",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 75,
            "defense": 75,
            "sp.attack": 125,
            "sp.defense": 95
        }
    },
    {
        "id": 607,
        "name": "Litwick",
        "type": [
            "Ghost",
            "Fire"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 30,
            "defense": 55,
            "sp.attack": 65,
            "sp.defense": 55
        }
    },
    {
        "id": 608,
        "name": "Lampent",
        "type": [
            "Ghost",
            "Fire"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 40,
            "defense": 60,
            "sp.attack": 95,
            "sp.defense": 60
        }
    },
    {
        "id": 609,
        "name": "Chandelure",
        "type": [
            "Ghost",
            "Fire"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 55,
            "defense": 90,
            "sp.attack": 145,
            "sp.defense": 90
        }
    },
    {
        "id": 610,
        "name": "Axew",
        "type": [
            "Dragon"
        ],
        "base": {
            "hp": 46,
            "speed": 60,
            "attack": 87,
            "defense": 60,
            "sp.attack": 30,
            "sp.defense": 40
        }
    },
    {
        "id": 611,
        "name": "Fraxure",
        "type": [
            "Dragon"
        ],
        "base": {
            "hp": 66,
            "speed": 60,
            "attack": 117,
            "defense": 70,
            "sp.attack": 40,
            "sp.defense": 50
        }
    },
    {
        "id": 612,
        "name": "Haxorus",
        "type": [
            "Dragon"
        ],
        "base": {
            "hp": 76,
            "speed": 60,
            "attack": 147,
            "defense": 90,
            "sp.attack": 60,
            "sp.defense": 70
        }
    },
    {
        "id": 613,
        "name": "Cubchoo",
        "type": [
            "Ice"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 70,
            "defense": 40,
            "sp.attack": 60,
            "sp.defense": 40
        }
    },
    {
        "id": 614,
        "name": "Beartic",
        "type": [
            "Ice"
        ],
        "base": {
            "hp": 95,
            "speed": 60,
            "attack": 130,
            "defense": 80,
            "sp.attack": 70,
            "sp.defense": 80
        }
    },
    {
        "id": 615,
        "name": "Cryogonal",
        "type": [
            "Ice"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 50,
            "defense": 50,
            "sp.attack": 95,
            "sp.defense": 135
        }
    },
    {
        "id": 616,
        "name": "Shelmet",
        "type": [
            "Bug"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 40,
            "defense": 85,
            "sp.attack": 40,
            "sp.defense": 65
        }
    },
    {
        "id": 617,
        "name": "Accelgor",
        "type": [
            "Bug"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 70,
            "defense": 40,
            "sp.attack": 100,
            "sp.defense": 60
        }
    },
    {
        "id": 618,
        "name": "Stunfisk",
        "type": [
            "Ground",
            "Electric"
        ],
        "base": {
            "hp": 109,
            "speed": 60,
            "attack": 66,
            "defense": 84,
            "sp.attack": 81,
            "sp.defense": 99
        }
    },
    {
        "id": 619,
        "name": "Mienfoo",
        "type": [
            "Fighting"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 85,
            "defense": 50,
            "sp.attack": 55,
            "sp.defense": 50
        }
    },
    {
        "id": 620,
        "name": "Mienshao",
        "type": [
            "Fighting"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 125,
            "defense": 60,
            "sp.attack": 95,
            "sp.defense": 60
        }
    },
    {
        "id": 621,
        "name": "Druddigon",
        "type": [
            "Dragon"
        ],
        "base": {
            "hp": 77,
            "speed": 60,
            "attack": 120,
            "defense": 90,
            "sp.attack": 60,
            "sp.defense": 90
        }
    },
    {
        "id": 622,
        "name": "Golett",
        "type": [
            "Ground",
            "Ghost"
        ],
        "base": {
            "hp": 59,
            "speed": 60,
            "attack": 74,
            "defense": 50,
            "sp.attack": 35,
            "sp.defense": 50
        }
    },
    {
        "id": 623,
        "name": "Golurk",
        "type": [
            "Ground",
            "Ghost"
        ],
        "base": {
            "hp": 89,
            "speed": 60,
            "attack": 124,
            "defense": 80,
            "sp.attack": 55,
            "sp.defense": 80
        }
    },
    {
        "id": 624,
        "name": "Pawniard",
        "type": [
            "Dark",
            "Steel"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 85,
            "defense": 70,
            "sp.attack": 40,
            "sp.defense": 40
        }
    },
    {
        "id": 625,
        "name": "Bisharp",
        "type": [
            "Dark",
            "Steel"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 125,
            "defense": 100,
            "sp.attack": 60,
            "sp.defense": 70
        }
    },
    {
        "id": 626,
        "name": "Bouffalant",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 95,
            "speed": 60,
            "attack": 110,
            "defense": 95,
            "sp.attack": 40,
            "sp.defense": 95
        }
    },
    {
        "id": 627,
        "name": "Rufflet",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 83,
            "defense": 50,
            "sp.attack": 37,
            "sp.defense": 50
        }
    },
    {
        "id": 628,
        "name": "Braviary",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 123,
            "defense": 75,
            "sp.attack": 57,
            "sp.defense": 75
        }
    },
    {
        "id": 629,
        "name": "Vullaby",
        "type": [
            "Dark",
            "Flying"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 55,
            "defense": 75,
            "sp.attack": 45,
            "sp.defense": 65
        }
    },
    {
        "id": 630,
        "name": "Mandibuzz",
        "type": [
            "Dark",
            "Flying"
        ],
        "base": {
            "hp": 110,
            "speed": 60,
            "attack": 65,
            "defense": 105,
            "sp.attack": 55,
            "sp.defense": 95
        }
    },
    {
        "id": 631,
        "name": "Heatmor",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 85,
            "speed": 60,
            "attack": 97,
            "defense": 66,
            "sp.attack": 105,
            "sp.defense": 66
        }
    },
    {
        "id": 632,
        "name": "Durant",
        "type": [
            "Bug",
            "Steel"
        ],
        "base": {
            "hp": 58,
            "speed": 60,
            "attack": 109,
            "defense": 112,
            "sp.attack": 48,
            "sp.defense": 48
        }
    },
    {
        "id": 633,
        "name": "Deino",
        "type": [
            "Dark",
            "Dragon"
        ],
        "base": {
            "hp": 52,
            "speed": 60,
            "attack": 65,
            "defense": 50,
            "sp.attack": 45,
            "sp.defense": 50
        }
    },
    {
        "id": 634,
        "name": "Zweilous",
        "type": [
            "Dark",
            "Dragon"
        ],
        "base": {
            "hp": 72,
            "speed": 60,
            "attack": 85,
            "defense": 70,
            "sp.attack": 65,
            "sp.defense": 70
        }
    },
    {
        "id": 635,
        "name": "Hydreigon",
        "type": [
            "Dark",
            "Dragon"
        ],
        "base": {
            "hp": 92,
            "speed": 60,
            "attack": 105,
            "defense": 90,
            "sp.attack": 125,
            "sp.defense": 90
        }
    },
    {
        "id": 636,
        "name": "Larvesta",
        "type": [
            "Bug",
            "Fire"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 85,
            "defense": 55,
            "sp.attack": 50,
            "sp.defense": 55
        }
    },
    {
        "id": 637,
        "name": "Volcarona",
        "type": [
            "Bug",
            "Fire"
        ],
        "base": {
            "hp": 85,
            "speed": 60,
            "attack": 60,
            "defense": 65,
            "sp.attack": 135,
            "sp.defense": 105
        }
    },
    {
        "id": 638,
        "name": "Cobalion",
        "type": [
            "Steel",
            "Fighting"
        ],
        "base": {
            "hp": 91,
            "speed": 60,
            "attack": 90,
            "defense": 129,
            "sp.attack": 90,
            "sp.defense": 72
        }
    },
    {
        "id": 639,
        "name": "Terrakion",
        "type": [
            "Rock",
            "Fighting"
        ],
        "base": {
            "hp": 91,
            "speed": 60,
            "attack": 129,
            "defense": 90,
            "sp.attack": 72,
            "sp.defense": 90
        }
    },
    {
        "id": 640,
        "name": "Virizion",
        "type": [
            "Grass",
            "Fighting"
        ],
        "base": {
            "hp": 91,
            "speed": 60,
            "attack": 90,
            "defense": 72,
            "sp.attack": 90,
            "sp.defense": 129
        }
    },
    {
        "id": 641,
        "name": "Tornadus",
        "type": [
            "Flying"
        ],
        "base": {
            "hp": 79,
            "speed": 60,
            "attack": 115,
            "defense": 70,
            "sp.attack": 125,
            "sp.defense": 80
        }
    },
    {
        "id": 642,
        "name": "Thundurus",
        "type": [
            "Electric",
            "Flying"
        ],
        "base": {
            "hp": 79,
            "speed": 60,
            "attack": 115,
            "defense": 70,
            "sp.attack": 125,
            "sp.defense": 80
        }
    },
    {
        "id": 643,
        "name": "Reshiram",
        "type": [
            "Dragon",
            "Fire"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 120,
            "defense": 100,
            "sp.attack": 150,
            "sp.defense": 120
        }
    },
    {
        "id": 644,
        "name": "Zekrom",
        "type": [
            "Dragon",
            "Electric"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 150,
            "defense": 120,
            "sp.attack": 120,
            "sp.defense": 100
        }
    },
    {
        "id": 645,
        "name": "Landorus",
        "type": [
            "Ground",
            "Flying"
        ],
        "base": {
            "hp": 89,
            "speed": 60,
            "attack": 125,
            "defense": 90,
            "sp.attack": 115,
            "sp.defense": 80
        }
    },
    {
        "id": 646,
        "name": "Kyurem",
        "type": [
            "Dragon",
            "Ice"
        ],
        "base": {
            "hp": 125,
            "speed": 60,
            "attack": 130,
            "defense": 90,
            "sp.attack": 130,
            "sp.defense": 90
        }
    },
    {
        "id": 647,
        "name": "Keldeo",
        "type": [
            "Water",
            "Fighting"
        ],
        "base": {
            "hp": 91,
            "speed": 60,
            "attack": 72,
            "defense": 90,
            "sp.attack": 129,
            "sp.defense": 90
        }
    },
    {
        "id": 648,
        "name": "Meloetta",
        "type": [
            "Normal",
            "Psychic"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 77,
            "defense": 77,
            "sp.attack": 128,
            "sp.defense": 128
        }
    },
    {
        "id": 649,
        "name": "Genesect",
        "type": [
            "Bug",
            "Steel"
        ],
        "base": {
            "hp": 71,
            "speed": 60,
            "attack": 120,
            "defense": 95,
            "sp.attack": 120,
            "sp.defense": 95
        }
    },
    {
        "id": 650,
        "name": "Chespin",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 56,
            "speed": 60,
            "attack": 61,
            "defense": 65,
            "sp.attack": 48,
            "sp.defense": 45
        }
    },
    {
        "id": 651,
        "name": "Quilladin",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 61,
            "speed": 60,
            "attack": 78,
            "defense": 95,
            "sp.attack": 56,
            "sp.defense": 58
        }
    },
    {
        "id": 652,
        "name": "Chesnaught",
        "type": [
            "Grass",
            "Fighting"
        ],
        "base": {
            "hp": 88,
            "speed": 60,
            "attack": 107,
            "defense": 122,
            "sp.attack": 74,
            "sp.defense": 75
        }
    },
    {
        "id": 653,
        "name": "Fennekin",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 45,
            "defense": 40,
            "sp.attack": 62,
            "sp.defense": 60
        }
    },
    {
        "id": 654,
        "name": "Braixen",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 59,
            "speed": 60,
            "attack": 59,
            "defense": 58,
            "sp.attack": 90,
            "sp.defense": 70
        }
    },
    {
        "id": 655,
        "name": "Delphox",
        "type": [
            "Fire",
            "Psychic"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 69,
            "defense": 72,
            "sp.attack": 114,
            "sp.defense": 100
        }
    },
    {
        "id": 656,
        "name": "Froakie",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 41,
            "speed": 60,
            "attack": 56,
            "defense": 40,
            "sp.attack": 62,
            "sp.defense": 44
        }
    },
    {
        "id": 657,
        "name": "Frogadier",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 54,
            "speed": 60,
            "attack": 63,
            "defense": 52,
            "sp.attack": 83,
            "sp.defense": 56
        }
    },
    {
        "id": 658,
        "name": "Greninja",
        "type": [
            "Water",
            "Dark"
        ],
        "base": {
            "hp": 72,
            "speed": 60,
            "attack": 95,
            "defense": 67,
            "sp.attack": 103,
            "sp.defense": 71
        }
    },
    {
        "id": 659,
        "name": "Bunnelby",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 38,
            "speed": 60,
            "attack": 36,
            "defense": 38,
            "sp.attack": 32,
            "sp.defense": 36
        }
    },
    {
        "id": 660,
        "name": "Diggersby",
        "type": [
            "Normal",
            "Ground"
        ],
        "base": {
            "hp": 85,
            "speed": 60,
            "attack": 56,
            "defense": 77,
            "sp.attack": 50,
            "sp.defense": 77
        }
    },
    {
        "id": 661,
        "name": "Fletchling",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 50,
            "defense": 43,
            "sp.attack": 40,
            "sp.defense": 38
        }
    },
    {
        "id": 662,
        "name": "Fletchinder",
        "type": [
            "Fire",
            "Flying"
        ],
        "base": {
            "hp": 62,
            "speed": 60,
            "attack": 73,
            "defense": 55,
            "sp.attack": 56,
            "sp.defense": 52
        }
    },
    {
        "id": 663,
        "name": "Talonflame",
        "type": [
            "Fire",
            "Flying"
        ],
        "base": {
            "hp": 78,
            "speed": 60,
            "attack": 81,
            "defense": 71,
            "sp.attack": 74,
            "sp.defense": 69
        }
    },
    {
        "id": 664,
        "name": "Scatterbug",
        "type": [
            "Bug"
        ],
        "base": {
            "hp": 38,
            "speed": 60,
            "attack": 35,
            "defense": 40,
            "sp.attack": 27,
            "sp.defense": 25
        }
    },
    {
        "id": 665,
        "name": "Spewpa",
        "type": [
            "Bug"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 22,
            "defense": 60,
            "sp.attack": 27,
            "sp.defense": 30
        }
    },
    {
        "id": 666,
        "name": "Vivillon",
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 52,
            "defense": 50,
            "sp.attack": 90,
            "sp.defense": 50
        }
    },
    {
        "id": 667,
        "name": "Litleo",
        "type": [
            "Fire",
            "Normal"
        ],
        "base": {
            "hp": 62,
            "speed": 60,
            "attack": 50,
            "defense": 58,
            "sp.attack": 73,
            "sp.defense": 54
        }
    },
    {
        "id": 668,
        "name": "Pyroar",
        "type": [
            "Fire",
            "Normal"
        ],
        "base": {
            "hp": 86,
            "speed": 60,
            "attack": 68,
            "defense": 72,
            "sp.attack": 109,
            "sp.defense": 66
        }
    },
    {
        "id": 669,
        "name": "Flabébé",
        "type": [
            "Fairy"
        ],
        "base": {
            "hp": 44,
            "speed": 60,
            "attack": 38,
            "defense": 39,
            "sp.attack": 61,
            "sp.defense": 79
        }
    },
    {
        "id": 670,
        "name": "Floette",
        "type": [
            "Fairy"
        ],
        "base": {
            "hp": 54,
            "speed": 60,
            "attack": 45,
            "defense": 47,
            "sp.attack": 75,
            "sp.defense": 98
        }
    },
    {
        "id": 671,
        "name": "Florges",
        "type": [
            "Fairy"
        ],
        "base": {
            "hp": 78,
            "speed": 60,
            "attack": 65,
            "defense": 68,
            "sp.attack": 112,
            "sp.defense": 154
        }
    },
    {
        "id": 672,
        "name": "Skiddo",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 66,
            "speed": 60,
            "attack": 65,
            "defense": 48,
            "sp.attack": 62,
            "sp.defense": 57
        }
    },
    {
        "id": 673,
        "name": "Gogoat",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 123,
            "speed": 60,
            "attack": 100,
            "defense": 62,
            "sp.attack": 97,
            "sp.defense": 81
        }
    },
    {
        "id": 674,
        "name": "Pancham",
        "type": [
            "Fighting"
        ],
        "base": {
            "hp": 67,
            "speed": 60,
            "attack": 82,
            "defense": 62,
            "sp.attack": 46,
            "sp.defense": 48
        }
    },
    {
        "id": 675,
        "name": "Pangoro",
        "type": [
            "Fighting",
            "Dark"
        ],
        "base": {
            "hp": 95,
            "speed": 60,
            "attack": 124,
            "defense": 78,
            "sp.attack": 69,
            "sp.defense": 71
        }
    },
    {
        "id": 676,
        "name": "Furfrou",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 80,
            "defense": 60,
            "sp.attack": 65,
            "sp.defense": 90
        }
    },
    {
        "id": 677,
        "name": "Espurr",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 62,
            "speed": 60,
            "attack": 48,
            "defense": 54,
            "sp.attack": 63,
            "sp.defense": 60
        }
    },
    {
        "id": 678,
        "name": "Meowstic",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 74,
            "speed": 60,
            "attack": 48,
            "defense": 76,
            "sp.attack": 83,
            "sp.defense": 81
        }
    },
    {
        "id": 679,
        "name": "Honedge",
        "type": [
            "Steel",
            "Ghost"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 80,
            "defense": 100,
            "sp.attack": 35,
            "sp.defense": 37
        }
    },
    {
        "id": 680,
        "name": "Doublade",
        "type": [
            "Steel",
            "Ghost"
        ],
        "base": {
            "hp": 59,
            "speed": 60,
            "attack": 110,
            "defense": 150,
            "sp.attack": 45,
            "sp.defense": 49
        }
    },
    {
        "id": 681,
        "name": "Aegislash",
        "type": [
            "Steel",
            "Ghost"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 50,
            "defense": 150,
            "sp.attack": 50,
            "sp.defense": 150
        }
    },
    {
        "id": 682,
        "name": "Spritzee",
        "type": [
            "Fairy"
        ],
        "base": {
            "hp": 78,
            "speed": 60,
            "attack": 52,
            "defense": 60,
            "sp.attack": 63,
            "sp.defense": 65
        }
    },
    {
        "id": 683,
        "name": "Aromatisse",
        "type": [
            "Fairy"
        ],
        "base": {
            "hp": 101,
            "speed": 60,
            "attack": 72,
            "defense": 72,
            "sp.attack": 99,
            "sp.defense": 89
        }
    },
    {
        "id": 684,
        "name": "Swirlix",
        "type": [
            "Fairy"
        ],
        "base": {
            "hp": 62,
            "speed": 60,
            "attack": 48,
            "defense": 66,
            "sp.attack": 59,
            "sp.defense": 57
        }
    },
    {
        "id": 685,
        "name": "Slurpuff",
        "type": [
            "Fairy"
        ],
        "base": {
            "hp": 82,
            "speed": 60,
            "attack": 80,
            "defense": 86,
            "sp.attack": 85,
            "sp.defense": 75
        }
    },
    {
        "id": 686,
        "name": "Inkay",
        "type": [
            "Dark",
            "Psychic"
        ],
        "base": {
            "hp": 53,
            "speed": 60,
            "attack": 54,
            "defense": 53,
            "sp.attack": 37,
            "sp.defense": 46
        }
    },
    {
        "id": 687,
        "name": "Malamar",
        "type": [
            "Dark",
            "Psychic"
        ],
        "base": {
            "hp": 86,
            "speed": 60,
            "attack": 92,
            "defense": 88,
            "sp.attack": 68,
            "sp.defense": 75
        }
    },
    {
        "id": 688,
        "name": "Binacle",
        "type": [
            "Rock",
            "Water"
        ],
        "base": {
            "hp": 42,
            "speed": 60,
            "attack": 52,
            "defense": 67,
            "sp.attack": 39,
            "sp.defense": 56
        }
    },
    {
        "id": 689,
        "name": "Barbaracle",
        "type": [
            "Rock",
            "Water"
        ],
        "base": {
            "hp": 72,
            "speed": 60,
            "attack": 105,
            "defense": 115,
            "sp.attack": 54,
            "sp.defense": 86
        }
    },
    {
        "id": 690,
        "name": "Skrelp",
        "type": [
            "Poison",
            "Water"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 60,
            "defense": 60,
            "sp.attack": 60,
            "sp.defense": 60
        }
    },
    {
        "id": 691,
        "name": "Dragalge",
        "type": [
            "Poison",
            "Dragon"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 75,
            "defense": 90,
            "sp.attack": 97,
            "sp.defense": 123
        }
    },
    {
        "id": 692,
        "name": "Clauncher",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 53,
            "defense": 62,
            "sp.attack": 58,
            "sp.defense": 63
        }
    },
    {
        "id": 693,
        "name": "Clawitzer",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 71,
            "speed": 60,
            "attack": 73,
            "defense": 88,
            "sp.attack": 120,
            "sp.defense": 89
        }
    },
    {
        "id": 694,
        "name": "Helioptile",
        "type": [
            "Electric",
            "Normal"
        ],
        "base": {
            "hp": 44,
            "speed": 60,
            "attack": 38,
            "defense": 33,
            "sp.attack": 61,
            "sp.defense": 43
        }
    },
    {
        "id": 695,
        "name": "Heliolisk",
        "type": [
            "Electric",
            "Normal"
        ],
        "base": {
            "hp": 62,
            "speed": 60,
            "attack": 55,
            "defense": 52,
            "sp.attack": 109,
            "sp.defense": 94
        }
    },
    {
        "id": 696,
        "name": "Tyrunt",
        "type": [
            "Rock",
            "Dragon"
        ],
        "base": {
            "hp": 58,
            "speed": 60,
            "attack": 89,
            "defense": 77,
            "sp.attack": 45,
            "sp.defense": 45
        }
    },
    {
        "id": 697,
        "name": "Tyrantrum",
        "type": [
            "Rock",
            "Dragon"
        ],
        "base": {
            "hp": 82,
            "speed": 60,
            "attack": 121,
            "defense": 119,
            "sp.attack": 69,
            "sp.defense": 59
        }
    },
    {
        "id": 698,
        "name": "Amaura",
        "type": [
            "Rock",
            "Ice"
        ],
        "base": {
            "hp": 77,
            "speed": 60,
            "attack": 59,
            "defense": 50,
            "sp.attack": 67,
            "sp.defense": 63
        }
    },
    {
        "id": 699,
        "name": "Aurorus",
        "type": [
            "Rock",
            "Ice"
        ],
        "base": {
            "hp": 123,
            "speed": 60,
            "attack": 77,
            "defense": 72,
            "sp.attack": 99,
            "sp.defense": 92
        }
    },
    {
        "id": 700,
        "name": "Sylveon",
        "type": [
            "Fairy"
        ],
        "base": {
            "hp": 95,
            "speed": 60,
            "attack": 65,
            "defense": 65,
            "sp.attack": 110,
            "sp.defense": 130
        }
    },
    {
        "id": 701,
        "name": "Hawlucha",
        "type": [
            "Fighting",
            "Flying"
        ],
        "base": {
            "hp": 78,
            "speed": 60,
            "attack": 92,
            "defense": 75,
            "sp.attack": 74,
            "sp.defense": 63
        }
    },
    {
        "id": 702,
        "name": "Dedenne",
        "type": [
            "Electric",
            "Fairy"
        ],
        "base": {
            "hp": 67,
            "speed": 60,
            "attack": 58,
            "defense": 57,
            "sp.attack": 81,
            "sp.defense": 67
        }
    },
    {
        "id": 703,
        "name": "Carbink",
        "type": [
            "Rock",
            "Fairy"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 50,
            "defense": 150,
            "sp.attack": 50,
            "sp.defense": 150
        }
    },
    {
        "id": 704,
        "name": "Goomy",
        "type": [
            "Dragon"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 50,
            "defense": 35,
            "sp.attack": 55,
            "sp.defense": 75
        }
    },
    {
        "id": 705,
        "name": "Sliggoo",
        "type": [
            "Dragon"
        ],
        "base": {
            "hp": 68,
            "speed": 60,
            "attack": 75,
            "defense": 53,
            "sp.attack": 83,
            "sp.defense": 113
        }
    },
    {
        "id": 706,
        "name": "Goodra",
        "type": [
            "Dragon"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 100,
            "defense": 70,
            "sp.attack": 110,
            "sp.defense": 150
        }
    },
    {
        "id": 707,
        "name": "Klefki",
        "type": [
            "Steel",
            "Fairy"
        ],
        "base": {
            "hp": 57,
            "speed": 60,
            "attack": 80,
            "defense": 91,
            "sp.attack": 80,
            "sp.defense": 87
        }
    },
    {
        "id": 708,
        "name": "Phantump",
        "type": [
            "Ghost",
            "Grass"
        ],
        "base": {
            "hp": 43,
            "speed": 60,
            "attack": 70,
            "defense": 48,
            "sp.attack": 50,
            "sp.defense": 60
        }
    },
    {
        "id": 709,
        "name": "Trevenant",
        "type": [
            "Ghost",
            "Grass"
        ],
        "base": {
            "hp": 85,
            "speed": 60,
            "attack": 110,
            "defense": 76,
            "sp.attack": 65,
            "sp.defense": 82
        }
    },
    {
        "id": 710,
        "name": "Pumpkaboo",
        "type": [
            "Ghost",
            "Grass"
        ],
        "base": {
            "hp": 59,
            "speed": 60,
            "attack": 66,
            "defense": 70,
            "sp.attack": 44,
            "sp.defense": 55
        }
    },
    {
        "id": 711,
        "name": "Gourgeist",
        "type": [
            "Ghost",
            "Grass"
        ],
        "base": {
            "hp": 85,
            "speed": 60,
            "attack": 100,
            "defense": 122,
            "sp.attack": 58,
            "sp.defense": 75
        }
    },
    {
        "id": 712,
        "name": "Bergmite",
        "type": [
            "Ice"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 69,
            "defense": 85,
            "sp.attack": 32,
            "sp.defense": 35
        }
    },
    {
        "id": 713,
        "name": "Avalugg",
        "type": [
            "Ice"
        ],
        "base": {
            "hp": 95,
            "speed": 60,
            "attack": 117,
            "defense": 184,
            "sp.attack": 44,
            "sp.defense": 46
        }
    },
    {
        "id": 714,
        "name": "Noibat",
        "type": [
            "Flying",
            "Dragon"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 30,
            "defense": 35,
            "sp.attack": 45,
            "sp.defense": 40
        }
    },
    {
        "id": 715,
        "name": "Noivern",
        "type": [
            "Flying",
            "Dragon"
        ],
        "base": {
            "hp": 85,
            "speed": 60,
            "attack": 70,
            "defense": 80,
            "sp.attack": 97,
            "sp.defense": 80
        }
    },
    {
        "id": 716,
        "name": "Xerneas",
        "type": [
            "Fairy"
        ],
        "base": {
            "hp": 126,
            "speed": 60,
            "attack": 131,
            "defense": 95,
            "sp.attack": 131,
            "sp.defense": 98
        }
    },
    {
        "id": 717,
        "name": "Yveltal",
        "type": [
            "Dark",
            "Flying"
        ],
        "base": {
            "hp": 126,
            "speed": 60,
            "attack": 131,
            "defense": 95,
            "sp.attack": 131,
            "sp.defense": 98
        }
    },
    {
        "id": 718,
        "name": "Zygarde",
        "type": [
            "Dragon",
            "Ground"
        ],
        "base": {
            "hp": 108,
            "speed": 60,
            "attack": 100,
            "defense": 121,
            "sp.attack": 81,
            "sp.defense": 95
        }
    },
    {
        "id": 719,
        "name": "Diancie",
        "type": [
            "Rock",
            "Fairy"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 100,
            "defense": 150,
            "sp.attack": 100,
            "sp.defense": 150
        }
    },
    {
        "id": 720,
        "name": "Hoopa",
        "type": [
            "Psychic",
            "Ghost"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 110,
            "defense": 60,
            "sp.attack": 150,
            "sp.defense": 130
        }
    },
    {
        "id": 721,
        "name": "Volcanion",
        "type": [
            "Fire",
            "Water"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 110,
            "defense": 120,
            "sp.attack": 130,
            "sp.defense": 90
        }
    },
    {
        "id": 722,
        "name": "Rowlet",
        "type": [
            "Grass",
            "Flying"
        ],
        "base": {
            "hp": 68,
            "speed": 60,
            "attack": 55,
            "defense": 55,
            "sp.attack": 50,
            "sp.defense": 50
        }
    },
    {
        "id": 723,
        "name": "Dartrix",
        "type": [
            "Grass",
            "Flying"
        ],
        "base": {
            "hp": 78,
            "speed": 60,
            "attack": 75,
            "defense": 75,
            "sp.attack": 70,
            "sp.defense": 70
        }
    },
    {
        "id": 724,
        "name": "Decidueye",
        "type": [
            "Grass",
            "Ghost"
        ],
        "base": {
            "hp": 78,
            "speed": 60,
            "attack": 107,
            "defense": 75,
            "sp.attack": 100,
            "sp.defense": 100
        }
    },
    {
        "id": 725,
        "name": "Litten",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 65,
            "defense": 40,
            "sp.attack": 60,
            "sp.defense": 40
        }
    },
    {
        "id": 726,
        "name": "Torracat",
        "type": [
            "Fire"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 85,
            "defense": 50,
            "sp.attack": 80,
            "sp.defense": 50
        }
    },
    {
        "id": 727,
        "name": "Incineroar",
        "type": [
            "Fire",
            "Dark"
        ],
        "base": {
            "hp": 95,
            "speed": 60,
            "attack": 115,
            "defense": 90,
            "sp.attack": 80,
            "sp.defense": 90
        }
    },
    {
        "id": 728,
        "name": "Popplio",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 54,
            "defense": 54,
            "sp.attack": 66,
            "sp.defense": 56
        }
    },
    {
        "id": 729,
        "name": "Brionne",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 69,
            "defense": 69,
            "sp.attack": 91,
            "sp.defense": 81
        }
    },
    {
        "id": 730,
        "name": "Primarina",
        "type": [
            "Water",
            "Fairy"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 74,
            "defense": 74,
            "sp.attack": 126,
            "sp.defense": 116
        }
    },
    {
        "id": 731,
        "name": "Pikipek",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 35,
            "speed": 60,
            "attack": 75,
            "defense": 30,
            "sp.attack": 30,
            "sp.defense": 30
        }
    },
    {
        "id": 732,
        "name": "Trumbeak",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 85,
            "defense": 50,
            "sp.attack": 40,
            "sp.defense": 50
        }
    },
    {
        "id": 733,
        "name": "Toucannon",
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 120,
            "defense": 75,
            "sp.attack": 75,
            "sp.defense": 75
        }
    },
    {
        "id": 734,
        "name": "Yungoos",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 48,
            "speed": 60,
            "attack": 70,
            "defense": 30,
            "sp.attack": 30,
            "sp.defense": 30
        }
    },
    {
        "id": 735,
        "name": "Gumshoos",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 88,
            "speed": 60,
            "attack": 110,
            "defense": 60,
            "sp.attack": 55,
            "sp.defense": 60
        }
    },
    {
        "id": 736,
        "name": "Grubbin",
        "type": [
            "Bug"
        ],
        "base": {
            "hp": 47,
            "speed": 60,
            "attack": 62,
            "defense": 45,
            "sp.attack": 55,
            "sp.defense": 45
        }
    },
    {
        "id": 737,
        "name": "Charjabug",
        "type": [
            "Bug",
            "Electric"
        ],
        "base": {
            "hp": 57,
            "speed": 60,
            "attack": 82,
            "defense": 95,
            "sp.attack": 55,
            "sp.defense": 75
        }
    },
    {
        "id": 738,
        "name": "Vikavolt",
        "type": [
            "Bug",
            "Electric"
        ],
        "base": {
            "hp": 77,
            "speed": 60,
            "attack": 70,
            "defense": 90,
            "sp.attack": 145,
            "sp.defense": 75
        }
    },
    {
        "id": 739,
        "name": "Crabrawler",
        "type": [
            "Fighting"
        ],
        "base": {
            "hp": 47,
            "speed": 60,
            "attack": 82,
            "defense": 57,
            "sp.attack": 42,
            "sp.defense": 47
        }
    },
    {
        "id": 740,
        "name": "Crabominable",
        "type": [
            "Fighting",
            "Ice"
        ],
        "base": {
            "hp": 97,
            "speed": 60,
            "attack": 132,
            "defense": 77,
            "sp.attack": 62,
            "sp.defense": 67
        }
    },
    {
        "id": 741,
        "name": "Oricorio",
        "type": [
            "Fire",
            "Flying"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 70,
            "defense": 70,
            "sp.attack": 98,
            "sp.defense": 70
        }
    },
    {
        "id": 742,
        "name": "Cutiefly",
        "type": [
            "Bug",
            "Fairy"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 45,
            "defense": 40,
            "sp.attack": 55,
            "sp.defense": 40
        }
    },
    {
        "id": 743,
        "name": "Ribombee",
        "type": [
            "Bug",
            "Fairy"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 55,
            "defense": 60,
            "sp.attack": 95,
            "sp.defense": 70
        }
    },
    {
        "id": 744,
        "name": "Rockruff",
        "type": [
            "Rock"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 65,
            "defense": 40,
            "sp.attack": 30,
            "sp.defense": 40
        }
    },
    {
        "id": 745,
        "name": "Lycanroc",
        "type": [
            "Rock"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 115,
            "defense": 65,
            "sp.attack": 55,
            "sp.defense": 65
        }
    },
    {
        "id": 746,
        "name": "Wishiwashi",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 20,
            "defense": 20,
            "sp.attack": 25,
            "sp.defense": 25
        }
    },
    {
        "id": 747,
        "name": "Mareanie",
        "type": [
            "Poison",
            "Water"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 53,
            "defense": 62,
            "sp.attack": 43,
            "sp.defense": 52
        }
    },
    {
        "id": 748,
        "name": "Toxapex",
        "type": [
            "Poison",
            "Water"
        ],
        "base": {
            "hp": 50,
            "speed": 60,
            "attack": 63,
            "defense": 152,
            "sp.attack": 53,
            "sp.defense": 142
        }
    },
    {
        "id": 749,
        "name": "Mudbray",
        "type": [
            "Ground"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 100,
            "defense": 70,
            "sp.attack": 45,
            "sp.defense": 55
        }
    },
    {
        "id": 750,
        "name": "Mudsdale",
        "type": [
            "Ground"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 125,
            "defense": 100,
            "sp.attack": 55,
            "sp.defense": 85
        }
    },
    {
        "id": 751,
        "name": "Dewpider",
        "type": [
            "Water",
            "Bug"
        ],
        "base": {
            "hp": 38,
            "speed": 60,
            "attack": 40,
            "defense": 52,
            "sp.attack": 40,
            "sp.defense": 72
        }
    },
    {
        "id": 752,
        "name": "Araquanid",
        "type": [
            "Water",
            "Bug"
        ],
        "base": {
            "hp": 68,
            "speed": 60,
            "attack": 70,
            "defense": 92,
            "sp.attack": 50,
            "sp.defense": 132
        }
    },
    {
        "id": 753,
        "name": "Fomantis",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 55,
            "defense": 35,
            "sp.attack": 50,
            "sp.defense": 35
        }
    },
    {
        "id": 754,
        "name": "Lurantis",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 105,
            "defense": 90,
            "sp.attack": 80,
            "sp.defense": 90
        }
    },
    {
        "id": 755,
        "name": "Morelull",
        "type": [
            "Grass",
            "Fairy"
        ],
        "base": {
            "hp": 40,
            "speed": 60,
            "attack": 35,
            "defense": 55,
            "sp.attack": 65,
            "sp.defense": 75
        }
    },
    {
        "id": 756,
        "name": "Shiinotic",
        "type": [
            "Grass",
            "Fairy"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 45,
            "defense": 80,
            "sp.attack": 90,
            "sp.defense": 100
        }
    },
    {
        "id": 757,
        "name": "Salandit",
        "type": [
            "Poison",
            "Fire"
        ],
        "base": {
            "hp": 48,
            "speed": 60,
            "attack": 44,
            "defense": 40,
            "sp.attack": 71,
            "sp.defense": 40
        }
    },
    {
        "id": 758,
        "name": "Salazzle",
        "type": [
            "Poison",
            "Fire"
        ],
        "base": {
            "hp": 68,
            "speed": 60,
            "attack": 64,
            "defense": 60,
            "sp.attack": 111,
            "sp.defense": 60
        }
    },
    {
        "id": 759,
        "name": "Stufful",
        "type": [
            "Normal",
            "Fighting"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 75,
            "defense": 50,
            "sp.attack": 45,
            "sp.defense": 50
        }
    },
    {
        "id": 760,
        "name": "Bewear",
        "type": [
            "Normal",
            "Fighting"
        ],
        "base": {
            "hp": 120,
            "speed": 60,
            "attack": 125,
            "defense": 80,
            "sp.attack": 55,
            "sp.defense": 60
        }
    },
    {
        "id": 761,
        "name": "Bounsweet",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 42,
            "speed": 60,
            "attack": 30,
            "defense": 38,
            "sp.attack": 30,
            "sp.defense": 38
        }
    },
    {
        "id": 762,
        "name": "Steenee",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 52,
            "speed": 60,
            "attack": 40,
            "defense": 48,
            "sp.attack": 40,
            "sp.defense": 48
        }
    },
    {
        "id": 763,
        "name": "Tsareena",
        "type": [
            "Grass"
        ],
        "base": {
            "hp": 72,
            "speed": 60,
            "attack": 120,
            "defense": 98,
            "sp.attack": 50,
            "sp.defense": 98
        }
    },
    {
        "id": 764,
        "name": "Comfey",
        "type": [
            "Fairy"
        ],
        "base": {
            "hp": 51,
            "speed": 60,
            "attack": 52,
            "defense": 90,
            "sp.attack": 82,
            "sp.defense": 110
        }
    },
    {
        "id": 765,
        "name": "Oranguru",
        "type": [
            "Normal",
            "Psychic"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 60,
            "defense": 80,
            "sp.attack": 90,
            "sp.defense": 110
        }
    },
    {
        "id": 766,
        "name": "Passimian",
        "type": [
            "Fighting"
        ],
        "base": {
            "hp": 100,
            "speed": 60,
            "attack": 120,
            "defense": 90,
            "sp.attack": 40,
            "sp.defense": 60
        }
    },
    {
        "id": 767,
        "name": "Wimpod",
        "type": [
            "Bug",
            "Water"
        ],
        "base": {
            "hp": 25,
            "speed": 60,
            "attack": 35,
            "defense": 40,
            "sp.attack": 20,
            "sp.defense": 30
        }
    },
    {
        "id": 768,
        "name": "Golisopod",
        "type": [
            "Bug",
            "Water"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 125,
            "defense": 140,
            "sp.attack": 60,
            "sp.defense": 90
        }
    },
    {
        "id": 769,
        "name": "Sandygast",
        "type": [
            "Ghost",
            "Ground"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 55,
            "defense": 80,
            "sp.attack": 70,
            "sp.defense": 45
        }
    },
    {
        "id": 770,
        "name": "Palossand",
        "type": [
            "Ghost",
            "Ground"
        ],
        "base": {
            "hp": 85,
            "speed": 60,
            "attack": 75,
            "defense": 110,
            "sp.attack": 100,
            "sp.defense": 75
        }
    },
    {
        "id": 771,
        "name": "Pyukumuku",
        "type": [
            "Water"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 60,
            "defense": 130,
            "sp.attack": 30,
            "sp.defense": 130
        }
    },
    {
        "id": 772,
        "name": "Type: Null",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 95,
            "speed": 60,
            "attack": 95,
            "defense": 95,
            "sp.attack": 95,
            "sp.defense": 95
        }
    },
    {
        "id": 773,
        "name": "Silvally",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 95,
            "speed": 60,
            "attack": 95,
            "defense": 95,
            "sp.attack": 95,
            "sp.defense": 95
        }
    },
    {
        "id": 774,
        "name": "Minior",
        "type": [
            "Rock",
            "Flying"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 60,
            "defense": 100,
            "sp.attack": 60,
            "sp.defense": 100
        }
    },
    {
        "id": 775,
        "name": "Komala",
        "type": [
            "Normal"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 115,
            "defense": 65,
            "sp.attack": 75,
            "sp.defense": 95
        }
    },
    {
        "id": 776,
        "name": "Turtonator",
        "type": [
            "Fire",
            "Dragon"
        ],
        "base": {
            "hp": 60,
            "speed": 60,
            "attack": 78,
            "defense": 135,
            "sp.attack": 91,
            "sp.defense": 85
        }
    },
    {
        "id": 777,
        "name": "Togedemaru",
        "type": [
            "Electric",
            "Steel"
        ],
        "base": {
            "hp": 65,
            "speed": 60,
            "attack": 98,
            "defense": 63,
            "sp.attack": 40,
            "sp.defense": 73
        }
    },
    {
        "id": 778,
        "name": "Mimikyu",
        "type": [
            "Ghost",
            "Fairy"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 90,
            "defense": 80,
            "sp.attack": 50,
            "sp.defense": 105
        }
    },
    {
        "id": 779,
        "name": "Bruxish",
        "type": [
            "Water",
            "Psychic"
        ],
        "base": {
            "hp": 68,
            "speed": 60,
            "attack": 105,
            "defense": 70,
            "sp.attack": 70,
            "sp.defense": 70
        }
    },
    {
        "id": 780,
        "name": "Drampa",
        "type": [
            "Normal",
            "Dragon"
        ],
        "base": {
            "hp": 78,
            "speed": 60,
            "attack": 60,
            "defense": 85,
            "sp.attack": 135,
            "sp.defense": 91
        }
    },
    {
        "id": 781,
        "name": "Dhelmise",
        "type": [
            "Ghost",
            "Grass"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 131,
            "defense": 100,
            "sp.attack": 86,
            "sp.defense": 90
        }
    },
    {
        "id": 782,
        "name": "Jangmo-o",
        "type": [
            "Dragon"
        ],
        "base": {
            "hp": 45,
            "speed": 60,
            "attack": 55,
            "defense": 65,
            "sp.attack": 45,
            "sp.defense": 45
        }
    },
    {
        "id": 783,
        "name": "Hakamo-o",
        "type": [
            "Dragon",
            "Fighting"
        ],
        "base": {
            "hp": 55,
            "speed": 60,
            "attack": 75,
            "defense": 90,
            "sp.attack": 65,
            "sp.defense": 70
        }
    },
    {
        "id": 784,
        "name": "Kommo-o",
        "type": [
            "Dragon",
            "Fighting"
        ],
        "base": {
            "hp": 75,
            "speed": 60,
            "attack": 110,
            "defense": 125,
            "sp.attack": 100,
            "sp.defense": 105
        }
    },
    {
        "id": 785,
        "name": "Tapu Koko",
        "type": [
            "Electric",
            "Fairy"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 115,
            "defense": 85,
            "sp.attack": 95,
            "sp.defense": 75
        }
    },
    {
        "id": 786,
        "name": "Tapu Lele",
        "type": [
            "Psychic",
            "Fairy"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 85,
            "defense": 75,
            "sp.attack": 130,
            "sp.defense": 115
        }
    },
    {
        "id": 787,
        "name": "Tapu Bulu",
        "type": [
            "Grass",
            "Fairy"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 130,
            "defense": 115,
            "sp.attack": 85,
            "sp.defense": 95
        }
    },
    {
        "id": 788,
        "name": "Tapu Fini",
        "type": [
            "Water",
            "Fairy"
        ],
        "base": {
            "hp": 70,
            "speed": 60,
            "attack": 75,
            "defense": 115,
            "sp.attack": 95,
            "sp.defense": 130
        }
    },
    {
        "id": 789,
        "name": "Cosmog",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 43,
            "speed": 60,
            "attack": 29,
            "defense": 31,
            "sp.attack": 29,
            "sp.defense": 31
        }
    },
    {
        "id": 790,
        "name": "Cosmoem",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 43,
            "speed": 60,
            "attack": 29,
            "defense": 131,
            "sp.attack": 29,
            "sp.defense": 131
        }
    },
    {
        "id": 791,
        "name": "Solgaleo",
        "type": [
            "Psychic",
            "Steel"
        ],
        "base": {
            "hp": 137,
            "speed": 60,
            "attack": 137,
            "defense": 107,
            "sp.attack": 113,
            "sp.defense": 89
        }
    },
    {
        "id": 792,
        "name": "Lunala",
        "type": [
            "Psychic",
            "Ghost"
        ],
        "base": {
            "hp": 137,
            "speed": 60,
            "attack": 113,
            "defense": 89,
            "sp.attack": 137,
            "sp.defense": 107
        }
    },
    {
        "id": 793,
        "name": "Nihilego",
        "type": [
            "Rock",
            "Poison"
        ],
        "base": {
            "hp": 109,
            "speed": 60,
            "attack": 53,
            "defense": 47,
            "sp.attack": 127,
            "sp.defense": 131
        }
    },
    {
        "id": 794,
        "name": "Buzzwole",
        "type": [
            "Bug",
            "Fighting"
        ],
        "base": {
            "hp": 107,
            "speed": 60,
            "attack": 139,
            "defense": 139,
            "sp.attack": 53,
            "sp.defense": 53
        }
    },
    {
        "id": 795,
        "name": "Pheromosa",
        "type": [
            "Bug",
            "Fighting"
        ],
        "base": {
            "hp": 71,
            "speed": 60,
            "attack": 137,
            "defense": 37,
            "sp.attack": 137,
            "sp.defense": 37
        }
    },
    {
        "id": 796,
        "name": "Xurkitree",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 83,
            "speed": 60,
            "attack": 89,
            "defense": 71,
            "sp.attack": 173,
            "sp.defense": 71
        }
    },
    {
        "id": 797,
        "name": "Celesteela",
        "type": [
            "Steel",
            "Flying"
        ],
        "base": {
            "hp": 97,
            "speed": 60,
            "attack": 101,
            "defense": 103,
            "sp.attack": 107,
            "sp.defense": 101
        }
    },
    {
        "id": 798,
        "name": "Kartana",
        "type": [
            "Grass",
            "Steel"
        ],
        "base": {
            "hp": 59,
            "speed": 60,
            "attack": 181,
            "defense": 131,
            "sp.attack": 59,
            "sp.defense": 31
        }
    },
    {
        "id": 799,
        "name": "Guzzlord",
        "type": [
            "Dark",
            "Dragon"
        ],
        "base": {
            "hp": 223,
            "speed": 60,
            "attack": 101,
            "defense": 53,
            "sp.attack": 97,
            "sp.defense": 53
        }
    },
    {
        "id": 800,
        "name": "Necrozma",
        "type": [
            "Psychic"
        ],
        "base": {
            "hp": 97,
            "speed": 60,
            "attack": 107,
            "defense": 101,
            "sp.attack": 127,
            "sp.defense": 89
        }
    },
    {
        "id": 801,
        "name": "Magearna",
        "type": [
            "Steel",
            "Fairy"
        ],
        "base": {
            "hp": 80,
            "speed": 60,
            "attack": 95,
            "defense": 115,
            "sp.attack": 130,
            "sp.defense": 115
        }
    },
    {
        "id": 802,
        "name": "Marshadow",
        "type": [
            "Fighting",
            "Ghost"
        ],
        "base": {
            "hp": 90,
            "speed": 60,
            "attack": 125,
            "defense": 80,
            "sp.attack": 90,
            "sp.defense": 90
        }
    },
    {
        "id": 803,
        "name": "Poipole",
        "type": [
            "Poison"
        ],
        "base": {
            "hp": 67,
            "speed": 60,
            "attack": 73,
            "defense": 67,
            "sp.attack": 73,
            "sp.defense": 67
        }
    },
    {
        "id": 804,
        "name": "Naganadel",
        "type": [
            "Poison",
            "Dragon"
        ],
        "base": {
            "hp": 73,
            "speed": 60,
            "attack": 73,
            "defense": 73,
            "sp.attack": 127,
            "sp.defense": 73
        }
    },
    {
        "id": 805,
        "name": "Stakataka",
        "type": [
            "Rock",
            "Steel"
        ],
        "base": {
            "hp": 61,
            "speed": 60,
            "attack": 131,
            "defense": 211,
            "sp.attack": 53,
            "sp.defense": 101
        }
    },
    {
        "id": 806,
        "name": "Blacephalon",
        "type": [
            "Fire",
            "Ghost"
        ],
        "base": {
            "hp": 53,
            "speed": 60,
            "attack": 127,
            "defense": 53,
            "sp.attack": 151,
            "sp.defense": 79
        }
    },
    {
        "id": 807,
        "name": "Zeraora",
        "type": [
            "Electric"
        ],
        "base": {
            "hp": 88,
            "speed": 60,
            "attack": 112,
            "defense": 75,
            "sp.attack": 102,
            "sp.defense": 80
        }
    },
    {
        "id": 808,
        "name": "Meltan",
        "type": [
            "Steel"
        ],
        "base": {
            "hp": 46,
            "speed": 60,
            "attack": 65,
            "defense": 65,
            "sp.attack": 55,
            "sp.defense": 35
        }
    },
    {
        "id": 809,
        "name": "Melmetal",
        "type": [
            "Steel"
        ],
        "base": {
            "hp": 135,
            "speed": 60,
            "attack": 143,
            "defense": 143,
            "sp.attack": 80,
            "sp.defense": 65
        }
    }
]

export default pokemons;