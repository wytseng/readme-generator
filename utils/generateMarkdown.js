// Function that returns a license badge based on which license is passed in, returns empty string if license is none
function renderLicenseBadge(license) {
  let licenseBadge = '';
  switch(license){
    case 'MIT': 
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'APACHE 2.0': 
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL 3.0': 
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'BSD 3':
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
  }
  return licenseBadge;
}

// Function that returns the license link, returns empty string if license is none
function renderLicenseLink(license) {
  let licenseLink = '';
  switch(license){
    case 'MIT': 
      licenseLink = '[MIT](https://opensource.org/licenses/MIT)';
      break;
    case 'APACHE 2.0': 
      licenseLink = '[APACHE](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL 3.0': 
      licenseLink = '[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'BSD 3':
      licenseLink = '[BSD 3](https://opensource.org/licenses/BSD-3-Clause)';
      break;
  }
  return licenseLink;
}

// Function that returns the license section of README, returns an empty string if licsense is none.
function renderLicenseSection(license) {
  if (license === 'None') {
    return 'N/A';
  } else {
    return `This license is licensed under the ${renderLicenseLink(license)}.`;
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const markdownContent = `# ${data.projectName} \n
${renderLicenseBadge(data.license)} \n
## Description \n
${data.description} \n
## Table of Contents \n
* [Installation](#installation) \n
* [Usage](#Usage) \n
* [License](#license) \n
* [Contributing](#contributing) \n
* [Tests](#tests) \n
* [Questions](#questions) \n
## Installation \n
To install necessary dependencies, run the following command: \n
\`\`\` 
${data.installation} 
\`\`\` \n
## Usage \n
${data.usage} \n
## License \n
${renderLicenseSection(data.license)} \n
## Contributing \n
${data.contribution} \n
## Tests \n
To run test, run the followng command: \n
\`\`\` 
${data.tests}
\`\`\` \n
## Questions 
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. 
You can find more of my work at [${data.github}](https://github.com/${data.github}).`;

  return markdownContent;
}

module.exports = generateMarkdown;
