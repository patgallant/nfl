const Teams = [
    {
        home: "Arizona",
        name: "Cardinals",
        abbreviation: "ARI",
        conference: "NFC",
        division: "West",
        wins: 5,
        losses: 6,
        ties: 0,
        defeated: [ "IND", "SFO", "TBB", "JAX" ]
    },
    {
        home: "Atlanta",
        name: "Falcons",
        abbreviation: "ATL",
        conference: "NFC",
        division: "South",
        wins: 7,
        losses: 4,
        ties: 0,
        defeated: [ "CHI", "GBP", "DET", "NYJ", "DAL", "SEA", "TBB" ]
    },
    {
        home: "Baltimore",
        name: "Ravens",
        abbreviation: "BAL",
        conference: "AFC",
        division: "North",
        wins: 6,
        losses: 5,
        ties: 0,
        defeated: [ "CIN", "CLE", "OAK", "MIA", "GBP", "HOU" ]
    },
    {
        home: "Buffalo",
        name: "Bills",
        abbreviation: "BUF",
        conference: "AFC",
        division: "East",
        wins: 6,
        losses: 5,
        ties: 0,
        defeated: [ "NYJ", "DEN", "ATL", "TBB", "OAK", "KCC" ]
    },
    {
        home: "Carolina",
        name: "Panthers",
        abbreviation: "CAR",
        conference: "NFC",
        division: "South",
        wins: 8,
        losses: 3,
        ties: 0,
        defeated: [ "SFO", "BUF", "NEP", "DET", "TBB", "ATL", "MIA", "NYJ" ]
    },
    {
        home: "Chicago",
        name: "Bears",
        abbreviation: "CHI",
        conference: "NFC",
        division: "North",
        wins: 3,
        losses: 8,
        ties: 0,
        defeated: [ "PIT", "BAL", "CAR" ]
    },
    {
        home: "Cincinnati",
        name: "Bengals",
        abbreviation: "CIN",
        conference: "AFC",
        division: "North",
        wins: 5,
        losses: 6,
        ties: 0,
        defeated: [ "CLE", "BUF", "IND", "DEN" ]
    },
    {
        home: "Cleveland",
        name: "Browns",
        abbreviation: "CLE",
        conference: "AFC",
        division: "North",
        wins: 0,
        losses: 11,
        ties: 0,
        defeated: []
    },
    {
        home: "Dallas",
        name: "Cowboys",
        abbreviation: "DAL",
        conference: "NFC",
        division: "East",
        wins: 5,
        losses: 6,
        ties: 0,
        defeated: [ "NYG", "ARI", "SFO", "WAS", "KCC" ]
    },
    {
        home: "Denver",
        name: "Broncos",
        abbreviation: "DEN",
        conference: "AFC",
        division: "West",
        wins: 3,
        losses: 8,
        ties: 0,
        defeated: [ "LAC", "DAL", "OAK" ]
    },
    {
        home: "Detroit",
        name: "Lions",
        abbreviation: "DET",
        conference: "NFC",
        division: "North",
        wins: 6,
        losses: 5,
        ties: 0,
        defeated: [ "ARI", "NYG", "MIN", "GBP", "CLE", "CHI" ]
    },
    {
        home: "Green Bay",
        name: "Packers",
        abbreviation: "GBP",
        conference: "NFC",
        division: "North",
        wins: 5,
        losses: 6,
        ties: 0,
        defeated: [ "SEA", "CIN", "CHI", "DAL" ]
    },
    {
        home: "Houston",
        name: "Texans",
        abbreviation: "HOU",
        conference: "AFC",
        division: "South",
        wins: 4,
        losses: 7,
        ties: 0,
        defeated: [ "CIN", "TEN", "CLE", "ARI" ]
    },
    {
        home: "Indianapolis",
        name: "Colts",
        abbreviation: "IND",
        conference: "AFC",
        division: "South",
        wins: 3,
        losses: 8,
        ties: 0,
        defeated: [ "CLE", "SFO", "HOU" ]
    },
    {
        home: "Jacksonville",
        name: "Jaguars",
        abbreviation: "JAX",
        conference: "AFC",
        division: "South",
        wins: 7,
        losses: 4,
        ties: 0,
        defeated: [ "HOU", "BAL", "PIT", "IND", "CIN", "LAC", "CLE"]
    },
    {
        home: "Kansas City",
        name: "Chiefs",
        abbreviation: "KCC",
        conference: "AFC",
        division: "West",
        wins: 6,
        losses: 5,
        ties: 0,
        defeated: [ "NEP", "PHI", "LAC", "WAS", "HOU", "DEN" ]
    },
    {
        home: "Los Angeles",
        name: "Chargers",
        abbreviation: "LAC",
        conference: "AFC",
        division: "West",
        wins: 5,
        losses: 6,
        ties: 0,
        defeated: [ "NYG", "OAK", "DEN", "BUF", "DAL" ]
    },
    {
        home: "Los Angeles",
        name: "Rams",
        abbreviation: "LAR",
        conference: "NFC",
        division: "West",
        wins: 8,
        losses: 3,
        ties: 0,
        defeated: [ "IND", "SFO", "DAL", "JAX", "ARI", "NYG", "HOU", "NOS" ]
    },
    {
        home: "Miami",
        name: "Dolphins",
        abbreviation: "MIA",
        conference: "AFC",
        division: "East",
        wins: 4,
        losses: 7,
        ties: 0,
        defeated: [ "LAC", "TEN", "ATL", "NYJ" ]
    },
    {
        home: "Minnesota",
        name: "Vikings",
        abbreviation: "MIN",
        conference: "NFC",
        division: "North",
        wins: 9,
        losses: 2,
        ties: 0,
        defeated: [ "NOS", "TBB", "CHI", "GBP", "BAL", "CLE", "WAS", "LAR", "DET" ]
    },
    { 
        home: "New England", 
        name: "Patriots", 
        abbreviation: "NEP", 
        conference: "AFC", 
        division: "East", 
        wins: 9, 
        losses: 2, 
        ties: 0,
        defeated: [ "NOS", "HOU", "TBB", "NYJ", "ATL", "LAC", "DEN", "OAK", "MIA" ]
    },
    {
        home: "New Orleans",
        name: "Saints", 
        abbreviation: "NOS",
        conference: "NFC",
        division: "South",
        wins: 8,
        losses: 3,
        ties: 0,
        defeated: [ "CAR", "MIA", "DET", "GBP", "CHI", "TBB", "BUF", "WAS" ]
    },
    {
        home: "New York",
        name: "Giants",
        abbreviation: "NYG",
        conference: "NFC",
        division: "East",
        wins: 2,
        losses: 9,
        ties: 0,
        defeated: [ "DEN", "KCC" ]
    },
    {
        home: "New York",
        name: "Jets",
        abbreviation: "NYJ",
        conference: "AFC",
        division: "East",
        wins: 4,
        losses: 7,
        ties: 0,
        defeated: [ "MIA", "JAX", "CLE", "BUF" ]
    },
    {
        home: "Oakland",
        name: "Raiders",
        abbreviation: "OAK",
        conference: "AFC",
        division: "West",
        wins: 5,
        losses: 6,
        ties: 0,
        defeated: [ "TEN", "NYJ", "KCC", "MIA", "DEN" ]
    },
    {
        home: "Philadelphia",
        name: "Eagles",
        abbreviation: "PHI",
        conference: "NFC",
        division: "East",
        wins: 10,
        losses: 1,
        ties: 0,
        defeated: [ "WAS", "NYG", "LAC", "ARI", "CAR", "SFO", "DEN", "DAL", "CHI" ]
    },
    {
        home: "Pittsburgh",
        name: "Steelers",
        abbreviation: "PIT",
        conference: "AFC",
        division: "North",
        wins: 9,
        losses: 2,
        ties: 0,
        defeated: [ "CLE", "MIN", "BAL", "KCC", "CIN", "DET", "IND", "TEN", "GBP" ]
    },
    {
        home: "San Francisco",
        name: "49ers",
        abbreviation: "SFO",
        conference: "NFC",
        division: "West",
        wins: 1,
        losses: 10,
        ties: 0,
        defeated: [ "NYG" ]
    },
    {
        home: "Seattle",
        name: "Seahawks",
        abbreviation: "SEA",
        conference: "NFC",
        division: "West",
        wins: 7,
        losses: 4,
        ties: 0,
        defeated: [ "SFO", "IND", "LAR", "NYG", "HOU", "ARI" ]
    },
    {
        home: "Tampa Bay",
        name: "Buccaneers",
        abbreviation: "TBB",
        conference: "NFC",
        division: "South",
        wins: 4,
        losses: 7,
        ties: 0,
        defeated: [ "CHI", "NYG", "NYJ", "MIA" ]
    },
    {
        home: "Tennessee",
        name: "Titans",
        abbreviation: "TEN",
        conference: "AFC",
        division: "South",
        wins: 7,
        losses: 4,
        ties: 0,
        defeated: [ "JAX", "SEA", "IND", "CLE", "BAL", "CIN"]
    },
    {
        home: "Washington",
        name: "Redskins",
        abbreviation: "WAS",
        conference: "NFC",
        division: "East",
        wins: 5,
        losses: 6,
        ties: 0,
        defeated: [ "LAR", "OAK", "SFO", "SEA", "NYG" ]
    }
];

export default Teams;