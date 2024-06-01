function Mail(subj, msg) {
  this.subject = subj;
  this.message = msg;
}

const newMail = new Mail("hello", "world");

console.log(newMail.subject + ": " + newMail.message);
