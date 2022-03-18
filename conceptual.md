### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
- <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>

- What is a single page application?
- <p>A single page application is one in which routes dynamically recreate the current page rather than sending a request for a new page load.</p>

- What are some differences between client side and server side routing?
- <p>server sides needs to keep making requests to the server in order for the application to rerender, but client side does not need to keep make request to the server, it just does it once when the application is being loaded into the browser any other.</p>

- What are two ways of handling redirects with React Router? When would you use each?
- <p>First:  Redirect component, which is useful for instances like where a user is on a page they shouldn't have gotten to and is automatically redirected, Second: you can push to the history object which allows the user to then use the forward/backward button to reach the page again.</p>

- What are two different ways to handle page-not-found user experiences using React Router? 
- <p>first: use redirect to send the user to a 404 page, Second:you can use Switch to have a catch all that displays a 404 component for any route that isn't matched.</p>

- How do you grab URL parameters from within a component using React Router?
- <p>To get the url parameter from a current route, we can use the useParams() hook in react router.</p>

- What is context in React? When would you use it?
- <p>Context is a React API which allows a parent component to pass down data to children without the use of props. This is useful in situations like when you need to pass down information to deeply nested components but don't need to access that information at every level.</p>

- Describe some differences between class-based components and function
  components in React.
 <p>The main differences between class based and functional components are the syntax and class-based component's use of lifecycle methods. Functional components instead use the new hooks features.</p> 

- What are some of the problems that hooks were designed to solve?
- <p>reusability of logic between components, and the cleaning up of complex hard to understand code.</p>