try {
const args = process.argv.slice(2);
let [make_module,modul_name] = args;

const path=require("path");
const fs=require("fs");

let { CONTROLLER, CONTROLLER_SERVICE, MODEL, MODEL_SERVICE, ROUTER, SCHEMA } = require('./template');

// create module resources
if (make_module.toLowerCase() === 'make:module') {

    CONTROLLER=CONTROLLER.replace(/\[MODEL_NAME]/g,modul_name);
    CONTROLLER_SERVICE=CONTROLLER_SERVICE.replace(/\[MODEL_NAME]/g,modul_name);
    MODEL=MODEL.replace(/\[MODEL_NAME]/g,modul_name);
    MODEL_SERVICE=MODEL_SERVICE.replace(/\[MODEL_NAME]/g,modul_name);
    ROUTER=ROUTER.replace(/\[MODEL_NAME]/g,modul_name);
    SCHEMA=SCHEMA.replace(/\[MODEL_NAME]/g,modul_name);

    // create directory
    const dir_controller = path.join(__dirname, 'controller', modul_name.toLowerCase());
    const dir_model = path.join(__dirname, 'model', modul_name.toLowerCase());
    const dir_router = path.join(__dirname, 'router', modul_name.toLowerCase());
    const dir_schemas = path.join(__dirname, 'schemas', modul_name.toLowerCase());

    if (!fs.existsSync(dir_controller)){
        fs.mkdirSync(dir_controller);
        console.log(dir_controller + " controller dir created");
    }
    if (!fs.existsSync(dir_model)){
        fs.mkdirSync(dir_model);
        console.log(dir_model + " model dir created");
    }
    if (!fs.existsSync(dir_router)){
        fs.mkdirSync(dir_router);
        console.log(dir_router + " router dir created");
    }
    if (!fs.existsSync(dir_schemas)){
        fs.mkdirSync(dir_schemas);
        console.log(dir_schemas + " schemas created");
    }
    
    // create controller
    fs.writeFile(path.join(dir_controller,'controller.js'), CONTROLLER, function (err) {
        if (err) throw err;
            console.log('Created ',path.join(dir_controller,'controller.service_1.js'));
    });
    fs.writeFile(path.join(dir_controller,'controller.service_1.js'), CONTROLLER_SERVICE, function (err) {
        if (err) throw err;
            console.log('Created ',path.join(dir_controller,'controller.service_1.js'));
    });
    fs.writeFile(path.join(dir_controller,'reuse_service.js'), CONTROLLER_SERVICE, function (err) {
        if (err) throw err;
            console.log('Created ',path.join(dir_controller,'reuse_service.js'));
    });

    // create model
    fs.writeFile(path.join(dir_model,`${modul_name}.model.js`), MODEL, function (err) {
        if (err) throw err;
            console.log('Created ',path.join(dir_model,'model.js'));
    });
    fs.writeFile(path.join(dir_model,'query_1.js'), MODEL_SERVICE, function (err) {
        if (err) throw err;
            console.log('Created ',path.join(dir_model,'query_1.js'));
    });
    fs.writeFile(path.join(dir_model,'reuse_query.js'), MODEL_SERVICE, function (err) {
        if (err) throw err;
            console.log('Created ',path.join(dir_model,'reuse_query.js'));
    });

    // create router
    fs.writeFile(path.join(dir_router,'route.js'), ROUTER, function (err) {
        if (err) throw err;
            console.log('Created ',path.join(dir_router,'route.js'));
    });

    // create schema
    fs.writeFile(path.join(dir_schemas,`${modul_name}.validate.js`), SCHEMA, function (err) {
        if (err) throw err;
        console.log('Created ',path.join(dir_schemas,'validate.js'));
    })
   
}

}catch(error){
    console.log("error ",error);
}