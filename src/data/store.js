import {reactive} from 'vue';

const iMieiDati = reactive({
	films: [
        {
            title: `Hellboy`,
            genre: [`Action`, `Drama`, `Superheroes` ],
            img_rec: `1-rec.jpg`,
            img_sq: `1-sq.jpg`,
            release: `8/10/2004`,
            category: `coming soon`,
            views: `100`,
            video: ``,
            rating: `6`,
            duration: `2h 2m`
        },

        {
            title: `The Last of Us`,
            genre: [`Survival`, `Drama`, `Horror` ],
            img_rec: `2-rec.jpg`,
            img_sq: `2-sq.jpg`,
            release: `15/1/2023`,
            category: `tv series`,
            views: `200`,
            video: ``,
            rating: `8`,
            duration: `1h 30m`
        },

        {
            title: `Balto`,
            genre: [`Cartoon`, `Kids`, `Animals` ],
            img_rec: `3-rec.jpg`,
            img_sq: `3-sq.jpg`,
            release: `22/12/1995`,
            category: `top rating`,
            views: `300`,
            video: ``,
            rating: `7`,
            duration: `1h 18m`
        },

        {
            title: `American Sniper`,
            genre: [`Action`, `Drama`, `War` ],
            img_rec: `4-rec.jpg`,
            img_sq: `4-sq.jpg`,
            release: `1/1/2015`,
            category: `latest movie`,
            views: `400`,
            video: ``,
            rating: `7`,
            duration: `2h 12m`
        },

        {
            title: `Skater Girl`,
            genre: [`Sport`, `Comedy` ],
            img_rec: `5-rec.jpg`,
            img_sq: `5-sq.jpg`,
            release: `11/6/2021`,
            category: `coming soon`,
            views: `500`,
            video: ``,
            rating: `5`,
            duration: `1h 48m`
        },

        {
            title: `Kill Bill`,
            genre: [`Action`, `Splatter` ],
            img_rec: `6-rec.jpg`,
            img_sq: `6-sq.jpg`,
            release: `24/10/2003`,
            category: `top rating`,
            views: `600`,
            video: ``,
            rating: `8`,
            duration: `1h 51m`
        },

        {
            title: `Interstellar`,
            genre: [`Sci-fi`, `Adventure` ],
            img_rec: `7-rec.jpg`,
            img_sq: `7-sq.jpg`,
            release: `26/10/2014`,
            category: `top rating`,
            views: `700`,
            video: ``,
            rating: `9`,
            duration: `2h 49m`
        },

        {
            title: `Omen`,
            genre: [`Horrror`, `Mistery` ],
            img_rec: `8-rec.jpg`,
            img_sq: `8-sq.jpg`,
            release: `6/6/1976`,
            category: `coming soon`,
            views: `800`,
            video: ``,
            rating: `4`,
            duration: `1h 57m`
        },

        {
            title: `Saw III`,
            genre: [`Horror`, `Splatter`, `Mistery` ],
            img_rec: `9-rec.jpg`,
            img_sq: `9-sq.jpg`,
            release: `27/10/2006`,
            category: `latest movie`,
            views: `900`,
            video: ``,
            rating: `5`,
            duration: `1h 48m`
        }
    ],

    news: [
        {
            title: `Actor The Concept Movie High Concept Theory See The Post`,
            date: `14/04/2024`,
            img: `news-1.jpg`
        },

        {
            title: `Consequat Nam Lectus Nibh Aucibus It Has Turpis`,
            date: `14/04/2024`,
            img: `news-2.jpg`
        },

        {
            title: `Nam Lectus Nibh Consequat Aucibus Turpis It Has`,
            date: `14/04/2024`,
            img: `news-3.jpg`
        },

        {
            title: `Bring Me The Head Of Alfredo Garcia Best Movie In`,
            date: `14/04/2024`,
            img: `news-4.jpg`
        },

        {
            title: `Pump Action Interaction English Action Movie`,
            date: `14/04/2024`,
            img: `news-5.jpg`
        },
    ]
	
});

export default iMieiDati;