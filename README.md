# Project Management Form

## Description
The Project Management Form is an HTML and JavaScript-based web form designed to facilitate the management of project records within a college database. This application connects to the `PROJECT-TABLE` relation in the `COLLEGE-DB` database, allowing users to input and manage project details, including `Project-ID`, `Project-Name`, `Assigned-To`, `Assignment-Date`, and `Deadline`.

The project leverages **JsonPowerDB** for efficient data management, providing an easy-to-use interface for CRUD (Create, Read, Update, Delete) operations on project records. The application is responsive and utilizes Bootstrap for styling, making it accessible across devices.

## Benefits of using JsonPowerDB
JsonPowerDB is a high-performance, NoSQL database that offers:
- **Simplified CRUD operations** through REST APIs.
- **Schema-less storage** for easy data manipulation without needing complex structures.
- **Faster development** with direct JSON storage and retrieval, minimizing the need for intermediate layers.
- **Robust data handling** with minimal setup, which is suitable for prototyping and small-scale applications.

## Release History
- **v1.0.0** - Initial release of the Project Management Form with JsonPowerDB integration.

## Illustrations
- **Form Page**: A clean and user-friendly form with fields for Project ID, Project Name, Assigned To, Assignment Date, and Deadline.
- **Validation Prompts**: Alerts and form focus adjustments when required fields are missing.

## Scope of Functionalities
- **Add New Project**: Save new project records into the database.
- **Retrieve Project Details**: Retrieve existing project data using Project ID.
- **Update Project Information**: Modify project details as needed.
- **Reset Form**: Clear all fields to reset the form for new entries.

## Examples of Use
1. **Adding a Project**: Enter details in each form field and click "Save" to add the project to the database.
2. **Updating Project Information**: Enter an existing Project ID and edit the form fields; click "Change" to update the record.
3. **Resetting the Form**: Click "Reset" to clear all input fields.

## Project Status
The Project Management Form is fully functional and is open for further enhancements. Future updates could include:
- Enhanced validation for form fields.
- Role-based access controls.
- Improved error handling.

## Sources
This project uses:
- [JsonPowerDB documentation](http://api.login2explore.com)
- [Bootstrap](https://getbootstrap.com/)
- [jQuery](https://jquery.com/)

## Other Information
For more information on setting up the environment and running this project, refer to the official documentation of JsonPowerDB and the dependencies listed above.
