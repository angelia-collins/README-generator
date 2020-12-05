// function to generate markdown for README
function generateMarkdown(data) {
  let markdown = `# ${data.title}
  Get a unique password based on your specifications.
  
  ## What It Looks Like
  ![password generator](/Assets/password-generator-screencap.png)
  
  ## Check It Out
  [Generate a Password](https://angelia-collins.github.io/PasswordGenerator/)
  
 ©2020"

`;
}

module.exports = generateMarkdown;
