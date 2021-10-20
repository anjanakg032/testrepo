var country=[
    {
    "name": "India",
    "topLevelDomain": [
    ".in"
    ],
    "alpha2Code": "IN",
    "alpha3Code": "IND",
    "callingCodes": [
    "91"
    ],
    "capital": "New Delhi",
    "altSpellings": [
    "IN",
    "Bhārat",
    "Republic of India",
    "Bharat Ganrajya"
    ],
    "subregion": "Southern Asia",
    "region": "Asia",
    "population": 1380004385,
    "latlng": [
    20,
    77
    ],
    "demonym": "Indian",
    "area": 3287590,
    "gini": 35.7,
    "timezones": [
    "UTC+05:30"
    ],
    "borders": [
    "AFG",
    "BGD",
    "BTN",
    "MMR",
    "CHN",
    "NPL",
    "PAK",
    "LKA"
    ],
    "nativeName": "भारत",
    "numericCode": "356",
    "flags": {
    "svg": "https://flagcdn.com/in.svg",
    "png": "https://flagcdn.com/w320/in.png"
    },
    "currencies": [
    {
    "code": "INR",
    "name": "Indian rupee",
    "symbol": "₹"
    }
    ],
    "languages": [
    {
    "iso639_1": "hi",
    "iso639_2": "hin",
    "name": "Hindi",
    "nativeName": "हिन्दी"
    },
    {
    "iso639_1": "en",
    "iso639_2": "eng",
    "name": "English",
    "nativeName": "English"
    }
    ],
    "translations": {
    "br": "Índia",
    "pt": "Índia",
    "nl": "India",
    "hr": "Indija",
    "fa": "هند",
    "de": "Indien",
    "es": "India",
    "fr": "Inde",
    "ja": "インド",
    "it": "India",
    "hu": "India"
    },
    "flag": "https://flagcdn.com/in.svg",
    "regionalBlocs": [
    {
    "acronym": "SAARC",
    "name": "South Asian Association for Regional Cooperation"
    }
    ],
    "cioc": "IND",
    "independent": true
    }
    ]


    //....print currency name
    country.map(cur=>cur.currencies[0]).map(cur=>cur.name).forEach(cur=>console.log(cur)) // not correct. only one country is present no need of mapping
    console.log(country[0].currencies);   // correct not showing result
    console.log(country[0].currencies[0].name);   // correct not showing result

    //.....country name and symbol
    var data=country.map(con=>[con.name,con.currencies[0].name])
    console.log(data);   

    //*** this all data need to be represented in user interface. for that DOCUMENT OBJECT MODAL is there
    var a=country[0].name
    console.log(a);

 