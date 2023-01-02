export class URLConstants {}
// URLConstants.LOCAL_BASE_URL = "http://localhost:8088";
//URLConstants.BASE_URL = "http://192.168.1.6:3000";
// URLConstants.UAT_BASE_URL = "http://localhost:8088";
// URLConstants.PROD_BASE_URL = "http://localhost:8088";

URLConstants.BASE_URL = "https://restapi.smartphonetrucker.com";
// process.env.NEXT_PUBLIC_BASE_URL || URLConstants.DEV_BASE_URL;
// AUTH ROUTES
URLConstants.login = () => `${URLConstants.BASE_URL}/v1/auth/emaillogin`;
URLConstants.getClients = (clientType, activationStatus) =>
  `${URLConstants.BASE_URL}/v1/client/${clientType}/${activationStatus}`;
URLConstants.getClientsUnderFillment = () =>
  `${URLConstants.BASE_URL}/v1/client/getClientsUnderFillment`;

URLConstants.getClientsNotUnderAgency = (
  clientType,
  assignedAgencyId,
  activationStatus
) =>
  `${URLConstants.BASE_URL}/v1/client/assignAgency/${clientType}/${assignedAgencyId}/${activationStatus}`;
URLConstants.getAllRecentJobsList = () =>
  `${URLConstants.BASE_URL}/v1/users/company/jobs`;
URLConstants.registerClient = () => `${URLConstants.BASE_URL}/v1/admin/client`;
URLConstants.createSubscription = () =>
  `${URLConstants.BASE_URL}/v1/admin/subscription`;
URLConstants.getSubscriptionList = () =>
  `${URLConstants.BASE_URL}/v1/admin/subscriptionList`;
URLConstants.updateClientInfo = (clientId) =>
  `${URLConstants.BASE_URL}/v1/admin/client/${clientId}`;
URLConstants.activateSubscriptioToClient = (clientId) =>
  `${URLConstants.BASE_URL}/v1/admin/client/${clientId}/activateSubscriptioToClient`;
URLConstants.getDataSubmissionConst = () =>
  `${URLConstants.BASE_URL}/v1/common/constantsets/DataSubmission`;
URLConstants.getXMLFormatsConst = () =>
  `${URLConstants.BASE_URL}/v1/common/constantsets/XMLFormats`;
URLConstants.createClient = () => `${URLConstants.BASE_URL}/v1/admin/client`;
URLConstants.getJobsOfACompany = (clientId) =>
  `${URLConstants.BASE_URL}/v1/users/company/jobs/${clientId}`;
URLConstants.getJobsOfACompanyByFilter = () =>
  `${URLConstants.BASE_URL}/v1/users/company/jobs`;
URLConstants.postAJobOfCompany = (clientId) =>
  `${URLConstants.BASE_URL}/v1/admin/client/${clientId}/job`;
URLConstants.getAllSubscriptions = () =>
  `${URLConstants.BASE_URL}/v1/admin/subscriptionList`;
URLConstants.getUsersOnConditions = (experience, driverType, state) =>
  `${URLConstants.BASE_URL}/v1/users/`;
URLConstants.getJobsOfACompanyByXML = (clientId) =>
  `${URLConstants.BASE_URL}/v1/admin/client/${clientId}/jobByXML`;
URLConstants.getAllDriverTypes = () =>
  `${URLConstants.BASE_URL}/v1/common/constantsets/DriverTypes`;
URLConstants.getAllStates = () =>
  `${URLConstants.BASE_URL}/v1/common/constantsets/States`;
URLConstants.getAllCities = () =>
  `${URLConstants.BASE_URL}/v1/common/constantsets/Cities`;
URLConstants.getLeadsForACompany = (clientId, fromDate, toDate, driverType) =>
  `${URLConstants.BASE_URL}/v1/admin/client/${clientId}/${fromDate}/${toDate}/${driverType}/leads`;
URLConstants.getCompaniesUnderAgency = (agencyId) =>
  `${URLConstants.BASE_URL}/v1/admin/agency/${agencyId}/clientlist`;
URLConstants.getSubsHistForACompany = (clientId) =>
  `${URLConstants.BASE_URL}/v1/admin/client/${clientId}/subscriptions`;
URLConstants.sendMassApplicationToClients = () =>
  `${URLConstants.BASE_URL}/v1/users/apply/companies`;
URLConstants.createBlogOrNews = () =>
  `${URLConstants.BASE_URL}/v1/admin/blogsornews`;
URLConstants.getAllBlogsAndNewsList = () =>
  `${URLConstants.BASE_URL}/v1/admin/blogsornewsList`;
URLConstants.logInEmailOtp = () =>
  `${URLConstants.BASE_URL}/v1/auth/verify/loginemailotp`;
URLConstants.sendVerificationEmail = () =>
  `${URLConstants.BASE_URL}/v1/auth/send-verification-email`;
URLConstants.clientResetPassword = () =>
  `${URLConstants.BASE_URL}/v1/auth/client-reset-password`;
URLConstants.countData = (clientArray) =>
  `${URLConstants.BASE_URL}/v1/admin/leadsTillDate?companyIdList=[${clientArray}]`;

URLConstants.getClientTypes = () =>
  `${URLConstants.BASE_URL}/v1/client/clientTypes`;

URLConstants.getZipAndCity = (state) =>
  `${URLConstants.BASE_URL}/v1/auth/getStateData/${state}`;

URLConstants.getFinalJobPlaces = () =>
  `${URLConstants.BASE_URL}/v1/auth/getQualifiedPlacesForAJob`;
