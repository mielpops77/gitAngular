export class AppareilService
{

    appareils=
    [
        {
            name:"Machine à laver",
            status :"éteint",
            index : 0
        },
        {
            name:"Frigo",
            status :"allumé",
            index : 1

        },
        {
            name:"Ordinateur",
            status :"éteint",
            index : 2

        }

    ]


    getAppareilById(id: number) {
        const appareil = this.appareils.find(
          (s) => {
            return s.index === id;
          }
        );
        return appareil;
    }

    switchOnAll()
    {
        for(let appareil of this.appareils)
        {
            appareil.status = "allumé";
            
        }
    }

    switchOfAll()
    {
        for(let appareil of this.appareils)
        {
            appareil.status = "éteint";
            
        }
    }


    switchOn(i:number)
    {
        this.appareils[i].status = "allumé"
    }

    switchOff(i:number)
    {
        this.appareils[i].status = "éteint"
    }
    
}