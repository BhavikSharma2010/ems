# Employee Management System - Testing Guide

## Start the App

```bash
npm run dev
```

The app will run on `http://localhost:5173` (or next available port).

---

## Test Scenarios

### 1. Admin Login & Create Task

1. **Login as Admin**
   - Email: `admin@example.com`
   - Password: `123`

2. **Create a Task**
   - Task Title: "Prepare Report"
   - Date: Pick any date
   - Assign To: "Amit" (or any employee name in the list)
   - Category: "Reports"
   - Description: "Prepare monthly report"
   - Click "Create Task"

3. **Verify Task Created**
   - Check "All Tasks" section below
   - Task should appear with status "New"

4. **Logout**
   - Click "Log Out" button
   - Should return to login screen

---

### 2. Employee View & Accept Task

1. **Login as Employee**
   - Email: `e@e.com`
   - Password: `123`

2. **View Dashboard**
   - See task counts (New, Active, Completed, Failed)
   - See task cards in horizontal scroll

3. **Accept a New Task**
   - Click "Accept Task" button on a blue (New Task) card
   - Card should change to yellow (Active)
   - Task count should update

4. **Mark Task Completed**
   - Click "Mark as Completed" on a yellow card
   - Card should change to green
   - Task count updates

5. **Mark Task Failed**
   - Click "Mark as Failed" on a yellow card
   - Card should change to red
   - Task count updates

6. **Logout**
   - Click "Log Out"
   - Return to login

---

### 3. Persistence Test

1. **Create a task as admin**
2. **Login as employee and accept it**
3. **Refresh the page (F5)**
4. **Login again**
   - The task should still be in "Active" state
   - State persists in localStorage

---

## Employee Credentials

All employees use password `123`:

| Name | Email | Password |
|------|-------|----------|
| Amit | e@e.com | 123 |
| Priya | employee2@example.com | 123 |
| Rahul | employee3@example.com | 123 |
| Sneha | employee4@example.com | 123 |
| Arjun | employee5@example.com | 123 |

---

## Admin Credentials

| Email | Password |
|-------|----------|
| admin@example.com | 123 |

---

## Features Implemented

✅ User authentication (Admin + Employee roles)
✅ Admin dashboard with task creation form
✅ Admin can view all employee tasks
✅ Employee dashboard with task counts
✅ Employee can accept new tasks
✅ Employee can mark tasks as completed or failed
✅ Real-time task status updates
✅ All data persists in localStorage
✅ Logout functionality
✅ Responsive Tailwind CSS styling
