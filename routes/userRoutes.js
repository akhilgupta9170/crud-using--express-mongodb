    import express from 'express';
    import { fetch ,create,update,deleteUser} from "../controller/userController.js";

    const route = express.Router()

    route.post("/create",create)

    route.get('/fetch', fetch)

    route.put("/update/:id", update);
    route.delete("/delete/:id", deleteUser);
    export default route;

// /v1/todos
// GET 
// POST
// /v1/todos/:id
    // GET
    // PUT
    // DELETE