

class MarkDown { 
    //function to generate license badges
    static renderLicenseBadge(license){
        const newLicense = license.toUpperCase()
        const badges = {
            MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
            GNUGPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        }
        console.log(badges[newLicense])
        
        return badges[newLicense]
    }
    static renderLicenseLink(license){
        const newLicenseLinks = license.toUpperCase()
        const licenseLinks = {
            MIT: '[MIT](https://choosealicense.com/licenses/mit/)',
            ISC: '[ISC](https://choosealicense.com/licenses/isc/)',
            GNUGPLv3: '[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)',
        }
        console.log(licenseLinks[newLicenseLinks])
         return licenseLinks[newLicenseLinks]
    }
//function returns the license section of README
    static renderLicenseSection(license) {
        
        if(license) {
            return `Licensed under the ${this.renderLicenseLink(license)} license`
        } else{
            return ''
        }
    }




    //function to generate README file
    static generateReadme(answers) {
        return `
  # ${answers.title}

${this.renderLicenseBadge(answers.license)}

  ## Table of Contents
  - [Project description](#description)
  - [Project usage](#usage)
  - [Contribution](#contribution)
  - [Installation](#installation)
  - [License](#license)
  - [Questions](#questions)

  ## Description
  ${answers.description}

  ## Usage
  ${answers.usage}

  ## Installation
  ${answers.installation}

  ## Contribution
  ${answers.contribution}

  ## Questions
  ${answers.email}
  ${answers.github}

  ## License
  ${this.renderLicenseSection(answers.license)}

`
}
 }

module.exports = MarkDown;
