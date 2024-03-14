// ---- DATA BASE ----
// Connection à la base de données :
import mysql from "mysql2";

const db_connect = mysql.createConnection({
  host: "localhost",
  database: "shop",
  user: "root",
  password: "root",
});

export const getProducts = (req, res) => {
  // Export data vers shopRouter :
  const db_data = db_connect.query(
    "SELECT * FROM `article`",
    function (err, results, fields) {
      //console.log(results);
      //console.log(err);
      return results;
    }
  );
  console.log("db_data: ", db_data);
  res.render("shop", { db_data });
};

const shopController = {
  getProducts,
};

export default shopController;
