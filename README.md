![Screenshot from 2023-03-07 12-22-47](https://user-images.githubusercontent.com/78169683/223427467-3586b4f6-7c42-4028-90e4-c496bbf3890a.png)

## Visit here : https://eastereggs.vercel.app/

## Table of Contents

- [Welcome to Easter Eggs](#welcome)
- [Tech Stack](#tech-stack)
- [How to Contribute](#how-to-contribute)



<a name="welcome"></a>
## Welcome to LinksHub 👋
Easter Eggs is a website where you can find easter eggs of all kinds.


<a name="tech-stack"></a>
## Tech stack 💻

![Next.js](https://img.shields.io/badge/Next.js-7c3aed?style=for-the-badge&logo=next.js&logoColor=white)
![tailwind css](https://img.shields.io/badge/tailwind_css-7c3aed?style=for-the-badge&logo=tailwindcss&logoColor=white)

<a name="how-to-contribute"></a>
## How to Contribute ✨

There are 2 ways you can contribute to the project
1. Adding new feature or solving bugs
2. Adding new Easter eggs

### Adding new feature or solving bugs🌟

1. Fork the project
   
2. Clone the project to run on your local machine using the following command
   
   ```sh
   git clone https://github.com/<your_github_username>/easter-eggs.git
   ```
3. Get into the root directory
   
   ```sh
   cd easter-eggs
   ```
4. Install all dependencies by running
   
   ```sh
   npm install
   ```

5. Create your branch 
    ```sh
   git checkout -b <your_branch_name>
   ```

6. To run and view the application on localhost
    ```sh
   npm run dev
   ```
7. Push your changes into your branch
   
    ```sh
   git push origin <your_branch_name>
   ```

8. Create a Pull Request

### Adding new Easter egg 🥚

1. Follow step (1 to 5) from above
2. Inside the ```components/easter-eggs/``` folder you can add you easter egg
3. Create new folder name ```your_easter_egg_number-/your-easter-egg-name```
4. Go inside that folder
5. Your Easter egg will require a box like this
![imageedit_2_8943420812](https://user-images.githubusercontent.com/78169683/223427721-4bf17376-84e8-43f6-81a3-8a6ac61510ff.gif)


	For that make a js file ```your-easter-egg-name.js```
6. Then to make a file containing your easter egg name ```easter.js``` 
7. You can check and use [demo folder](https://github.com/yashnirmal/easter-eggs/tree/main/components/easter-eggs/0-demo) as an example. You can also copy paste this [demo folder](https://github.com/yashnirmal/easter-eggs/tree/main/components/easter-eggs/0-demo) for your easter egg and make required changes
8. If your easter egg require use of something written in the search bar you can use context api for that. That too is shown in [demo folder](https://github.com/yashnirmal/easter-eggs/tree/main/components/easter-eggs/0-demo)
9. After adding the easter eggs, push your changes into your branch
   
    ```sh
   git push origin <your_branch_name>
   ```

10. Finally, create a Pull Request

