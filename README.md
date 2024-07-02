# MobileStore_Project

# How to run it
1. clone the project
2. open `appsettings.json` file and update connection string's `data source=your server name`
   
   ``` 
    "ConnectionStrings": {
          "conn": "data source=your_server_name;initial catalog=MovieStoreMvc; integrated security=true;encrypt=false"
     }
   ```

3. Delete `Migrations` folder
4. Open Tools > Package Manager > Package manager console
5. Run these 2 commands
    ```
     add-migration init
     update-database
     ````
    (or)
   <p>Run the below commands in VS Code</p>
   
   ```
      dotnet tool update --global dotnet-ef
      dotnet ef --version
      dotnet ef migrations add init
      dotnet ef database update
     ````
7. Now you can run this project 
      ```
      dotnet restore
      dotnet build
      dotnet watch run
     ```
