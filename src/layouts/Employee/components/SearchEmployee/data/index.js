// @mui material components
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

export default function data(results, setSelectedEmployee, setActiveTab) {
  const columns = [
    { Header: "Employee Name", accessor: "employeeName", width: "35%", align: "left" },
    { Header: "Employee No.", accessor: "employeeNo", width: "10%", align: "left" },
    { Header: "Gender", accessor: "gender", width: "10%", align: "left" },
    { Header: "Date of Birth", accessor: "dob", width: "10%", align: "left" },
    { Header: "Login", accessor: "login", width: "10%", align: "left" },
    { Header: "Appointment", accessor: "appointment", width: "15%", align: "left" },
    { Header: "Create/Edit User", accessor: "createEditUser", width: "10%", align: "left" },
    { Header: "Roles/Rights", accessor: "rolesRights", width: "10%", align: "left" },
    { Header: "Update", accessor: "update", width: "10%", align: "left" },
  ];

  const rows = results.map((employee) => ({
    employeeName: (
      <MDTypography variant="caption" fontWeight="medium">
        {employee.Title} {employee.FirstName} {employee.MiddleName} {employee.LastName}
      </MDTypography>
    ),
    employeeNo: (
      <MDTypography variant="caption" fontWeight="medium">
        {employee.EmployeeNo}
      </MDTypography>
    ),
    gender: (
      <MDTypography variant="caption" fontWeight="medium">
        {employee.Gender}
      </MDTypography>
    ),
    dob: (
      <MDTypography variant="caption" fontWeight="medium">
        {employee.DateOfBirth}
      </MDTypography>
    ),
    login: (
      <MDTypography variant="caption" fontWeight="medium">
        {employee.LoginStatus === 0 ? "Active" : "Inactive"}
      </MDTypography>
    ),
    appointment: (
      <MDTypography variant="caption" fontWeight="medium">
        {employee.Appointment}
      </MDTypography>
    ),
    createEditUser: (
      <MDTypography variant="caption" fontWeight="medium">
        {employee.CreateEditUser}
      </MDTypography>
    ),
    rolesRights: (
      <MDTypography variant="caption" fontWeight="medium">
        {employee.RolesRights}
      </MDTypography>
    ),
    update: (
      <MDButton
        variant="gradient"
        style={{ borderRadius: 0, backgroundColor: "#1694c4", color: "White" }}
        onClick={() => {
          setSelectedEmployee(employee);
          setActiveTab("updateEmployee");
        }}
      >
        Update
      </MDButton>
    ),
  }));

  return { columns, rows };
}
