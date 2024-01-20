// Creates a function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string

function renderLicenseBadge(license) {
  if(license.licenseBadge === "The Unlicense" || license.licenseBadge === null) return "";
  return `${license.licenseBadge}`;
}

// Creates a function that returns the license link
// If there is no license, returns an empty string

function renderLicenseLink(license) {
  if(license.licenseBadge === "The Unlicense" || license.licenseLink === null) return "";
  return `${license.licenseLink}`;
}

//Creates a function that returns the license section of README
// If there is no license, returns an empty string

function renderLicenseSection(license) {
  if(license.licenseBadge === "The Unlicense" || license.licenseSection === null) return "";
  return `${license.licenseSection}\n\n`;
}

//Creates a function to generate markdown for README

function generateMarkdown(data) {

  const licenseBadge = renderLicenseBadge(data);
  const LicenseLink = renderLicenseLink(data);
  const LicenseSection = renderLicenseSection(data);

  return `# ${data.title} <a name="title"></a> ${licenseBadge} 

  # Description <a name="description"></a>
  ${data.description}

  # Table of Contents
  [title](#title)

  ${data.tableContents}

  # Installation Instructions <a name="installationInstructions"></a>
  ${data.installationInstructions}

  # Usage Information <a name="usage"></a>
  ${data.usage}

  # License <a name="license"></a>
  ${data.license}

  # Contribution Guidelines <a name="contribution"></a>
  ${data.contribution}

  # Test Instructions <a name="testInstructions"></a>
  ${data.testInstructions}

  # GitHub Username <a name="githubUsername"></a>
  ${data.githubUsername}

  # Can be reached <a name="email"></a>
  ${data.email}

  # Laguages <a name="languages"></a>
  ${data.languages}
  
  # License Link <a name="licenseLink"></a>
  ${LicenseLink} 

  ${LicenseSection} <a name="licenseSection"></a>`;
}

module.exports = generateMarkdown;
