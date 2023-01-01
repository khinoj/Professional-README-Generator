// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ''
  }
  if (license === 'Apache License 2.0') {
    return '![License: Apache](https://img.shields.io/badge/License-Apache_2.0-success.svg)(https://choosealicense.com/licenses/apache-2.0/)'
  }
  if (license === 'GNU General Public License v3.0') {
    return '![License: GNU v3.0](https://img.shields.io/badge/License-GNU_3.0.0-blue.svg)(https://choosealicense.com/licenses/gpl-3.0/)'
  }
  if (license === 'MIT License') {
    return '![License: MIT License](https://img.shields.io/badge/License-MIT.0-red.svg)(https://choosealicense.com/licenses/mit/)'
  }
  if (license === 'BSD 2-Clause "Simplified" License' || license === 'BSD 3-Clause "New" or "Revised" License') {
    return '![License: BSD License](https://img.shields.io/badge/License-BSD-blueviolet.svg)(https://www.openbsd.org/policy.html)'
  }
  if (license === 'GNU General Public License v2.0' || license === 'GNU Lesser General Public License v2.1') {
    return '![License: MIT License](https://img.shields.io/badge/License-GNU2.0-blue.svg)(https://choosealicense.com/licenses/gpl-2.0/)'
  }
  if (license === 'The Unlicense') {
    return '![License: The Unlicense](https://img.shields.io/badge/License-MIT.0-important.svg)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) { }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
   - ${data.description}

   ## Install
   - ${data.install}

   ## Useage
   - ${data.usage}

   ## License

   - ${renderLicenseBadge(data.license)}

   ## Contributing
   - ${data.contributing}

   ## tests

   - ${data.tests}

   ## GitHub Username

   - Check out my Github page for more information at ${data.GitHub}

   ## Email

  - For question feel free to send them to my email ${data.Email}

`;
}

module.exports = generateMarkdown;