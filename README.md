# Note Taker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
    
The Note Taker application is a tool that allows users to easily write, store, recall, and delete notes to stay organized and not forget important to-dos. The application uses Express.js on the back end to allow the user to store, access, and edit data stored in a JSON database.

I was motivated to create this application because organization is key to being successful both personally and professionally. Additionally, the use-case of needing to store, access, and edit data saved in a back end database is fundamental in almost all full-stack web applications. This exercise really helped me connect the dots between front end and back end functionality.

Through working on this project, I have learned about using Express.js to create and connect API routes to front end applications to allow for data to be called from, and written to, a back end database. Some of the biggest points of learning include:

* Creating routes to serve HTML files
* Static Assets
* Using query parameters in API routes
* GET, POST, and DELETE routes and how to connect them to fetch calls
* Modular routing
* Heroku deployment
    
## Table of Contents
        
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
 
## Installation
            
N/A
    
## Usage
    
The Note Taker application has a homepage with a button linking users to the page where they will create and save notes. The HTML files for both these pages are served by setting the public folder as a static asset. On the notes page, the application will use the POST route when a user creates a note and clicks on the save button that appears at the top right of the page. The data in the created note is written to a JSON database with a unique identifier supplied by the uuid node package. If there are saved notes, the application uses the GET route to read the data in the database and use it to display saved note-titles on the left-hand side of the page, with note-content saved to the dataset attribute of each HTML list item. When a saved note is clicked on, the application uses the data stored in the dataset attribute to display the full note on the right side of the page. Finally, if a user clicks on the delete button for a saved note, the application will use the DELETE route to pass the saved note's unique id as a parameter in the url, and then recreate the array of saved notes by filtering out the note that matches the passed id parameter. 

### Link to deployed application

[https://obscure-hollows-37717.herokuapp.com/](https://obscure-hollows-37717.herokuapp.com/) 

### Preview of application and demonstration of features

![Preview of application and demonstration of features](./assets/Note%20Taker.gif)
    
## Credits

- Helper functions borrowed from the _Trilogy Education Services, LLC_ Coding Bootcamp, Module 11 - Express, Activity 28: Stu_Mini-Project
- [Professional README Guide, The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
- [Best-README-Template, GitHub Repo](https://github.com/othneildrew/Best-README-Template/blob/master/BLANK_README.md)

## License
    
Covered under the MIT License. For more details and to view the license in full, please visit the [MIT License Webpage](https://choosealicense.com/licenses/mit/).

## Contributing
    
If you have a suggestion for improvement, please fork the repo and create a pull request. You can also open an issue and tag it for "enhancement".
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/featureName`)
3. Commit your Changes (`git commit -m 'adds featureName'`)
4. Push to the Branch (`git push origin feature/featureName`)
5. Open a Pull Request
    
## Tests

N/A

## Questions

Please visit my [GitHub profile](https://github.com/michael-loeffler) or [send me an email with any additional questions.](mailto:michaelloeffler23@gmail.com)