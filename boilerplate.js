try {
    const args = process.argv.slice(2);
    let [make_module, modul_name] = args;
  
    const path = require("path");
    const fs = require("fs");
  
    let { CONTROLLER, MODEL, ROUTER, SCHEMA, VIEWS, SWAGGER_DOCS } = require("./template");
    // node boilerplate.js make:module users
  
    // create module resources
    if (make_module.toLowerCase() === "make:module") {
      CONTROLLER = CONTROLLER.replace(/\[MODEL_NAME]/g, modul_name);
      MODEL = MODEL.replace(/\[MODEL_NAME]/g, modul_name);
      ROUTER = ROUTER.replace(/\[MODEL_NAME]/g, modul_name);
      SCHEMA = SCHEMA.replace(/\[MODEL_NAME]/g, modul_name);
      SWAGGER_DOCS = SWAGGER_DOCS.replace(/\[SWAGGER_DOCS]/g, modul_name);
  
      // create directory
      const dir_controller = path.join(__dirname, "controller");
      const dir_model = path.join(__dirname, "model");
      const dir_router = path.join(__dirname, "routes");
      const dir_schemas = path.join(__dirname, "schemas");
      const dir_views = path.join(__dirname, "views");
      const dir_swagger = path.join(__dirname, "routes");
  
      // create controller
      fs.writeFile(
        path.join(dir_controller, `${modul_name}.controller.js`),
        CONTROLLER,
        function (err) {
          if (err) throw err;
          console.log(
            "Created ",
            path.join(dir_controller, `${modul_name}.controller.js`)
          );
        }
      );
  
      // create model
      fs.writeFile(
        path.join(dir_model, `${modul_name}.model.js`),
        MODEL,
        function (err) {
          if (err) throw err;
          console.log("Created ", path.join(dir_model, "model.js"));
        }
      );
  
      // create router
      fs.writeFile(
        path.join(dir_router, `${modul_name.toLowerCase()}.route.js`),
        ROUTER,
        function (err) {
          if (err) throw err;
          console.log(
            "Created ",
            path.join(dir_router, `${modul_name.toLowerCase()}_route.js`)
          );
        }
      );
  
      // create schema
      fs.writeFile(
        path.join(dir_schemas, `${modul_name}.validate.js`),
        SCHEMA,
        function (err) {
          if (err) throw err;
          console.log("Created ", path.join(dir_schemas, "validate.js"));
        }
      );
  
      // create views
      fs.mkdirSync(path.join(dir_views, modul_name), { recursive: true });
      fs.writeFile(
        path.join(dir_views, modul_name, `index.ejs`),
        VIEWS,
        function (err) {
          if (err) throw err;
          console.log("Created ", path.join(dir_views, modul_name, `index.ejs`));
        }
      );
  
      // create swagger
      fs.writeFile(
        path.join(dir_swagger, `${modul_name}.swagger.js`),
        SWAGGER_DOCS,
        function (err) {
          if (err) throw err;
          console.log("Created ", path.join(dir_swagger, "swagger.js"));
        }
      );
      
    } else if (make_module.toLowerCase() === "remove:module") {
      // remove module resources
      const dir_controller = path.join(__dirname, "controller");
      const dir_model = path.join(__dirname, "model");
      const dir_router = path.join(__dirname, "routes");
      const dir_schemas = path.join(__dirname, "schemas");
      const dir_views = path.join(__dirname, "views");
  
      fs.unlinkSync(path.join(dir_controller, `${modul_name}.controller.js`));
      fs.unlinkSync(path.join(dir_model, `${modul_name}.model.js`));
      fs.unlinkSync(
        path.join(dir_router, `${modul_name.toLowerCase()}.route.js`)
      );
      fs.unlinkSync(path.join(dir_schemas, `${modul_name}.validate.js`));
      fs.rmdirSync(path.join(dir_views, modul_name), { recursive: true });
      console.log("Module removed successfully");
    }
  } catch (error) {
    console.log("error ", error);
  }
  