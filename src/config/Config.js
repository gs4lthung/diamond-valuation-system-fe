const routes = {
  home: "/",
  diamondCalculate: "/diamond-calculate",
  diamondCheck: "/diamond-check",
  diamondCheckDetails: "/diamond-check/:valuationResultId",
  diamondDetail: "/diamond-detail",
  diamondService: "/diamond-service",
  diamondValuationRequest: "/diamond-valuation-request",
  prices: "/prices",
  educationCertificate: "/education/certificate",
  educationShape: "/education/shape",
  educationCarat: "/education/carat",
  educationColor: "/education/color",
  educationCut: "/education/cut",
  educationClarity: "/education/clarity",
  login: "/login",
  logout: "/logout",
  error: "*",
  aboutUs: "/aboutUs",
  FAQs: "/FAQs",
  dashboard: "/dashboard",
  dashboardAppoint: "/dashboard/appointments",
  dashboardSetting: "/dashboard/setting",
  dashboardTransaction: "/dashboard/transaction",
  manageAccount: "/dashboard/manage-account",
  inactiveAccount: "/dashboard/inactive-account",
  receipt: "/dashboard/receipt",
  pendingRequest: "/dashboard/pending-request",
  processRequest: "/dashboard/process-request",
  sealingLetter: "/dashboard/sealing-letter",
  commitment: "/dashboard/commitment",
  valuationDiamond: "/dashboard/valuation-diamond",
  valuatedDiamond: "/dashboard/valuated-diamond",
  manageService: "/dashboard/manage-service",
  activate: "/activate/:email",
  forgetPassword: "/forget-password",
  resetForgetPassword: "/reset-forget-password",
};
export default routes;