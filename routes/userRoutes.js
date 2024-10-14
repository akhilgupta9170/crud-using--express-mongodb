    import express from 'express';
    import { fetch ,create,update,deleteUser} from "../controller/userController.js";

    const route = express.Router()

    route.post("/create",create)

    route.get('/fetch', fetch)

    route.put("/update/:id", update);
    route.delete("/delete", deleteUser);
    export default route;

