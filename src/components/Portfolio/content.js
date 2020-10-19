const calendarDesc = `
  The purpose of this calendar web application is to help keep track with our busy lives by a simple glance.
  Adding, updating, removing, and viewing appointments are done on a per user basis with customeizable settings,
  such as hiding appointments from view on the calendar. What I learned from this project was the creation
  of APIs to persist data to a database (MongoDB). Additionally, the usage of stateless components helped
  me learn about React Hooks. Weather information and group appointments coming soon...
`

const spotifyDesc = `
  Often times, the Spotify algorithm will recommend songs that are similar to your music tastes but with this
  web applications, users are exposed to the top songs from the selected country, diversifying the users
  music tastes. This project mainly helped me learn about React and Redux, as well as dealing with APIs
  protected by OAuth 2.0.
`
const dictThesDesc = `
  As a student, I come across words I don't understand and need to open up dictionary.com or thesaurus.com
  to help aid my understanding with the content I am learning. The creation of this extension was to have the
  definitions and synonyms conveniently a click away to minimize my disturbance while reading.
`

const busesDesc = `
  This project was done as part of the CPSC 210 curriculum. What I found most interesting about this project
  was the lazy loading of the bus routes on the map when a bus stop was clicked. As multiple buses can go through a single stop,
  mutilple lines were drawn but if you rendered the entirety of the routes, the application will lag. The implementation of lazy loading
  fixes this.
`

export const projects = [
  {
    title: "My Calendar",
    techStack: "React, Redux, MongoDB, Node, Express",
    description: calendarDesc,
    date: "September 2020 - Present",
    type: "personal",
    url: "https://my-calendar-mern.herokuapp.com/",
    sourceCode: "https://github.com/nksiu/calendar-app"
  },
  {
    title: "Spotify Top 50",
    techStack: "React, Redux, Node, Express",
    description: spotifyDesc,
    date: "December 2019",
    type: "personal",
    url: "http://spotify-top-50.herokuapp.com",
    sourceCode: "https://github.com/nksiu/spotify-top-50"
  },
  {
    title: "Dictionary and Thesaurus",
    techStack: "JavaScript, HTML5, CSS3",
    description: dictThesDesc,
    date: "November 2019",
    type: "personal",
    url: "https://chrome.google.com/webstore/detail/dictionary-thesaurus-exte/ialecjmapmlhflblnpfgcbdgjlgeohfb?hl=en",
    sourceCode: "https://github.com/nksiu/Dictionary-Thesaurus-Extension"
  },
  {
    title: "Buses R' Us",
    techStack: "Java",
    description: busesDesc,
    date: "August 2018",
    type: "academic",
    url: "",
    sourceCode: ""
  },
]