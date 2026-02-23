<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Unlicense License][license-shield]][license-url]

<br />

<div align="center">

  <a href="https://github.com/okotdaniel/open-response/">
    <img src="frontend/public/appstore.png" alt="Open Response logo" height="80">
  </a>

  <h3 align="center">Open Response</h3>

  <p align="center">
    A powerful tool for collecting and analyzing product feedback from your users!
    <br />
    <a href="https://github.com/okotdaniel/open-response"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/okotdaniel/open-response">View Demo</a>
    &middot;
    <a href="https://github.com/okotdaniel/open-response/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/okotdaniel/open-response/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
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

Open Response is a comprehensive feedback collection tool designed to help product teams gather, analyze, and act on user feedback. Whether you're launching a new feature or improving an existing product, Open Response provides the insights you need to make data-driven decisions.

Here's why Open Response stands out:

- **Real-time Feedback Collection**: Capture user responses instantly through customizable forms and surveys
- **Advanced Analytics**: Gain actionable insights with powerful data visualization and sentiment analysis
- **Easy Integration**: Seamlessly integrate with your existing product workflow and tools
- **User-Friendly Interface**: Both administrators and respondents enjoy a clean, intuitive experience

Open Response eliminates the complexity of traditional feedback systems while providing enterprise-level features for teams of all sizes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

Open Response is built using modern, reliable technologies to ensure performance and scalability:

- [![Next][Next.js]][Next-url]
- [![Django][Django.com]][Django-url]
- [![DRF][DRF.com]][DRF-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Getting Open Response up and running is straightforward. Follow these steps to set up the feedback collection system for your product.

### Prerequisites

Before installing Open Response, ensure you have the following:

**For the Backend:**

- Python (v3.9 or higher)
- uv package manager
  ```sh
  curl -LsSf https://astral.sh/uv/install.sh | sh
  ```
- PostgreSQL database

**For the Frontend:**

- Node.js (v16 or higher)
  ```sh
  npm install npm@latest -g
  ```

### Installation

Follow these steps to install and configure Open Response:

#### Backend Setup (Django + DRF)

> **Note**: For a more detailed setup guide, see [backend.md](backend.md)

1. Clone the repository
   ```sh
   git clone https://github.com/okotdaniel/open-response.git
   ```
2. Navigate to the backend directory
   ```sh
   cd open-response/backend
   ```
3. Create and activate virtual environment with uv
   ```sh
   uv venv
   source .venv/bin/activate  # On macOS/Linux
   ```
4. Install Python dependencies
   ```sh
   uv pip install -r requirements.txt
   ```
5. Set up your environment variables in `.env`
   ```sh
   DATABASE_URL=postgresql://username:password@localhost:5432/openresponse
   SECRET_KEY=your_secret_key
   DEBUG=True
   ALLOWED_HOSTS=localhost,127.0.0.1
   ```
6. Run database migrations
   ```sh
   python manage.py migrate
   ```
7. Create a superuser (optional)
   ```sh
   python manage.py createsuperuser
   ```
8. Start the Django development server
   ```sh
   python manage.py runserver
   ```

#### Frontend Setup (Next.js)

> **Note**: For a more detailed setup guide, see [frontend.md](frontend.md)

1. Navigate to the frontend directory
   ```sh
   cd open-response/frontend
   ```
2. Install Node.js dependencies
   ```sh
   npm install
   ```
3. Set up your environment variables in `.env.local`
   ```sh
   NEXT_PUBLIC_API_URL=http://localhost:8000/api
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```
4. Start the Next.js development server
   ```sh
   npm run dev
   ```

#### Accessing the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000/api
- **Django Admin**: http://localhost:8000/admin

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Open Response can be used in various scenarios to collect valuable product feedback:

**Creating Feedback Forms**: Design custom forms tailored to your specific feedback needs
**Embedding Surveys**: Integrate feedback widgets directly into your product interface  
**Analyzing Responses**: Use built-in analytics to identify trends and insights
**Managing Feedback Campaigns**: Organize and track multiple feedback initiatives

_For detailed examples and API documentation, please refer to the [Documentation](https://github.com/okotdaniel/open-response/wiki)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Core feedback collection system
- [x] Basic analytics dashboard
- [x] Email notifications
- [ ] Advanced sentiment analysis
- [ ] Integration with popular project management tools
- [ ] Mobile app for feedback management
- [ ] Multi-language Support
  - [ ] Spanish
  - [ ] French
  - [ ] German
- [ ] AI-powered feedback categorization
- [ ] Advanced reporting and export features

See the [open issues](https://github.com/okotdaniel/open-response/issues) for a full list of proposed features and known issues.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Top contributors:

<a href="https://github.com/okotdaniel/open-response/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=okotdaniel/open-response" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the Unlicense License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Daniel Okot - [@okotdaniel](https://twitter.com/okotdaniel) - daniel@openresponse.com

Project Link: [https://github.com/okotdaniel/open-response](https://github.com/okotdaniel/open-response)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

We'd like to thank the following resources and communities that made Open Response possible:

- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
- [Malven's Grid Cheatsheet](https://grid.malven.co/)
- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
- [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/okotdaniel/open-response.svg?style=for-the-badge
[contributors-url]: https://github.com/okotdaniel/open-response/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/okotdaniel/open-response.svg?style=for-the-badge
[forks-url]: https://github.com/okotdaniel/open-response/network/members
[stars-shield]: https://img.shields.io/github/stars/okotdaniel/open-response.svg?style=for-the-badge
[stars-url]: https://github.com/okotdaniel/open-response/stargazers
[issues-shield]: https://img.shields.io/github/issues/okotdaniel/open-response.svg?style=for-the-badge
[issues-url]: https://github.com/okotdaniel/open-response/issues
[license-shield]: https://img.shields.io/github/license/okotdaniel/open-response.svg?style=for-the-badge
[license-url]: https://github.com/okotdaniel/open-response/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/okotdaniel
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Django.com]: https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white
[Django-url]: https://djangoproject.com/
[DRF.com]: https://img.shields.io/badge/DRF-ff1709?style=for-the-badge&logo=django&logoColor=white
[DRF-url]: https://www.django-rest-framework.org/
