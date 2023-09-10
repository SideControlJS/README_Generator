//function that returns license badge



//function to generate Markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    
    ![License](https://img.shields.io/badge/licenses-${data.license}-blue)

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

    ## Tests

    ${data.tests}

    ## Questions

    For additional information, you can visit my [GitHub profile] (https://github.com/${data.github})
    or you can reach out to me at ${data.email} for more questions.
    `;
}