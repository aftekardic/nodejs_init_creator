const fs = require("fs");
const path = require("path");

// These are folders to be created.
const foldersToCreate = [
  "../../../src",
  "../../../src/controllers",
  "../../../src/models",
  "../../../src/routes",
  "../../../config",
];

// These are files to be created.
const filesToCreate = [
  {
    path: "../../../src/app.js",
    content: `
    // This is the main file for configuring your Node application.
    // It is typically used to set up the server, middleware, and other application-wide settings.
    // You can add your server configuration, express middleware, and other essential setup here.
    `,
  },
  {
    path: "../../../src/db.js",
    content: `
    // This file is intended for configuring your database connection.
    // You can define database connection parameters, models, and other related configurations here.
    `,
  },
  {
    path: "../../../src/index.js",
    content: `
    // This is the entry point of your application.
    // It's where your application starts its execution.
    // You can import and run your server setup from app.js or any other necessary initialization code.
    `,
  },
];

foldersToCreate.forEach((folder) => {
  const folderPath = path.join(__dirname, folder);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log(`Created folder: ${folderPath}`);
  } else {
    console.log(`Folder already exists: ${folderPath}`);
  }
});

filesToCreate.forEach((file) => {
  const filePath = path.join(__dirname, file.path);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, file.content);
    console.log(`Created file: ${filePath}`);
  } else {
    console.log(`File already exists: ${filePath}`);
  }
});
