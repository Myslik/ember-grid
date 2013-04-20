window.App = Ember.Application.create();

App.Store = DS.Store.extend({
    revision: 12,
    adapter: 'DS.FixtureAdapter'
});

App.Person = DS.Model.extend({
    name: DS.attr('string'),
    picture: DS.attr('string'),
    age: DS.attr('number')
});

App.Person.FIXTURES = [
    {
        id: 1,
        picture: "http://placehold.it/32x32",
        age: 25,
        name: "Isabelle Stanley"
    },
    {
        id: 2,
        picture: "http://placehold.it/32x32",
        age: 40,
        name: "Emily Day"
    },
    {
        id: 3,
        picture: "http://placehold.it/32x32",
        age: 30,
        name: "Makayla Gardner"
    },
    {
        id: 4,
        picture: "http://placehold.it/32x32",
        age: 30,
        name: "Lauren Thomson"
    },
    {
        id: 5,
        picture: "http://placehold.it/32x32",
        age: 31,
        name: "Jasmine Carey"
    },
    {
        id: 6,
        picture: "http://placehold.it/32x32",
        age: 22,
        name: "Peyton Youmans"
    },
    {
        id: 7,
        picture: "http://placehold.it/32x32",
        age: 39,
        name: "Alyssa Wallace"
    },
    {
        id: 8,
        picture: "http://placehold.it/32x32",
        age: 22,
        name: "Ella Sherlock"
    },
    {
        id: 9,
        picture: "http://placehold.it/32x32",
        age: 20,
        name: "Bailey Abramson"
    },
    {
        id: 10,
        picture: "http://placehold.it/32x32",
        age: 38,
        name: "Eva Young"
    },
    {
        id: 11,
        picture: "http://placehold.it/32x32",
        age: 25,
        name: "Leah Warren"
    },
    {
        id: 12,
        picture: "http://placehold.it/32x32",
        age: 32,
        name: "Nevaeh Daniels"
    },
    {
        id: 13,
        picture: "http://placehold.it/32x32",
        age: 34,
        name: "Destiny WifKinson"
    },
    {
        id: 14,
        picture: "http://placehold.it/32x32",
        age: 22,
        name: "Charlotte Miln"
    },
    {
        id: 15,
        picture: "http://placehold.it/32x32",
        age: 35,
        name: "Allison Carter"
    },
    {
        id: 16,
        picture: "http://placehold.it/32x32",
        age: 23,
        name: "Bella Osborne"
    },
    {
        id: 17,
        picture: "http://placehold.it/32x32",
        age: 37,
        name: "Maya Brickman"
    },
    {
        id: 18,
        picture: "http://placehold.it/32x32",
        age: 30,
        name: "Mia Nelson"
    },
    {
        id: 19,
        picture: "http://placehold.it/32x32",
        age: 21,
        name: "Camila Ogden"
    },
    {
        id: 20,
        picture: "http://placehold.it/32x32",
        age: 31,
        name: "Elizabeth Smith"
    },
    {
        id: 21,
        picture: "http://placehold.it/32x32",
        age: 28,
        name: "Trinity WifKinson"
    },
    {
        id: 22,
        picture: "http://placehold.it/32x32",
        age: 28,
        name: "Jasmine Otis"
    },
    {
        id: 23,
        picture: "http://placehold.it/32x32",
        age: 35,
        name: "Alexis Young"
    },
    {
        id: 24,
        picture: "http://placehold.it/32x32",
        age: 33,
        name: "Sydney Wainwright"
    },
    {
        id: 25,
        picture: "http://placehold.it/32x32",
        age: 26,
        name: "Andrea Oldman"
    },
    {
        id: 26,
        picture: "http://placehold.it/32x32",
        age: 22,
        name: "Alexandra Gustman"
    },
    {
        id: 27,
        picture: "http://placehold.it/32x32",
        age: 37,
        name: "Ariana Mercer"
    },
    {
        id: 28,
        picture: "http://placehold.it/32x32",
        age: 32,
        name: "Katherine Gate"
    },
    {
        id: 29,
        picture: "http://placehold.it/32x32",
        age: 29,
        name: "Brooke Walkman"
    },
    {
        id: 30,
        picture: "http://placehold.it/32x32",
        age: 37,
        name: "Aaliyah Cook"
    },
    {
        id: 31,
        picture: "http://placehold.it/32x32",
        age: 28,
        name: "Elizabeth Davidson"
    },
    {
        id: 32,
        picture: "http://placehold.it/32x32",
        age: 29,
        name: "Avery Cook"
    },
    {
        id: 33,
        picture: "http://placehold.it/32x32",
        age: 35,
        name: "Samantha Calhoun"
    },
    {
        id: 34,
        picture: "http://placehold.it/32x32",
        age: 32,
        name: "Bella Murphy"
    },
    {
        id: 35,
        picture: "http://placehold.it/32x32",
        age: 38,
        name: "Riley Clapton"
    },
    {
        id: 36,
        picture: "http://placehold.it/32x32",
        age: 35,
        name: "Natalie Otis"
    },
    {
        id: 37,
        picture: "http://placehold.it/32x32",
        age: 34,
        name: "Jessica Nelson"
    },
    {
        id: 38,
        picture: "http://placehold.it/32x32",
        age: 25,
        name: "Brooklyn Carrington"
    },
    {
        id: 39,
        picture: "http://placehold.it/32x32",
        age: 28,
        name: "Melanie Morrison"
    },
    {
        id: 40,
        picture: "http://placehold.it/32x32",
        age: 26,
        name: "Autumn Higgins"
    },
    {
        id: 41,
        picture: "http://placehold.it/32x32",
        age: 32,
        name: "Faith Carter"
    },
    {
        id: 42,
        picture: "http://placehold.it/32x32",
        age: 25,
        name: "Riley Morrison"
    },
    {
        id: 43,
        picture: "http://placehold.it/32x32",
        age: 39,
        name: "Zoey Thomson"
    },
    {
        id: 44,
        picture: "http://placehold.it/32x32",
        age: 25,
        name: "Ava Fisher"
    },
    {
        id: 45,
        picture: "http://placehold.it/32x32",
        age: 34,
        name: "Arianna Murphy"
    },
    {
        id: 46,
        picture: "http://placehold.it/32x32",
        age: 40,
        name: "Madison Freeman"
    },
    {
        id: 47,
        picture: "http://placehold.it/32x32",
        age: 39,
        name: "Andrea Miln"
    },
    {
        id: 48,
        picture: "http://placehold.it/32x32",
        age: 38,
        name: "Angelina Goldman"
    },
    {
        id: 49,
        picture: "http://placehold.it/32x32",
        age: 37,
        name: "Madeline Croftoon"
    },
    {
        id: 50,
        picture: "http://placehold.it/32x32",
        age: 20,
        name: "Brooke Adamson"
    },
    {
        id: 51,
        picture: "http://placehold.it/32x32",
        age: 30,
        name: "Julia Miln"
    },
    {
        id: 52,
        picture: "http://placehold.it/32x32",
        age: 25,
        name: "Bailey Milton"
    },
    {
        id: 53,
        picture: "http://placehold.it/32x32",
        age: 40,
        name: "Mya Miers"
    },
    {
        id: 54,
        picture: "http://placehold.it/32x32",
        age: 38,
        name: "Allison Sheldon"
    },
    {
        id: 55,
        picture: "http://placehold.it/32x32",
        age: 40,
        name: "Victoria Bush"
    },
    {
        id: 56,
        picture: "http://placehold.it/32x32",
        age: 38,
        name: "Olivia Miller"
    },
    {
        id: 57,
        picture: "http://placehold.it/32x32",
        age: 28,
        name: "Paige Thomson"
    },
    {
        id: 58,
        picture: "http://placehold.it/32x32",
        age: 35,
        name: "Brianna Brickman"
    },
    {
        id: 59,
        picture: "http://placehold.it/32x32",
        age: 35,
        name: "Vanessa Oldridge"
    },
    {
        id: 60,
        picture: "http://placehold.it/32x32",
        age: 22,
        name: "Sophie Vaughan"
    },
    {
        id: 61,
        picture: "http://placehold.it/32x32",
        age: 40,
        name: "Riley Hancock"
    },
    {
        id: 62,
        picture: "http://placehold.it/32x32",
        age: 32,
        name: "Morgan White"
    },
    {
        id: 63,
        picture: "http://placehold.it/32x32",
        age: 24,
        name: "Alexandra WifKinson"
    },
    {
        id: 64,
        picture: "http://placehold.it/32x32",
        age: 32,
        name: "Jocelyn Cook"
    },
    {
        id: 65,
        picture: "http://placehold.it/32x32",
        age: 26,
        name: "Isabelle Fisher"
    },
    {
        id: 66,
        picture: "http://placehold.it/32x32",
        age: 33,
        name: "Kayla Davidson"
    },
    {
        id: 67,
        picture: "http://placehold.it/32x32",
        age: 26,
        name: "Katherine Harrison"
    },
    {
        id: 68,
        picture: "http://placehold.it/32x32",
        age: 31,
        name: "Emma Michaelson"
    },
    {
        id: 69,
        picture: "http://placehold.it/32x32",
        age: 23,
        name: "Isabella Brown"
    },
    {
        id: 70,
        picture: "http://placehold.it/32x32",
        age: 29,
        name: "Madelyn Winter"
    },
    {
        id: 71,
        picture: "http://placehold.it/32x32",
        age: 29,
        name: "Camila Oldman"
    },
    {
        id: 72,
        picture: "http://placehold.it/32x32",
        age: 32,
        name: "Valeria Miln"
    },
    {
        id: 73,
        picture: "http://placehold.it/32x32",
        age: 26,
        name: "Maya Webster"
    },
    {
        id: 74,
        picture: "http://placehold.it/32x32",
        age: 38,
        name: "Elizabeth Brooks"
    },
    {
        id: 75,
        picture: "http://placehold.it/32x32",
        age: 24,
        name: "Alexis Wainwright"
    },
    {
        id: 76,
        picture: "http://placehold.it/32x32",
        age: 34,
        name: "Kylie Cook"
    },
    {
        id: 77,
        picture: "http://placehold.it/32x32",
        age: 29,
        name: "Nevaeh Wayne"
    },
    {
        id: 78,
        picture: "http://placehold.it/32x32",
        age: 39,
        name: "Samantha Cook"
    },
    {
        id: 79,
        picture: "http://placehold.it/32x32",
        age: 27,
        name: "Kayla Stanley"
    },
    {
        id: 80,
        picture: "http://placehold.it/32x32",
        age: 27,
        name: "Claire Daniels"
    },
    {
        id: 81,
        picture: "http://placehold.it/32x32",
        age: 32,
        name: "Paige Gilbert"
    },
    {
        id: 82,
        picture: "http://placehold.it/32x32",
        age: 33,
        name: "Ava Brickman"
    },
    {
        id: 83,
        picture: "http://placehold.it/32x32",
        age: 28,
        name: "Grace Sheldon"
    },
    {
        id: 84,
        picture: "http://placehold.it/32x32",
        age: 25,
        name: "Trinity Day"
    },
    {
        id: 85,
        picture: "http://placehold.it/32x32",
        age: 20,
        name: "Anna Chesterton"
    },
    {
        id: 86,
        picture: "http://placehold.it/32x32",
        age: 28,
        name: "Leah Hamphrey"
    },
    {
        id: 87,
        picture: "http://placehold.it/32x32",
        age: 29,
        name: "Kylie Oldman"
    },
    {
        id: 88,
        picture: "http://placehold.it/32x32",
        age: 29,
        name: "Alexis Haig"
    },
    {
        id: 89,
        picture: "http://placehold.it/32x32",
        age: 30,
        name: "Olivia Charlson"
    },
    {
        id: 90,
        picture: "http://placehold.it/32x32",
        age: 33,
        name: "Emma Hoggarth"
    },
    {
        id: 91,
        picture: "http://placehold.it/32x32",
        age: 36,
        name: "Jocelyn Day"
    },
    {
        id: 92,
        picture: "http://placehold.it/32x32",
        age: 33,
        name: "Jasmine Fisher"
    },
    {
        id: 93,
        picture: "http://placehold.it/32x32",
        age: 33,
        name: "Emily Croftoon"
    },
    {
        id: 94,
        picture: "http://placehold.it/32x32",
        age: 38,
        name: "Kaylee Miller"
    },
    {
        id: 95,
        picture: "http://placehold.it/32x32",
        age: 31,
        name: "Sophie Calhoun"
    },
    {
        id: 96,
        picture: "http://placehold.it/32x32",
        age: 26,
        name: "Gianna Hancock"
    },
    {
        id: 97,
        picture: "http://placehold.it/32x32",
        age: 28,
        name: "Zoey Sheldon"
    },
    {
        id: 98,
        picture: "http://placehold.it/32x32",
        age: 26,
        name: "Genesis Wood"
    },
    {
        id: 99,
        picture: "http://placehold.it/32x32",
        age: 24,
        name: "Caroline Oliver"
    },
    {
        id: 100,
        picture: "http://placehold.it/32x32",
        age: 32,
        name: "Peyton Osborne"
    }
];
