function Mail(subj, msg) {
  this.subject = subj;
  this.message = msg;
}

const newMail = new Mail(process.argv[2], process.argv[3]);

console.log(newMail.subject + ": " + newMail.message);
