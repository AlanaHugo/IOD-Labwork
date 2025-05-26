        //Excersize 2 - Loop for addCard
        
        // const cards = [
        //     { name: 'bob', age: 23 },
        //     { name: 'alice', age: 39 },
        // ];

        // function addCard(name, age) {
        //     const template = document.getElementById("card-template").content.cloneNode(true);
        //     template.querySelector('.card-title').innerText = name;
        //     template.querySelector('.card-text').innerText = age;
        //     document.querySelector('#card-list').appendChild(template);
        // }

        // for (const card of cards) {
        //     addCard(card.name, card.age);
        // }

//Excersize 3. Dynamically popuate a card with the portfolio 
        const artist = {
            name: "Van Gogh",
            portfolio: [
                {
                    title: "Portrait",
                    url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image"
                },
                {
                    title: "Sky",
                    url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg"
                }
            ]
        };

        function addArtistCard(artist) {
            const template = document.getElementById("card-template").content.cloneNode(true);

            template.querySelector('.card-title').innerText = artist.name;

            const portfolioContainer = template.querySelector('.card-text');
            artist.portfolio.forEach(item => {
                const img = document.createElement('img');
                img.src = item.url;
                img.alt = item.title;
                img.style.width = '150px';
                portfolioContainer.appendChild(img);

                const caption = document.createElement('div');
                caption.innerText = item.title;
                portfolioContainer.appendChild(caption);
            });

            document.querySelector('#card-list').appendChild(template);
        }

        addArtistCard(artist);

