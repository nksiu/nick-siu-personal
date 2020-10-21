const RivalSoft = `
  As a Software Engineer Intern at Rival Technologies (a Saas company which conducts surveys via customizable chats), my major deliverable was 
  to start and finish a fullstack project, adding features to and refactoring the entire subscription workflow. 
  The main goal of this refactor was to obtain data points that could not be captured with the previous
  subscription workflow, which further improved the reports that were generated upon responses to the chats. Through this
  project, I was able to gain experience in datastore management (Elasticsearch, PostgreSQL, Redis), data transformations
  thoughout the product (AST) and frontend design patterns.
`

const RivalQA = `
  As a QA Engineer Intern at Rival Technologies, my major deliverable was to automate the majority of the smoke tests (UI tests) 
  which were run against an environment after deployment. This was done in Cypress.io with the Page Object Model. After completion, 
  the amount of time taken to run the smoke tests was reduced by about 40% and I then went on to set up these tests to run 
  in the CircleCI pipelines. 
`

export const experiences = [
  {
    company: "Rival Technologies",
    title: "Software Engineer Intern",
    description: RivalSoft,
    date: "May 2020 - August 2020",
    type: "work"
  },
  {
    company: "Rival Technologies",
    title: "QA Engineer Intern",
    description: RivalQA,
    date: "September 2019 - April 2020",
    type: "work"
  },
  {
    company: "University of British Columbia",
    title: "",
    description: "Expected graduation: May 2022",
    date: "Started September 2017",
    type: "education"
  },
]