# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
#   M e d i f y 
 
 



Project deatils # Medical Center Booking System

## Overview

The Medical Center Booking System is a React application designed to help users find and book appointments at medical centers. The application provides a list of medical centers, allows users to select a center, choose a date and time for an appointment, and confirm the booking through a modal interface.

## Features

- Display a list of medical centers with details.
- Book free visits to medical centers.
- Select dates using a Swiper carousel.
- Confirm booking with a date and time selection.
- Responsive design for various screen sizes.

## Components

### MedicalCenterList

The `MedicalCenterList` component displays a list of medical centers and handles the booking process.

- **Props:**
  - `centers`: An array of medical center objects.
  - `onBook`: Function to handle booking details.
- **State:**
  - `selectedCenterId`: The ID of the selected medical center.
  - `selectedDate`: The selected date for the appointment.
  - `selectedTime`: The selected time for the appointment.
  - `isModalOpen`: Boolean to handle the modal open/close state.
- **Methods:**
  - `handleBookClick(centerId)`: Sets the selected center ID.
  - `handleDateSelect(date)`: Sets the selected date.
  - `handleModalClose()`: Closes the booking modal.
  - `handleBookingConfirm(bookingDetails)`: Handles booking confirmation.
  - `handleTimeSelect(time)`: Sets the selected time and opens the modal.

### Carousel

The `Carousel` component displays dates in a Swiper carousel format.

- **Props:**
  - `items`: An array of dates.
  - `setTime`: Function to set the selected time.
- **CSS:**
  - Custom styles for the carousel and navigation buttons.

### BookingForm

The `BookingForm` component allows users to select a time for their appointment.

- **Props:**
  - `onTimeSelect`: Function to handle time selection.

### BookingModal

The `BookingModal` component displays a modal with booking details and confirms the appointment.

- **Props:**
  - `center`: The selected medical center.
  - `date`: The selected date.
  - `time`: The selected time.
  - `onClose`: Function to close the modal.
  - `onBook`: Function to confirm the booking.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/medical-center-booking-system.git
   cd medical-center-booking-system
