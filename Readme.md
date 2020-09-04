<h1>Novular Project</h1>
<h2>Overview</h2>

This project is not focused in CSS and style so may notice that is not the more pretty app but still 
I have focused on the task and extra task to do as much as I could.The app only works for Android due to the 
lack of MAC devices.

I used react hooks instead of regular components and typescript.

<h2>Tasks</h2>
For the search bar I have decided to use SearchBar from react-native-elements due to it easy implementation.
For the interactive search while typing, I have use the hooks' functionality of useEffect for execute a function each
time a value is changed.

The second view, which shows the user's information, is separated in two different views. One, shows the main information
of the user if the information exist and two buttons which will allows us to see the repositories and followers of the user.

The state of the application is manage by redux, and the data persist through the library redux-persis. This library
allow us to persist the reducers and don't persist some reducers if we want. For this app all data inside redux is persisted.

The pagination of the list of users is done by the library react-native-pagination. Right now it shows which page are we 
at the moment, but the scroll to a direct page does not work due to a reference problem. It will take further investigation 
to be solve.


