# Web Development Project 1 - Community Board

Submitted by: Sabina Ruzieva

This web app: NYC Art & Museum Explorer is a community board showing New York City's most iconic art museums and cultural innstitutions. Each museum is displayed as a responsive card with an image, location, descroption, and a link to its official website. 

Time spent: 15/20 hours spent in total (exploring/learning and building)

## Required Features

The following **required** functionality is completed:

- [x] **The app has a cohesive, unique theme for events or resources relevant to a specific community**
  - [x] Header/title describing the theme is displayed
- [x] **At least 10 unique events or resources are displayed in a responsive card format**
  - [x] There are at least 10 cards displayed 
  - [x] The cards should be displayed in an organized format (ex. a grid, or in one line)
  - [x] Each card should include some information about the event or resource


The following **optional** features are implemented:

- [x] Buttons or links to a related resources are on each card component
  - [x] All cards have buttons or links in addition to text
- [x] The site is responsive for both desktop and mobile formats
  - [x] Web app is shown in a mobile format
  - [x] **Video Walkthrough Special Instructions**: To ease the grading process, please use Chrome Developer Tools' "Toggle Device" button to demonstrate that your web application's responsiveness in both a desktop *and* a mobile format. Detailed instructions can be found below this stretch feature on the project page. 

The following **additional** features are implemented:

* [x]
    - Custom banner image at the top of the page
    - Styling with hover effects, shadows, rounded corners

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='src/assets/P1_Web102.gif' title='GIF Walkthrough' width='' alt='GIF Walkthrough' />

GIF created with LiceCap  


## Notes

Some challenges I encountered while building the app:

- Component Import/Export Errors: At first, I ran into issues with correctly importing and exporting components (MuseumCard, MuseumList, etc.). I had to carefully check named exports, and make sure my import paths matched the folder structure.

- Using .map() Correctly: When rendering the list of museums, I initially had errors with the .map() function. I learned that each child in a list needs a unique key prop, and that I needed to pass the entire museum object down to the MuseumCard component.

- Prop Naming and Passing: I also had mistakes where the prop names didn’t match between parent and child components (e.g., passing museums vs. museum). 

## License

    Copyright 2025 Sabina Ruzieva

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.