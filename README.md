<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/AftonSlone/cheep">
    <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Cheep</h3>

  <p align="center">
    Twitter Clone
    <br />
    <a href="https://github.com/AftonSlone/cheep"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://afton-cheep.herokuapp.com/home">View Demo</a>
    ·
    <a href="https://github.com/AftonSlone/cheep/issues">Report Bug</a>
    ·
    <a href="https://github.com/AftonSlone/cheep/issues">Request Feature</a>
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
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Cheep is a free social networking microblogging service that allows registered members to broadcast short posts called cheeps.. Cheep members can broadcast cheeps. and follow other users' cheeps.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/)
- [python](https://www.python.org/)
- [flask](https://flask.palletsprojects.com/en/2.0.x/)
- [SQLAlchemy](https://www.sqlalchemy.org/)
- [Styled Components](https://styled-components.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone this repository (only this branch)

   ```sh
   git clone https://github.com/AftonSlone/cheep.git
   ```

2. Install dependencies

   ```bash
   pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
   ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

_For more examples, please refer to the [Documentation](https://github.com/AftonSlone/cheep/wiki)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

<!-- ## Roadmap

- [] Feature 1
- [] Feature 2
- [] Feature 3
  - [] Nested Feature -->

<!-- See the [open issues](https://github.com/AftonSlone/cheep/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>





<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@AftonSlone](https://twitter.com/AftonSlone) - afton.slone@gmail.com

Project Link: [https://github.com/AftonSlone/cheep](https://github.com/AftonSlone/cheep)

<p align="right">(<a href="#top">back to top</a>)</p>
