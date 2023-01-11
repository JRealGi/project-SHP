import requests from "./ajax";
import mockRequests from "./mockAjax";

export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "get" });

export const reqGetBannerList = () =>
  mockRequests({ url: "/banner", method: "get" });

export const reqFloorList = () =>
  mockRequests({ url: "/floor", method: "get" });

// 搜索模块
export const reqGetSearchInfo = (params) =>
  requests({ url: "/list", method: "post", data: params });
