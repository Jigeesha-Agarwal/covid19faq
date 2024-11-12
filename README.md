# COVID-19 FAQ Web Application

A responsive, voice-enabled FAQ application providing comprehensive information on COVID-19-related questions. Users can explore different categories of FAQs, including prevention, symptoms, vaccines, and more, through an intuitive interface with voice command support.

## Features

- **Voice Command Navigation**: Integrated with the Alan AI SDK, allowing users to navigate directly to FAQs by speaking commands. Voice control also enables toggling between light and dark themes for enhanced accessibility.
- **Dynamic FAQ Sections**: Frequently asked questions are organized into specific categories, each with an accordion layout for easy browsing and quick access to information.
- **Responsive Design**: Built with React and Chakra UI to ensure a seamless, mobile-friendly experience. Users can toggle color modes (light/dark) for personalized viewing.
- **Smooth Scrolling**: FAQ categories can be smoothly scrolled, creating an effortless user experience when navigating to specific topics.

## Technologies Used

- **React**: For building the dynamic, component-based UI.
- **Chakra UI**: For styling and responsive design, including light and dark theme capabilities.
- **Alan AI SDK**: For voice interaction, enabling hands-free navigation within the application.
- **Netlify**: For deployment, providing fast and reliable access to users.

## How to Use

1. **Explore FAQs**: Click on a category heading to expand the FAQ section and view answers.
2. **Voice Commands**: Use voice commands to navigate directly to an FAQ question or toggle between light and dark themes.
   - Examples: 
     - "Go to prevention FAQs"
     - "Switch to dark mode"
3. **Dark Mode Toggle**: Click the sun/moon icon on the navbar or use the voice command for dark mode switching.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/covid19faq.git

2. Navigate to the project folder:
   ```bash
   cd covid19faq

3. Install dependencies:
   ```bash
   npm install

4. Run the application:
   ```bash
   npm start


## Project Structure

- **App.js**: Main component integrating the Alan AI button, color mode toggle, and FAQ component.
- **Faq.js**: Contains the FAQ sections, organized with Accordion components for each category.
- **ColorModeSwitcher.js**: Provides the toggle functionality between light and dark modes.


## License

  This project is licensed under the MIT License.
  
This `README.md` format should be fully compatible with GitHub, providing a clear overview, usage guide, and setup instructions. Let me know if you'd like additional adjustments!

