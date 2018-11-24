# t03-web

## Instructions for Team 03 Web Frontend ##

To run the program, open up terminal, and go into the Ride-Web directory. From there, perform the command "npm run dev". This will bring you to the webpage (Running from localhost:8087).

From there, the homepage of our Adminstrator webpage will be visible. There will be two buttons, bringing you to two different functionalities that the admin will need. The two buttons are labelled as "Rankings", and "Status". 

### Rankings ###
By clicking the rankings button, the system administrator will be brought to another page, where they will have the option to find the top rated drivers, most loyal passengers, and the most popular routes. 

#### Driver Rankings ####
- By clicking on the "Driver Rankings" button, you will be brought to the page for the driver rankings. If you wish to view all the drivers, put in the start date "10-10-1000" (textfield on the left), and the end date "10-10-2020" (textfield on the right). This will list you all the drivers in order of their rating. You may also put in a specific start and end date, to get driver ratings from trips between those dates. 

#### Passenger Loyalty ####
 - By clicking on the "Passenger Rankings" button, you will be brought to the page for the passenger loyalty. If you wish to view all the passengers, put in the start date "10-10-1000" (textfield on the left), and the end date "10-10-2020" (textfield on the right). This will list you all the passengers in order of the amount of the trips they have been on (This is how we determined passenger loyalty). You may also put in a specific start and end date, to get passenger's loaylty from trips between those dates.
 
#### Route Popularity ####
 - By clicking on the "Route Popularity" button, you will be brought to the page for the route popularity. If you wish to view all the routes, put in the start date "10-10-1000" (textfield on the left), and the end date "10-10-2020" (textfield on the right). This will list you all popular routes. You may also put in a specific start and end date, to get popular trips between those dates.
 
### Fleet Status Overview ###
By clicking the status button, the system administrator will be brought to another page, where they will have the option to find the active drivers, active passengers, and active routes.

#### Driver Status ####
 - By clicking on the "Driver Status" button, you will be brought to the page for the active drivers. By clicking on the button with no inputs, all the active drivers will appear. There is partial matching, however, it is case sensitive. You may search up a driver through the textfield. A driver is considered active if he is booked on a trip in the future.
 
 
#### Passenger Status ####
 - By clicking on the "Passenger Status" button, you will be brought to the page for the active passengers. By clicking on the button with no inputs, all the active passengers will appear. There is partial matching, however, it is case sensitive. You may search up a passenger through the textfield. A passenger is considered active if he is booked on a trip in the future.
 
 #### Route Status ####
 - By clicking on the "Route Status" button, you will be brought to the page for the active routes. By clicking on the button with no inputs, all the active routes will appear. There is partial matching, however, it is case sensitive. You may search up a route start city, which will bring up all active routes from that start city through the textfield. You may do the same for the end city, or both. A route is considered active if it is in the future, and has not been closed.
 
 Thank you!
 -Team 3
 
 

