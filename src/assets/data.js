const Teams = [
    {
        home: "Arizona",
        name: "Cardinals",
        abbreviation: "ARI",
        conference: "NFC",
        division: "West",
        wins: [ "IND", "SFO", "TBB", "SFO", "JAX" ],
        losses: [ "DET", "DAL", "PHI", "LAR", "SEA", "HOU", "LAR" ],
        ties: []
    },
    {
        home: "Atlanta",
        name: "Falcons",
        abbreviation: "ATL",
        conference: "NFC",
        division: "South",
        wins: [ "CHI", "GBP", "DET", "NYJ", "DAL", "SEA", "TBB" ],
        losses: [ "BUF", "MIA", "NEP", "CAR", "MIN" ],
        ties: []
    },
    {
        home: "Baltimore",
        name: "Ravens",
        abbreviation: "BAL",
        conference: "AFC",
        division: "North",
        wins: [ "CIN", "CLE", "OAK", "MIA" ],
        losses: [ "JAX", "PIT", "CHI", "MIN", "TEN", "GBP", "HOU", "DET" ],
        ties: []
    },
    {
        home: "Buffalo",
        name: "Bills",
        abbreviation: "BUF",
        conference: "AFC",
        division: "East",
        wins: [ "NYJ", "DEN", "ATL", "TBB", "OAK", "KCC" ],
        losses: [ "CAR", "CIN", "NYJ", "NOS", "LAC", "NEP" ],
        ties: []
    },
    {
        home: "Carolina",
        name: "Panthers",
        abbreviation: "CAR",
        conference: "NFC",
        division: "South",
        wins: [ "SFO", "BUF", "NEP", "DET", "TBB", "ATL", "MIA", "NYJ" ],
        losses: [ "NOS", "PHI", "CHI", "NOS" ],
        ties: []
    },
    {
        home: "Chicago",
        name: "Bears",
        abbreviation: "CHI",
        conference: "NFC",
        division: "North",
        wins: [ "PIT", "BAL", "CAR" ],
        losses: [ "ATL", "TBB", "GBP", "MIN", "NOS", "GBP", "DET", "PHI", "SFO" ],
        ties: []
    },
    {
        home: "Cincinnati",
        name: "Bengals",
        abbreviation: "CIN",
        conference: "AFC",
        division: "North",
        wins: [ "CLE", "BUF", "IND", "DEN", "CLE" ],
        losses: [ "BAL", "HOU", "GBP", "PIT", "JAX", "TEN", "PIT" ],
        ties: []
    },
    {
        home: "Cleveland",
        name: "Browns",
        abbreviation: "CLE",
        conference: "AFC",
        division: "North",
        wins: [],
        losses: [ "PIT", "BAL", "IND", "CIN", "NYJ", "HOU", "TEN", "MIN", "DET", "JAX", "CIN", "LAC" ],
        ties: []
    },
    {
        home: "Dallas",
        name: "Cowboys",
        abbreviation: "DAL",
        conference: "NFC",
        division: "East",
        wins: [ "NYG", "ARI", "SFO", "WAS", "KCC", "WAS" ],
        losses: [ "DEN", "LAR", "GBP", "ATL", "PHI", "LAC" ],
        ties: []
    },
    {
        home: "Denver",
        name: "Broncos",
        abbreviation: "DEN",
        conference: "AFC",
        division: "West",
        wins: [ "LAC", "DEN", "OAK" ],
        losses: [ "BUF", "NYG", "LAC", "KCC", "PHI", "NEP", "CIN", "OAK", "MIA" ],
        ties: []
    },
    {
        home: "Detroit",
        name: "Lions",
        abbreviation: "DET",
        conference: "NFC",
        division: "North",
        wins: [ "ARI", "NYG", "MIN", "GBP", "CLE", "CHI" ],
        losses: [ "ATL", "CAR", "NOS", "PIT", "MIN", "BAL" ],
        ties: []
    },
    {
        home: "Green Bay",
        name: "Packers",
        abbreviation: "GBP",
        conference: "NFC",
        division: "North",
        wins: [ "SEA", "CIN", "CHI", "DAK", "CHI", "TBB" ],
        losses: [ "ATL", "MIN", "NOS", "DET", "BAL", "PIT" ],
        ties: []
    },
    {
        home: "Houston",
        name: "Texans",
        conference: "AFC",
        division: "South",
        abbreviation: "HOU",
        wins: [ "CIN", "TEN", "CLE", "ARI" ],
        losses: [ "JAX", "NEP", "KCC", "SEA", "IND", "LAR", "BAL", "TEN" ],
        ties: []
    },
    {
        home: "Indianapolis",
        name: "Colts",
        abbreviation: "IND",
        conference: "AFC",
        division: "South",
        wins: [ "CLE", "SFO", "HOU" ],
        losses: [ "LAR", "ARI", "SEA", "TEN", "JAX", "CIN", "PIT", "TEN", "JAX" ],
        ties: []
    },
    {
        home: "Jacksonville",
        name: "Jaguars",
        abbreviation: "JAX",
        conference: "AFC",
        division: "South",
        wins: [ "HOU", "BAL", "PIT", "IND", "CIN", "LAC", "CLE", "IND" ],
        losses: [ "TEN", "NYJ", "LAR", "ARI" ],
        ties: []
    },
    {
        home: "Kansas City",
        name: "Chiefs",
        abbreviation: "KCC",
        conference: "AFC",
        division: "West",
        wins: [ "NEP", "PHI", "LAC", "WAS", "HOU", "DEN" ],
        losses: [ "PIT", "OAK", "DAL", "NYG", "BUF", "NYJ" ],
        ties: []
    },
    {
        home: "Los Angeles",
        name: "Chargers",
        abbreviation: "LAC",
        conference: "AFC",
        division: "West",
        wins: [ "NYG", "OAK", "DEN", "BUF", "DAL", "CLE" ],
        losses: [ "DEN", "MIA", "KAN", "PHI", "NEP", "JAX" ],
        ties: []
    },
    {
        home: "Los Angeles",
        name: "Rams",
        abbreviation: "LAR",
        conference: "NFC",
        division: "West",
        wins: [ "IND", "SFO", "DAL", "JAX", "ARI", "NYG", "HOU", "NOS", "ARI" ],
        losses: [ "WAS", "SEA", "MIN" ],
        ties: []
    },
    {
        home: "Miami",
        name: "Dolphins",
        abbreviation: "MIA",
        conference: "AFC",
        division: "East",
        wins: [ "LAC", "TEN", "ATL", "NYJ", "DEN" ],
        losses: [ "NYJ", "NOS", "BAL", "OAK", "CAR", "TBB", "NEP" ],
        ties: []
    },
    {
        home: "Minnesota",
        name: "Vikings",
        abbreviation: "MIN",
        conference: "NFC",
        division: "North",
        wins: [ "NOS", "TBB", "CHI", "GBP", "BAL", "CLE", "WAS", "LAR", "DET", "ATL" ],
        losses: [ "PIT", "DET" ],
        ties: []
    },
    { 
        home: "New England", 
        name: "Patriots", 
        abbreviation: "NEP", 
        conference: "AFC", 
        division: "East", 
        wins: [ "NOS", "HOU", "TBB", "NYJ", "ATL", "LAC", "DEN", "OAK", "MIA", "BUF" ],
        losses: [ "KCC", "CAR" ],
        ties: []
    },
    {
        home: "New Orleans",
        name: "Saints", 
        abbreviation: "NOS",
        conference: "NFC",
        division: "South",
        wins: [ "CAR", "MIA", "DET", "GBP", "CHI", "TBB", "BUF", "WAS", "CAR" ],
        losses: [ "MIN", "NEP", "LAR" ],
        ties: []
    },
    {
        home: "New York",
        name: "Giants",
        abbreviation: "NYG",
        conference: "NFC",
        division: "East",
        wins: [ "DEN", "KCC" ],
        losses: [ "NYG", "DET", "PHI", "TBB", "LAC", "SEA", "LAR", "SFO", "WAS", "OAK" ],
        ties: []
    },
    {
        home: "New York",
        name: "Jets",
        abbreviation: "NYJ",
        conference: "AFC",
        division: "East",
        wins: [ "MIA", "JAX", "CLE", "BUF", "KCC" ],
        losses: [ "BUF", "OAK", "NEP", "MIA", "ATL", "TBB", "CAR" ],
        ties: []
    },
    {
        home: "Oakland",
        name: "Raiders",
        abbreviation: "OAK",
        conference: "AFC",
        division: "West",
        wins: [ "TEN", "NYJ", "KCC", "MIA", "OAK", "NYG" ],
        losses: [ "WAS", "DEN", "BAL", "LAC", "BUF", "NEP" ],
        ties: []
    },
    {
        home: "Philadelphia",
        name: "Eagles",
        abbreviation: "PHI",
        conference: "NFC",
        division: "East",
        wins: [ "WAS", "NYG", "LAC", "ARI", "CAR", "WAS", "SFO", "DEN", "DAL", "CHI" ],
        losses: [ "KCC", "SEA" ],
        ties: []
    },
    {
        home: "Pittsburgh",
        name: "Steelers",
        abbreviation: "PIT",
        conference: "AFC",
        division: "North",
        wins: [ "CLE", "MIN", "BAL", "KCC", "CIN", "DET", "IND", "TEN", "GBP", "CIN" ],
        losses: [ "CHI", "JAX" ],
        ties: []
    },
    {
        home: "San Francisco",
        name: "49ers",
        abbreviation: "SFO",
        conference: "NFC",
        division: "West",
        wins: [ "NYG", "CHI" ],
        losses: [ "CAR", "SEA", "LAR", "ARI", "IND", "WAS", "DAL", "PHI", "ARI", "SEA" ],
        ties: []
    },
    {
        home: "Seattle",
        name: "Seahawks",
        abbreviation: "SEA",
        conference: "NFC",
        division: "West",
        wins: [ "SFO", "IND", "LAR", "NYG", "HOU", "ARI", "SFO", "PHI" ],
        losses: [ "GBP", "TEN", "WAS", "ATL" ],
        ties: []
    },
    {
        home: "Tampa Bay",
        name: "Buccaneers",
        abbreviation: "TBB",
        conference: "NFC",
        division: "South",
        wins: [ "CHI", "NYG", "NYJ", "MIA" ],
        losses: [ "MIN", "NEP", "ARI", "BUF", "CAR", "NOS", "ATL", "GBP" ],
        ties: []
    },
    {
        home: "Tennessee",
        name: "Titans",
        abbreviation: "TEN",
        conference: "AFC",
        division: "South",
        wins: [ "JAX", "SEA", "IND", "CLE", "BAL", "CIN", "IND", "HOU" ],
        losses: [ "OAK", "HOU", "MIA", "PIT" ],
        ties: []
    },
    {
        home: "Washington",
        name: "Redskins",
        abbreviation: "WAS",
        conference: "NFC",
        division: "East",
        wins: [ "LAR", "OAK", "SFO", "SEA", "NYG" ],
        losses: [ "PHI", "KCC", "PHI", "DAL", "MIN", "NOS", "DAL" ],
        ties: []
    }
];

export default Teams;