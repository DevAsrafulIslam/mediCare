export const APPOINTMENT_TABLE = {
  title: [
    { appointment: "Appointment" },
    { alluser: "All User" },
    { addDoctor: "Add DoctorProfile" },
    { doctor: "Doctor" },
    { manage: "Manage Doctor" },
  ],
  tableHead: ["SL", "Name", "Status", "Method", "Amount"],
  items: [
    {
      _id: "1a2b3c4d",
      Name: "John Doe",
      Status: "completed",
      Method: "credit card",
      Amount: 150.0,
    },
    {
      _id: "2b3c4d5e",
      Name: "Jane Smith",
      Status: "pending",
      Method: "paypal",
      Amount: 75.5,
    },
    {
      _id: "3c4d5e6f",
      Name: "Michael Johnson",
      Status: "failed",
      Method: "bank transfer",
      Amount: 200.0,
    },
    {
      _id: "4d5e6f7g",
      Name: "Emily Davis",
      Status: "completed",
      Method: "debit card",
      Amount: 50.0,
    },
    {
      _id: "5e6f7g8h",
      Name: "Chris Brown",
      Status: "refunded",
      Method: "credit card",
      Amount: 100.0,
    },
  ],
};
