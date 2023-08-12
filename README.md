# Tech-Hub PC Builder

Welcome to Tech-Hub, your ultimate destination for building custom PCs! This application is powered by Next.js and offers a feature-rich PC Builder tool, allowing users to assemble their dream PCs using a variety of components.

 ### Live deployed link: [https://tech-hub-sand.vercel.app/](https://tech-hub-sand.vercel.app/)

### Repository link: [https://github.com/Mazdul1000/tech-hub-frontend](https://github.com/Mazdul1000/tech-hub-frontend)


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
  - [Navbar](#navbar)
  - [Home Page](#home-page)
  - [Featured Category Sections](#featured-category-sections)
  - [Product Detail Page](#product-detail-page)
  - [PC Builder Page](#pc-builder-page)
  - [Protected Route with User Authentication](#protected-route-with-user-authentication)
- [Responsive Design](#responsive-design)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Usage](#usage)

## Introduction

Tech-Hub is your one-stop solution for crafting personalized PCs. With Next.js at its core, this application provides users an immersive experience in selecting and assembling their custom PC components.

## Features

### Navbar

- Clicking on the "PC Builder" button in the navbar takes users to the PC Builder page to start constructing their PC.
- The Categories dropdown offers easy access to different component categories, each linked to its respective route.

### Home Page
- The Home page comprises a hero/banner section and a footer.
- The home page showcases 6 randomly selected PC components as Featured Products.
- Each Featured Product card highlights information such as Image, Product Name, Category, Price, Status, and Rating.
- Clicking on a Featured Product card navigates the user to the detailed Product page.

### Featured Category Sections

- Users can explore 6 clickable Featured Categories from the navigation bar.
- Clicking on a Featured Category redirects users to a page exhibiting  products from that category.
- Product cards on this page include details like Image, Product Name, Category, Price, Status, and Rating.
- Clicking on a product card leads to the Product Detail page for the chosen product.

### Product Detail Page

- The Product Detail page provides comprehensive information about the selected PC component.
- Details encompass Image, Product Name, Category, Status, Price, Description, Key Features, Average Rating.
- User reviews and Individual Rating for the product are also prominently displayed.

### PC Builder Page

- The PC Builder page allow users to construct their custom PCs by picking components.
- Categories such as CPU, Motherboard, RAM, Power Supply, Storage, and Monitor are presented.
- Clicking the "Choose/Select" button for a category reveals components from that category.
- Component cards present information including Image, Product Name, Category, Price, Status, and Rating.
- Clicking the "Add To Builder" button appends the selected component to the PC Builder section below.
- Clicking the "Complete Build" button on the PC Builder page triggers a success alert.


### Protected Route with User Authentication

- The PC Builder Page is a protected/private route accessible only to logged-in users.
- User authentication is achieved using NextAuth with social login providers such as Google and GitHub.
- Only authenticated users can access and utilize the PC Builder functionality.




## Responsive Design

- Tech-Hub is crafted to ensure a seamless user experience across mobile and desktop devices.

## Getting Started

### Installation

1. Clone this repository.
2. Install dependencies using `npm install`.

### Configuration

1. Set up NextAuth to enable user authentication with social login providers.
2. User the necessary environment variables to ensure authentication.

### Usage

1. Run the application using `npm run dev`.
2. Access Tech-Hub in your browser at `http://localhost:3000`.
3.build for production using `npm run build` .

Feel free to explore the plethora of features offered by Tech-Hub, where crafting your ideal PC is just a click away!

---
