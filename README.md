# Forge App

This project is supposed to notify a Jirs user if they forget to attach something. 

### User Stories
- A user types in a comment and says they have attached a screenshot
- On clicking the 'save' button on a Jira issue, they should see a modal that tells them that they forgot to attach the screenshot. 


### Requirements

- We need to detect that a new comment has been created (use the Jira comment event - Comment on issue, which means we subscribe to the `avi:jira:commented:issue` event on our manifest.yaml)
- We need to be able to read the contents of the comment and check for keywords like `attach` or `screenshot`
- If the keyword exists, a modal pops up - show modal on comment/save


## Edge cases

- Incorporate mentions 
- Eventually send a notification to the user
- Check for file extensions (.jpg, .jpeg, .pdf, .png, .xlxs, .webp...etc) and attachments

## Project set up

 - You need to complete all the steps on [Getting Started](https://developer.atlassian.com/platform/forge/getting-started/) so that you’re familiar with the Forge development process.



