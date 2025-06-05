# responsive-weather-app
A responsive web weather application built with HTML, CSS, and JavaScript. It fetches real-time global weather conditions (temperature, humidity, visibility, cloudiness, pressure, wind speed) using the OpenWeatherMap API, focusing on a clean and smooth user interface.

# Responsive Weather App

## Project Overview

This is a **responsive web application** designed to provide real-time weather information for various locations around the globe. Built with a focus on a clean user interface and intuitive user experience, it allows users to quickly look up current weather conditions.

## Features

* **Real-time Weather Data:** Fetches and displays current temperature, "feels like" temperature, humidity, and wind speed.
* **Location Search:** Users can search for weather conditions in different cities.
* **Dynamic UI:** The interface updates dynamically with fetched weather data.
* **Responsive Design:** Optimized for display on various devices, from desktops to mobile phones.

## Technologies Used

* **HTML5:** For the foundational structure of the web page.
* **CSS3:** For styling and ensuring a responsive and appealing design.
* **JavaScript (ES6+):** For all dynamic functionality, including API calls and DOM manipulation.
* **OpenWeatherMap API:** Used to retrieve weather data.

## API Key Setup

This project utilizes the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. To run this application locally, you will need to obtain your own API key:

1.  Go to the [OpenWeatherMap website](https://openweathermap.org/).
2.  Sign up for a free account.
3.  Navigate to your API keys section and copy your generated key.
4.  **Create a file named `.env`** in the root directory of your project (the same level as `index.html` and `.gitignore`).
5.  Add your API key to this file in the following format:
    ```
    OPENWEATHER_API_KEY=YOUR_API_KEY_HERE
    ```
    *(Replace `YOUR_API_KEY_HERE` with your actual key.)*

**Note:** The `.env` file is included in the `.gitignore` to prevent your API key from being accidentally committed to your public repository.

## Installation and Local Setup

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/avinashyadav5/responsive-weather-app.git](https://github.com/avinashyadav5/responsive-weather-app.git)
    ```
2.  **Navigate into the project directory:**
    ```bash
    cd responsive-weather-app
    ```
3.  **Set up your OpenWeatherMap API key** as described in the "API Key Setup" section above.
4.  **Open `index.html` in your web browser** (e.g., by double-clicking it or using a Live Server extension in VS Code).

## Usage

Once the application is running in your browser:

1.  Enter the name of a city in the search bar.
2.  Press Enter or click the search button to view the current weather conditions for that location.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Avinash Yadav - [Your GitHub Profile Link Here, e.g., https://github.com/avinashyadav5] 

Project Link: [https://github.com/avinashyadav5/responsive-weather-app](https://github.com/avinashyadav5/responsive-weather-app)
