<p align="center">
  <a href="https://github.com/MayankBansal12/PushNote">
   <img src="https://ph-files.imgix.net/6d075c19-3fa3-45b1-8312-90027d22d8d1.png?auto=format&fit=crop&frame=1&h=512&w=1024" alt="Logo">
  </a>
  <h1 align="center">PushNote - Manage like a Pro!</h1>
</p>

<p align="center">This is a Turborepo for PushNote with React frontend (apps/client) and Express backend (apps/api).</p>

<!-- About us -->

## About Us
We are a team of 3 people who developed this platform. The main aim was to solve the management problem among teams in small and medium-sized businesses. We tried to come up with a simple solution which allows a company to make their account on the platform and invite their workers/team members to join their organisation. Once the Account is set up, users can be assigned tasks and made part of different projects listed under the org. Admins will have complete control over the project and can perform activities like Adding and Removing a project member, Creating/ Editing Tasks, Assigning Task to members, change project settings etc. Members will receive push notifications when a task is assigned to them. 

<!-- Features -->
## Features

- **Adding Members**
  - Organisations can add members by entering their email, and creating user accounts for seamless access to the organisation's platform.

- **Project Dashboard**
  - Create different projects, each acting as a distinct team with specific members, managed by project admins. Only members can access the project dashboard.

- **Tasks**
  - Create tasks under each project with dedicated task pages, allowing users to view descriptions and comments for each task.

- **Calendar**
  - Users have a dedicated calendar section to visualize and manage their tasks.

- **Push Notifications**
  - Receive push notifications when tasks are assigned or updated, ensuring users stay informed and engaged.

- **Messages**
  - Enable communication between members through a live chat implemented using socket.io.


<!-- CONTRIBUTORS -->
### Contributors

<a href="https://github.com/MayankBansal12/PushNote/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=MayankBansal12/PushNote" />
</a>

<!-- Contact us -->
### Contact Us
- **Arghya Das** - [Twitter](https://twitter.com/ArghyaDas04) | [GitHub](https://github.com/Arghyahub) | [Mail](mailto:arghyadas242004@gmail.com)
- **Saakshi Raut** - [Twitter](https://twitter.com/saakshitwt) | [GitHub](https://github.com/saakshiraut28) | [Mail](mailto:saakshiraut28@gmail.com)
- **Mayank Bansal** - [Twitter](https://twitter.com/SimplerMayank) | [GitHub](https://github.com/MayankBansal12) | [Mail](mailto:mayankbansal125@gmail.com)


## Using this repo

Run the following command:

```sh
git clone https://github.com/MayankBansal12/PushNote.git
cd PushNote
1. pnpm install
2. pnpm build or
turbo run build
3. pnpm dev or
turbo run dev
```

### Apps and Packages

- `backend`: an [Express](https://expressjs.com/) server
- `frontend`: a [Vite](https://vitejs.dev/) single-page app
- `logger`: isomorphic logger (a small wrapper around console.log)
- `ui`: a React UI library for React components
- `scripts`: Jest and ESLint configurations
- `tsconfig`: tsconfig.json is used throughout the monorepo

Each package and app is using [TypeScript](https://www.typescriptlang.org/).


## Demo and ScreenShots
You can visit the platform at [pushnote.xyz](https://www.pushnote.xyz/)

Here are some screenshots of the platform: 

![Landing Page](https://res.cloudinary.com/dwuyp1nss/image/upload/v1702134472/Home_mdbrvp.png)
![Login](https://res.cloudinary.com/dwuyp1nss/image/upload/v1702134471/Login_gpfwxg.png)
![Home](https://res.cloudinary.com/dwuyp1nss/image/upload/v1702134470/Dashboard_x9phg0.png)
![Project Dash](https://res.cloudinary.com/dwuyp1nss/image/upload/v1702134470/Project_Dash_f1qhgn.png)
![Task Page](https://res.cloudinary.com/dwuyp1nss/image/upload/v1702134474/Task_Page_iwufdp.png)
![Chats](https://res.cloudinary.com/dwuyp1nss/image/upload/v1702134469/Chat_m4wdgq.png)
![Edit Task](https://res.cloudinary.com/dwuyp1nss/image/upload/v1702134822/Edit_Task_o64udd.png)
![Task status](https://res.cloudinary.com/dwuyp1nss/image/upload/v1702134822/Task_status_akddzj.png)
![Mobile View](https://res.cloudinary.com/dwuyp1nss/image/upload/v1702134822/Mobile_view_sfkef0.png)

## Conclusion

PushNote simplifies team management, offering features that enhance collaboration and workflow efficiency. Try it out and experience a more streamlined approach to team communication and project management. Have questions or suggestions? Feel free to reach out to us. 
