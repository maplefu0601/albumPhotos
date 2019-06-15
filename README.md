# Show Albums and Photos from https://jsonplaceholder.typicode.com/ using ReactJs and node.js

# Run steps

-   git clone https://github.com/maplefu0601/albumPhotos.git
-   cd albumPhotos
-   cd client
-   npm install
-   cd ../server
-   npm install
-   cd ..
-   npm run start

You should see the main page.
![main page](./doc/main.png)

Select any user from the dropdown list, then it will show all albums under that user.
![albums](./doc/albums.png)

Then select one of the albums, it will show all photos within that album.
![photos](./doc/photos.png)

Click any photo, it will show the original size image.
![photo](./doc/photo.png)

# Design and Wireframe

![design](./doc/design.png)

-   UI Wireframes
    ![wireframe1](./doc/wireframe01.png)
    ![wireframe1](./doc/wireframe02.png)

*   The wireframes are not exactly same as implementation.

# APIs available

-   Get Users: http://localhost:3001/api/users
-   Get Users by user ID 1: http://localhost:3001/api/users/1
-   Get Albums: http://localhost:3001/api/albums
-   Get Albums by user ID 1: http://localhost:3001/api/albums/1
-   Get Photos: http://localhost:3001/api/photos
-   Get Photos by album ID 1: http://localhost:3001/api/photos/1
