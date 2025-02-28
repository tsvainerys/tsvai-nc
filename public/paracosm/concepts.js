const people = [
    {
        primeAlias: "Madame Svar",
        description: "Extraterrestrial nuclear physicist who moved to Earth in the 1960s",
        href: "madame-svar"
    },
    {
        primeAlias: "Madame Jones",
        description: "Scientist and magician born on Earth to family of extraterrestrial origin",
        href: "madame-jones"
    },
    {
        primeAlias: "Madame Messuk",
        description: "Director of the Intergalactic Bureau of Defense",
        href: "madame-messuk"
    },
    {
        primeAlias: "Archie Archambault",
        description: "One of the first humans to attend and graduate from an Intergalactic Bureau Academy after Earth became aware of extraterrestrial civilization",
        href: "archie-archambault"
    }
]

people.forEach ((people) => {
    let person = document.createElement("li");
    person.classList.add("person");
    let peopleList = document.getElementById("people-list");
        person.innerHTML = `<a href="people/${people.href}.html" class="alias"><span>${people.primeAlias}</span></a> - <span class="description">${people.description}</span>`;
        peopleList.appendChild(person);
})
