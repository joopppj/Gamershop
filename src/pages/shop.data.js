const SHOP_DATA = [
    {
        id: 1,
        title: 'Switch',
        routeName: 'switch',
        items: [
            {
                id: 1,
                name: 'Monster Hunter Rise',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81JG%2ByulVkS._AC_SL1500_.jpg',
                price: 59.99
            },
            {
                id: 2,
                name: 'Super Mario 3D World + Bowsers Fury',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81mqDSrV7fL._AC_SL1500_.jpg',
                price: 49.99
            },
            {
                id: 3,
                name: 'Super Smash Bros. Ultimate',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71utlQnFxOL._AC_SL1004_.jpg',
                price: 49.99
            },
            {
                id: 4,
                name: 'Bravely Default II',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81G7HDon9nL._AC_SL1500_.jpg',
                price: 58.99
            },
            {
                id: 5,
                name: 'Super Mario Maker2',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71NKlsYToaL._AC_SL1500_.jpg',
                price: 49.99
            },
            {
                id: 6,
                name: 'Super Mario Party',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71zJV8f%2BiXL._AC_SL1004_.jpg',
                price: 49.99
            },
            {
                id: 7,
                name: 'Pokemon Sword',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61TWx6p47ML._AC_SL1004_.jpg',
                price: 49.99
            },
            {
                id: 8,
                name: 'Pokemon Shield',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61v4n3DvYdL._AC_SL1004_.jpg',
                price: 49.99
            },
            {
                id: 9,
                name: 'Minecraft',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71vtquB4LXL._AC_SL1500_.jpg',
                price: 25.99
            }
        ]
    },
    {
        id: 2,
        title: 'PS4/PS5',
        routeName: 'ps4ps5',
        items: [
            {
                id: 10,
                name: 'Resident Evil Village',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71VlFDGmqXL._AC_SL1500_.jpg',
                price: 69.99
            },
            {
                id: 11,
                name: 'Final Fantasy VII: Remake',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/818MqhAN50S._AC_SL1500_.jpg',
                price: 42.85
            },
            {
                id: 12,
                name: "Marvel's Spider-Man: Miles Morales",
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81hug56CmZL._AC_SL1500_.jpg',
                price: 110
            },
            {
                id: 13,
                name: 'Devil May Cry 5 Special Edition',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81BhMtR5TkL._AC_SL1500_.jpg',
                price: 47.31
            },
            {
                id: 14,
                name: 'Tales of Arise',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51bE5z%2Bd1XS._SL1500_.jpg',
                price: 59.99
            },
            {
                id: 15,
                name: 'Judgment',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81be3Z9ui-L._SL1500_.jpg',
                price: 160
            },
            {
                id: 16,
                name: "Marvel's Avengers",
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81jdR6t2MnL._SL1476_.jpg',
                price: 24.99
            },
            {
                id: 17,
                name: 'Sackboy: A Big Adventure',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81W13YKKR1L._SL1353_.jpg',
                price: 59.88
            }
        ]
    },
    {
        id: 3,
        title: 'Xbox',
        routeName: 'xbox',
        items: [
            {
                id: 18,
                name: 'Resident Evil Village',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71hPmCqq8vL._SL1346_.jpg',
                price: 59.99
            },
            {
                id: 19,
                name: 'Call of Duty: Black Ops Cold War',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81duXjS1JvS._SL1500_.jpg',
                price: 69.99
            },
            {
                id: 20,
                name: 'Mortal Kombat 11 Ultimate',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81YFmHhgPKL._SL1500_.jpg',
                price: 49.89
            },
            {
                id: 21,
                name: 'Sniper: Ghost Warrior - Contracts 2',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81IEoLSvzXL._SL1500_.jpg',
                price: 165
            },
            {
                id: 22,
                name: 'Call Of Duty: Advanced Warfare',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81dWbLERrNL._SL1274_.jpg',
                price: 26.9
            }
        ]
    },
    {
        id: 4,
        title: 'Consoles',
        routeName: 'consoles',
        items: [
            {
                id: 23,
                name: 'Nintendo Switch with Neon Blue and Neon Red Joy‑Con',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg',
                price: "unavailable"
            },
            {
                id: 24,
                name: 'Nintendo Switch Lite - Coral',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41zSn74fPuL._AC_.jpg',
                price: 232.96
            },
            {
                id: 25,
                name: 'PlayStation 5 Digital Edition',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61JbCra%2B7GL._SL1500_.jpg',
                price: "unavailable"
            },
            {
                id: 26,
                name: 'Xbox Series S',
                imageUrl: 'https://m.media-amazon.com/images/I/61Q2hRo4BCL._SL1200_.jpg',
                price: 392.88
            },
            {
                id: 27,
                name: 'PlayStation 4 Slim 1TB Console',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61OL2zIliML._SL1500_.jpg',
                price: 424.88
            },
            {
                id: 28,
                name: 'Oculus Quest 2',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/615YaAiA-ML._SL1500_.jpg',
                price: 299
            },
            {
                id: 29,
                name: 'Xbox Series X',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51WrGGznWeL._SL1200_.jpg',
                price: "unavailable"
            }
        ]
    },
    {
        id: 5,
        title: 'Games',
        routeName: 'games',
        items: [
            {
                id: 1,
                name: 'Monster Hunter Rise',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81JG%2ByulVkS._AC_SL1500_.jpg',
                price: 59.99
            },
            {
                id: 10,
                name: 'Resident Evil Village',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71VlFDGmqXL._AC_SL1500_.jpg',
                price: 69.99
            },
            {
                id: 11,
                name: 'Final Fantasy VII: Remake',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/818MqhAN50S._AC_SL1500_.jpg',
                price: 42.85
            },
            {
                id: 19,
                name: 'Call of Duty: Black Ops Cold War',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81duXjS1JvS._SL1500_.jpg',
                price: 69.99
            },
            {
                id: 7,
                name: 'Pokemon Sword',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61TWx6p47ML._AC_SL1004_.jpg',
                price: 49.99
            },
            {
                id: 6,
                name: 'Super Mario Party',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71zJV8f%2BiXL._AC_SL1004_.jpg',
                price: 49.99
            }
        ]
    }
]

export default SHOP_DATA;