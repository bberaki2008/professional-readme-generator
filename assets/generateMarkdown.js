// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(data) {
//   return `${data.licenseBadge}? ## ${data.licenseBadge}: ""`;
// }

function renderLicenseBadge(license) {
  if(license ==="no license") "";
  return `${license.licenseBadge}`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(data) {
//   return `${data.licenseLink}? ## ${data.licenseLink}: ""`;
// }

function renderLicenseLink(license) {
  if(license ==="no license") "";
  return `${license.licenseLink}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(data) {
//   return `${data.licenseSection}? ## ${data.licenseSection}: ""`;
// }

function renderLicenseSection(license) {
  if(license ==="no license") "";
  return `${license.licenseSection}`;
}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title} \n # ${data.description} \n # ${data.installation} \n # ${data.usage} \n # ${data.credits}\n # ${data.siteLink} \n # ${data.screenshot}`;
// }

function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;