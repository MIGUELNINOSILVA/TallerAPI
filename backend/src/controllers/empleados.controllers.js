import getConnection from "../db/database.js";

const getEmpleados = async(req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM empleados");
        res.json(result);
    } catch (error) {
        res.status(5000);
        res.send(error.message);        
    }
}

export const methodsHTTP = {
    getEmpleados
}