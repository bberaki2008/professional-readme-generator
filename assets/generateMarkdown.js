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
  return `${license.licenseSection}`;
}

//Creates a function to generate markdown for README


function generateMarkdown(data) {
  // replaces "," with two "\s" and "\r" globally to get each content of the table of content in a new line
  const table_content = data.tableContents.toString().replace(/,/g,'  \r');
  const licenseBadge = renderLicenseBadge(data);
  const LicenseLink = renderLicenseLink(data);
  const LicenseSection = renderLicenseSection(data);

  return `# ${data.title} <a id="title"></a> ${licenseBadge} <a id="licenseBadge"></a>

  ## Description <a id="description"></a>
  ${data.description}

  ## Table of Contents
  ${table_content}

  ## Installation Instructions <a id="installationInstructions"></a>
  ${data.installationInstructions}

  ## Usage Information <a id="usage"></a>
  ${data.usage}

  ## Contribution Guidelines <a id="contribution"></a>
  ${data.contribution}

  ## Test Instructions <a id="testInstructions"></a>
  ${data.testInstructions}

  ## Github Username<a id="githubUsername"></a>
  <a>https://github.com/${data.githubUsername}</a>

  ## Can be reached <a id="email"></a>
  ${data.email}

  ## Laguages <a id="languages"></a>
  ${data.languages}
  
  ## License <a id="license"></a>
  ${data.license}

  ## License Link <a id="licenseLink"></a>
  ${LicenseLink} 

  ${LicenseSection} <a id="licenseSection"></a>`;
}

module.exports = generateMarkdown;
