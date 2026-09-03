const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "e@e.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Sales Report",
        taskDescription: "Create the monthly sales report for management review.",
        taskDate: "2026-03-15",
        category: "Reports"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Follow-up",
        taskDescription: "Contact clients regarding feedback on last delivery.",
        taskDate: "2026-03-10",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Update CRM Data",
        taskDescription: "Update missing fields in the CRM database.",
        taskDate: "2026-03-09",
        category: "Database"
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create a responsive landing page for marketing campaign.",
        taskDate: "2026-03-18",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve navbar responsiveness issue on mobile.",
        taskDate: "2026-03-14",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress website images to improve load speed.",
        taskDate: "2026-03-11",
        category: "Performance"
      }
    ]
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API Development",
        taskDescription: "Develop REST API for product management module.",
        taskDate: "2026-03-20",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Schema Update",
        taskDescription: "Modify schema for new product attributes.",
        taskDate: "2026-03-12",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Integration",
        taskDescription: "Integrate payment gateway API with backend.",
        taskDate: "2026-03-08",
        category: "Integration"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Add unit tests for API endpoints.",
        taskDate: "2026-03-17",
        category: "Testing"
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Marketing Plan",
        taskDescription: "Prepare strategy for next quarter marketing.",
        taskDate: "2026-03-19",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Social Media Audit",
        taskDescription: "Analyze engagement metrics across platforms.",
        taskDate: "2026-03-10",
        category: "Analysis"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Email Campaign",
        taskDescription: "Prepare newsletter campaign for subscribers.",
        taskDate: "2026-03-16",
        category: "Marketing"
      }
    ]
  },
  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Server Monitoring",
        taskDescription: "Check server health and uptime logs.",
        taskDate: "2026-03-14",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy Update",
        taskDescription: "Deploy latest application build to production.",
        taskDate: "2026-03-11",
        category: "Deployment"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Backup Automation",
        taskDescription: "Set up automated backup for database.",
        taskDate: "2026-03-07",
        category: "Maintenance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Security Patch",
        taskDescription: "Apply security updates to server.",
        taskDate: "2026-03-18",
        category: "Security"
      }
    ]
  }
]

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
]

export const setLocalStorage = () => {
  if (!localStorage.getItem('employees')) {
    localStorage.setItem('employees', JSON.stringify(employees))
  }
  if (!localStorage.getItem('admin')) {
    localStorage.setItem('admin', JSON.stringify(admin))
  }
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees')) || []
  const admin = JSON.parse(localStorage.getItem('admin')) || []
  return { employees, admin }
}
