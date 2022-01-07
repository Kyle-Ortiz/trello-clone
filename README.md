<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://i.ibb.co/XXRF8hy/2dc7b9004b6948018984e5c013ec7771.png">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Easy Boards</h3>

  <p align="center">
    Kanban Project board Manager
    <br />
    <br />
    <!-- <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Request Feature</a> -->
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![EasyBoards][product-screenshot]](https://ibb.co/vPtrJ9S)

Easy Boards is a kanban style project board manager, much like trello, intended to help people orangize the tasks needed to complete their life projects. Current features include: user authenctication, creating new project boards, adding tasks to project boards, drag and drop functionality for the project tasks, and deleting a task and project. React was used for the frontend with Ruby on Rails for the backend. 

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With
* [React.js](https://reactjs.org/)
* [React Router v6](https://reactrouter.com/docs/en/v6)
* [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
* [Ruby on Rails](https://rubyonrails.org/)
* [acts_as_list gem](https://github.com/brendon/acts_as_list)
* [PostgreSQL Database(managed with activerecord)](https://www.postgresql.org/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Here is how you can try out easy boards on your own machine right now. 

This is an example of how to list things you need to use the software and how to install them. These are preliminary instructions and may not work correctly yet.

### Prerequisites
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation
2. Clone the repo
   ```sh
   git clone https://github.com/Kyle-Ortiz/trello-clone
   ```
3. Install NPM packages(top level directory)
   ```sh
   npm install
   ```
4. Run bundle to install ruby gems
   ```sh
   bundle install
   ```
5. go into "client" directory and install client packages
   ```sh
   npm install
   ```
6. once all dependencies are installed, run npm start in the client directory
   ```sh
   npm start
   ```
7. then, change to the parent directory and start the rails server
   ```sh
   cd ..
   rails s
   ```
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap
Improvements and new features with will be added to this project in the future: 

- [] UI and style improvements
- [] Deployment to Heroku
- [] User creation of new lists (currently staticly created for each project)
    - [] Drag and drop for lists in project
- [] Mutiple users on the same project
    - [] adding users to project by email

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing
If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Kyle Ortiz - [linkedin-url](https://twitter.com/twitter_handle) - [email](kyleaortiz@gmail.com)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- [contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555 -->
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png