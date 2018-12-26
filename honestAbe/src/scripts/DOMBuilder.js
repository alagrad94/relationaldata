const DOMBuilder = {

   buildPoliticianCards (politicianObject) {

        let outputArticle = $("#output");

        let politicianArticle = document.createElement("article");
        politicianArticle.classList.add("politician");
        let politicianHeader = document.createElement("header");
        politicianHeader.classList.add("politician__name");
        let politicianH1 = document.createElement("h1");
        politicianH1.textContent = politicianObject.name;
        let billsSection = document.createElement("section");
        billsSection.classList.add("politician__bills");
        let billsSectionTitle = document.createElement("h3");
        billsSectionTitle.textContent = "Sponsored Bills";
        let pacsSection = document.createElement("section");
        pacsSection.classList.add("politician__influencers");
        let pacsSectionTitle = document.createElement("h3");
        pacsSectionTitle.textContent = "Related PACs";
        let pacsUL = document.createElement("ul");
        let corpsSection = document.createElement("section");
        corpsSection.classList.add("politician__influencers");
        let corpsSectionTitle = document.createElement("h3");
        corpsSectionTitle.textContent = "Related Corporations";
        let corpsUL = document.createElement("ul");

        outputArticle.append(politicianArticle);
        politicianArticle.appendChild(politicianHeader);
        politicianHeader.appendChild(politicianH1);
        billsSection.appendChild(billsSectionTitle);
        politicianArticle.appendChild(billsSection);
        pacsSection.appendChild(pacsSectionTitle);
        politicianArticle.appendChild(pacsSection);
        corpsSection.appendChild(corpsSectionTitle);
        politicianArticle.appendChild(corpsSection);
        politicianArticle.appendChild(pacsUL);
        politicianArticle.appendChild(corpsUL);



        politicianObject.bills.forEach(bill => {

            let billDiv = document.createElement("div");
            let billTitle = document.createElement("h4");
            billTitle.textContent = bill;
            let billInterestUL = document.createElement("ul");
            let billInterestLI = document.createElement("li");
            billInterestLI.textContent = politicianObject.interests;

            billsSection.appendChild(billDiv);
            billDiv.appendChild(billTitle);
            billDiv.appendChild(billInterestUL);
            billInterestUL.appendChild(billInterestLI);
        });

        for (let i = 0; i < politicianObject.PACS.length; i++) {
            const pac = politicianObject.PACS[i];


            let relatedPacsLI = document.createElement("li");
            relatedPacsLI.textContent = pac;

            pacsUL.appendChild(relatedPacsLI);

        }


        for (let i = 0; i < politicianObject.Corps.length; i++) {
            const corp = politicianObject.Corps[i];


            let relatedCorpsLI = document.createElement("li");
            relatedCorpsLI.textContent = corp;

            corpsUL.appendChild(relatedCorpsLI);

        }

    }

}

export default DOMBuilder;