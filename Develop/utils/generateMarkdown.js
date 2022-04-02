// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license ==='MIT') {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  } else if (license ==='Apache 2.0') {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else {
    return ``
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license ==='MIT') {
    return `https://opensource.org/licenses/${license}`
  } else if (license ==='Apache 2.0') {
    return `https://opensource.org/licenses/Apache-2.0`
  } else {
    return ``
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `[${renderLicenseBadge(license)}](${renderLicenseLink(license)})
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License
  ${renderLicenseSection(data.license)}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](Usage)
  - [Contributing](Contributing)
  - [Tests](Tests)
  - [Questions](Questions)

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.questions}

`;
}

module.exports = generateMarkdown;
