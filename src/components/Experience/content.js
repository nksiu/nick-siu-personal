const Amazon = `
  As a Software Development Engineer at Amazon, I was on the Credit Card team which helped with the registration process for new customers.
  My project was to create a log aggregator for the 4 different microservices that existed and implement a permission model which fit the 
  business needs of the entire Consumer organization. By using services such as AWS OpenSearch, Lambda, S3, CloudWatch Logs, Kinesis Firehose and Cognito,
  I was able to efficiently deploy (via CDK) the log aggregator system to different regions. 
`

const Machobear = `
  During my time at Machobear, I contributed to the migration from Create React App to Next.js in order to improve SEO.
  Additionally, I worked on the new marketing pages such as the home page for https://liv.rent/
`

const RivalSoft = `
  As a Software Engineer Intern at Rival Technologies, my major deliverable was 
  a fullstack project, which added features and refactored the entire subscription workflow. 
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
    company: "Splunk",
    title: "Software Engineer Intern",
    description: "",
    date: "May 2022 - Present",
    type: "work"
  },
  {
    company: "Amazon",
    title: "Software Development Engineer Intern",
    description: Amazon,
    date: "September 2021 - December 2021",
    type: "work"
  },
  {
    company: "Machobear",
    title: "Software Developer Intern",
    description: Machobear,
    date: "May 2021 - August 2021",
    type: "work"
  },
  {
    company: "Rival Technologies",
    title: "Software Engineer Intern",
    description: RivalSoft,
    date: "April 2020 - August 2020",
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