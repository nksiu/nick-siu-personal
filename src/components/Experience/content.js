const RivalSoft = `
  As a Software Engineer Intern at Rival Technologies (a Saas company which conducts surveys via customizable chats), my main task was 
  to take responsibilty of a fullstack project from start to finish, which was to add features to and refactor the entire subscription 
  workflow of the product. The main goal of this refactor was to obtain data points that could not be captured with the "current" 
  (now old) subscription workflow, which further improved the reports that were generated upon responding to the chats. Through this
  project, I was able to mature my understanding of datastore management (Elasticsearch, PostgreSQL, Redis), data transformations
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
    description: RivalSoft
  },
  {
    company: "Rival Technologies",
    title: "QA Engineer Intern",
    description: RivalQA
  },
  {
    company: "University of British Columbia",
    title: "",
    description: "Expected graduation: May 2022"
  },
]