import axios from "axios";

const API_URL = "http://localhost:3001/api/employee/addEmployee";

// Add a new employee
export const addEmployee = async (employeeData) => {
  try {
    const response = await axios.post(API_URL, employeeData);
    return response.data;
  } catch (error) {
    console.error("Service: Error adding employee:", error);
    throw error;
  }
};
