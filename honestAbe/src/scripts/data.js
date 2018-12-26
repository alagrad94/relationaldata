import DOMBuilder from "./DOMBuilder";

const data = {

    buildPoliticianObject () {

        $.ajax({
            dataType : 'json',
            url: "http://localhost:8088/database"
        }).done(function success (database){
            let politicians = database.politicians;
            let bills = database.bills;
            let pacs = database.pacs;
            let corps = database.corporations;
            let interests = database.interests;

            for (let i = 0; i < politicians.length; i++) {
                const politician = politicians[i];
                let polNumber = politician.PolId;
                let polName = politician.name;
                let billNames = [];
                let interestName = "";
                let pacsNames = [];
                let corpNames = [];


                for (let j = 0; j < bills.length; j++) {
                    const bill = bills[j];
                    const billArray = bill.PolId;
                    if (billArray.includes(polNumber)) {
                        for (let k = 0; k < interests.length; k++) {
                            const interest = interests[k];
                            if (bill.IntId = interest.IntId) {

                                interestName = interest.name;
                            }
                        }
                        billNames.push(bill.name);
                    }

                }
                for (let l = 0; l < pacs.length; l++) {
                    const pac = pacs[l];
                    const pacArray = pac.PolId;
                    const pacNumber = pac.PACId;

                    if (pacArray.includes(polNumber)) {
                        for (let m = 0; m < corps.length; m++) {
                            const corp = corps[m];
                            const corpArray = corp.PACId;

                            if (corpNames.indexOf(corp.name) ===-1 && corpArray.includes(pacNumber)) {
                                corpNames.push(corp.name)
                            }
                        }
                        pacsNames.push(pac.name)
                    }

                }
                let politicianObject = {
                    "name" : polName,
                    "bills": billNames,
                    "interests": interestName,
                    "PACS": pacsNames,
                    "Corps": corpNames
                }
                DOMBuilder.buildPoliticianCards(politicianObject)
            }
        })
    }
}

export default data;