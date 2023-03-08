export class Serie{
    constructor (id, name, image, summary){
        this.id= id;
        this.name = name;
        this.image =image;
        this.summary = summary;
    }
} 

export class Seasons{
    constructor(numberOfSeasons, premierDate, endDate){
        this.numberOfSeasons = numberOfSeasons;
        this.premierDate= premierDate;
        this.endDate = endDate; 
    }
}

export class Cast{
    constructor(castName){
        this.castName = castName;
    }
}

export class Crew{
    constructor(type, crewName){
        this.type = type;
        this.crewName= crewName;
    }
}

export class Aka{
 constructor(name, countryName){
    this.name = name;
    this.countryName= countryName;
 }
}

export class Episodes{
    constructor(episodeName){
        this.episodeName = episodeName;
    }
}
