//add function here
function formatName(user) {
  return user.firstName + " " + user.lastName;
}
const user = {
  firstName: "west",
  lastName: "cliff",
};

const element = <h1>Hello, {formatName(user)}!</h1>;

ReactDOM.render(element, document.getElementById("root"));
