# Site Inspection API

This project is a REST API for managing inspection checklists for construction sites. It allows supervisors to conduct daily inspections by fetching checklist items, updating their statuses, resetting the checklist, and retrieving summary counts.

## Features

- Fetch inspection items for the day
- Update the status of inspection items
- Reset all inspection item statuses to pending
- Get a summary count of inspection items

## Endpoints

1. **GET /inspections**
   - Returns a list of inspection items for the day.
   - Each item includes: `id`, `name`, `status` (pending, passed, failed, na).

2. **PUT /inspections/:id**
   - Updates the status of a single inspection item.

3. **POST /inspections/reset**
   - Resets all inspection item statuses to pending.

4. **GET /inspections/summary**
   - Returns a summary count of inspection items:
     - Example response: `{ passed: 3, failed: 1, na: 1, pending: 0, total: 5 }`

## Setup Instructions

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Run the application:**
   ```
   npm start
   ```

3. **Run tests:**
   ```
   npm test
   ```

## Testing

The project includes unit tests for the service layer. You can run the tests using the command mentioned above. Ensure that you have Jest or your preferred testing framework set up in your environment.

## Logging

The application includes a simple logging utility that logs messages to the console. You can modify the logging behavior in the `src/utils/logger.ts` file.