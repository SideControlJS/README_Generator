//function that returns license badge
function renderBadge(license) {
    if (license !== "none") {
        return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
}


//function to generate Markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

    ${renderBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is covered under the ${data.license} license.

## Contributing
${data.contributing}

## Questions
For additional information, you can visit my ![GitHub profile](https://github.com/${data.github})
or you can reach out to me at ${data.email} for more questions.
`;
}

module.exports = generateMarkdown;