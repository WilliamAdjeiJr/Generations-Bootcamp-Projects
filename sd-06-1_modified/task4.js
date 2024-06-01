function Journey(start, end) {
    this.start = start;
    this.end = end;
  }
  
  const travel = new Journey(process.argv[2], process.argv[3]);
  
  console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".");
  