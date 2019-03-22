const config = {};

config.host = process.env.HOST || "https://todoapptut.documents.azure.com:443/";
config.authKey =
  process.env.AUTH_KEY || "gnFGdmspM2ysd9XSCttxA9xRryIp5gflbea4NhEICtTKPfd0CLxkdtsxQPhBJKmMIwO6vvGQL9ZaPCZv8Ju8gg==";
config.databaseId = "ToDoList";
config.containerId = "Items";

if (config.host.includes("https://localhost:")) {
  console.log("Local environment detected");
  console.log("WARNING: Disabled checking of self-signed certs. Do not have this code in production.");
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.log(`Go to http://localhost:${process.env.PORT || '3000'} to try the sample.`);
}

module.exports = config;