// GET:/api/servers?discovery_amount=5server_amount=20&sponsored_amount=10
// Returns a

export async function onRequestGet({ request, env }) {

    // const url = new URL(request.url);


    // let discovery_amount = url.searchParams.get("discovery_amount");
    // let server_amount = url.searchParams.get("server_amount");
    // let sponsored_amount = url.searchParams.get("sponsored_amount");

    // // TODO get from database
    // results = await env.DB.prepare("SELECT * FROM Servers ORDER BY `UUID` LIMIT ?1").bind(server_amount).all();
    //     return Response.json(results);

    const body = JSON.stringify({
        discovery_card: discoveryCardData,
        server_cards: allServersCardData,
        sponsored_cards: sponsoredCardData
    });
    const headers = { 'Content-type': 'application/json' };
    return new Response(body, { headers });
}



const allServersCardData = [
    {
        name: "MCBlockBuilds",
        ip: "mcblockbuilds.net",
        id: "1",
        accent: "#3a8c00",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus commodo sem eget ultricies. Donec scelerisque et nisl ac ultricies.",
        features_categories: [
            {
                category_name: "Theme Parks",
                features: [
                    "Magic Kingdom",
                    "Universal",
                    "Working Rides",
                    "Tower of Terror"
                ]
            },
            {
                category_name: "Creative",
                features: [
                    "Worldedit",
                    "Head Database",
                    "Armor Stand Tools"
                ]
            }
        ],
        online: true,
        players: 16
    },
    {
        name: "MCIlluminations",
        ip: "mcilluminations.net",
        id: "2",
        accent: "#3a8c00",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus commodo sem eget ultricies. Donec scelerisque et nisl ac ultricies.",
        features_categories: [
            {
                category_name: "Theme Parks",
                features: [
                    "Magic Kingdom",
                    "Rosen Resorts",
                    "Interactive Shops",
                    "Working Rides"
                ]
            },
        ],
        online: false,
        players: 3
    },
    {
        name: "Sunset Parks",
        ip: "sunsetparks.net",
        id: "3",
        accent: "#3a8c00",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus commodo sem eget ultricies. Donec scelerisque et nisl ac ultricies.",
        features_categories: [
            {
                category_name: "Surival",
                features: [
                    "Towny",
                    "Chest Shops",
                    "Anti-Griefing"
                ]
            },
            {
                category_name: "Creative",
                features: [
                    "Worldedit",
                    "Head Database",
                    "Armor Stand Tools"
                ]
            }
        ],
        online: true,
        players: 12
    },
    {
        name: "Imagine Fun",
        ip: "mcblockbuilds.net",
        id: "4",
        accent: "#3a8c00",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus commodo sem eget ultricies. Donec scelerisque et nisl ac ultricies.",
        features_categories: [
            {
                category_name: "Theme Parks",
                features: [
                    "Disneyland",
                    "Working Rides",
                    "Tower of Terror",
                    "Balloons"
                ]
            },
            {
                category_name: "Creative",
                features: [
                    "Worldedit",
                    "Head Database",
                    "Armor Stand Tools"
                ]
            }
        ],
        online: true,
        players: 16
    },
    {
        name: "MCParks",
        ip: "mcilluminations.net",
        id: "5",
        accent: "#3a8c00",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus commodo sem eget ultricies. Donec scelerisque et nisl ac ultricies.",
        features_categories: [
            {
                category_name: "Surival",
                features: [
                    "Towny",
                    "Chest Shops",
                    "Anti-Griefing"
                ]
            },
            {
                category_name: "Creative",
                features: [
                    "Worldedit",
                    "Head Database",
                    "Armor Stand Tools"
                ]
            }
        ],
        online: false,
        players: 3
    },
    {
        name: "Origin Realms",
        ip: "sunsetparks.net",
        id: "6",
        accent: "#3a8c00",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus commodo sem eget ultricies. Donec scelerisque et nisl ac ultricies.",
        features_categories: [
            {
                category_name: "Theme Parks",
                features: [
                    "Magic Kingdom",
                    "Rosen Resorts",
                    "Interactive Shops",
                    "Working Rides"
                ]
            },
        ],
        online: true,
        players: 12
    },
    {
        name: "Ubuntu",
        ip: "mcblockbuilds.net",
        id: "7",
        accent: "#3a8c00",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus commodo sem eget ultricies. Donec scelerisque et nisl ac ultricies.",
        features_categories: [
            {
                category_name: "Minigames",
                features: [
                    "Manhunt",
                    "Bedwars",
                    "Leaderboards"
                ]
            },
            {
                category_name: "Skyblock",
                features: [
                    "Economy",
                    "Friends",
                    "Mining"
                ]
            },
        ],
        online: true,
        players: 16
    }
]


const sponsoredCardData = [
    {
        name: "MCParks",
        ip: "mcblockbuilds.net",
        id: "5",
        accent: "#3a8c00",
        gradient_accent: "#c9e3a8",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus commodo sem eget ultricies. Donec scelerisque et nisl ac ultricies.",
        features_categories: [
            {
                category_name: "Theme Parks",
                features: [
                    "Magic Kingdom",
                    "Universal",
                    "Working Rides",
                    "Tower of Terror"
                ]
            },
            {
                category_name: "Creative",
                features: [
                    "Worldedit",
                    "Head Database",
                    "Armor Stand Tools"
                ]
            }
        ],
        online: true,
        players: 16
    },
    {
        name: "Origin Realms",
        ip: "sunsetparks.net",
        id: "6",
        accent: "#424242",
        gradient_accent: "#c4d7ff",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus commodo sem eget ultricies. Donec scelerisque et nisl ac ultricies.",
        features_categories: [
            {
                category_name: "Theme Parks",
                features: [
                    "Magic Kingdom",
                    "Universal",
                    "Working Rides",
                    "Tower of Terror"
                ]
            },
            {
                category_name: "Creative",
                features: [
                    "Worldedit",
                    "Head Database",
                    "Armor Stand Tools"
                ]
            }
        ],
        online: true,
        players: 12
    },
    {
        name: "MCBlockBuilds",
        ip: "mcblockbuilds.net",
        id: "1",
        accent: "#3a8c00",
        gradient_accent: "#c4d7ff",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus commodo sem eget ultricies. Donec scelerisque et nisl ac ultricies.",
        features_categories: [
            {
                category_name: "Theme Parks",
                features: [
                    "Magic Kingdom",
                    "Universal",
                    "Working Rides",
                    "Tower of Terror"
                ]
            },
            {
                category_name: "Creative",
                features: [
                    "Worldedit",
                    "Head Database",
                    "Armor Stand Tools"
                ]
            }
        ],
        online: true,
        players: 16
    },
]


const discoveryCardData = {
    name: "Imagine Fun",
    ip: "mcblockbuilds.net",
    id: "4",
    accent: "#3a8c00",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus commodo sem eget ultricies. Donec scelerisque et nisl ac ultricies.",
    features_categories: [
        {
            category_name: "Theme Parks",
            features: [
                "Magic Kingdom",
                "Universal",
                "Working Rides",
                "Tower of Terror"
            ]
        },
        {
            category_name: "Creative",
            features: [
                "Worldedit",
                "Head Database",
                "Armor Stand Tools"
            ]
        }
    ],
    online: true,
    players: 16
}