<h1 align="center">
    Complain MANAGEMENT SYSTEM
</h1>

<h3 align="center">
Complain Management system manage the complain of users of Internet service provider<br>

It accept complains, assign to the employee
</h3>


<br>
[LinkedIn](https://www.linkedin.com/in/monayem-hossain/)

# About

The Complain Management System is a web-based application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It aims to streamline complain management, task management, and facilitate communication between employee, manager, and administrators.

## Features

- **User Roles:** The system supports three user roles: Admin, manager, and employee. Each role has specific functionalities and access levels.

- **Admin Dashboard:** Administrators can 
 1. add,update, delete, retrive employee and manager,admin, <br>
 2. Update,Delete and retrive  complain. <br>
 3. Oversee system settings. <br>
 4. See and delete the complain history


- **Communication:** Users can communicate effortlessly through the system. Manager  send messages to employee and complainer when new complain created and assigned to an employee. And when complain resolved by employee a sms is send from employee to  manager. Finally  manager change the status of complain from completed to done.

## Technologies Used

- Frontend: React.js, Tailwind css, Redux
- Backend: Node.js, Express.js
- Database: MongoDB

<br>

# Installation

```sh
git clone https://github.com/monayemhossain90/complaint-management-system-ISP
```
Open 4 terminals in separate windows/tabs.

Terminal 1: Setting Up Backend 
```sh
cd complain-management-server
npm install
npm run dev
```

Create a file called .env in the backend folder.
Inside it write this :

```sh
MONGO_URI=[your mongodb uri]
SECRET_KEY=secret@123

# sms provider

BULK_SMS_BD_API_KEY=[bulk sms bd api key]
SMS_SENDER_ID=[bulk sms bd sms sender id]
```

Terminal 2: Setting Up admin panel frontend
```sh
cd complain-management-admin
npm install
create .env file in the root folder.
putting the value into it 
VITE_API_URL=http://localhost:5000/api
Then run the admin panel
npm run dev
```


Terminal 3: Setting Up manager panel frontend
```sh
cd complain-management-manager
npm install
create .env file in the root folder.
putting the value into it 
VITE_API_URL=http://localhost:5000/api
Then run the manager panel
npm run dev
```


Terminal 4: Setting Up employee panel frontend
```sh
cd complain-management-employee
npm install
create .env file in the root folder.
putting the value into it 
VITE_API_URL=http://localhost:5000/api
Then run the employee panel
npm run dev
```



# Deployment
* vercel - server side and client side


