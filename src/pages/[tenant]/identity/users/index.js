import { CippTablePage } from "../../../../components/CippComponents/CippTablePage.jsx";
import { Layout as DashboardLayout } from "../../../../layouts/index.js";

const Page = () => {
  const pageTitle = "Users";
  const actions = [
    {
      label: "Magical test",
      type: "POST",
      url: "/api/ExecSetOOO",
      data: { User: "userPrincipalName", AutoReplyState: "Enabled" },
      fields: [{ type: "textArea", name: "input" }],
      confirmText: "Are you sure you want to delete this user?",
      multiPost: false,
    },
    {
      label: "dance test",
      type: "POST",
      url: "/api/ListUsers",
      data: { email: "userPrincipalName" },
      confirmText: "Are you sure you want to dance with this user?",
      multiPost: false,
    },
  ];
  const offCanvas = {
    extendedInfoFields: [
      "displayName",
      "userPrincipalName",
      "id",
      "mail",
      "mobilePhone",
      "officePhone",
      "jobTitle",
      "department",
      "city",
    ],
    actions: actions,
  };
  return (
    <CippTablePage
      title={pageTitle}
      apiUrl="/api/ListUsers"
      actions={actions}
      offCanvas={offCanvas}
    />
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
