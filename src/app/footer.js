import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

function Footer() {
  return (
    <Paper>
      <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
        <Tab label="Вариант таблицы 1" />
        <Tab label="Вариант таблицы 2" />
        <Tab label="Вариант таблицы 3" />
      </Tabs>
    </Paper>
  );
}

export default Footer;
