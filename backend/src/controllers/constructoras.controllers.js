import getConnection from "../db/database.js";

const getConstructoras = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM constructoras");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getConstructoras
}