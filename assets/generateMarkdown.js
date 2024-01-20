// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(data) {
//   return `${data.licenseBadge}? ## ${data.licenseBadge}: ""`;
// }

function renderLicenseBadge(license) {
  if(license.licenseBadge === "The Unlicense" || license.licenseBadge === null) return "";
  return `# ${license.licenseBadge}\n\n`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(data) {
//   return `${data.licenseLink}? ## ${data.licenseLink}: ""`;
// }

function renderLicenseLink(license) {
  if(license.licenseBadge === "The Unlicense" || license.licenseLink === null) return "";
  return `# Link to the license ${license.licenseLink}\n\n`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(data) {
//   return `${data.licenseSection}? ## ${data.licenseSection}: ""`;
// }

function renderLicenseSection(license) {
  if(license.licenseBadge === "The Unlicense" || license.licenseSection === null) return "";
  return `${license.licenseSection}\n\n`;
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {

  return `# ${data.title}
  \n`+
  renderLicenseBadge(data) +
  renderLicenseLink(data) +
  renderLicenseSection(data);
}

module.exports = generateMarkdown;
