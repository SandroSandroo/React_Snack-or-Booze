class Utility {
  /* create id from the name */
  static createId(name) {
    return name.toLowerCase().replaceAll(" ", "-");
  }
}

export default Utility;
