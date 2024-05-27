NodeJS Init Creator
===================

Overview
--------

NodeJS Init Creator is a package designed to automate the creation of a basic project structure for Node.js applications. This tool helps developers quickly set up a new project with a standard directory layout and essential configuration files.

Features
--------

*   **Automated Setup:** Generates a basic project structure with predefined directories and files.
*   **Configurable:** Allows customization of the generated structure to fit specific project needs.
*   **Easy to Use:** Simple commands to initialize the project, reducing setup time.

Installation
------------

1.  Clone the repository:
    
        git clone https://github.com/aftekardic/nodejs_init_creator.git
    
2.  Navigate to the project directory:
    
        cd nodejs_init_creator
    

Usage
-----

After installation, you can use the package to create a new Node.js project structure:

1.  Run the setup script:
    
        node scripts/setup.js
    
2.  Follow the prompts to customize your project setup.

Project Structure
-----------------

The generated project structure includes:

    
    nodejs_init_creator/
    ├── README.md
    ├── package.json
    └── scripts
        └── setup.js
        

scripts/setup.js
----------------

The `setup.js` script is the core of the project, responsible for creating the basic folder structure. Here’s an overview of its functionality:

*   **Prompts for Project Details:** Collects information such as project name, author, and description.
*   **Directory Creation:** Sets up directories like `src`, `src/controllers`, `src/models`, `src/routes`, and `config`.
*   **File Initialization:** Creates essential files (`app.js`, `db.js`, `index.js`) with basic boilerplate code.
*   **Package Configuration:** Generates a `package.json` file with the provided project details and basic dependencies.

* * *

Contact
-------

For any questions or suggestions, feel free to open an issue or contact the repository owner.
