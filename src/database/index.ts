import { Sequelize } from "Sequelize";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "onebitflix_development",
  username: "postgres",
  password: "root",
  define: {
    underscored: true,
  },
});
