<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NodeJS Init Creator</title>
</head>
<body>
    <h1>NodeJS Init Creator</h1>

    <h2>Overview</h2>
    <p>NodeJS Init Creator is a package designed to automate the creation of a basic project structure for Node.js applications. This tool helps developers quickly set up a new project with a standard directory layout and essential configuration files.</p>

    <h2>Features</h2>
    <ul>
        <li><strong>Automated Setup:</strong> Generates a basic project structure with predefined directories and files.</li>
        <li><strong>Configurable:</strong> Allows customization of the generated structure to fit specific project needs.</li>
        <li><strong>Easy to Use:</strong> Simple commands to initialize the project, reducing setup time.</li>
    </ul>

    <h2>Installation</h2>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/aftekardic/nodejs_init_creator.git</code></pre>
        </li>
        <li>Navigate to the project directory:
            <pre><code>cd nodejs_init_creator</code></pre>
        </li>
    </ol>

    <h2>Usage</h2>
    <p>After installation, you can use the package to create a new Node.js project structure:</p>
    <ol>
        <li>Run the setup script:
            <pre><code>node scripts/setup.js</code></pre>
        </li>
        <li>Follow the prompts to customize your project setup.</li>
    </ol>

    <h2>Project Structure</h2>
    <p>The generated project structure includes:</p>
    <pre><code>
nodejs_init_creator/
├── README.md
├── package.json
└── scripts
    └── setup.js
    </code></pre>

    <h2>scripts/setup.js</h2>
    <p>The <code>setup.js</code> script is the core of the project, responsible for creating the basic folder structure. Here’s an overview of its functionality:</p>
    <ul>
        <li><strong>Prompts for Project Details:</strong> Collects information such as project name, author, and description.</li>
        <li><strong>Directory Creation:</strong> Sets up directories like <code>src</code>, <code>src/controllers</code>, <code>src/models</code>, <code>src/routes</code>, and <code>config</code>.</li>
        <li><strong>File Initialization:</strong> Creates essential files (<code>app.js</code>, <code>db.js</code>, <code>index.js</code>) with basic boilerplate code.</li>
        <li><strong>Package Configuration:</strong> Generates a <code>package.json</code> file with the provided project details and basic dependencies.</li>
    </ul>

    <hr>

    <h2>Contact</h2>
    <p>For any questions or suggestions, feel free to open an issue or contact the repository owner.</p>

</body>
</html>
