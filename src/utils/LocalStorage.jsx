const employees = [
    {
        "id": 1,
        "name": "Amit Sharma",
        "email": "one@one.com",
        "password": "123",
        "tasks": [
            {
                "title": "Complete Project Report",
                "description": "Prepare and submit the project report by Friday.",
                "date": "2025-03-10",
                "category": "Documentation",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
        ],
        "newTaskCount": 2,
        "completedTaskCount": 4,
        "failedTaskCount": 0,
        "activeTaskCount": 2
    },
    {
        "id": 2,
        "name": "Ravi Kumar",
        "email": "two@two.com",
        "password": "123",
        "tasks": [
            {
                "title": "Code Review",
                "description": "Review the code submitted by the dev team.",
                "date": "2025-03-08",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            },
        ],
        "newTaskCount": 1,
        "completedTaskCount": 1,
        "failedTaskCount": 0,
        "activeTaskCount": 2
    },
    {
        "id": 3,
        "name": "Sita Patel",
        "email": "three@three.com",
        "password": "123",
        "tasks": [
            {
                "title": "Database Migration",
                "description": "Migrate old database to the new system.",
                "date": "2025-03-15",
                "category": "Database",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ],
        "newTaskCount": 5,
        "completedTaskCount": 0,
        "failedTaskCount": 1,
        "activeTaskCount": 2
    },
    {
        "id": 4,
        "name": "Lakshmi Nair",
        "email": "four@four.com",
        "password": "123",
        "tasks": [
            {
                "title": "Write Test Cases",
                "description": "Prepare unit test cases for the backend API.",
                "date": "2025-03-14",
                "category": "Testing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "newTaskCount": 1,
        "completedTaskCount": 0,
        "failedTaskCount": 0,
        "activeTaskCount": 1
    },
    {
        "id": 5,
        "name": "Rajesh Singh",
        "email": "five@five.com",
        "password": "123",
        "tasks": [
            {
                "title": "Design Mockups",
                "description": "Create UI mockups for the new homepage.",
                "date": "2025-03-09",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "newTaskCount": 1,
        "completedTaskCount": 0,
        "failedTaskCount": 0,
        "activeTaskCount": 1
    }
]

const admin = [
    {
        "id": 1,
        "name": "Vikram Gupta",
        "email": "admin1@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => { 
   const employees = JSON.parse(localStorage.getItem("employees"));    
    const admin = JSON.parse(localStorage.getItem("admin")); 
   return {employees, admin};
}