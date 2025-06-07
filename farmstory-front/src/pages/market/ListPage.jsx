import React from "react";
import { MarketLayout } from "../../layouts/MarketLayout";
import { MainLayout } from "../../layouts/MainLayout";
import List from "../../components/market/list";

export const ListPage = () => {
  return (
    <MainLayout>
      <MarketLayout>
        <List></List>
      </MarketLayout>
    </MainLayout>
  );
};
