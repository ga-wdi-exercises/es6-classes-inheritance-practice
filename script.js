class User{
  constructor(username, password){
    this.username = username;
    this.password = password;
  }
  changePassword(newPassword){
    this.password = newPassword;
  }
}
// extends User Superclass
class Admin extends User {
  constructor(username, password, accesslevel){
    // Super refers to the class Admin is extending & its arguments
    super(username, password);
    // Custom key/value for Admins
    this.accessLevel = accesslevel;
  }
  // Admins can overide password
  // first parameter must NOT BE IN QUOTES to refer to the object
  overidePassword(user, newPassword){
    user.password = newPassword;
  }
}
// Hi josie
